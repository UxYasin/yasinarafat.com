"use client";

import React, { useState } from "react";
import NextLink from "next/link";
import { ArrowUpRight, ArrowDown, Terminal, Sparkles, SlidersHorizontal, Cpu, Eye, Compass, Code2 } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Label } from "@/components/ui/Label";
import { MagneticButton } from "@/components/animations/MagneticButton";
import { cn } from "@/lib/utils";

interface DisciplineData {
  id: string;
  name: string;
  number: string;
  description: string;
  icon: React.ElementType;
  meta: string;
}

const disciplines: DisciplineData[] = [
  {
    id: "design",
    name: "DESIGN",
    number: "01",
    description: "Obsessive typographic hierarchy, proportional grids, optical balancing, and zero-compromise editorial layout.",
    icon: Eye,
    meta: "15 YEARS // SWISS DISCIPLINE",
  },
  {
    id: "branding",
    name: "BRANDING",
    number: "02",
    description: "Enduring corporate marks, visual identity systems, and brand architecture crafted for founders and institutions.",
    icon: Compass,
    meta: "10,000+ CONCEPTS EXPLORED",
  },
  {
    id: "ai",
    name: "AI",
    number: "03",
    description: "Autonomous agentic workflows, prompt-driven engineering, and custom multimodal intelligence pipelines.",
    icon: Sparkles,
    meta: "FRONTIER MODEL WORKFLOWS",
  },
  {
    id: "code",
    name: "CODE",
    number: "04",
    description: "Vibe-coding interactive web systems, reactive architectures, and shader math from first principles.",
    icon: Code2,
    meta: "NEXT.JS 16 // TURBOPACK // TS",
  },
  {
    id: "products",
    name: "PRODUCTS",
    number: "05",
    description: "Zero-to-one digital micro-tools, spatial interface paradigms, and functional developer playgrounds.",
    icon: Cpu,
    meta: "TACTILE & UNCONVENTIONAL",
  },
];

