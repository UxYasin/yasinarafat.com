import React from "react";
import NextLink from "next/link";
import { ArrowUpRight, Compass, Sparkles, Code2, Layers, HeartHandshake } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Divider } from "@/components/ui/Divider";
import { Button } from "@/components/ui/Button";

export const metadata = {
  title: "About // YASIN OS",
  description: "15 years of branding experience combining design, AI, and code to create products and enduring experiences.",
};

const timelineEvents = [
  {
    period: "2025 — PRESENT",
    title: "The Indie Vibe-Coding Era",
    subtitle: "Solopreneur & Creative Technologist",
    description: "Combining 15 years of brand identity authority with autonomous agentic AI models, WebAssembly, and rapid micro SaaS development. Building YASIN OS and shipping experimental tools in days rather than quarters.",
  },
  {
    period: "2020 — 2024",
    title: "Global Brand Architecture & High-Value Identity",
    subtitle: "Lead Brand Strategist & Identity Designer",
    description: "Architected comprehensive design systems, dynamic identities, and institutional venture branding for technology firms across Tokyo, Zurich, and Singapore.",
  },
  {
    period: "2016 — 2020",
    title: "Design Systems & Digital Product Architecture",
    subtitle: "Senior Product & Brand Designer",
    description: "Extended beyond traditional corporate identity into user experience architecture, spatial design tokens, and interaction design for venture-backed digital products.",
  },
  {
    period: "2013 — 2015",
    title: "Mastering Swiss Typography & Logo Craft",
    subtitle: "Brand & Trademark Designer",
    description: "Rigorous groundwork in classical Swiss typography, bespoke logo craft, geometric grid construction, and tactile luxury print collateral.",
  },
];

const whatIDo = [
  {
    number: "01",
    title: "Brand Architecture & Identity",
    description: "Enduring symbols, bespoke wordmarks, and 80-page brand guidelines designed to outlast design trends.",
    icon: Compass,
  },
  {
    number: "02",
    title: "AI Workflows & Prompt Systems",
    description: "Building custom multimodal pipelines, prompt translators, and agentic workflows that turn generative models into precision design instruments.",
    icon: Sparkles,
  },
  {
    number: "03",
    title: "Indie Vibe-Coding",
    description: "Turning napkin ideas into working production web software in a weekend using Next.js 16, TypeScript, and Turbopack.",
    icon: Code2,
  },
  {
    number: "04",
    title: "Product & Spatial Interfaces",
    description: "Designing zero-to-one developer tools, spatial window managers, and local-first applications with razor-sharp 1px geometry.",
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
    text: "When AI makes software generation instantaneous, judgment, optical balance, and taste become the only scarce differentiators.",
  },
  {
    number: "04",
    title: "Flat Physics & Digital Honesty",
    text: "No fake glassy skeuomorphism. Clean geometry, instant state changes, and honest digital materials designed for speed.",
  },
];

const currentlyExploring = [
  {
    topic: "AI Agentic Workflows",
    detail: "Multi-agent coding environments that autonomously generate, lint, test, and deploy production software.",
  },
  {
    topic: "WebAssembly Vector Math",
    detail: "Running procedural bezier tangents and harmonic golden-ratio algorithms directly in the browser at 120 FPS.",
  },
  {
    topic: "Local-First Desktop Software",
    detail: "Building distraction-free offline utilities with Tauri, Rust, and encrypted local storage.",
  },
  {
    topic: "Spatial Design Systems",
    detail: "Re-imagining operating system windows as dimensional typographic planes without heavy blur artifacts.",
  },
];

const toolsMatrix = [
  {
    category: "BRAND & DESIGN",
    tools: ["Adobe Illustrator", "Figma", "Glyphs 3", "Pen & Dot-Grid Notebook"],
  },
  {
    category: "CODE & INFRASTRUCTURE",
    tools: ["Next.js 16", "TypeScript", "Tailwind CSS", "Turbopack", "Rust", "Vercel"],
  },
  {
    category: "AI & SYNTHESIS",
    tools: ["Antigravity", "Claude 3.7 Sonnet", "Gemini Pro", "Local Ollama LLMs"],
  },
  {
    category: "HARDWARE SETUP",
    tools: ["MacBook Pro M-Series", "Apple Studio Display", "Keychron Q1 Mechanical", "Sony MDR-7506"],
  },
];

