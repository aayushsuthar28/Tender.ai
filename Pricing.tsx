import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, HelpCircle, CreditCard, XCircle } from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { PricingCard } from "@/components/ui/PricingCard";
import { cn } from "@/lib/utils";
import { toast } from "@/hooks/use-toast";
import { createPaymentIntent, mockPaymentSuccess, mockPaymentFail } from "@/lib/api";

// Mock plan IDs - in production these would come from the database
const MOCK_PLAN_IDS = {
  institution: {
    starter: "inst-starter-001",
    professional: "inst-pro-001",
    enterprise: "inst-ent-001",
  },
  vendor: {
    basic: "vendor-basic-001",
    pro: "vendor-pro-001",
    enterprise: "vendor-ent-001",
  },
};

const institutionPlans = [
  {
    name: "Starter",
    price: "Free",
    period: "",
    description: "Get started with basic procurement",
    features: [
      "Up to 3 RFQs per month",
      "Access to verified vendors",
      "Basic comparative statements",
      "Email support",
    ],
    highlighted: false,
    ctaText: "Get Started",
    planId: MOCK_PLAN_IDS.institution.starter,
  },
  {
    name: "Professional",
    price: "₹4,999",
    period: "/month",
    description: "For growing institutions",
    features: [
      "Up to 20 RFQs per month",
      "Priority vendor matching",
      "Advanced analytics",
      "Escrow payment integration",
      "Audit-ready reports",
      "Phone & email support",
    ],
    highlighted: true,
    ctaText: "Start Trial",
    planId: MOCK_PLAN_IDS.institution.professional,
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "",
    description: "For large organizations",
    features: [
      "Unlimited RFQs",
      "Dedicated account manager",
      "Custom workflows",
      "API integrations",
      "Multi-department support",
      "On-premise deployment option",
      "24/7 premium support",
    ],
    highlighted: false,
    ctaText: "Contact Sales",
    planId: MOCK_PLAN_IDS.institution.enterprise,
  },
];

const vendorPlans = [
  {
    name: "Basic",
    price: "₹1,499",
    period: "/month",
    description: "For small vendors starting out",
    features: [
      "Access up to 10 RFQs/month",
      "Basic bid submission",
      "Email notifications",
      "Standard support",
    ],
    highlighted: false,
    planId: MOCK_PLAN_IDS.vendor.basic,
  },
  {
    name: "Pro",
    price: "₹3,499",
    period: "/month",
    description: "For growing businesses",
    features: [
      "Access up to 50 RFQs/month",
      "Priority bid visibility",
      "SMS & email notifications",
      "Detailed analytics dashboard",
      "Priority support",
    ],
    highlighted: true,
    planId: MOCK_PLAN_IDS.vendor.pro,
  },
  {
    name: "Enterprise",
    price: "₹6,499",
    period: "/month",
    description: "For established vendors",
    features: [
      "Unlimited RFQ access",
      "Featured vendor badge",
      "Advanced analytics",
      "Dedicated account manager",
      "Custom integrations",
      "24/7 premium support",
    ],
    highlighted: false,
    planId: MOCK_PLAN_IDS.vendor.enterprise,
  },
];

const faqs = [
  {
    question: "Is there a free trial available?",
    answer:
      "Yes! Institutions can start with our free Starter plan. For Professional and Enterprise plans, we offer a 14-day free trial. Vendors can request a demo to see the platform before subscribing.",
  },
  {
    question: "Can I upgrade or downgrade my plan?",
    answer:
      "Absolutely. You can upgrade or downgrade your plan at any time. Changes take effect at the start of your next billing cycle.",
  },
  {
    question: "What payment methods do you accept?",
    answer:
      "We accept all major credit cards, debit cards, UPI, and bank transfers. For Enterprise plans, we also offer invoice-based billing.",
  },
  {
    question: "Is there a long-term contract?",
    answer:
      "No long-term contracts required. All plans are month-to-month. Enterprise customers can opt for annual billing with a discount.",
  },
  {
    question: "What happens to my data if I cancel?",
    answer:
      "Your data remains accessible for 30 days after cancellation. You can export all your RFQs, bids, and reports during this period.",
  },
];

interface PaymentState {
  isOpen: boolean;
  planName: string;
  planId: string;
  amount: number;
  orderId: string;
  paymentIntentId: string;
  status: "idle" | "loading" | "created" | "paid" | "failed";
}

