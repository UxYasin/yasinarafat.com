"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { ArrowDown, Sparkles, Code2, Eye, Compass } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { siteConfig } from "@/data/siteConfig";

interface DisciplineData {
  id: string;
  name: string;
  number: string;
  description: string;
  icon: React.ElementType;
}

const disciplines: DisciplineData[] = [
  {
    id: "branding",
    name: "Branding",
    number: "01",
    description: "Enduring corporate marks, visual identity systems, and brand architecture crafted for founders.",
    icon: Compass,
  },
  {
    id: "design",
    name: "Design",
    number: "02",
    description: "Obsessive typographic hierarchy, proportional grids, and zero-compromise editorial layout.",
    icon: Eye,
  },
  {
    id: "ai",
    name: "AI & Agents",
    number: "03",
    description: "Autonomous agentic workflows, prompt engineering, and multimodal creative exploration.",
    icon: Sparkles,
  },
  {
    id: "code",
    name: "Vibe Code",
    number: "04",
    description: "Building fast, tactile, and unconventional digital products with Next.js and TypeScript.",
    icon: Code2,
  },
];

export function Hero() {
  const [currentTime, setCurrentTime] = useState("");
  const [activeDiscipline, setActiveDiscipline] = useState<DisciplineData>(disciplines[0]);

  useEffect(() => {
    const updateTime = () => {
      try {
        const timeString = new Intl.DateTimeFormat("en-US", {
          timeZone: "Asia/Dhaka",
          hour: "2-digit",
          minute: "2-digit",
          hour12: false,
        }).format(new Date());
        setCurrentTime(`${timeString} DHK`);
      } catch {
        setCurrentTime("UTC+6");
      }
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative w-full bg-[var(--os-lilac)] text-[var(--os-ink)] pt-24 sm:pt-28 md:pt-36 pb-16 md:pb-24 overflow-hidden">
      <Container>
        {/* Top Micro-Status Bar */}
        <div className="flex items-center justify-between pb-6 sm:pb-8 border-b border-[var(--os-ink)]/20 mb-8 sm:mb-12">
          <div className="flex items-center gap-2 sm:gap-3">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-600 border border-[var(--os-ink)]" />
            <span className="font-sans text-xs font-semibold tracking-wider uppercase">
              AVAILABLE FOR WORK
            </span>
            <span className="hidden sm:inline font-sans text-xs text-[var(--os-ink)]/50">•</span>
            <span className="hidden sm:inline font-sans text-xs text-[var(--os-ink)]/70">
              Q2/Q3 2026
            </span>
          </div>

          <div className="flex items-center gap-3 text-xs font-sans text-[var(--os-ink)]/80">
            <span className="hidden md:inline font-medium">15 YEARS OF CRAFT</span>
            <span className="hidden md:inline text-[var(--os-ink)]/30">/</span>
            <span className="font-mono tabular-nums font-medium">{currentTime || "UTC+6"}</span>
          </div>
        </div>

        {/* Giant Asymmetric Instrument Serif Typography with Embedded Portrait */}
        <div className="relative select-none">
          <h1 className="font-serif text-[48px] sm:text-[76px] md:text-[104px] lg:text-[124px] xl:text-[142px] leading-[0.92] tracking-tight text-[var(--os-ink)] break-words">
            <span>Brand</span>
            <br />
            <span>Designer</span>

            {/* Nestled Portrait Frame with 'hello' Bubble */}
            <span className="inline-block relative align-middle mx-3 sm:mx-6 my-2 group">
              <span className="relative block w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 rounded-[22px] sm:rounded-[30px] border border-[var(--os-ink)] overflow-hidden bg-[#FBE7CF] shadow-xs transform group-hover:scale-105 transition-transform duration-300">
                <Image
                  src="/projects/aurora-hero.svg"
                  alt="Yasin Arafat creative workspace"
                  fill
                  priority
                  className="object-cover"
                />
              </span>
              {/* Cute speech bubble */}
              <span className="absolute -top-3 -right-3 z-10 px-2.5 py-0.5 rounded-full bg-[#B9E3D0] border border-[var(--os-ink)] font-sans text-[11px] font-bold text-[var(--os-ink)] shadow-xs">
                hello!
              </span>
            </span>

            <br />
            <span className="italic font-normal">&amp; Vibe Coder</span>
          </h1>

          {/* Editorial Philosophy Statement */}
          <div className="mt-8 sm:mt-12 max-w-xl">
            <p className="font-sans text-base sm:text-lg md:text-xl text-[var(--os-ink)]/90 leading-relaxed font-normal">
              15 years of shaping brand identities, marks, and design systems.
              Now building playful software &amp; autonomous agent experiments with code.
            </p>
          </div>
        </div>

        {/* Interactive Discipline Pills Matrix */}
        <div className="mt-10 sm:mt-14 pt-8 border-t border-[var(--os-ink)]/20 flex flex-wrap items-center gap-2 sm:gap-3">
          <span className="font-sans text-xs font-semibold uppercase tracking-wider text-[var(--os-ink)]/60 mr-2">
            PRACTICE:
          </span>
          {disciplines.map((d) => {
            const isCurrent = activeDiscipline.id === d.id;
            return (
              <button
                key={d.id}
                type="button"
                onClick={() => setActiveDiscipline(d)}
                className={`px-4 py-2 rounded-full border border-[var(--os-ink)] text-xs font-sans font-medium transition-all duration-200 cursor-pointer ${
                  isCurrent
                    ? "bg-[var(--os-ink)] text-white shadow-xs"
                    : "bg-white/80 text-[var(--os-ink)] hover:bg-white"
                }`}
              >
                {d.name}
              </button>
            );
          })}

          {/* Active Discipline Micro Detail */}
          <div className="w-full mt-3 p-3 rounded-2xl border border-[var(--os-ink)]/30 bg-white/50 text-xs font-sans text-[var(--os-ink)]/80 flex items-center justify-between">
            <span className="font-medium">{activeDiscipline.description}</span>
            <span className="font-sans font-bold text-[10px] text-[var(--os-ink)]/50 uppercase ml-2 shrink-0">
              SPEC #{activeDiscipline.number}
            </span>
          </div>
        </div>

        {/* Bottom Metadata & Social Row (Matches Reference Style) */}
        <div className="mt-12 sm:mt-16 pt-6 border-t border-[var(--os-ink)] flex flex-col sm:flex-row items-center justify-between gap-6">
          {/* Location on Left */}
          <div className="flex items-center gap-2 font-sans text-xs sm:text-sm font-medium text-[var(--os-ink)]">
            <span className="text-[var(--os-ink)]">✦</span>
            <span>Based in Dhaka, Bangladesh</span>
          </div>

          {/* Circular Social Buttons in Center */}
          <div className="flex items-center gap-2">
            {siteConfig.socials.slice(0, 4).map((soc) => (
              <a
                key={soc.name}
                href={soc.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Visit Yasin on ${soc.name}`}
                className="w-9 h-9 rounded-full bg-[var(--os-ink)] text-white border border-[var(--os-ink)] flex items-center justify-center font-sans text-xs font-bold transition-transform duration-200 hover:scale-110 active:scale-95"
              >
                <span>{soc.name[0]}</span>
              </a>
            ))}
          </div>

          {/* Availability & Scroll indicator on Right */}
          <div className="flex items-center gap-4">
            <span className="font-sans text-xs sm:text-sm font-medium text-[var(--os-ink)]">
              10,000+ marks explored
            </span>
            <a
              href="#selected-works"
              aria-label="Scroll to selected works"
              className="w-9 h-9 rounded-full border border-[var(--os-ink)] bg-white text-[var(--os-ink)] flex items-center justify-center transition-transform duration-200 hover:translate-y-1"
            >
              <ArrowDown className="w-4 h-4" />
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
}
