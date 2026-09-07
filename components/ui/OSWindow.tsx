"use client";

import React from "react";
import { cn } from "@/lib/utils";

export interface OSWindowProps extends React.HTMLAttributes<HTMLDivElement> {
  title?: string;
  subtitle?: string;
  headerRight?: React.ReactNode;
  showDots?: boolean;
  surface?: "cream" | "paper" | "lilac" | "mint" | "pink" | "butter" | "white";
  radius?: "md" | "lg" | "xl" | "2xl" | "3xl";
}

export function OSWindow({
  children,
  className,
  title,
  subtitle,
  headerRight,
  showDots = false,
  surface = "cream",
  radius = "2xl",
  ...props
}: OSWindowProps) {
  const surfaceStyles = {
    cream: "bg-[var(--os-cream)] text-[var(--os-ink)]",
    paper: "bg-[var(--os-paper)] text-[var(--os-ink)]",
    lilac: "bg-[var(--os-lilac)] text-[var(--os-ink)]",
    mint: "bg-[var(--os-mint)] text-[var(--os-ink)]",
    pink: "bg-[var(--os-pink)] text-[var(--os-ink)]",
    butter: "bg-[var(--os-butter)] text-[var(--os-ink)]",
    white: "bg-white text-[var(--os-ink)]",
  };

  const radiusStyles = {
    md: "rounded-[14px]",
    lg: "rounded-[20px]",
    xl: "rounded-[28px]",
    "2xl": "rounded-[32px]",
    "3xl": "rounded-[44px]",
  };

  return (
    <div
      className={cn(
        "border border-[var(--os-ink)] overflow-hidden transition-all duration-200",
        surfaceStyles[surface],
        radiusStyles[radius],
        className
      )}
      {...props}
    >
      {(title || showDots || headerRight) && (
        <div className="flex items-center justify-between px-5 py-3 border-b border-[var(--os-ink)]/20 bg-black/[0.02]">
          <div className="flex items-center gap-3">
            {showDots && (
              <div className="flex items-center gap-1.5" aria-hidden="true">
                <span className="w-2.5 h-2.5 rounded-full border border-[var(--os-ink)] bg-transparent inline-block" />
                <span className="w-2.5 h-2.5 rounded-full border border-[var(--os-ink)] bg-transparent inline-block" />
                <span className="w-2.5 h-2.5 rounded-full border border-[var(--os-ink)] bg-transparent inline-block" />
              </div>
            )}
            {title && (
              <div className="flex items-baseline gap-2">
                <span className="font-sans text-xs font-semibold tracking-wider uppercase">
                  {title}
                </span>
                {subtitle && (
                  <span className="font-sans text-[11px] text-[var(--os-ink)]/60">
                    {subtitle}
                  </span>
                )}
              </div>
            )}
          </div>
          {headerRight && <div>{headerRight}</div>}
        </div>
      )}
      <div>{children}</div>
    </div>
  );
}