export default function Pricing() {
  const [activeTab, setActiveTab] = useState<"institutions" | "vendors">(
    "institutions"
  );
  const [payment, setPayment] = useState<PaymentState>({
    isOpen: false,
    planName: "",
    planId: "",
    amount: 0,
    orderId: "",
    paymentIntentId: "",
    status: "idle",
  });

  const handleSubscribe = async (planName: string, planId: string) => {
    if (planName === "Enterprise" || planName === "Starter") {
      // Enterprise needs contact sales, Starter is free
      return;
    }

    setPayment((prev) => ({ ...prev, isOpen: true, planName, planId, status: "loading" }));

    try {
      // Create payment intent - in production, you'd collect org info first
      const result = await createPaymentIntent({
        organisationName: "Demo Organisation",
        organisationType: activeTab === "institutions" ? "corporate" : "vendor",
        city: "Bengaluru",
        email: "demo@example.com",
        planId,
      });

      if (result.success) {
        setPayment((prev) => ({
          ...prev,
          status: "created",
          amount: result.amount,
          orderId: result.orderId,
          paymentIntentId: result.paymentIntentId,
        }));
      } else {
        throw new Error(result.error);
      }
    } catch (error) {
      console.error("Payment creation error:", error);
      toast({
        title: "Payment Error",
        description: "Failed to create payment. Please try again.",
        variant: "destructive",
      });
      setPayment((prev) => ({ ...prev, isOpen: false, status: "idle" }));
    }
  };

  const handleMockSuccess = async () => {
    setPayment((prev) => ({ ...prev, status: "loading" }));
    try {
      await mockPaymentSuccess(payment.paymentIntentId);
      setPayment((prev) => ({ ...prev, status: "paid" }));
      toast({
        title: "Payment Successful!",
        description: "Your subscription is now active.",
      });
    } catch (error) {
      console.error("Mock success error:", error);
      toast({
        title: "Error",
        description: "Failed to process payment.",
        variant: "destructive",
      });
    }
  };

  const handleMockFail = async () => {
    setPayment((prev) => ({ ...prev, status: "loading" }));
    try {
      await mockPaymentFail(payment.paymentIntentId);
      setPayment((prev) => ({ ...prev, status: "failed" }));
      toast({
        title: "Payment Failed",
        description: "The payment was not successful.",
        variant: "destructive",
      });
    } catch (error) {
      console.error("Mock fail error:", error);
    }
  };

  const closePaymentModal = () => {
    setPayment({
      isOpen: false,
      planName: "",
      planId: "",
      amount: 0,
      orderId: "",
      paymentIntentId: "",
      status: "idle",
    });
  };

  return (
    <Layout>
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary via-primary to-accent/20 pt-24 pb-16 lg:pt-32 lg:pb-24">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wMyI+PHBhdGggZD0iTTM2IDM0djItSDI0di0yaDEyek0zNiAyNHYySDI0di0yaDEyeiIvPjwvZz48L2c+PC9zdmc+')] opacity-50" />
        
        <div className="container-wide mx-auto px-4 lg:px-8 relative text-center">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-block px-4 py-2 mb-6 text-sm font-medium text-accent-foreground bg-accent/90 rounded-full"
          >
            Pricing
          </motion.span>
          
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6 leading-tight"
          >
            Simple, Transparent{" "}
            <span className="text-accent">Pricing</span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg sm:text-xl text-primary-foreground/80 max-w-2xl mx-auto"
          >
            Choose the plan that fits your needs. No hidden fees, no surprises.
          </motion.p>
        </div>
        
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent" />
      </section>

      {/* Pricing Tabs */}
      <section className="section-padding">
        <div className="container-wide mx-auto">
          {/* Tab Switcher */}
          <div className="flex justify-center mb-12">
            <div className="inline-flex p-1 bg-secondary rounded-lg">
              <button
                onClick={() => setActiveTab("institutions")}
                className={cn(
                  "px-6 py-3 text-sm font-medium rounded-md transition-all",
                  activeTab === "institutions"
                    ? "bg-primary text-primary-foreground"
                    : "text-muted-foreground hover:text-foreground"
                )}
              >
                For Institutions
              </button>
              <button
                onClick={() => setActiveTab("vendors")}
                className={cn(
                  "px-6 py-3 text-sm font-medium rounded-md transition-all",
                  activeTab === "vendors"
                    ? "bg-primary text-primary-foreground"
                    : "text-muted-foreground hover:text-foreground"
                )}
              >
                For Vendors
              </button>
            </div>
          </div>

          {/* Institution Plans */}
          {activeTab === "institutions" && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="grid md:grid-cols-3 gap-8 items-start"
            >
              {institutionPlans.map((plan) => (
                <PricingCard
                  key={plan.name}
                  {...plan}
                  ctaLink={plan.name === "Enterprise" ? "/contact" : undefined}
                  onCtaClick={
                    plan.name !== "Enterprise" && plan.name !== "Starter"
                      ? () => handleSubscribe(plan.name, plan.planId)
                      : plan.name === "Starter"
                      ? () => toast({ title: "Starter plan", description: "Contact us to get started with the free tier." })
                      : undefined
                  }
                />
              ))}
            </motion.div>
          )}

          {/* Vendor Plans */}
          {activeTab === "vendors" && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="grid md:grid-cols-3 gap-8 items-start"
            >
              {vendorPlans.map((plan) => (
                <PricingCard
                  key={plan.name}
                  {...plan}
                  ctaText="Subscribe"
                  ctaLink={plan.name === "Enterprise" ? "/contact" : undefined}
                  onCtaClick={
                    plan.name !== "Enterprise"
                      ? () => handleSubscribe(plan.name, plan.planId)
                      : undefined
                  }
                />
              ))}
            </motion.div>
          )}
        </div>
      </section>

      {/* Feature Comparison */}
      <section className="section-padding bg-secondary/30">
        <div className="container-wide mx-auto">
          <SectionHeader
            title="All Plans Include"
            description="Every plan comes with essential features to ensure secure and transparent procurement."
          />
          
          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              "Verified vendor database",
              "Secure blind bidding",
              "Document management",
              "Basic analytics",
              "Email notifications",
              "Mobile-responsive",
              "Data encryption",
              "Regular backups",
            ].map((feature, index) => (
              <motion.div
                key={feature}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="flex items-center gap-3 p-4 bg-card rounded-lg border border-border"
              >
                <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0" />
                <span className="text-foreground">{feature}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="section-padding">
        <div className="container-narrow mx-auto">
          <SectionHeader
            badge="FAQs"
            title="Frequently Asked Questions"
            description="Have questions? We've got answers."
          />
          
          <div className="mt-12 space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={faq.question}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="card-elevated p-6"
              >
                <div className="flex items-start gap-4">
                  <HelpCircle className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">
                      {faq.question}
                    </h3>
                    <p className="text-muted-foreground">{faq.answer}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-primary text-primary-foreground">
        <div className="container-narrow mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Still Have Questions?
          </h2>
          <p className="text-lg text-primary-foreground/80 mb-8 max-w-xl mx-auto">
            Our team is here to help you find the perfect plan for your needs.
          </p>
          <Link to="/contact" className="btn-accent px-8 py-4 text-base">
            Talk to Sales
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>

      {/* Payment Modal */}
      {payment.isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-background/80 backdrop-blur-sm">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="w-full max-w-md bg-card rounded-2xl shadow-2xl border border-border p-6"
          >
            <div className="text-center">
              {payment.status === "loading" && (
                <>
                  <div className="w-12 h-12 mx-auto mb-4 border-4 border-primary border-t-transparent rounded-full animate-spin" />
                  <h3 className="text-xl font-semibold text-foreground mb-2">Processing...</h3>
                </>
              )}

              {payment.status === "created" && (
                <>
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                    <CreditCard className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">
                    {payment.planName} Plan
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    Mock Razorpay Checkout
                  </p>
                  
                  <div className="bg-secondary/50 rounded-lg p-4 mb-6 text-left">
                    <div className="flex justify-between mb-2">
                      <span className="text-muted-foreground">Order ID:</span>
                      <span className="font-mono text-sm text-foreground">{payment.orderId}</span>
                    </div>
                    <div className="flex justify-between mb-2">
                      <span className="text-muted-foreground">Amount:</span>
                      <span className="font-semibold text-foreground">₹{(payment.amount / 100).toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Currency:</span>
                      <span className="text-foreground">INR</span>
                    </div>
                  </div>

                  <p className="text-xs text-muted-foreground mb-4">
                    This is a test payment simulation. Use the buttons below to simulate payment outcomes.
                  </p>

                  <div className="flex gap-3">
                    <button
                      onClick={handleMockSuccess}
                      className="flex-1 btn-primary justify-center"
                    >
                      <CheckCircle2 className="w-4 h-4" />
                      Pay (Success)
                    </button>
                    <button
                      onClick={handleMockFail}
                      className="flex-1 btn-outline justify-center text-destructive border-destructive hover:bg-destructive/10"
                    >
                      <XCircle className="w-4 h-4" />
                      Fail
                    </button>
                  </div>
                </>
              )}

              {payment.status === "paid" && (
                <>
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-accent/10 flex items-center justify-center">
                    <CheckCircle2 className="w-8 h-8 text-accent" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">
                    Payment Successful!
                  </h3>
                  <p className="text-muted-foreground mb-6">
                    Your {payment.planName} subscription is now active.
                  </p>
                  <button onClick={closePaymentModal} className="btn-primary w-full justify-center">
                    Done
                  </button>
                </>
              )}

              {payment.status === "failed" && (
                <>
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-destructive/10 flex items-center justify-center">
                    <XCircle className="w-8 h-8 text-destructive" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">
                    Payment Failed
                  </h3>
                  <p className="text-muted-foreground mb-6">
                    The payment was not successful. Please try again.
                  </p>
                  <div className="flex gap-3">
                    <button onClick={closePaymentModal} className="flex-1 btn-outline justify-center">
                      Cancel
                    </button>
                    <button
                      onClick={() => handleSubscribe(payment.planName, payment.planId)}
                      className="flex-1 btn-primary justify-center"
                    >
                      Try Again
                    </button>
                  </div>
                </>
              )}
            </div>

            {payment.status !== "loading" && payment.status !== "paid" && payment.status !== "failed" && (
              <button
                onClick={closePaymentModal}
                className="absolute top-4 right-4 p-2 text-muted-foreground hover:text-foreground"
              >
                <XCircle className="w-5 h-5" />
              </button>
            )}
          </motion.div>
        </div>
      )}
    </Layout>
  );
}
