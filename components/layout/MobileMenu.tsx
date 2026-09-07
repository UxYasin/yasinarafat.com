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
          className="fixed inset-0 z-50 bg-[var(--os-lilac)] text-[var(--os-ink)] flex flex-col justify-between p-6 sm:p-8 md:hidden overflow-y-auto"
        >
          {/* Header row in mobile menu */}
          <div className="flex items-center justify-between border-b border-[var(--os-ink)] pb-4">
            <div className="w-10 h-10 rounded-full bg-[var(--os-ink)] text-white border border-[var(--os-ink)] flex items-center justify-center font-sans font-bold text-xs">
              <span>Yasin*</span>
            </div>
            <button
              type="button"
              onClick={onClose}
              aria-label="Close navigation"
              className="min-w-[44px] min-h-[44px] rounded-full flex items-center justify-center p-2 border border-[var(--os-ink)] bg-white text-[var(--os-ink)] hover:bg-[var(--os-ink)] hover:text-white transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Main Navigation Links in Instrument Serif */}
          <nav className="my-auto py-8 flex flex-col gap-3">
            {navItems.map((item, index) => {
              const isActive =
                item.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(item.href);

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
                      "flex items-center justify-between py-3 px-2 rounded-2xl border border-transparent hover:border-[var(--os-ink)] hover:bg-white/60 transition-all duration-200 group",
                      isActive ? "bg-white border-[var(--os-ink)]" : ""
                    )}
                  >
                    <div className="flex items-baseline gap-4">
                      <span className="font-sans text-xs text-[var(--os-ink)]/60 font-semibold">
                        0{index + 1}
                      </span>
                      <span className="font-serif text-4xl sm:text-5xl tracking-tight text-[var(--os-ink)]">
                        {item.label}
                      </span>
                    </div>
                    <div className="w-10 h-10 rounded-full border border-[var(--os-ink)] bg-[var(--os-ink)] text-white flex items-center justify-center transition-transform duration-200 group-hover:scale-105">
                      <ArrowUpRight className="w-5 h-5" />
                    </div>
                  </NextLink>
                </motion.div>
              );
            })}
          </nav>

          {/* Bottom Telemetry & Socials */}
          <div className="border-t border-[var(--os-ink)] pt-5 space-y-3">
            <div className="flex items-center justify-between text-xs font-sans text-[var(--os-ink)]/70">
              <span className="font-medium">✦ DHAKA, BANGLADESH</span>
              <span className="font-mono">{currentTime || "UTC+6"}</span>
            </div>
            <div className="flex flex-wrap gap-2">
              {siteConfig.socials.slice(0, 3).map((soc) => (
                <a
                  key={soc.name}
                  href={soc.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-1.5 rounded-full border border-[var(--os-ink)] bg-white text-xs font-sans font-medium text-[var(--os-ink)] hover:bg-[var(--os-ink)] hover:text-white transition-colors"
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
