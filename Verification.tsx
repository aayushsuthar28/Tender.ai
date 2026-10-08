// Verification & Documentation Page
// Explains vendor verification process and audit-ready documentation for institutions

import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  ArrowRight,
  BadgeCheck,
  FileText,
  Building2,
  CreditCard,
  Briefcase,
  UserCheck,
  ClipboardList,
  Users,
  Scale,
  Handshake,
  Banknote,
  FileCheck,
  CheckCircle2,
} from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { FeatureCard } from "@/components/ui/FeatureCard";

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 },
};

// Vendor verification items
const verificationItems = [
  {
    icon: FileText,
    title: "GST Registration",
    description: "Valid GST certificate with active status verification.",
  },
  {
    icon: CreditCard,
    title: "PAN Verification",
    description: "Company PAN card validation and cross-reference checks.",
  },
  {
    icon: Building2,
    title: "MSME / Udyam",
    description: "Udyam registration verification for eligible vendors.",
  },
  {
    icon: BadgeCheck,
    title: "OEM Authorization",
    description: "Valid authorization letters from original equipment manufacturers.",
  },
  {
    icon: Briefcase,
    title: "Past Project References",
    description: "Verified references from previous institutional clients.",
  },
  {
    icon: UserCheck,
    title: "Bank Details & KYC",
    description: "Bank account verification and basic KYC documentation.",
  },
];

// Document trail items
const documentTrailItems = [
  {
    icon: ClipboardList,
    title: "RFQ Record",
    description: "Complete RFQ details with date/time stamps and specifications.",
  },
  {
    icon: Scale,
    title: "Comparative Statement",
    description: "Technical and commercial comparison of all received bids.",
  },
  {
    icon: UserCheck,
    title: "Vendor KYC Pack",
    description: "Complete KYC documentation of selected vendor.",
  },
  {
    icon: FileText,
    title: "Approval & Decision Log",
    description: "Full audit trail of approvals and selection decisions.",
  },
  {
    icon: Handshake,
    title: "Contract / Work Order",
    description: "Signed contract references and work order documents.",
  },
  {
    icon: Banknote,
    title: "Milestone & Payment Summary",
    description: "Complete payment history with milestone tracking (if escrow used).",
  },
];

// Timeline steps for verification process
const timelineSteps = [
  { icon: UserCheck, title: "Vendor KYC", description: "Complete verification" },
  { icon: ClipboardList, title: "RFQ Issued", description: "Requirements posted" },
  { icon: Users, title: "Bids Received", description: "Vendor submissions" },
  { icon: Scale, title: "Selection & Contracting", description: "Award decision" },
  { icon: Banknote, title: "Execution & Payments", description: "Milestone delivery" },
  { icon: FileCheck, title: "Final Audit Report", description: "Complete documentation" },
];

