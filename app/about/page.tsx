import React from "react";
import NextLink from "next/link";
import { ArrowUpRight, Compass, Sparkles, Code2, Layers } from "lucide-react";
import { Container } from "@/components/ui/Container";

export const metadata = {
  title: "About // YASIN OS",
  description: "15 years of branding experience combining design, AI, and code to create products and enduring experiences.",
};

const timelineEvents = [
  {
    period: "2025 — PRESENT",
    title: "The Indie Vibe-Coding Era",
    subtitle: "Creative Technologist & AI Explorer",
    description: "Combining 15 years of brand identity authority with autonomous agentic AI models, TypeScript, and rapid product development. Building YASIN OS and shipping micro tools in days.",
  },
  {
    period: "2020 — 2024",
    title: "Global Brand Architecture",
    subtitle: "Lead Identity Designer",
    description: "Architected comprehensive design systems, dynamic identities, and venture branding for technology firms across Tokyo, Zurich, and Singapore.",
  },
  {
    period: "2016 — 2020",
    title: "Design Systems & Product Interfaces",
    subtitle: "Senior Product & Brand Designer",
    description: "Extended beyond traditional corporate identity into user experience architecture, spatial design tokens, and interaction design for venture-backed products.",
  },
  {
    period: "2013 — 2015",
    title: "Mastering Swiss Typography & Logo Craft",
    subtitle: "Brand & Trademark Designer",
    description: "Rigorous groundwork in classical typography, bespoke logo craft, geometric grid construction, and tactile luxury print collateral.",
  },
];

const whatIDo = [
  {
    number: "01",
    title: "Brand Architecture & Identity",
    description: "Enduring symbols, bespoke wordmarks, and modular guidelines designed to outlast short-lived trends.",
    icon: Compass,
  },
  {
    number: "02",
    title: "AI Workflows & Prompt Systems",
    description: "Building custom multimodal pipelines, prompt synthesis engines, and agentic workflows for creative acceleration.",
    icon: Sparkles,
  },
  {
    number: "03",
    title: "Indie Vibe-Coding",
    description: "Turning napkin ideas into working production web software in a weekend using Next.js 16 and TypeScript.",
    icon: Code2,
  },
  {
    number: "04",
    title: "Product Interfaces & Systems",
    description: "Designing zero-to-one developer tools and spatial interaction models with razor-sharp 1px geometry.",
    icon: Layers,
  },
];

const operatingPrinciples = [
  {
    number: "01",
    title: "Restraint Over Noise",
    text: "A mark should do one thing with absolute conviction, rather than whisper five competing compromises.",
  },
  {
    number: "02",
    title: "Typography as Infrastructure",
    text: "Before illustration, 3D decoration, or motion, typography must solve the fundamental human communication problem.",
  },
  {
    number: "03",
    title: "Taste is the Only Moat",
    text: "When AI makes software generation instantaneous, optical judgment, taste, and restraint become the scarce differentiators.",
  },
  {
    number: "04",
    title: "Digital Honesty",
    text: "No fake glassy skeuomorphism. Clean geometry, tactile state changes, and honest digital materials designed for clarity.",
  },
];

