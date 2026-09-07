import React from "react";
import NextLink from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Label } from "@/components/ui/Label";
import { Divider } from "@/components/ui/Divider";
import { WorkIndex } from "@/components/portfolio/WorkIndex";
import { Reveal } from "@/components/animations/Reveal";
import { Hero } from "@/components/home/Hero";
import { projects } from "@/data/projects";
import { YasinMachine } from "@/components/lab/YasinMachine";
import { labExperiments } from "@/data/labExperiments";

export default function HomePage() {
  const featuredExperiments = labExperiments.slice(0, 3);

  return (
    <div className="w-full">
      {/* Editorial Hero Section (Prompt 04) */}
      <Hero />

      {/* Selected Work Section (Prompt 05) */}
      <Section id="selected-work" spacing="lg">
        <Container>
          <WorkIndex
            projects={projects}
            title="SELECTED WORK"
            subtitle="15 years of brand architecture, geometric identity marks, and experimental product design systems."
            showFilters={false}
          />
        </Container>
      </Section>

      <Divider label="EXPERIMENTAL ENVIRONMENT" crosshairs />

      {/* The Lab Preview Section (Prompts 07 & 08) */}
      <Section spacing="lg" className="bg-[var(--bg-secondary)]/50 border-y border-[var(--border-subtle)]">
        <Container>
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10 pb-4 border-b border-[var(--border-subtle)]">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="w-2 h-2 bg-[var(--text-primary)]" />
                <span className="font-mono text-xs uppercase tracking-widest text-[var(--text-muted)]">
                  INDEX // 02
                </span>
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tighter uppercase font-sans text-[var(--text-primary)]">
                THE LAB
              </h2>
              <p className="font-mono text-xs text-[var(--text-secondary)] mt-2">
                Things I&apos;m building, breaking, testing and obsessing over.
              </p>
            </div>

            <NextLink
              href="/lab"
              className="inline-flex items-center gap-1.5 font-mono text-xs uppercase tracking-wider text-[var(--text-primary)] hover:text-[var(--accent)] transition-colors"
            >
              <span>EXPLORE ALL EXPERIMENTS</span>
              <ArrowUpRight className="w-4 h-4" />
            </NextLink>
          </div>

          {/* Embedded Yasin Machine Ideator (Prompt 08) */}
          <div className="mb-12">
            <YasinMachine compact />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {featuredExperiments.map((exp, idx) => (
              <Reveal key={exp.id} delay={idx * 0.1}>
                <NextLink
                  href={`/lab/${exp.slug}`}
                  data-cursor="lab"
                  data-cursor-text="TEST"
                  className="group block p-6 border border-[var(--border-subtle)] bg-[var(--surface-card)] hover:border-[var(--text-primary)] transition-all flex flex-col justify-between h-full"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <Label
                        variant={exp.status === "LIVE" ? "accent" : "outline"}
                        size="sm"
                        dot={exp.status === "LIVE"}
                      >
                        {exp.status}
                      </Label>
                      <span className="font-mono text-xs text-[var(--text-muted)]">
                        /{exp.number}
                      </span>
                    </div>

                    <h3 className="text-xl font-bold tracking-tight text-[var(--text-primary)] group-hover:text-[var(--accent)] transition-colors">
                      {exp.name}
                    </h3>

                    <p className="font-mono text-xs text-[var(--text-muted)] mt-1">
                      {exp.type}
                    </p>

                    <p className="text-xs text-[var(--text-secondary)] mt-3 leading-relaxed">
                      {exp.shortDescription}
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-[var(--border-subtle)] flex items-center justify-between font-mono text-[11px] text-[var(--text-muted)]">
                    <div className="flex gap-1.5">
                      {exp.technology.slice(0, 2).map((tech) => (
                        <span key={tech}>[{tech}]</span>
                      ))}
                    </div>
                    <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-[var(--accent)] transition-transform" />
                  </div>
                </NextLink>
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      {/* Signature Creative Direction Manifest */}
      <Section spacing="lg">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8">
              <span className="font-mono text-xs text-[var(--accent)] uppercase tracking-widest block mb-4">
                THE MANIFESTO
              </span>
              <blockquote className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-[var(--text-primary)] leading-tight">
                &ldquo;Great identity design is not ornament. It is an operating system for human perception.&rdquo;
              </blockquote>
              <p className="mt-4 text-sm md:text-base text-[var(--text-secondary)] max-w-2xl leading-relaxed">
                Over 15 years, I designed for founders, enterprises, and institutions. Now, modern AI models give one person the building velocity of an entire engineering agency. I use that leverage to design and ship without compromise.
              </p>
            </div>

            <div className="lg:col-span-4 border-l border-[var(--border-subtle)] pl-6 space-y-6">
              <div>
                <div className="text-3xl font-black font-sans text-[var(--text-primary)]">15+</div>
                <div className="font-mono text-xs text-[var(--text-muted)] uppercase tracking-wider">Years Design Experience</div>
              </div>
              <div>
                <div className="text-3xl font-black font-sans text-[var(--accent)]">10K+</div>
                <div className="font-mono text-xs text-[var(--text-muted)] uppercase tracking-wider">Logo Concepts & Explorations</div>
              </div>
              <div>
                <div className="text-3xl font-black font-sans text-[var(--text-primary)]">∞</div>
                <div className="font-mono text-xs text-[var(--text-muted)] uppercase tracking-wider">Vibe-Coded Curiosity</div>
              </div>
            </div>
          </div>
        </Container>
      </Section>
    </div>
  );
}
