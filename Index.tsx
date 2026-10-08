import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Building2,
  Users,
  FileText,
  ShieldCheck,
  BarChart3,
  CheckCircle2,
  ArrowRight,
  Banknote,
  ClipboardList,
  Handshake,
  Truck,
  Stethoscope,
  GraduationCap,
  Building,
  Zap,
  Wrench,
  Monitor,
  ThermometerSun,
} from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { FeatureCard } from "@/components/ui/FeatureCard";
import { StepCard } from "@/components/ui/StepCard";
import { TestimonialCard } from "@/components/ui/TestimonialCard";

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 },
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const benefits = [
  {
    icon: BarChart3,
    title: "3-10 Verified Bids per RFQ",
    description:
      "Get multiple competitive quotes from pre-verified vendors for every procurement request.",
  },
  {
    icon: ShieldCheck,
    title: "Vendor KYC & Compliance",
    description:
      "Every vendor undergoes GST verification, OEM authorization checks, and reference validation.",
  },
  {
    icon: Users,
    title: "Anti-Circumvention Protection",
    description:
      "Blind bidding prevents cartels and ensures fair competition without vendor collusion.",
  },
  {
    icon: Banknote,
    title: "Escrow-Based Payments",
    description:
      "Secure milestone-based payments protect both institutions and vendors throughout the project.",
  },
  {
    icon: FileText,
    title: "Audit-Ready Documentation",
    description:
      "Complete comparative statements, reports, and trails for auditors, boards, and donors.",
  },
  {
    icon: CheckCircle2,
    title: "Transparent Process",
    description:
      "End-to-end visibility into procurement with real-time status updates and notifications.",
  },
];

const howItWorks = [
  {
    icon: ClipboardList,
    title: "Post RFQ",
    description: "Create detailed procurement requests with specifications and deadlines.",
  },
  {
    icon: Users,
    title: "Vendors Bid",
    description: "Verified vendors submit blind bids without seeing competitor prices.",
  },
  {
    icon: Handshake,
    title: "Escrow & Contracts",
    description: "Select winner, sign contracts, and set up escrow for secure payments.",
  },
  {
    icon: Truck,
    title: "Delivery & Audit Trail",
    description: "Track delivery, release payments, and maintain complete documentation.",
  },
];

const useCases = [
  { icon: ThermometerSun, name: "HVAC Projects" },
  { icon: Zap, name: "Electrical Systems" },
  { icon: Stethoscope, name: "Medical Equipment" },
  { icon: Monitor, name: "IT Infrastructure" },
  { icon: Wrench, name: "Facility Maintenance" },
  { icon: Building, name: "Construction & Fitouts" },
];

const testimonials = [
  {
    quote:
      "Tender.AI transformed our procurement process. We now get 8-10 verified bids for every RFQ and have complete audit trails for our board meetings.",
    author: "Dr. Priya Sharma",
    role: "CFO",
    organization: "Metro City Hospital",
  },
  {
    quote:
      "The blind bidding feature eliminated the cartel problem we faced for years. Our procurement costs dropped by 12% in the first quarter.",
    author: "Rajesh Kumar",
    role: "Director of Operations",
    organization: "National University",
  },
  {
    quote:
      "Finally, a platform that understands institutional procurement. The escrow system gives us confidence in dealing with new vendors.",
    author: "Anita Desai",
    role: "Procurement Head",
    organization: "TechPark Corporate",
  },
];

const clientLogos = [
  "Healthcare Corp",
  "EduTech University",
  "BuildRight Inc",
  "MegaCorp Industries",
  "CityMall Group",
  "Sunrise Hospitals",
];

