import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  TrendingDown,
  BadgeCheck,
  EyeOff,
  Banknote,
  FileCheck,
  ArrowRight,
  ClipboardList,
  Users,
  Scale,
  Award,
  Cog,
  CheckCircle2,
} from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { FeatureCard } from "@/components/ui/FeatureCard";

const benefits = [
  {
    icon: TrendingDown,
    title: "Cut Procurement Cost by 8-15%",
    description:
      "Competitive blind bidding and verified vendor pool drives down costs while maintaining quality standards.",
  },
  {
    icon: BadgeCheck,
    title: "Verified Vendors with GST & OEM Authorization",
    description:
      "Every vendor undergoes KYC verification including GST validation, OEM authorizations, and reference checks.",
  },
  {
    icon: EyeOff,
    title: "Blind Bidding to Avoid Cartels",
    description:
      "Vendors cannot see competitor bids, eliminating price collusion and ensuring genuinely competitive quotes.",
  },
  {
    icon: Banknote,
    title: "Escrow and Milestones for Safer Payments",
    description:
      "Funds are held securely and released only upon milestone completion, protecting your institution.",
  },
  {
    icon: FileCheck,
    title: "Audit-Ready Documentation",
    description:
      "Automated comparative statements, bid analysis reports, and complete audit trails for boards and donors.",
  },
];

const processSteps = [
  {
    icon: ClipboardList,
    title: "RFQ Creation",
    description: "Post detailed requirements with specifications, quantities, and deadlines.",
  },
  {
    icon: Users,
    title: "Vendor Bidding",
    description: "Qualified vendors submit blind bids within the specified timeline.",
  },
  {
    icon: Scale,
    title: "Evaluation",
    description: "Compare bids using our automated comparison tools and scoring matrices.",
  },
  {
    icon: Award,
    title: "Award",
    description: "Select the winning vendor and initiate contract signing on platform.",
  },
  {
    icon: Cog,
    title: "Execution",
    description: "Track delivery milestones and release escrow payments upon completion.",
  },
];

export default function Institutions() {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary via-primary to-accent/20 pt-24 pb-16 lg:pt-32 lg:pb-24">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wMyI+PHBhdGggZD0iTTM2IDM0djItSDI0di0yaDEyek0zNiAyNHYySDI0di0yaDEyeiIvPjwvZz48L2c+PC9zdmc+')] opacity-50" />
        
        <div className="container-wide mx-auto px-4 lg:px-8 relative">
          <div className="max-w-3xl">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-block px-4 py-2 mb-6 text-sm font-medium text-accent-foreground bg-accent/90 rounded-full"
            >
              For Institutions
            </motion.span>
            
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6 leading-tight"
            >
              Transparent Procurement for{" "}
              <span className="text-accent">Modern Institutions</span>
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-lg sm:text-xl text-primary-foreground/80 mb-8"
            >
              Whether you're a hospital, university, corporate, or builder – streamline your procurement with verified vendors, competitive bidding, and complete audit trails.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <Link to="/contact" className="btn-accent px-8 py-4 text-base">
                Request a Demo
                <ArrowRight className="w-5 h-5" />
              </Link>
            </motion.div>
          </div>
        </div>
        
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent" />
      </section>

      {/* Benefits */}
      <section className="section-padding">
        <div className="container-wide mx-auto">
          <SectionHeader
            badge="Benefits"
            title="Why Institutions Choose Tender.AI"
            description="Purpose-built features that address the unique challenges of institutional procurement."
          />
          
          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
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

      {/* Process Flow */}
      <section className="section-padding bg-secondary/30">
        <div className="container-wide mx-auto">
          <SectionHeader
            badge="Process"
            title="End-to-End Procurement Flow"
            description="A streamlined process from requirement posting to delivery completion."
          />
          
          <div className="mt-16 relative">
            {/* Timeline line */}
            <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-border -translate-x-1/2" />
            
            <div className="space-y-12 lg:space-y-0">
              {processSteps.map((step, index) => (
                <motion.div
                  key={step.title}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className={`lg:flex items-center gap-8 ${
                    index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                  }`}
                >
                  <div className={`flex-1 ${index % 2 === 0 ? "lg:text-right" : "lg:text-left"}`}>
                    <div className={`card-elevated p-6 inline-block ${index % 2 === 0 ? "lg:ml-auto" : "lg:mr-auto"}`}>
                      <div className="flex items-center gap-4 mb-3">
                        <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center">
                          <step.icon className="w-6 h-6 text-accent" />
                        </div>
                        <div>
                          <span className="text-xs font-semibold text-accent uppercase tracking-wider">
                            Step {index + 1}
                          </span>
                          <h3 className="text-lg font-semibold text-foreground">
                            {step.title}
                          </h3>
                        </div>
                      </div>
                      <p className="text-muted-foreground text-sm max-w-sm">
                        {step.description}
                      </p>
                    </div>
                  </div>
                  
                  {/* Center dot */}
                  <div className="hidden lg:flex items-center justify-center w-12 h-12 rounded-full bg-accent text-accent-foreground font-bold relative z-10">
                    {index + 1}
                  </div>
                  
                  <div className="flex-1" />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="section-padding bg-primary text-primary-foreground">
        <div className="container-wide mx-auto">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            {[
              { value: "8-15%", label: "Average Cost Savings" },
              { value: "500+", label: "Verified Vendors" },
              { value: "48hrs", label: "Average Response Time" },
              { value: "100%", label: "Audit Compliance" },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="text-4xl lg:text-5xl font-bold text-accent mb-2">
                  {stat.value}
                </div>
                <div className="text-primary-foreground/70">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stay Ready for Audits Section */}
      <section className="section-padding bg-secondary/30">
        <div className="container-wide mx-auto">
          <div className="max-w-3xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <span className="inline-block px-4 py-1.5 mb-4 text-xs font-semibold uppercase tracking-wider text-accent bg-accent/10 rounded-full">
                Audit Ready
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
                Stay Ready for Audits
              </h2>
              <p className="text-muted-foreground mb-6">
                 Tender.AI maintains a full digital trail of RFQs, bids, approvals, and contracts 
                to support internal and statutory audits. Every procurement decision is documented 
                with timestamps, approval logs, and comparative statements – ready for board reviews, 
                donor reports, or regulatory submissions.
              </p>
              <Link to="/verification" className="btn-outline">
                Learn more about verification & documentation
                <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding">
        <div className="container-narrow mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Ready to Modernize Your Procurement?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-xl mx-auto">
             Schedule a demo with our team to see how Tender.AI can work for your institution.
          </p>
          <Link to="/contact" className="btn-primary px-8 py-4 text-base">
            Request a Demo
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </Layout>
  );
}
