import React from "react";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Divider } from "@/components/ui/Divider";
import { YasinMachine } from "@/components/lab/YasinMachine";
import { LabGrid } from "@/components/lab/LabGrid";
import { labExperiments } from "@/data/labExperiments";

export const metadata = {
  title: "The Lab // Indie Vibe-Coding & Experiments",
  description: "Things I'm building, breaking, testing and obsessing over. Vibe-coded products, AI experiments, and micro SaaS ideas by Yasin Arafat.",
};

export default function LabPage() {
  return (
    <div className="w-full bg-[var(--bg-primary)]">
      {/* 1. Creative Lab Header */}
      <Section spacing="md" className="border-b border-[var(--border-subtle)] pb-10">
        <Container>
          <div className="flex items-center gap-2 mb-3">
            <span className="w-2 h-2 bg-[var(--accent)]" />
            <span className="font-mono text-xs uppercase tracking-widest text-[var(--accent)] font-semibold">
              INDEX // 02 • EXPERIMENTAL PLAYGROUND
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tighter uppercase font-sans text-[var(--text-primary)]">
            THE LAB
          </h1>

          <p className="mt-3 text-base md:text-xl text-[var(--text-secondary)] max-w-2xl font-normal leading-relaxed">
            Things I&apos;m building, breaking, testing and obsessing over.
          </p>

          <p className="mt-2 text-xs md:text-sm font-mono text-[var(--text-muted)] max-w-xl">
            Vibe-coded micro-tools, algorithmic generators, local-first apps, and prompt synthesis engines.
          </p>
        </Container>
      </Section>

      {/* 2. Signature Interactive Feature: THE YASIN MACHINE (Prompt 08) */}
      <Section spacing="md" className="bg-[var(--bg-secondary)]/30 border-b border-[var(--border-subtle)]">
        <Container>
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center justify-between mb-3">
              <span className="font-mono text-xs uppercase tracking-widest text-[var(--accent)] font-bold">
                TACTILE HARDWARE MODULE // 001
              </span>
              <span className="font-mono text-[11px] text-[var(--text-muted)]">
                52+ CURATED THOUGHTS
              </span>
            </div>
            <YasinMachine />
          </div>
        </Container>
      </Section>

      <Divider label="ALL EXPERIMENTS &amp; VIBE-CODED PROTOTYPES" crosshairs />

      {/* 3. Experiments Grid (Prompt 07) */}
      <Section spacing="lg">
        <Container>
          <LabGrid experiments={labExperiments} />
        </Container>
      </Section>
    </div>
  );
}