export default function Index() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary via-primary to-accent/20">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wMyI+PHBhdGggZD0iTTM2IDM0djItSDI0di0yaDEyek0zNiAyNHYySDI0di0yaDEyeiIvPjwvZz48L2c+PC9zdmc+')] opacity-50" />
        
        <div className="container-wide mx-auto section-padding relative">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div {...fadeInUp}>
              <span className="inline-block px-4 py-2 mb-6 text-sm font-medium text-accent-foreground bg-accent/90 rounded-full">
                World's First Private Tender Marketplace
              </span>
            </motion.div>
            
            <motion.h1
              {...fadeInUp}
              transition={{ delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6 leading-tight"
            >
              Private Tender Marketplace for{" "}
              <span className="text-accent">Hospitals, Colleges & Corporates</span>
            </motion.h1>
            
            <motion.p
              {...fadeInUp}
              transition={{ delay: 0.2 }}
              className="text-lg sm:text-xl text-primary-foreground/80 mb-10 max-w-2xl mx-auto"
            >
              Post RFQs, compare blind bids, use escrow, and get audit-ready procurement in one place.
            </motion.p>
            
            <motion.div
              {...fadeInUp}
              transition={{ delay: 0.3 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4"
            >
              <Link
                to="/contact"
                className="btn-accent px-8 py-4 text-base w-full sm:w-auto"
              >
                Book a Demo
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-semibold text-primary-foreground border-2 border-primary-foreground/30 rounded-lg hover:bg-primary-foreground/10 transition-all w-full sm:w-auto"
              >
                Post an RFQ
              </Link>
            </motion.div>
          </div>
        </div>
        
        {/* Decorative elements */}
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent" />
      </section>

      {/* Who We Serve */}
      <section className="section-padding">
        <div className="container-wide mx-auto">
          <SectionHeader
            badge="Who We Serve"
            title="Two Sides, One Platform"
            description="Connecting institutions seeking transparent procurement with vendors looking for serious B2B opportunities."
          />
          
          <div className="mt-12 grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="card-elevated p-8 lg:p-10"
            >
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                <Building2 className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-4">
                For Institutions
              </h3>
              <p className="text-muted-foreground mb-6">
                Hospitals, colleges, corporates, and builders looking to streamline procurement, reduce costs, and maintain compliance.
              </p>
              <ul className="space-y-3 mb-8">
                {["Post RFQs in minutes", "Receive verified vendor bids", "Compare quotes transparently", "Maintain audit-ready records"].map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0" />
                    <span className="text-foreground">{item}</span>
                  </li>
                ))}
              </ul>
              <Link to="/institutions" className="btn-primary">
                Learn More
                <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="card-elevated p-8 lg:p-10"
            >
              <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center mb-6">
                <Users className="w-7 h-7 text-accent" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-4">
                For Vendors
              </h3>
              <p className="text-muted-foreground mb-6">
                Manufacturers, traders, and contractors seeking high-value institutional projects without the spam of retail leads.
              </p>
              <ul className="space-y-3 mb-8">
                {["Access curated RFQs", "Bid on serious projects only", "Track bid status real-time", "Build institutional relationships"].map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0" />
                    <span className="text-foreground">{item}</span>
                  </li>
                ))}
              </ul>
              <Link to="/vendors" className="btn-accent">
                Apply as Vendor
                <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="section-padding bg-secondary/30">
        <div className="container-wide mx-auto">
          <SectionHeader
            badge="Process"
            title="How It Works"
            description="From RFQ to delivery, our platform ensures transparency and compliance at every step."
          />
          
          <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {howItWorks.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <StepCard
                  number={index + 1}
                  icon={step.icon}
                  title={step.title}
                  description={step.description}
                  isLast={index === howItWorks.length - 1}
                />
              </motion.div>
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <Link to="/how-it-works" className="btn-outline">
              See Detailed Process
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Built for Audit & Compliance Section */}
      <section className="section-padding">
        <div className="container-wide mx-auto">
          <SectionHeader
            badge="Compliance"
            title="Built for Audit & Compliance"
            description="Every transaction is documented and traceable for your auditors, boards, and donors."
          />
          
          <div className="mt-12 grid sm:grid-cols-3 gap-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <FeatureCard
                icon={ShieldCheck}
                title="Vendor KYC & GST Verification"
                description="Every vendor undergoes comprehensive KYC including GST validation and OEM authorization checks."
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <FeatureCard
                icon={BarChart3}
                title="Comparative Statements"
                description="Auto-generated technical and commercial comparison reports for every RFQ evaluation."
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <FeatureCard
                icon={FileText}
                title="Downloadable Documentation"
                description="Complete audit packs ready for board meetings, donor reports, or regulatory submissions."
              />
            </motion.div>
          </div>
          
          <div className="mt-10 text-center">
            <Link to="/verification" className="btn-outline">
              Learn More About Verification
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Why Tender.AI */}
      <section className="section-padding">
        <div className="container-wide mx-auto">
          <SectionHeader
            badge="Benefits"
            title="Why Tender.AI"
            description="Built specifically for institutional procurement with features that eliminate traditional inefficiencies."
          />
          
          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {benefits.map((benefit) => (
              <motion.div key={benefit.title} variants={fadeInUp}>
                <FeatureCard
                  icon={benefit.icon}
                  title={benefit.title}
                  description={benefit.description}
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="section-padding bg-primary text-primary-foreground">
        <div className="container-wide mx-auto">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-1.5 mb-4 text-xs font-semibold uppercase tracking-wider text-accent bg-accent/20 rounded-full">
              Use Cases
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Procurement Across Industries
            </h2>
            <p className="text-primary-foreground/70 max-w-2xl mx-auto">
              From medical equipment to IT infrastructure, our platform handles diverse procurement needs.
            </p>
          </div>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6">
            {useCases.map((useCase, index) => (
              <motion.div
                key={useCase.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="flex flex-col items-center p-6 rounded-xl bg-primary-foreground/5 hover:bg-primary-foreground/10 transition-colors"
              >
                <useCase.icon className="w-10 h-10 text-accent mb-3" />
                <span className="text-sm font-medium text-center">
                  {useCase.name}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-padding">
        <div className="container-wide mx-auto">
          <SectionHeader
            badge="Testimonials"
            title="Trusted by Leading Institutions"
            description="See how organizations across India are transforming their procurement with Tender.AI."
          />
          
          <div className="mt-12 grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.author}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <TestimonialCard {...testimonial} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Client Logos */}
      <section className="py-12 border-y border-border bg-secondary/20">
        <div className="container-wide mx-auto px-4">
          <p className="text-center text-sm font-medium text-muted-foreground mb-8">
            TRUSTED BY LEADING ORGANIZATIONS
          </p>
          <div className="flex flex-wrap items-center justify-center gap-8 lg:gap-16">
            {clientLogos.map((logo) => (
              <div
                key={logo}
                className="text-lg font-semibold text-muted-foreground/50 hover:text-muted-foreground transition-colors"
              >
                {logo}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="section-padding">
        <div className="container-narrow mx-auto">
          <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-primary to-primary/80 p-8 sm:p-12 lg:p-16 text-center">
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDM0djItSDI0di0yaDEyek0zNiAyNHYySDI0di0yaDEyeiIvPjwvZz48L2c+PC9zdmc+')] opacity-50" />
            
            <div className="relative">
              <h2 className="text-3xl sm:text-4xl font-bold text-primary-foreground mb-4">
                Ready to Transform Your Procurement?
              </h2>
              <p className="text-lg text-primary-foreground/80 mb-8 max-w-xl mx-auto">
                 Talk to our procurement specialist and see how Tender.AI can reduce costs and improve compliance for your organization.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link to="/contact" className="btn-accent px-8 py-4 text-base">
                  Talk to a Specialist
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <Link
                  to="/how-it-works"
                  className="inline-flex items-center gap-2 text-primary-foreground font-semibold hover:underline"
                >
                  Learn how it works
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
