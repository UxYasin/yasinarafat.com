import React from "react";
import { cn } from "@/lib/utils";

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  spacing?: "none" | "sm" | "md" | "lg" | "xl";
  bordered?: boolean;
}

export function Section({
  children,
  className,
  spacing = "lg",
  bordered = false,
  ...props
}: SectionProps) {
  const spacingClasses = {
    none: "py-0",
    sm: "py-8 md:py-12",
    md: "py-12 md:py-20",
    lg: "py-16 md:py-28 lg:py-32",
    xl: "py-24 md:py-36 lg:py-48",
  };

  return (
    <section
      className={cn(
        "relative w-full",
        spacingClasses[spacing],
        bordered && "border-b border-[var(--border-subtle)]",
        className
      )}
      {...props}
    >
      {children}
    </section>
  );
}
