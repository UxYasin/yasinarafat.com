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
      className="border-t border-[var(--border-subtle)] bg-[var(--bg-primary)] pt-16 pb-12 transition-colors duration-200"
    >
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
        {/* Top Tier: Huge Typographic Statement */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pb-12 border-b border-[var(--border-subtle)]">
          <div className="lg:col-span-7">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tighter uppercase font-sans text-[var(--text-primary)] leading-tight">
              DESIGN × BRANDING
              <br />
              <span className="text-[var(--accent)]">AI × CODE</span> × PRODUCTS
            </h2>
            <p className="mt-4 text-sm md:text-base text-[var(--text-secondary)] max-w-xl leading-relaxed">
              {siteConfig.bio}
            </p>
          </div>

          <div className="lg:col-span-5 flex flex-col justify-between">
            <div className="grid grid-cols-2 gap-6">
              <div>
                <span className="font-mono text-[10px] tracking-widest uppercase text-[var(--text-muted)] block mb-3">
                  INDEX
                </span>
                <ul className="space-y-1 font-mono text-xs">
                  {navItems.map((item) => (
                    <li key={item.href}>
                      <NextLink
                        href={item.href}
                        data-cursor="link"
                        className="min-h-[36px] flex items-center text-[var(--text-secondary)] hover:text-[var(--accent)] transition-colors focus-visible:outline-2 focus-visible:outline-[var(--accent)]"
                      >
                        /{item.number} {item.label}
                      </NextLink>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <span className="font-mono text-[10px] tracking-widest uppercase text-[var(--text-muted)] block mb-3">
                  CONNECT
                </span>
                <ul className="space-y-1 font-mono text-xs">
                  {siteConfig.socials.map((soc) => (
                    <li key={soc.name}>
                      <a
                        href={soc.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        data-cursor="link"
                        className="min-h-[36px] flex items-center text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors focus-visible:outline-2 focus-visible:outline-[var(--accent)]"
                      >
                        {soc.name} ↗
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="mt-8 pt-4 border-t border-[var(--border-subtle)] flex items-center justify-between">
              <span className="font-mono text-xs text-[var(--text-muted)]">
                DHAKA, BD // UTC+6
              </span>
              <button
                type="button"
                onClick={scrollToTop}
                data-cursor="button"
                aria-label="Scroll back to top"
                className="min-h-[44px] inline-flex items-center gap-1.5 px-3 py-1 font-mono text-xs uppercase tracking-wider text-[var(--text-primary)] hover:text-[var(--accent)] transition-colors cursor-pointer focus-visible:outline-2 focus-visible:outline-[var(--accent)]"
              >
                <span>TOP</span>
                <ArrowUp className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Tier: Copyright, System Version, Editorial note */}
        <div className="pt-8 flex flex-col sm:flex-row items-baseline justify-between gap-4 font-mono text-[11px] text-[var(--text-muted)]">
          <div className="flex items-center gap-3">
            <span className="font-bold text-[var(--text-primary)]">YASIN ARAFAT</span>
            <span>© {currentYear} ALL RIGHTS RESERVED</span>
          </div>

          <div className="flex items-center gap-4">
            <span>NO TEMPLATES // CRAFTED WITH PRIDE</span>
            <span className="text-[var(--accent)] font-semibold">YASIN OS 2.6</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
