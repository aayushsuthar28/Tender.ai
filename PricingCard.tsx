import { Check } from "lucide-react";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";

interface PricingCardProps {
  name: string;
  price: string;
  period: string;
  description: string;
  features: string[];
  highlighted?: boolean;
  ctaText?: string;
  ctaLink?: string;
  onCtaClick?: () => void;
  planId?: string;
}

export function PricingCard({
  name,
  price,
  period,
  description,
  features,
  highlighted = false,
  ctaText = "Get Started",
  ctaLink = "/contact",
  onCtaClick,
}: PricingCardProps) {
  return (
    <div
      className={cn(
        "relative rounded-2xl p-8 transition-all duration-300",
        highlighted
          ? "bg-primary text-primary-foreground shadow-xl scale-105"
          : "bg-card border border-border hover:shadow-lg"
      )}
    >
      {highlighted && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2">
          <span className="px-4 py-1 text-xs font-semibold uppercase tracking-wider bg-accent text-accent-foreground rounded-full">
            Most Popular
          </span>
        </div>
      )}

      <div className="mb-6">
        <h3
          className={cn(
            "text-xl font-semibold mb-2",
            highlighted ? "text-primary-foreground" : "text-foreground"
          )}
        >
          {name}
        </h3>
        <p
          className={cn(
            "text-sm",
            highlighted ? "text-primary-foreground/70" : "text-muted-foreground"
          )}
        >
          {description}
        </p>
      </div>

      <div className="mb-6">
        <span
          className={cn(
            "text-4xl font-bold",
            highlighted ? "text-primary-foreground" : "text-foreground"
          )}
        >
          {price}
        </span>
        <span
          className={cn(
            "text-sm ml-1",
            highlighted ? "text-primary-foreground/70" : "text-muted-foreground"
          )}
        >
          {period}
        </span>
      </div>

      <ul className="space-y-3 mb-8">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start gap-3">
            <Check
              className={cn(
                "w-5 h-5 flex-shrink-0 mt-0.5",
                highlighted ? "text-accent" : "text-accent"
              )}
            />
            <span
              className={cn(
                "text-sm",
                highlighted ? "text-primary-foreground/90" : "text-muted-foreground"
              )}
            >
              {feature}
            </span>
          </li>
        ))}
      </ul>

      {onCtaClick ? (
        <button
          onClick={onCtaClick}
          className={cn(
            "block w-full text-center py-3 px-6 rounded-lg font-semibold transition-all",
            highlighted
              ? "bg-accent text-accent-foreground hover:opacity-90"
              : "bg-primary text-primary-foreground hover:opacity-90"
          )}
        >
          {ctaText}
        </button>
      ) : (
        <Link
          to={ctaLink}
          className={cn(
            "block w-full text-center py-3 px-6 rounded-lg font-semibold transition-all",
            highlighted
              ? "bg-accent text-accent-foreground hover:opacity-90"
              : "bg-primary text-primary-foreground hover:opacity-90"
          )}
        >
          {ctaText}
        </Link>
      )}
    </div>
  );
}