export default function Verification() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary via-primary to-accent/20 pt-24 pb-16 lg:pt-32 lg:pb-24">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wMyI+PHBhdGggZD0iTTM2IDM0djItSDI0di0yaDEyek0zNiAyNHYySDI0di0yaDEyeiIvPjwvZz48L2c+PC9zdmc+')] opacity-50" />
        
        <div className="container-wide mx-auto px-4 lg:px-8 relative text-center">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-block px-4 py-2 mb-6 text-sm font-medium text-accent-foreground bg-accent/90 rounded-full"
          >
            Trust & Compliance
          </motion.span>
          
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6 leading-tight"
          >
            Verification &{" "}
            <span className="text-accent">Audit-Ready Documentation</span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg sm:text-xl text-primary-foreground/80 max-w-3xl mx-auto"
          >
            Every vendor is verified. Every transaction leaves a clean digital trail for your auditors.
          </motion.p>
        </div>
        
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent" />
      </section>

      {/* Vendor Verification Section */}
      <section className="section-padding">
        <div className="container-wide mx-auto">
          <SectionHeader
            badge="Verification"
            title="What We Verify For Every Vendor"
            description="Comprehensive KYC and compliance checks ensure only qualified vendors participate in your RFQs."
          />
          
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {verificationItems.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <FeatureCard
                  icon={item.icon}
                  title={item.title}
                  description={item.description}
                />
              </motion.div>
            ))}
          </motion.div>
          
          <motion.p
            {...fadeInUp}
            className="mt-10 text-center text-muted-foreground max-w-2xl mx-auto"
          >
            We maintain an approved vendor pool, and only verified vendors are allowed to participate in RFQs on Tender.AI.
          </motion.p>
        </div>
      </section>

      {/* Document Trail Section */}
      <section className="section-padding bg-secondary/30">
        <div className="container-wide mx-auto">
          <SectionHeader
            badge="Documentation"
            title="Documents We Generate For Your Audits"
            description="Complete audit-ready documentation for every procurement transaction."
          />
          
          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {documentTrailItems.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <FeatureCard
                  icon={item.icon}
                  title={item.title}
                  description={item.description}
                />
              </motion.div>
            ))}
          </div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-10 p-6 rounded-xl bg-background border border-border max-w-3xl mx-auto"
          >
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                <FileCheck className="w-5 h-5 text-accent" />
              </div>
              <div>
                <h4 className="font-semibold text-foreground mb-2">Download as PDF</h4>
                <p className="text-muted-foreground text-sm">
                  All documents can be downloaded as PDFs and attached to your internal or statutory audit files. 
                  Generate comprehensive audit packs with a single click, ready for board meetings, donor reports, or regulatory submissions.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="section-padding">
        <div className="container-wide mx-auto">
          <SectionHeader
            badge="Process"
            title="Full Audit Trail Timeline"
            description="Every step of the procurement process is documented and traceable."
          />
          
          {/* Horizontal Timeline for Desktop */}
          <div className="mt-16 hidden lg:block">
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute top-12 left-0 right-0 h-0.5 bg-border" />
              
              <div className="grid grid-cols-6 gap-4">
                {timelineSteps.map((step, index) => (
                  <motion.div
                    key={step.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="relative text-center"
                  >
                    <div className="w-24 h-24 rounded-full bg-accent/10 border-4 border-background flex items-center justify-center mx-auto relative z-10">
                      <step.icon className="w-10 h-10 text-accent" />
                    </div>
                    <div className="mt-4">
                      <span className="text-xs font-semibold text-accent uppercase tracking-wider">
                        Step {index + 1}
                      </span>
                      <h4 className="font-semibold text-foreground mt-1">{step.title}</h4>
                      <p className="text-muted-foreground text-sm mt-1">{step.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
          
          {/* Vertical Timeline for Mobile/Tablet */}
          <div className="mt-12 lg:hidden">
            <div className="relative pl-8">
              {/* Timeline line */}
              <div className="absolute left-3 top-0 bottom-0 w-0.5 bg-border" />
              
              <div className="space-y-8">
                {timelineSteps.map((step, index) => (
                  <motion.div
                    key={step.title}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="relative"
                  >
                    <div className="absolute -left-8 w-6 h-6 rounded-full bg-accent flex items-center justify-center text-accent-foreground text-xs font-bold">
                      {index + 1}
                    </div>
                    <div className="card-elevated p-4">
                      <div className="flex items-center gap-3 mb-2">
                        <step.icon className="w-5 h-5 text-accent" />
                        <h4 className="font-semibold text-foreground">{step.title}</h4>
                      </div>
                      <p className="text-muted-foreground text-sm">{step.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="section-padding bg-primary text-primary-foreground">
        <div className="container-narrow mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Want to See a Sample Audit Pack?
            </h2>
            <p className="text-lg text-primary-foreground/80 mb-8 max-w-xl mx-auto">
              Request sample documentation to see exactly what your auditors will receive after each procurement cycle.
            </p>
            <Link to="/contact" className="btn-accent px-8 py-4 text-base">
              Request Sample Documentation
              <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}
