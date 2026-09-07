"use client";

import React, { useEffect } from "react";
import NextLink from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence, useReducedMotion } from "motion/react";
import { ArrowUpRight, X } from "lucide-react";
import { navItems, siteConfig } from "@/data/siteConfig";
import { cn } from "@/lib/utils";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  currentTime?: string;
}

export function MobileMenu({ isOpen, onClose, currentTime }: MobileMenuProps) {
  const pathname = usePathname();
  const shouldReduceMotion = useReducedMotion();

  // Prevent background scrolling when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          role="dialog"
          aria-modal="true"
          aria-label="Mobile Navigation Menu"
          initial={{ opacity: 0, y: shouldReduceMotion ? 0 : -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: shouldReduceMotion ? 0 : -10 }}
          transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
          className="fixed inset-0 z-50 bg-[var(--bg-primary)] flex flex-col justify-between p-6 sm:p-8 md:hidden overflow-y-auto"
        >
          {/* Header row in mobile menu */}
          <div className="flex items-center justify-between border-b border-[var(--border-subtle)] pb-4">
            <div className="flex items-center gap-2">
              <span className="text-xl font-extrabold tracking-tighter uppercase font-sans">
                YASIN
              </span>
              <span className="font-mono text-[10px] tracking-widest text-[var(--accent)] border border-[var(--border-subtle)] px-1.5 py-0.5">
                OS MENU
              </span>
            </div>
            <button
              type="button"
              onClick={onClose}
              aria-label="Close navigation"
              className="min-w-[44px] min-h-[44px] flex items-center justify-center p-2 border border-[var(--border-subtle)] text-[var(--text-primary)] hover:border-[var(--text-primary)] focus-visible:outline-2 focus-visible:outline-[var(--accent)] cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Main Navigation Links */}
          <nav className="my-auto py-8 flex flex-col gap-4">
            {navItems.map((item, index) => {
              const isActive =
                pathname === item.href ||
                (item.href !== "/" && pathname.startsWith(item.href));

              return (
                <motion.div
                  key={item.href}
                  initial={shouldReduceMotion ? {} : { opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.05 + index * 0.05, duration: 0.3 }}
                >
                  <NextLink
                    href={item.href}
                    onClick={onClose}
                    className={cn(
                      "flex items-baseline justify-between py-3 border-b border-[var(--border-subtle)] group",
                      isActive ? "text-[var(--accent)]" : "text-[var(--text-primary)]"
                    )}
                  >
                    <div className="flex items-baseline gap-4">
                      <span className="font-mono text-xs text-[var(--text-muted)]">
                        /{item.number}
                      </span>
                      <span className="text-3xl font-extrabold tracking-tight uppercase group-hover:translate-x-2 transition-transform duration-200">
                        {item.label}
                      </span>
                    </div>
                    <ArrowUpRight className="w-6 h-6 text-[var(--text-muted)] group-hover:text-[var(--accent)] group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
                  </NextLink>
                </motion.div>
              );
            })}
          </nav>

          {/* Bottom Telemetry & Socials */}
          <div className="border-t border-[var(--border-subtle)] pt-6 space-y-4">
            <div className="flex items-center justify-between text-xs font-mono text-[var(--text-muted)]">
              <span>LOCATION: DHAKA, BD</span>
              <span>{currentTime || "UTC+6"}</span>
            </div>
            <div className="flex flex-wrap gap-2 text-xs font-mono">
              {siteConfig.socials.slice(0, 3).map((soc) => (
                <a
                  key={soc.name}
                  href={soc.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="min-h-[44px] inline-flex items-center px-2 text-[var(--text-secondary)] hover:text-[var(--accent)] underline focus-visible:outline-2 focus-visible:outline-[var(--accent)]"
                >
                  {soc.name}
                </a>
              ))}
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
