import React from "react";
import { Container } from "@/components/ui/Container";
import { YasinMachine } from "@/components/lab/YasinMachine";
import { LabGrid } from "@/components/lab/LabGrid";
import { OSWindow } from "@/components/ui/OSWindow";
import { labExperiments } from "@/data/labExperiments";

export const metadata = {
  title: "The Lab // Indie Vibe-Coding & Experiments",
  description: "Things I'm building, breaking, testing and obsessing over. Vibe-coded products, AI experiments, and micro SaaS ideas by Yasin Arafat.",
};

export default function LabPage() {
  return (
    <div className="w-full bg-[var(--os-mint)] text-[var(--os-ink)] min-h-screen pt-20 md:pt-28 pb-24 transition-colors duration-300">
      <Container>
        {/* Lab Header */}
        <div className="pb-10 mb-10 border-b border-[var(--os-ink)]/20">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <div className="flex items-center gap-2 mb-3">
                <span className="w-2.5 h-2.5 rounded-full bg-[var(--os-ink)]" />
                <span className="font-sans text-xs font-semibold uppercase tracking-wider text-[var(--os-ink)]/70">
                  ROOM 02 // CREATIVE LAB
                </span>
              </div>
              <h1 className="font-serif text-5xl sm:text-7xl md:text-8xl tracking-tight text-[var(--os-ink)]">
                The Lab
              </h1>
              <p className="mt-3 font-sans text-base md:text-xl text-[var(--os-ink)]/90 max-w-2xl leading-relaxed">
                Things I&apos;m building, breaking, testing, and vibe-coding with frontier AI.
              </p>
            </div>

            {/* System Status Pill Box */}
            <div className="rounded-[20px] border border-[var(--os-ink)] bg-white/80 p-4 font-sans text-xs space-y-1.5 shadow-xs">
              <div className="flex items-center gap-2 font-semibold">
                <span className="w-2 h-2 rounded-full bg-emerald-600 animate-pulse" />
                <span>LAB SYSTEM // ONLINE</span>
              </div>
              <div className="text-[var(--os-ink)]/70 text-[11px]">
                5 EXPERIMENTS ACTIVE • LIVE IDEATOR READY
              </div>
            </div>
          </div>
        </div>

        {/* The Yasin Machine in OSWindow */}
        <div className="mb-14">
          <OSWindow
            title="THE YASIN MACHINE // CLIENT-SIDE IDEATION ENGINE"
            subtitle="52+ Curated Concepts"
            surface="cream"
            showDots
            radius="2xl"
            className="p-6 md:p-8"
          >
            <YasinMachine />
          </OSWindow>
        </div>

        {/* Experiments Grid */}
        <div className="pt-6">
          <div className="mb-6 flex items-center justify-between">
            <h2 className="font-serif text-3xl md:text-4xl text-[var(--os-ink)]">
              Prototypes &amp; Explorations
            </h2>
            <span className="font-sans text-xs font-semibold text-[var(--os-ink)]/60">
              {labExperiments.length} ARTIFACTS
            </span>
          </div>
          <LabGrid experiments={labExperiments} />
        </div>
      </Container>
    </div>
  );
}