export default function AboutPage() {
  return (
    <div className="w-full bg-[var(--os-pink)] text-[var(--os-ink)] min-h-screen pt-20 md:pt-28 pb-24 transition-colors duration-300">
      <Container>
        {/* Editorial Header Statement */}
        <div className="pb-10 mb-12 border-b border-[var(--os-ink)]/20">
          <div className="flex items-center gap-2 mb-3">
            <span className="w-2.5 h-2.5 rounded-full bg-[var(--os-ink)]" />
            <span className="font-sans text-xs font-semibold uppercase tracking-wider text-[var(--os-ink)]/70">
              ROOM 03 // ABOUT
            </span>
          </div>

          <h1 className="font-serif text-5xl sm:text-7xl md:text-8xl lg:text-9xl tracking-tight text-[var(--os-ink)] leading-[0.92]">
            15 Years of Craft.
            <br />
            <span className="italic font-normal">Now Building with AI.</span>
          </h1>

          <p className="mt-8 font-sans text-base sm:text-lg md:text-xl text-[var(--os-ink)]/90 max-w-2xl leading-relaxed">
            I spent 15 years obsessing over letterforms, logo systems, and visual identity. Today, I combine that design authority with code and autonomous AI models to build products.
          </p>
        </div>

        {/* Giant Key Metrics Row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 mb-16">
          <div className="p-6 rounded-[24px] border border-[var(--os-ink)] bg-white shadow-xs">
            <div className="font-serif text-5xl sm:text-6xl text-[var(--os-ink)] leading-none">
              15+
            </div>
            <div className="font-sans text-xs font-semibold uppercase tracking-wider text-[var(--os-ink)]/70 mt-2">
              Years of Brand Craft
            </div>
          </div>

          <div className="p-6 rounded-[24px] border border-[var(--os-ink)] bg-white shadow-xs">
            <div className="font-serif text-5xl sm:text-6xl text-[var(--os-ink)] leading-none">
              10K+
            </div>
            <div className="font-sans text-xs font-semibold uppercase tracking-wider text-[var(--os-ink)]/70 mt-2">
              Concepts &amp; Trademarks
            </div>
          </div>

          <div className="p-6 rounded-[24px] border border-[var(--os-ink)] bg-white shadow-xs">
            <div className="font-serif text-5xl sm:text-6xl text-[var(--os-ink)] leading-none">
              100%
            </div>
            <div className="font-sans text-xs font-semibold uppercase tracking-wider text-[var(--os-ink)]/70 mt-2">
              Indie Independence
            </div>
          </div>

          <div className="p-6 rounded-[24px] border border-[var(--os-ink)] bg-white shadow-xs">
            <div className="font-serif text-5xl sm:text-6xl text-[var(--os-ink)] leading-none">
              ∞
            </div>
            <div className="font-sans text-xs font-semibold uppercase tracking-wider text-[var(--os-ink)]/70 mt-2">
              Vibe-Coded Ideas
            </div>
          </div>
        </div>

        {/* Editorial Timeline (2013 to Present) */}
        <div className="mb-20">
          <div className="flex items-center justify-between mb-8 pb-4 border-b border-[var(--os-ink)]/20">
            <h2 className="font-serif text-3xl sm:text-4xl text-[var(--os-ink)]">
              Chronological Arc
            </h2>
            <span className="font-sans text-xs font-semibold text-[var(--os-ink)]/60">
              2013 — 2026
            </span>
          </div>

          <div className="relative pl-6 sm:pl-8 border-l border-[var(--os-ink)] space-y-10">
            {timelineEvents.map((evt) => (
              <div key={evt.period} className="relative group">
                {/* Circular Black Marker on Timeline */}
                <span className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-3.5 h-3.5 rounded-full border border-[var(--os-ink)] bg-white group-hover:bg-[var(--os-ink)] transition-colors" />

                <div className="p-6 rounded-[24px] border border-[var(--os-ink)] bg-white shadow-xs transition-transform duration-200 group-hover:-translate-y-0.5">
                  <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 mb-2">
                    <span className="font-sans text-xs font-bold uppercase tracking-wider text-[var(--os-ink)]/60">
                      {evt.period}
                    </span>
                    <span className="font-sans text-xs font-semibold text-[var(--os-ink)]/80">
                      {evt.subtitle}
                    </span>
                  </div>
                  <h3 className="font-serif text-2xl sm:text-3xl text-[var(--os-ink)]">
                    {evt.title}
                  </h3>
                  <p className="font-sans text-xs sm:text-sm text-[var(--os-ink)]/80 mt-2.5 leading-relaxed">
                    {evt.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* What I Do (Core Competencies) */}
        <div className="mb-20">
          <h2 className="font-serif text-3xl sm:text-4xl text-[var(--os-ink)] mb-8 pb-4 border-b border-[var(--os-ink)]/20">
            Disciplines &amp; Focus
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {whatIDo.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.number}
                  className="p-6 md:p-8 rounded-[24px] border border-[var(--os-ink)] bg-white shadow-xs flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span className="font-sans text-xs font-bold text-[var(--os-ink)]/60">
                        /{item.number}
                      </span>
                      <Icon className="w-5 h-5 text-[var(--os-ink)]" />
                    </div>
                    <h3 className="font-serif text-2xl sm:text-3xl text-[var(--os-ink)]">
                      {item.title}
                    </h3>
                    <p className="font-sans text-xs sm:text-sm text-[var(--os-ink)]/80 mt-2.5 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Operating Principles */}
        <div className="mb-16">
          <h2 className="font-serif text-3xl sm:text-4xl text-[var(--os-ink)] mb-8 pb-4 border-b border-[var(--os-ink)]/20">
            How I Think
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {operatingPrinciples.map((principle) => (
              <div
                key={principle.number}
                className="p-6 rounded-[24px] border border-[var(--os-ink)] bg-white shadow-xs"
              >
                <span className="font-sans text-xs font-bold text-[var(--os-ink)]/50 block mb-2">
                  PRINCIPLE // 0{principle.number}
                </span>
                <h3 className="font-serif text-xl sm:text-2xl text-[var(--os-ink)]">
                  {principle.title}
                </h3>
                <p className="font-sans text-xs sm:text-sm text-[var(--os-ink)]/80 mt-2 leading-relaxed">
                  {principle.text}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Contact CTA */}
        <div className="p-8 sm:p-12 rounded-[32px] border border-[var(--os-ink)] bg-[var(--os-cream)] text-center">
          <h3 className="font-serif text-3xl sm:text-5xl text-[var(--os-ink)]">
            Ready to collaborate?
          </h3>
          <p className="font-sans text-sm md:text-base text-[var(--os-ink)]/80 mt-3 max-w-md mx-auto">
            Available for brand identities, design systems, and creative technology advisory.
          </p>
          <div className="mt-6">
            <NextLink
              href="/contact"
              className="btn-pill px-6 py-3 font-sans text-xs sm:text-sm font-semibold tracking-wide uppercase inline-flex items-center gap-2 shadow-xs"
            >
              <span>START A CONVERSATION</span>
              <ArrowUpRight className="w-4 h-4" />
            </NextLink>
          </div>
        </div>
      </Container>
    </div>
  );
}
