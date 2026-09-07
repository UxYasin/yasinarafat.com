"use client";

import React from "react";
import NextLink from "next/link";
import { ArrowUp } from "lucide-react";
import { siteConfig, navItems } from "@/data/siteConfig";

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer
      role="contentinfo"
      className="border-t border-[var(--os-ink)] bg-[var(--os-cream)] text-[var(--os-ink)] pt-16 pb-12 transition-colors duration-200"
    >
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
        {/* Top Tier: Huge Instrument Serif Statement */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pb-12 border-b border-[var(--os-ink)]/20">
          <div className="lg:col-span-7">
            <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl tracking-tight text-[var(--os-ink)] leading-[0.98]">
              Design × Branding
              <br />
              <span className="italic">AI × Code × Products</span>
            </h2>
            <p className="mt-4 font-sans text-sm md:text-base text-[var(--os-ink)]/80 max-w-xl leading-relaxed">
              {siteConfig.bio}
            </p>
          </div>

          <div className="lg:col-span-5 flex flex-col justify-between">
            <div className="grid grid-cols-2 gap-6">
              <div>
                <span className="font-sans text-[11px] font-bold tracking-wider uppercase text-[var(--os-ink)]/60 block mb-3">
                  DIRECTORY
                </span>
                <ul className="space-y-1.5 font-sans text-xs">
                  {navItems.map((item) => (
                    <li key={item.href}>
                      <NextLink
                        href={item.href}
                        data-cursor="link"
                        className="min-h-[32px] flex items-center text-[var(--os-ink)]/80 hover:text-[var(--os-ink)] hover:underline font-medium"
                      >
                        {item.label}
                      </NextLink>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <span className="font-sans text-[11px] font-bold tracking-wider uppercase text-[var(--os-ink)]/60 block mb-3">
                  NETWORK
                </span>
                <ul className="space-y-1.5 font-sans text-xs">
                  {siteConfig.socials.map((soc) => (
                    <li key={soc.name}>
                      <a
                        href={soc.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        data-cursor="link"
                        className="min-h-[32px] flex items-center text-[var(--os-ink)]/80 hover:text-[var(--os-ink)] hover:underline font-medium"
                      >
                        {soc.name} ↗
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="mt-8 pt-4 border-t border-[var(--os-ink)]/20 flex items-center justify-between">
              <span className="font-sans text-xs text-[var(--os-ink)]/60 font-medium">
                ✦ DHAKA // UTC+6
              </span>
              <button
                type="button"
                onClick={scrollToTop}
                data-cursor="button"
                aria-label="Scroll back to top"
                className="w-10 h-10 rounded-full border border-[var(--os-ink)] bg-white text-[var(--os-ink)] hover:bg-[var(--os-ink)] hover:text-white flex items-center justify-center transition-colors cursor-pointer"
              >
                <ArrowUp className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Tier: Copyright, System Version */}
        <div className="pt-8 flex flex-col sm:flex-row items-baseline justify-between gap-4 font-sans text-xs text-[var(--os-ink)]/70">
          <div className="flex items-center gap-3">
            <span className="font-bold text-[var(--os-ink)]">YASIN ARAFAT</span>
            <span>© {currentYear} ALL RIGHTS RESERVED</span>
          </div>

          <div className="flex items-center gap-3">
            <span>EDITORIAL × PLAYFUL × MINIMAL</span>
            <span className="px-2 py-0.5 rounded-full border border-[var(--os-ink)] bg-white font-bold text-[10px]">
              YASIN OS 2.6
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
