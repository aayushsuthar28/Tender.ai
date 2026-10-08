import { useState } from "react";
import { motion } from "framer-motion";
import { Send, CheckCircle2 } from "lucide-react";
import { toast } from "@/hooks/use-toast";
import { submitVendorApplication } from "@/lib/api";

const categories = [
  "HVAC & Mechanical",
  "Electrical & Power",
  "Medical Equipment",
  "IT & Software",
  "Lab Equipment",
  "Furniture & Interiors",
  "Security Systems",
  "Civil & Construction",
  "Other",
];

interface FormData {
  organisationName: string;
  contactName: string;
  email: string;
  phone: string;
  categoryFocus: string;
  city: string;
  message: string;
}

export function VendorApplicationForm() {
  const [formData, setFormData] = useState<FormData>({
    organisationName: "",
    contactName: "",
    email: "",
    phone: "",
    categoryFocus: "",
    city: "",
    message: "",
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
      await submitVendorApplication(formData);
      setIsSubmitted(true);
      toast({
        title: "Application submitted!",
        description: "Our team will review and contact you within 48 hours.",
      });
    } catch (error) {
      console.error("Vendor application error:", error);
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
        className="text-center py-12"
      >
        <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-6">
          <CheckCircle2 className="w-8 h-8 text-accent" />
        </div>
        <h3 className="text-2xl font-bold text-foreground mb-2">
          Application Received!
        </h3>
        <p className="text-muted-foreground mb-6">
          We'll review your application and get back to you within 48 hours.
        </p>
        <button
          onClick={() => {
            setIsSubmitted(false);
            setFormData({
              organisationName: "",
              contactName: "",
              email: "",
              phone: "",
              categoryFocus: "",
              city: "",
              message: "",
            });
          }}
          className="btn-outline"
        >
          Submit Another Application
        </button>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid sm:grid-cols-2 gap-6">
        <div>
          <label htmlFor="organisationName" className="block text-sm font-medium text-foreground mb-2">
            Company / Organisation Name *
          </label>
          <input
            type="text"
            id="organisationName"
            name="organisationName"
            required
            value={formData.organisationName}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
            placeholder="Your Company Ltd."
          />
        </div>

        <div>
          <label htmlFor="contactName" className="block text-sm font-medium text-foreground mb-2">
            Contact Person Name *
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
          <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
            Email *
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
            placeholder="contact@company.com"
          />
        </div>

        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
            Phone
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
            placeholder="+91 6353991343"
          />
        </div>

        <div>
          <label htmlFor="categoryFocus" className="block text-sm font-medium text-foreground mb-2">
            Primary Category
          </label>
          <select
            id="categoryFocus"
            name="categoryFocus"
            value={formData.categoryFocus}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
          >
            <option value="">Select category</option>
            {categories.map((cat) => (
              <option key={cat} value={cat}>
                {cat}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label htmlFor="city" className="block text-sm font-medium text-foreground mb-2">
            City
          </label>
          <input
            type="text"
            id="city"
            name="city"
            value={formData.city}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
            placeholder="Bengaluru"
          />
        </div>
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
          Tell us about your business
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          value={formData.message}
          onChange={handleChange}
          className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring resize-none"
          placeholder="Brief description of your products/services, experience, key clients..."
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
            Submit Application
            <Send className="w-4 h-4" />
          </>
        )}
      </button>
    </form>
  );
}
