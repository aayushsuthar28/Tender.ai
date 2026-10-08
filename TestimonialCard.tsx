import { Quote } from "lucide-react";
import { cn } from "@/lib/utils";

interface TestimonialCardProps {
  quote: string;
  author: string;
  role: string;
  organization: string;
  className?: string;
}

export function TestimonialCard({
  quote,
  author,
  role,
  organization,
  className,
}: TestimonialCardProps) {
  return (
    <div
      className={cn(
        "card-elevated p-6 lg:p-8 flex flex-col",
        className
      )}
    >
      <Quote className="w-8 h-8 text-accent/30 mb-4" />
      <blockquote className="text-foreground leading-relaxed mb-6 flex-1">
        "{quote}"
      </blockquote>
      <div className="flex items-center gap-4">
        <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center">
          <span className="text-lg font-semibold text-primary">
            {author.charAt(0)}
          </span>
        </div>
        <div>
          <p className="font-semibold text-foreground">{author}</p>
          <p className="text-sm text-muted-foreground">
            {role}, {organization}
          </p>
        </div>
      </div>
    </div>
  );
}
