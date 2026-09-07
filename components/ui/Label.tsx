import React from "react";
import { cn } from "@/lib/utils";

interface LabelProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: "default" | "accent" | "outline" | "mono" | "status";
  size?: "sm" | "md";
  dot?: boolean;
}

export function Label({
  children,
  className,
  variant = "default",
  size = "md",
  dot = false,
  ...props
}: LabelProps) {
  const variantStyles = {
    default: "bg-[var(--bg-secondary)] text-[var(--text-secondary)] border border-[var(--border-subtle)]",
    accent: "bg-[var(--accent)] text-white font-medium",
    outline: "border border-[var(--border-subtle)] text-[var(--text-secondary)] bg-transparent",
    mono: "font-mono tracking-widest text-[var(--text-muted)] bg-transparent",
    status: "border border-[var(--border-subtle)] bg-[var(--surface-card)] text-[var(--text-primary)] font-mono",
  };

  const sizeStyles = {
    sm: "text-[10px] px-2 py-0.5 uppercase tracking-wider",
    md: "text-xs px-2.5 py-1 uppercase tracking-wider",
  };

  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-none select-none font-mono",
        variantStyles[variant],
        sizeStyles[size],
        className
      )}
      {...props}
    >
      {dot && (
        <span
          className={cn(
            "w-1.5 h-1.5 rounded-full",
            variant === "accent" ? "bg-white" : "bg-[var(--accent)]"
          )}
        />
      )}
      {children}
    </span>
  );
}
