import { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface StepCardProps {
  number: number;
  icon: LucideIcon;
  title: string;
  description: string;
  isLast?: boolean;
  className?: string;
}

export function StepCard({
  number,
  icon: Icon,
  title,
  description,
  isLast = false,
  className,
}: StepCardProps) {
  return (
    <div className={cn("relative", className)}>
      {/* Connector line */}
      {!isLast && (
        <div className="hidden lg:block absolute top-12 left-full w-full h-0.5 bg-border -translate-x-1/2 z-0" />
      )}
      
      <div className="relative z-10 text-center">
        {/* Number badge */}
        <div className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-accent text-accent-foreground text-sm font-bold mb-4">
          {number}
        </div>
        
        {/* Icon */}
        <div className="w-16 h-16 mx-auto rounded-2xl bg-secondary flex items-center justify-center mb-4">
          <Icon className="w-8 h-8 text-primary" />
        </div>
        
        {/* Content */}
        <h3 className="text-lg font-semibold text-foreground mb-2">{title}</h3>
        <p className="text-sm text-muted-foreground max-w-xs mx-auto">
          {description}
        </p>
      </div>
    </div>
  );
}
