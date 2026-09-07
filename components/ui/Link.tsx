"use client";

import React from "react";
import NextLink, { LinkProps as NextLinkProps } from "next/link";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface CustomLinkProps extends NextLinkProps {
  children: React.ReactNode;
  className?: string;
  variant?: "underline" | "nav" | "arrow" | "pill";
  external?: boolean;
}

export function Link({
  children,
  className,
  variant = "underline",
  external = false,
  href,
  ...props
}: CustomLinkProps) {
  const isExternal = external || (typeof href === "string" && href.startsWith("http"));

  const variantStyles = {
    underline:
      "relative inline-flex items-center text-[var(--text-primary)] hover:text-[var(--accent)] transition-colors duration-200 group after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-[var(--accent)] hover:after:w-full after:transition-all after:duration-300",
    nav:
      "font-mono text-xs tracking-widest uppercase text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors duration-150 py-1",
    arrow:
      "inline-flex items-center gap-1 font-mono text-xs tracking-wider uppercase text-[var(--text-primary)] hover:text-[var(--accent)] transition-colors duration-200 group",
    pill:
      "inline-flex items-center gap-1.5 px-3 py-1 font-mono text-xs uppercase tracking-wider border border-[var(--border-subtle)] bg-[var(--bg-secondary)] hover:border-[var(--text-primary)] transition-colors duration-200",
  };

  const linkProps = isExternal
    ? { target: "_blank", rel: "noopener noreferrer" }
    : {};

  return (
    <NextLink
      href={href}
      data-cursor="link"
      className={cn(variantStyles[variant], className)}
      {...linkProps}
      {...props}
    >
      <span>{children}</span>
      {variant === "arrow" && (
        <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-[var(--accent)]" />
      )}
    </NextLink>
  );
}
