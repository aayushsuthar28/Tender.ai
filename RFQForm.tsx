import { useState } from "react";
import { motion } from "framer-motion";
import { Send, CheckCircle2 } from "lucide-react";
import { toast } from "@/hooks/use-toast";
import { submitRFQ } from "@/lib/api";

const categories = [
  "HVAC & Air Conditioning",
  "Electrical Equipment",
  "Medical Equipment",
  "IT Hardware & Software",
  "Lab Equipment",
  "Furniture & Fixtures",
  "Security & Surveillance",
  "Civil Works",
  "Other",
];

const budgetRanges = [
  "Under ₹1 Lakh",
  "₹1-5 Lakhs",
  "₹5-25 Lakhs",
  "₹25-50 Lakhs",
  "₹50 Lakhs - 1 Crore",
  "Above ₹1 Crore",
];

const organisationTypes = [
  "Hospital",
  "College/University",
  "Corporate",
  "Builder/Developer",
  "Other",
];

interface FormData {
  organisationName: string;
  organisationType: string;
  city: string;
  contactName: string;
  contactEmail: string;
  contactPhone: string;
  category: string;
  title: string;
  description: string;
  budgetRange: string;
}

export function RFQForm({ onSuccess }: { onSuccess?: () => void }) {
  const [formData, setFormData] = useState<FormData>({
    organisationName: "",
    organisationType: "",
    city: "",
    contactName: "",
    contactEmail: "",
    contactPhone: "",
    category: "",
    title: "",
    description: "",
    budgetRange: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await submitRFQ(formData);
      setIsSubmitted(true);
      toast({
        title: "RFQ Submitted!",
        description: "Verified vendors will receive your request shortly.",
      });
      onSuccess?.();
    } catch (error) {
      console.error("RFQ submission error:", error);
      toast({
        title: "Something went wrong",
        description: "Please try again or contact us directly.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="text-center py-8"
      >
        <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-6">
          <CheckCircle2 className="w-8 h-8 text-accent" />
        </div>
        <h3 className="text-2xl font-bold text-foreground mb-2">
          RFQ Submitted!
        </h3>
        <p className="text-muted-foreground mb-6">
          We'll match you with verified vendors and you'll receive quotes within 48-72 hours.
        </p>
        <button
          onClick={() => {
            setIsSubmitted(false);
            setFormData({
              organisationName: "",
              organisationType: "",
              city: "",
              contactName: "",
              contactEmail: "",
              contactPhone: "",
              category: "",
              title: "",
              description: "",
              budgetRange: "",
            });
          }}
          className="btn-outline"
        >
          Submit Another RFQ
        </button>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid sm:grid-cols-2 gap-6">
        <div>
          <label htmlFor="organisationName" className="block text-sm font-medium text-foreground mb-2">
            Organisation Name *
          </label>
          <input
            type="text"
            id="organisationName"
            name="organisationName"
            required
            value={formData.organisationName}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
            placeholder="ABC Hospital"
          />
        </div>

        <div>
          <label htmlFor="organisationType" className="block text-sm font-medium text-foreground mb-2">
            Organisation Type *
          </label>
          <select
            id="organisationType"
            name="organisationType"
            required
            value={formData.organisationType}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
          >
            <option value="">Select type</option>
            {organisationTypes.map((type) => (
              <option key={type} value={type}>{type}</option>
            ))}
          </select>
        </div>

        <div>
          <label htmlFor="city" className="block text-sm font-medium text-foreground mb-2">
            City *
          </label>
          <input
            type="text"
            id="city"
            name="city"
            required
            value={formData.city}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
            placeholder="Bengaluru"
          />
        </div>

        <div>
          <label htmlFor="contactName" className="block text-sm font-medium text-foreground mb-2">
            Contact Person *
          </label>
          <input
            type="text"
            id="contactName"
            name="contactName"
            required
            value={formData.contactName}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
            placeholder="John Doe"
          />
        </div>

        <div>
          <label htmlFor="contactEmail" className="block text-sm font-medium text-foreground mb-2">
            Email *
          </label>
          <input
            type="email"
            id="contactEmail"
            name="contactEmail"
            required
            value={formData.contactEmail}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
            placeholder="john@hospital.com"
          />
        </div>

        <div>
          <label htmlFor="contactPhone" className="block text-sm font-medium text-foreground mb-2">
            Phone
          </label>
          <input
            type="tel"
            id="contactPhone"
            name="contactPhone"
            value={formData.contactPhone}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
            placeholder="+91 6353991343"
          />
        </div>
      </div>

      <div className="grid sm:grid-cols-2 gap-6">
        <div>
          <label htmlFor="category" className="block text-sm font-medium text-foreground mb-2">
            Category *
          </label>
          <select
            id="category"
            name="category"
            required
            value={formData.category}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
          >
            <option value="">Select category</option>
            {categories.map((cat) => (
              <option key={cat} value={cat}>{cat}</option>
            ))}
          </select>
        </div>

        <div>
          <label htmlFor="budgetRange" className="block text-sm font-medium text-foreground mb-2">
            Budget Range
          </label>
          <select
            id="budgetRange"
            name="budgetRange"
            value={formData.budgetRange}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
          >
            <option value="">Select budget</option>
            {budgetRanges.map((range) => (
              <option key={range} value={range}>{range}</option>
            ))}
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="title" className="block text-sm font-medium text-foreground mb-2">
          RFQ Title / Requirement *
        </label>
        <input
          type="text"
          id="title"
          name="title"
          required
          value={formData.title}
          onChange={handleChange}
          className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
          placeholder="e.g., 20 Split ACs for new wing"
        />
      </div>

      <div>
        <label htmlFor="description" className="block text-sm font-medium text-foreground mb-2">
          Detailed Description
        </label>
        <textarea
          id="description"
          name="description"
          rows={4}
          value={formData.description}
          onChange={handleChange}
          className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring resize-none"
          placeholder="Provide details about specifications, quantities, timeline, etc."
        />
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="btn-primary w-full sm:w-auto disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {isSubmitting ? (
          "Submitting..."
        ) : (
          <>
            Submit RFQ
            <Send className="w-4 h-4" />
          </>
        )}
      </button>
    </form>
  );
}