export function Hero() {
  const [activeDiscipline, setActiveDiscipline] = useState<DisciplineData>(disciplines[0]);
  const [systemMode, setSystemMode] = useState<"EDITORIAL" | "TELEMETRY">("EDITORIAL");

  return (
    <section className="relative w-full border-b border-[var(--border-subtle)] bg-[var(--bg-primary)] pt-8 md:pt-16 pb-16 md:pb-24 overflow-hidden">
      {/* Background Micro Hairline Crosshairs */}
      <div className="absolute top-4 left-6 font-mono text-[10px] text-[var(--border-strong)] select-none pointer-events-none hidden sm:block">
        + 23°46&apos;N 90°23&apos;E // DHAKA
      </div>
      <div className="absolute top-4 right-6 font-mono text-[10px] text-[var(--border-strong)] select-none pointer-events-none hidden sm:block">
        YASIN_OS // KERNEL v2.6.4
      </div>

      <Container>
        {/* Top System Telemetry Bar */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-[var(--border-subtle)] mb-10 md:mb-14">
          <div className="flex items-center gap-3">
            <Label variant="status" dot>
              SYSTEM READY
            </Label>
            <span className="font-mono text-xs text-[var(--text-muted)]">
              ENV // YASIN OS v2.6
            </span>
          </div>

          <div className="flex items-center gap-4 sm:gap-6 font-mono text-xs text-[var(--text-secondary)]">
            <span className="hidden sm:inline">EST. 2011</span>
            <span>15 YEARS ACTIVE</span>
            
            {/* Interactive System Mode Toggle */}
            <button
              type="button"
              onClick={() => setSystemMode(systemMode === "EDITORIAL" ? "TELEMETRY" : "EDITORIAL")}
              className="min-h-[44px] inline-flex items-center gap-1.5 px-3 py-1.5 border border-[var(--border-subtle)] bg-[var(--surface-card)] hover:border-[var(--accent)] hover:text-[var(--accent)] focus-visible:outline-2 focus-visible:outline-[var(--accent)] transition-all cursor-pointer"
              title="Toggle Hero System Mode"
            >
              <SlidersHorizontal className="w-3.5 h-3.5 text-[var(--accent)]" />
              <span className="text-[11px] font-semibold">MODE: {systemMode}</span>
            </button>
          </div>
        </div>

        {/* Hero Main Typography Presentation */}
        <div className="max-w-6xl">
          {/* Subtitle Badge */}
          <div className="mb-6">
            <span className="inline-block font-mono text-xs md:text-sm tracking-widest uppercase text-[var(--accent)] font-semibold border-b border-[var(--accent)] pb-0.5">
              [ BRAND DESIGNER × INDIE VIBE-CODER × AI EXPLORER ]
            </span>
          </div>

          {/* Oversized Headline Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-12">
            <div className="lg:col-span-8">
              <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-black tracking-tighter uppercase font-sans text-[var(--text-primary)] leading-[0.9] select-none break-words">
                15 YEARS
                <br />
                <span className="text-[var(--text-muted)]">OF MAKING</span>
                <br />
                THINGS.
              </h1>
            </div>

            {/* Secondary Typography Block */}
            <div className="lg:col-span-4 lg:pt-3 flex flex-col justify-between h-full space-y-6">
              <div className="border-l-2 border-[var(--text-primary)] pl-5">
                <p className="font-sans text-2xl sm:text-3xl font-extrabold tracking-tight text-[var(--text-primary)] leading-tight uppercase">
                  Now I design,
                  <br />
                  build &amp; experiment
                  <br />
                  <span className="text-[var(--accent)]">with AI.</span>
                </p>
              </div>

              <p className="text-sm sm:text-base text-[var(--text-secondary)] leading-relaxed font-normal">
                Bridging fifteen years of tactile brand craftsmanship with autonomous vibe-coding, experimental interfaces, and frontier AI tools.
              </p>

              {/* CTAs */}
              <div className="flex flex-wrap items-center gap-3 pt-2">
                <MagneticButton>
                  <NextLink href="/work">
                    <Button
                      variant="primary"
                      size="md"
                      icon={<ArrowUpRight className="w-4 h-4" />}
                    >
                      SELECTED WORK
                    </Button>
                  </NextLink>
                </MagneticButton>

                <MagneticButton>
                  <NextLink href="/lab">
                    <Button
                      variant="secondary"
                      size="md"
                      icon={<Terminal className="w-4 h-4 text-[var(--accent)]" />}
                    >
                      THE LAB
                    </Button>
                  </NextLink>
                </MagneticButton>
              </div>
            </div>
          </div>

          {/* Interactive Core Disciplines Matrix */}
          <div className="border border-[var(--border-subtle)] bg-[var(--surface-card)] mt-8">
            <div className="flex items-center justify-between p-3 border-b border-[var(--border-subtle)] bg-[var(--bg-secondary)]/50">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[var(--accent)] animate-pulse" />
                <span className="font-mono text-[11px] uppercase tracking-wider text-[var(--text-secondary)] font-medium">
                  CORE DISCIPLINES // HOVER TO INSPECT PHILOSOPHY
                </span>
              </div>
              <span className="font-mono text-[10px] text-[var(--text-muted)] hidden sm:inline">
                STATUS: {activeDiscipline.name} ACTIVE
              </span>
            </div>

            {/* Disciplines Selector */}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 divide-x divide-y md:divide-y-0 divide-[var(--border-subtle)]">
              {disciplines.map((item) => {
                const isActive = activeDiscipline.id === item.id;
                const Icon = item.icon;

                return (
                  <button
                    key={item.id}
                    type="button"
                    onMouseEnter={() => setActiveDiscipline(item)}
                    onClick={() => setActiveDiscipline(item)}
                    className={cn(
                      "p-4 text-left transition-all duration-150 cursor-pointer flex flex-col justify-between min-h-[96px] focus-visible:outline-2 focus-visible:outline-[var(--accent)] focus-visible:outline-offset-[-2px]",
                      isActive
                        ? "bg-[var(--text-primary)] text-[var(--bg-primary)]"
                        : "bg-[var(--surface-card)] text-[var(--text-primary)] hover:bg-[var(--bg-secondary)]"
                    )}
                  >
                    <div className="flex items-center justify-between w-full">
                      <span className={cn(
                        "font-mono text-xs",
                        isActive ? "text-[var(--bg-secondary)]" : "text-[var(--text-muted)]"
                      )}>
                        /{item.number}
                      </span>
                      <Icon className={cn(
                        "w-4 h-4",
                        isActive ? "text-[var(--accent)]" : "text-[var(--text-muted)]"
                      )} />
                    </div>

                    <div className="mt-4">
                      <span className="font-sans text-sm md:text-base font-extrabold tracking-tight uppercase block">
                        {item.name}
                      </span>
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Active Discipline Readout Console */}
            <div className="p-4 sm:p-5 bg-[var(--bg-secondary)]/70 border-t border-[var(--border-subtle)] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="flex items-start sm:items-center gap-3">
                <span className="font-mono text-xs px-2 py-0.5 bg-[var(--accent)] text-white font-semibold">
                  {activeDiscipline.name}
                </span>
                <p className="text-xs sm:text-sm text-[var(--text-secondary)] font-normal leading-relaxed">
                  {activeDiscipline.description}
                </p>
              </div>

              <div className="font-mono text-[11px] text-[var(--text-muted)] tracking-wider whitespace-nowrap self-end sm:self-center">
                {activeDiscipline.meta}
              </div>
            </div>
          </div>

          {/* Telemetry Matrix Expansion (When Mode is Active) */}
          {systemMode === "TELEMETRY" && (
            <div className="mt-4 p-4 border border-[var(--accent)] bg-[var(--surface-card)] font-mono text-xs text-[var(--text-secondary)] grid grid-cols-2 md:grid-cols-4 gap-4 animate-in fade-in duration-200">
              <div>
                <span className="text-[var(--text-muted)] block text-[10px]">TIMEZONE COORDINATE:</span>
                <span className="text-[var(--text-primary)] font-bold">UTC+6 // ASIA/DHAKA</span>
              </div>
              <div>
                <span className="text-[var(--text-muted)] block text-[10px]">RUNTIME STACK:</span>
                <span className="text-[var(--text-primary)] font-bold">NEXT.JS 16 APP ROUTER</span>
              </div>
              <div>
                <span className="text-[var(--text-muted)] block text-[10px]">DESIGN PHILOSOPHY:</span>
                <span className="text-[var(--text-primary)] font-bold">FLAT AUSTERE EDITORIAL</span>
              </div>
              <div>
                <span className="text-[var(--text-muted)] block text-[10px]">ACCENT FREQUENCY:</span>
                <span className="text-[var(--accent)] font-bold">#0047FF COBALT BLUE</span>
              </div>
            </div>
          )}

          {/* Minimalist Tactile Scroll Indicator */}
          <div className="pt-12 md:pt-16 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[var(--text-primary)]" />
              <span className="font-mono text-xs text-[var(--text-muted)] uppercase tracking-wider">
                YASIN OS // ARCHIVE EXPLORER
              </span>
            </div>

            <NextLink
              href="#selected-work"
              className="min-h-[44px] inline-flex items-center gap-2 px-2 py-2 font-mono text-xs uppercase tracking-widest text-[var(--text-secondary)] hover:text-[var(--accent)] transition-colors group focus-visible:outline-2 focus-visible:outline-[var(--accent)]"
            >
              <span>SCROLL TO EXPLORE</span>
              <ArrowDown className="w-3.5 h-3.5 animate-bounce group-hover:text-[var(--accent)]" />
            </NextLink>
          </div>
        </div>
      </Container>
    </section>
  );
}
