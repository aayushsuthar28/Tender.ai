import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  FileText,
  Users,
  ListChecks,
  Banknote,
  ClipboardCheck,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import { SectionHeader } from "@/components/ui/SectionHeader";

const stages = [
  {
    icon: FileText,
    title: "RFQ Creation & Verification",
    subtitle: "Stage 1",
    description:
      "Institutions create detailed RFQs with specifications, quantities, budgets, and timelines. Our team verifies the requirements for clarity and completeness.",
    details: [
      "Structured RFQ templates for different categories",
      "Upload technical specifications and drawings",
      "Set delivery timelines and payment terms",
      "Define vendor qualification criteria",
      "Review and publish to verified vendors",
    ],
  },
  {
    icon: Users,
    title: "Vendor Matching & Blind Bidding",
    subtitle: "Stage 2",
    description:
      "Relevant vendors are notified based on category and capability. Vendors submit blind bids without seeing competitor prices.",
    details: [
      "AI-powered vendor matching",
      "Blind bid submission ensures fair competition",
      "Secure document upload for technical proposals",
      "Automated bid validation and compliance checks",
      "Real-time status tracking for all parties",
    ],
  },
  {
    icon: ListChecks,
    title: "Shortlisting & Contracting",
    subtitle: "Stage 3",
    description:
      "Institutions review bids using automated comparison tools. Shortlisted vendors can be invited for negotiations before final selection.",
    details: [
      "Automated comparative statements",
      "Technical and commercial bid analysis",
      "Optional reverse auction for price negotiation",
      "Digital contract generation",
      "E-signature integration",
    ],
  },
  {
    icon: Banknote,
    title: "Escrow & Milestone Payments",
    subtitle: "Stage 4",
    description:
      "Funds are held in escrow and released based on predefined milestones. Both parties have visibility into payment status.",
    details: [
      "Secure escrow account setup",
      "Milestone-based payment release",
      "Automated payment notifications",
      "Dispute resolution mechanism",
      "Multi-party approval workflows",
    ],
  },
  {
    icon: ClipboardCheck,
    title: "Documentation & Audit Reports",
    subtitle: "Stage 5",
    description:
      "Complete documentation trail including all bids, evaluations, contracts, and payments. Ready for internal audits and compliance reviews.",
    details: [
      "Complete bid history and comparisons",
      "Evaluation matrices and scores",
      "Contract versions and amendments",
      "Payment receipts and invoices",
      "Exportable audit reports (PDF/Excel)",
    ],
  },
];

export default function HowItWorks() {
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
            How It Works
          </motion.span>
          
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6 leading-tight max-w-4xl mx-auto"
          >
            End-to-End Procurement{" "}
            <span className="text-accent">Made Simple</span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg sm:text-xl text-primary-foreground/80 max-w-2xl mx-auto"
          >
            From RFQ creation to delivery completion, our platform ensures transparency, compliance, and efficiency at every step.
          </motion.p>
        </div>
        
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent" />
      </section>

      {/* Process Stages */}
      <section className="section-padding">
        <div className="container-wide mx-auto">
          <div className="relative">
            {/* Vertical line */}
            <div className="hidden lg:block absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-accent via-accent/50 to-border" />
            
            <div className="space-y-16">
              {stages.map((stage, index) => (
                <motion.div
                  key={stage.title}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="relative"
                >
                  <div className="lg:flex items-start gap-12">
                    {/* Timeline marker */}
                    <div className="hidden lg:flex flex-col items-center">
                      <div className="w-16 h-16 rounded-2xl bg-accent/10 flex items-center justify-center relative z-10 bg-background">
                        <stage.icon className="w-8 h-8 text-accent" />
                      </div>
                    </div>
                    
                    {/* Content */}
                    <div className="flex-1">
                      <div className="lg:hidden w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-4">
                        <stage.icon className="w-6 h-6 text-accent" />
                      </div>
                      
                      <span className="text-sm font-semibold text-accent uppercase tracking-wider">
                        {stage.subtitle}
                      </span>
                      <h2 className="text-2xl sm:text-3xl font-bold text-foreground mt-2 mb-4">
                        {stage.title}
                      </h2>
                      <p className="text-lg text-muted-foreground mb-6 max-w-2xl">
                        {stage.description}
                      </p>
                      
                      <div className="card-elevated p-6 lg:p-8">
                        <h3 className="font-semibold text-foreground mb-4">
                          Key Features:
                        </h3>
                        <div className="grid sm:grid-cols-2 gap-3">
                          {stage.details.map((detail) => (
                            <div key={detail} className="flex items-start gap-3">
                              <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                              <span className="text-sm text-muted-foreground">
                                {detail}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Summary */}
      <section className="section-padding bg-secondary/30">
        <div className="container-wide mx-auto">
          <div className="grid lg:grid-cols-3 gap-8">
            {[
              {
                title: "For Institutions",
                description:
                  "Post RFQs, receive verified bids, and maintain complete audit trails for compliance.",
                cta: "Get Started",
                link: "/institutions",
              },
              {
                title: "For Vendors",
                description:
                  "Access high-value institutional RFQs and win contracts through transparent bidding.",
                cta: "Apply Now",
                link: "/vendors",
              },
              {
                title: "Need Help?",
                description:
                  "Our team is ready to walk you through the platform and answer any questions.",
                cta: "Book a Demo",
                link: "/contact",
              },
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="card-elevated p-8 text-center"
              >
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  {item.title}
                </h3>
                <p className="text-muted-foreground mb-6">{item.description}</p>
                <Link to={item.link} className="btn-outline">
                  {item.cta}
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding">
        <div className="container-narrow mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Ready to Experience Transparent Procurement?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-xl mx-auto">
            Join leading institutions and vendors on India's first private tender marketplace.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/contact" className="btn-primary px-8 py-4 text-base">
              Book a Demo
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link to="/pricing" className="btn-outline px-8 py-4 text-base">
              View Pricing
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}
