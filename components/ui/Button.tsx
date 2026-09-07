"use client";

import React, { forwardRef } from "react";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "pill" | "circle" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  icon?: React.ReactNode;
  iconPosition?: "left" | "right";
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      children,
      className,
      variant = "primary",
      size = "md",
      icon,
      iconPosition = "right",
      disabled,
      ...props
    },
    ref
  ) => {
    // Circle button variant
    if (variant === "circle") {
      const circleSizes = {
        sm: "w-8 h-8 min-w-[32px] min-h-[32px]",
        md: "w-10 h-10 min-w-[40px] min-h-[40px]",
        lg: "w-12 h-12 min-w-[48px] min-h-[48px]",
      };
      return (
        <button
          ref={ref}
          disabled={disabled}
          data-cursor="button"
          className={cn(
            "rounded-full bg-[var(--os-ink)] text-white border border-[var(--os-ink)] inline-flex items-center justify-center select-none cursor-pointer transition-transform duration-200 ease-out hover:scale-110 active:scale-95 group focus-visible:outline-2 focus-visible:outline-[var(--os-ink)] focus-visible:outline-offset-2 disabled:opacity-40 disabled:cursor-not-allowed",
            circleSizes[size],
            className
          )}
          {...props}
        >
          {children || <ArrowUpRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />}
        </button>
      );
    }

    // Pill & Standard variants
    const variantStyles = {
      primary:
        "rounded-full bg-[var(--os-cream)] text-[var(--os-ink)] border border-[var(--os-ink)] hover:bg-[var(--os-ink)] hover:text-[var(--os-cream)] transition-all duration-200 ease-out shadow-xs",
      pill:
        "rounded-full bg-[var(--os-cream)] text-[var(--os-ink)] border border-[var(--os-ink)] hover:bg-[var(--os-ink)] hover:text-[var(--os-cream)] transition-all duration-200 ease-out",
      secondary:
        "rounded-full bg-white text-[var(--os-ink)] border border-[var(--os-ink)] hover:bg-[var(--os-ink)] hover:text-white transition-all duration-200 ease-out",
      outline:
        "rounded-full bg-transparent text-[var(--os-ink)] border border-[var(--os-ink)] hover:bg-[var(--os-ink)] hover:text-[var(--os-cream)] transition-all duration-200 ease-out",
      ghost:
        "rounded-full bg-transparent text-[var(--os-ink)] hover:bg-black/5 transition-colors duration-150",
    };

    const sizeStyles = {
      sm: "text-xs font-sans tracking-wide py-1.5 px-3.5 gap-1.5 min-h-[36px]",
      md: "text-xs md:text-sm font-sans font-medium tracking-wide py-2.5 px-5 gap-2 min-h-[44px]",
      lg: "text-sm md:text-base font-sans font-medium tracking-wide py-3 px-6 gap-2.5 min-h-[48px]",
    };

    return (
      <button
        ref={ref}
        disabled={disabled}
        data-cursor="button"
        className={cn(
          "inline-flex items-center justify-center select-none cursor-pointer focus-visible:outline-2 focus-visible:outline-[var(--os-ink)] focus-visible:outline-offset-2 disabled:opacity-40 disabled:cursor-not-allowed active:scale-[0.98] group",
          variantStyles[variant],
          sizeStyles[size],
          className
        )}
        {...props}
      >
        {icon && iconPosition === "left" && <span className="inline-flex shrink-0">{icon}</span>}
        <span className="truncate">{children}</span>
        {icon && iconPosition === "right" && <span className="inline-flex shrink-0">{icon}</span>}
      </button>
    );
  }
);

Button.displayName = "Button";

export function PrimaryButton({
  children,
  className,
  ...props
}: ButtonProps) {
  return (
    <Button variant="primary" className={className} {...props}>
      {children}
    </Button>
  );
}

export function PillButton({
  children,
  className,
  ...props
}: ButtonProps) {
  return (
    <Button variant="pill" size="sm" className={className} {...props}>
      {children}
    </Button>
  );
}

export function CircleButton({
  className,
  icon,
  size = "md",
  ...props
}: Omit<ButtonProps, "variant"> & { icon?: React.ReactNode }) {
  return (
    <Button variant="circle" size={size} className={className} {...props}>
      {icon}
    </Button>
  );
}