export default function AboutPage() {
  return (
    <div className="w-full bg-[var(--bg-primary)]">
      {/* 1. INTRO // Editorial Header */}
      <Section spacing="md" className="border-b border-[var(--border-subtle)] pb-12">
        <Container>
          <div className="flex items-center gap-2 mb-3">
            <span className="w-2 h-2 bg-[var(--accent)]" />
            <span className="font-mono text-xs uppercase tracking-widest text-[var(--accent)] font-semibold">
              INDEX // 03 • EDITORIAL PROFILE
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tighter uppercase font-sans text-[var(--text-primary)] leading-[0.95] mb-6">
            ABOUT YASIN
          </h1>

          <p className="text-xl sm:text-2xl md:text-3xl text-[var(--text-secondary)] max-w-3xl font-normal leading-relaxed">
            A designer with 15 years of branding authority who is now combining design, AI, and code to build products and unconventional digital experiences.
          </p>
        </Container>
      </Section>

      {/* 2. Key Metrics Banner */}
      <div className="border-b border-[var(--border-subtle)] bg-[var(--bg-secondary)]/40 py-8">
        <Container>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="p-4 border border-[var(--border-subtle)] bg-[var(--surface-card)]">
              <div className="text-4xl sm:text-5xl font-black font-sans text-[var(--text-primary)]">
                15+
              </div>
              <div className="font-mono text-xs text-[var(--text-muted)] uppercase tracking-wider mt-1">
                Years of Brand Craft
              </div>
            </div>

            <div className="p-4 border border-[var(--border-subtle)] bg-[var(--surface-card)]">
              <div className="text-4xl sm:text-5xl font-black font-sans text-[var(--accent)]">
                10K+
              </div>
              <div className="font-mono text-xs text-[var(--text-muted)] uppercase tracking-wider mt-1">
                Concepts &amp; Trademarks
              </div>
            </div>

            <div className="p-4 border border-[var(--border-subtle)] bg-[var(--surface-card)]">
              <div className="text-4xl sm:text-5xl font-black font-sans text-[var(--text-primary)]">
                100%
              </div>
              <div className="font-mono text-xs text-[var(--text-muted)] uppercase tracking-wider mt-1">
                Indie Discipline
              </div>
            </div>

            <div className="p-4 border border-[var(--border-subtle)] bg-[var(--surface-card)]">
              <div className="text-4xl sm:text-5xl font-black font-sans text-[var(--text-primary)]">
                ∞
              </div>
              <div className="font-mono text-xs text-[var(--text-muted)] uppercase tracking-wider mt-1">
                Vibe-Coded Curiosity
              </div>
            </div>
          </div>
        </Container>
      </div>

      {/* 3. WHAT I DO // Core Disciplines */}
      <Section spacing="lg">
        <Container>
          <div className="mb-10 pb-4 border-b border-[var(--border-subtle)]">
            <span className="font-mono text-xs uppercase tracking-widest text-[var(--accent)] font-semibold block mb-1">
              DISCIPLINES &amp; COMPETENCIES
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold uppercase tracking-tight text-[var(--text-primary)]">
              WHAT I DO
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {whatIDo.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.number}
                  className="p-6 md:p-8 border border-[var(--border-subtle)] bg-[var(--surface-card)] flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span className="font-mono text-xs text-[var(--accent)] font-bold">
                        /{item.number}
                      </span>
                      <Icon className="w-5 h-5 text-[var(--text-muted)]" />
                    </div>
                    <h3 className="text-xl font-bold uppercase tracking-tight text-[var(--text-primary)] mb-2">
                      {item.title}
                    </h3>
                    <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </Container>
      </Section>

      <Divider label="CAREER TIMELINE // EST. 2013" crosshairs />

      {/* 4. EXPERIENCE // Timeline */}
      <Section spacing="lg" className="bg-[var(--bg-secondary)]/30 border-y border-[var(--border-subtle)]">
        <Container>
          <div className="max-w-4xl mx-auto">
            <div className="mb-10">
              <span className="font-mono text-xs uppercase tracking-widest text-[var(--accent)] font-semibold block mb-1">
                THE JOURNEY
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold uppercase tracking-tight text-[var(--text-primary)]">
                EXPERIENCE
              </h2>
            </div>

            <div className="space-y-8 relative before:absolute before:inset-0 before:left-3 sm:before:left-32 before:w-px before:bg-[var(--border-subtle)]">
              {timelineEvents.map((event) => (
                <div key={event.period} className="relative flex flex-col sm:flex-row gap-4 sm:gap-8 items-start">
                  <div className="sm:w-32 flex-shrink-0 pt-0.5">
                    <span className="font-mono text-xs font-bold text-[var(--accent)] bg-[var(--bg-primary)] px-2 py-0.5 border border-[var(--border-subtle)] inline-block">
                      {event.period}
                    </span>
                  </div>

                  <div className="flex-1 p-6 border border-[var(--border-subtle)] bg-[var(--surface-card)]">
                    <h3 className="text-xl font-bold uppercase tracking-tight text-[var(--text-primary)]">
                      {event.title}
                    </h3>
                    <span className="font-mono text-xs text-[var(--text-muted)] block mt-1 mb-3">
                      {event.subtitle}
                    </span>
                    <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                      {event.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      {/* 5. HOW I THINK // Philosophy */}
      <Section spacing="lg">
        <Container>
          <div className="mb-10 pb-4 border-b border-[var(--border-subtle)]">
            <span className="font-mono text-xs uppercase tracking-widest text-[var(--accent)] font-semibold block mb-1">
              OPERATING PRINCIPLES
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold uppercase tracking-tight text-[var(--text-primary)]">
              HOW I THINK
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {operatingPrinciples.map((op) => (
              <div
                key={op.number}
                className="p-6 border border-[var(--border-subtle)] bg-[var(--surface-card)] flex flex-col justify-between"
              >
                <div>
                  <span className="font-mono text-xs text-[var(--accent)] font-bold block mb-3">
                    RULE /{op.number}
                  </span>
                  <h3 className="text-lg font-bold uppercase tracking-tight text-[var(--text-primary)] mb-2">
                    {op.title}
                  </h3>
                  <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                    {op.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      <Divider label="FRONTIER TECH &amp; TOOLKIT" crosshairs />

      {/* 6. CURRENTLY EXPLORING & TOOLS */}
      <Section spacing="lg" className="bg-[var(--bg-secondary)]/20 border-b border-[var(--border-subtle)]">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Left Column: Currently Exploring */}
            <div className="lg:col-span-6 space-y-6">
              <div>
                <span className="font-mono text-xs uppercase tracking-widest text-[var(--accent)] font-semibold block mb-1">
                  RESEARCH FOCUS
                </span>
                <h2 className="text-2xl sm:text-3xl font-extrabold uppercase tracking-tight text-[var(--text-primary)]">
                  CURRENTLY EXPLORING
                </h2>
              </div>

              <div className="space-y-4">
                {currentlyExploring.map((exp) => (
                  <div key={exp.topic} className="p-5 border border-[var(--border-subtle)] bg-[var(--surface-card)]">
                    <span className="font-mono text-xs font-bold text-[var(--text-primary)] block mb-1">
                      [+] {exp.topic}
                    </span>
                    <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                      {exp.detail}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column: Tools Matrix */}
            <div className="lg:col-span-6 space-y-6">
              <div>
                <span className="font-mono text-xs uppercase tracking-widest text-[var(--text-muted)] font-semibold block mb-1">
                  DAILY ARSENAL
                </span>
                <h2 className="text-2xl sm:text-3xl font-extrabold uppercase tracking-tight text-[var(--text-primary)]">
                  TOOLS &amp; GEAR
                </h2>
              </div>

              <div className="space-y-4">
                {toolsMatrix.map((matrix) => (
                  <div key={matrix.category} className="p-5 border border-[var(--border-subtle)] bg-[var(--surface-card)]">
                    <span className="font-mono text-[11px] text-[var(--text-muted)] uppercase tracking-wider block mb-2 font-semibold">
                      {matrix.category}
                    </span>
                    <div className="flex flex-wrap gap-2">
                      {matrix.tools.map((tool) => (
                        <span
                          key={tool}
                          className="font-mono text-xs px-2.5 py-1 bg-[var(--bg-secondary)] border border-[var(--border-subtle)] text-[var(--text-primary)]"
                        >
                          {tool}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* 7. PERSONAL NOTE */}
      <Section spacing="lg">
        <Container>
          <div className="max-w-3xl mx-auto p-8 md:p-12 border border-[var(--border-subtle)] bg-[var(--surface-card)]">
            <div className="flex items-center gap-2 mb-4">
              <HeartHandshake className="w-4 h-4 text-[var(--accent)]" />
              <span className="font-mono text-xs uppercase tracking-widest text-[var(--accent)] font-bold">
                A PERSONAL NOTE
              </span>
            </div>

            <h2 className="text-2xl sm:text-3xl font-extrabold uppercase tracking-tight text-[var(--text-primary)] mb-4">
              Why Craft Matters in the Age of Commodity
            </h2>

            <div className="space-y-4 text-sm sm:text-base text-[var(--text-secondary)] leading-relaxed font-normal">
              <p>
                When I started designing logos fifteen years ago, crafting a great brand took weeks of sketching on dot-grid paper, drawing vector tangents by hand, and obsessing over millimeter kerning in print shops.
              </p>
              <p>
                Today, artificial intelligence can generate a thousand synthetic images in three seconds. But generation is not creation. Software without taste is merely noise.
              </p>
              <p>
                I embrace AI and vibe-coding not to bypass the craft, but to amplify it. It gives one dedicated designer the building power of an entire agency. I still obsess over every point, every letterform, and every microsecond of animation—because in a world overflowing with disposable content, thoughtful craftsmanship is the only thing people truly remember.
              </p>
            </div>

            <div className="mt-8 pt-6 border-t border-[var(--border-subtle)] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <span className="font-mono text-xs font-bold text-[var(--text-primary)] block">
                  YASIN ARAFAT
                </span>
                <span className="font-mono text-xs text-[var(--text-muted)] block">
                  Dhaka, Bangladesh // UTC+6
                </span>
              </div>

              <NextLink href="/contact">
                <Button variant="primary" size="sm" icon={<ArrowUpRight className="w-3.5 h-3.5" />}>
                  GET IN TOUCH
                </Button>
              </NextLink>
            </div>
          </div>
        </Container>
      </Section>
    </div>
  );
}
