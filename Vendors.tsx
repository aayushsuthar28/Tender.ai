import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Target,
  Ban,
  ClipboardCheck,
  CreditCard,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { FeatureCard } from "@/components/ui/FeatureCard";
import { PricingCard } from "@/components/ui/PricingCard";
import { VendorApplicationForm } from "@/components/forms/VendorApplicationForm";

const benefits = [
  {
    icon: Target,
    title: "Direct Access to High-Value RFQs",
    description:
      "Get matched with institutional procurement opportunities from hospitals, universities, and corporates.",
  },
  {
    icon: Ban,
    title: "No Random Retail Leads",
    description:
      "Only serious B2B projects with verified budgets and timelines – no spam or tire-kickers.",
  },
  {
    icon: ClipboardCheck,
    title: "Submit Bids Online & Track Status",
    description:
      "Easy-to-use platform for bid submission with real-time status updates and notifications.",
  },
  {
    icon: CreditCard,
    title: "Subscription-Based Model",
    description:
      "Predictable monthly pricing instead of per-lead charges. Access multiple RFQs with one subscription.",
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
  },
];

const applicationSteps = [
  "Submit your company details and GST information",
  "Upload required documents (GST certificate, OEM authorizations, references)",
  "Complete KYC verification process",
  "Choose your subscription plan",
  "Start bidding on relevant RFQs",
];

export default function Vendors() {
  const [showApplicationForm, setShowApplicationForm] = useState(false);

  return (
    <Layout>
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-accent/90 via-accent to-primary/30 pt-24 pb-16 lg:pt-32 lg:pb-24">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wMyI+PHBhdGggZD0iTTM2IDM0djItSDI0di0yaDEyek0zNiAyNHYySDI0di0yaDEyeiIvPjwvZz48L2c+PC9zdmc+')] opacity-50" />
        
        <div className="container-wide mx-auto px-4 lg:px-8 relative">
          <div className="max-w-3xl">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-block px-4 py-2 mb-6 text-sm font-medium text-primary bg-primary-foreground/90 rounded-full"
            >
              For Vendors
            </motion.span>
            
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-accent-foreground mb-6 leading-tight"
            >
              Win High-Value{" "}
              <span className="text-primary-foreground">Institutional Projects</span>
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-lg sm:text-xl text-accent-foreground/80 mb-8"
            >
              Access curated RFQs from hospitals, universities, and corporates. No spam, no retail leads – only serious B2B opportunities.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <button 
                onClick={() => setShowApplicationForm(true)}
                className="btn-primary px-8 py-4 text-base"
              >
                Apply as Vendor
                <ArrowRight className="w-5 h-5" />
              </button>
            </motion.div>
          </div>
        </div>
        
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent" />
      </section>

      {/* Application Form Modal/Section */}
      {showApplicationForm && (
        <section className="section-padding bg-secondary/30" id="apply">
          <div className="container-wide mx-auto">
            <SectionHeader
              badge="Apply Now"
              title="Vendor Application"
              description="Fill in your details to get started. Our team will verify your information and reach out within 48 hours."
            />
            
            <div className="mt-8 max-w-3xl mx-auto">
              <div className="card-elevated p-8 lg:p-10">
                <VendorApplicationForm />
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Benefits */}
      <section className="section-padding">
        <div className="container-wide mx-auto">
          <SectionHeader
            badge="Benefits"
            title="Why Vendors Love Tender.AI"
            description="A smarter way to find and win institutional business."
          />
          
          <div className="mt-12 grid sm:grid-cols-2 gap-6">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <FeatureCard
                  icon={benefit.icon}
                  title={benefit.title}
                  description={benefit.description}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="section-padding bg-secondary/30">
        <div className="container-wide mx-auto">
          <SectionHeader
            badge="Pricing"
            title="Simple, Transparent Pricing"
            description="Choose the plan that fits your business needs. Upgrade or downgrade anytime."
          />
          
          <div className="mt-12 grid md:grid-cols-3 gap-8 items-start">
            {vendorPlans.map((plan, index) => (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <PricingCard
                  {...plan}
                  ctaText="Apply Now"
                  ctaLink="#apply"
                  onCtaClick={() => setShowApplicationForm(true)}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How to Apply */}
      <section className="section-padding">
        <div className="container-wide mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block px-4 py-1.5 mb-4 text-xs font-semibold uppercase tracking-wider text-accent bg-accent/10 rounded-full">
                Getting Started
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
                How to Become a Verified Vendor
              </h2>
              <p className="text-muted-foreground mb-8">
                Our verification process ensures quality vendors on the platform, building trust with institutional buyers.
              </p>
              
              <div className="space-y-4">
                {applicationSteps.map((step, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-start gap-4"
                  >
                    <div className="w-8 h-8 rounded-full bg-accent text-accent-foreground flex items-center justify-center flex-shrink-0 font-semibold text-sm">
                      {index + 1}
                    </div>
                    <p className="text-foreground pt-1">{step}</p>
                  </motion.div>
                ))}
              </div>
            </div>
            
            <div className="card-elevated p-8 lg:p-10">
              <h3 className="text-xl font-semibold text-foreground mb-6">
                Vendor Requirements
              </h3>
              <ul className="space-y-4">
                {[
                  "Valid GST registration",
                  "Minimum 2 years in business",
                  "OEM authorizations (if applicable)",
                  "Bank account verification",
                  "2-3 client references",
                ].map((req) => (
                  <li key={req} className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0" />
                    <span className="text-muted-foreground">{req}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-8">
                <button 
                  onClick={() => setShowApplicationForm(true)}
                  className="btn-accent w-full justify-center"
                >
                  Start Application
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-primary text-primary-foreground">
        <div className="container-narrow mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Ready to Grow Your B2B Business?
          </h2>
          <p className="text-lg text-primary-foreground/80 mb-8 max-w-xl mx-auto">
            Join hundreds of verified vendors winning institutional contracts on Tender.AI.
          </p>
          <button 
            onClick={() => setShowApplicationForm(true)}
            className="btn-accent px-8 py-4 text-base"
          >
            Apply as Vendor
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </section>
    </Layout>
  );
}
