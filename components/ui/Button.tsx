"use client";

import React, { forwardRef } from "react";
import { cn } from "@/lib/utils";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "accent" | "outline" | "ghost";
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
    const variantStyles = {
      primary:
        "bg-[var(--text-primary)] text-[var(--bg-primary)] border border-[var(--text-primary)] hover:bg-[var(--accent)] hover:border-[var(--accent)] hover:text-white transition-colors duration-200",
      secondary:
        "bg-[var(--bg-secondary)] text-[var(--text-primary)] border border-[var(--border-subtle)] hover:border-[var(--text-primary)] hover:bg-[var(--surface-card)] transition-colors duration-200",
      accent:
        "bg-[var(--accent)] text-white border border-[var(--accent)] hover:bg-[var(--accent-hover)] transition-colors duration-200",
      outline:
        "bg-transparent text-[var(--text-primary)] border border-[var(--border-strong)] hover:bg-[var(--text-primary)] hover:text-[var(--bg-primary)] transition-all duration-200",
      ghost:
        "bg-transparent text-[var(--text-secondary)] hover:text-[var(--text-primary)] border-transparent transition-colors duration-150",
    };

    const sizeStyles = {
      sm: "text-xs font-mono tracking-wider py-2 px-3 gap-1.5 uppercase min-h-[36px]",
      md: "text-xs md:text-sm font-mono tracking-wider py-3 px-5 gap-2 uppercase min-h-[44px]",
      lg: "text-sm font-mono tracking-wider py-4 px-7 gap-2.5 uppercase min-h-[48px]",
    };

    return (
      <button
        ref={ref}
        disabled={disabled}
        data-cursor="button"
        className={cn(
          "inline-flex items-center justify-center font-medium select-none cursor-pointer focus-visible:outline-2 focus-visible:outline-[var(--accent)] focus-visible:outline-offset-2 disabled:opacity-40 disabled:cursor-not-allowed active:scale-[0.98] transition-transform duration-100",
          variantStyles[variant],
          sizeStyles[size],
          className
        )}
        {...props}
      >
        {icon && iconPosition === "left" && <span className="inline-flex shrink-0">{icon}</span>}
        <span>{children}</span>
        {icon && iconPosition === "right" && <span className="inline-flex shrink-0">{icon}</span>}
      </button>
    );
  }
);

Button.displayName = "Button";
