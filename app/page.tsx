import React from "react";
import NextLink from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { WorkIndex } from "@/components/portfolio/WorkIndex";
import { Hero } from "@/components/home/Hero";
import { projects } from "@/data/projects";
import { YasinMachine } from "@/components/lab/YasinMachine";
import { labExperiments } from "@/data/labExperiments";

export default function HomePage() {
  const featuredExperiments = labExperiments.slice(0, 3);

  return (
    <div className="w-full">
      {/* Editorial Hero Section (Lilac Canvas) */}
      <Hero />

      {/* Selected Work Section (Cream Rounded Sheet) */}
      <WorkIndex
        projects={projects}
        title="Selected Works"
        subtitle="15 years of brand architecture, geometric identity marks, and experimental product design systems."
        showFilters={false}
      />

      {/* The Lab Preview Section (Mint OS Environment) */}
      <section className="w-full bg-[var(--os-mint)] text-[var(--os-ink)] border-t border-[var(--os-ink)] py-16 md:py-24">
        <Container>
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10 pb-6 border-b border-[var(--os-ink)]/20">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="w-2.5 h-2.5 rounded-full bg-[var(--os-ink)]" />
                <span className="font-sans text-xs font-semibold uppercase tracking-wider text-[var(--os-ink)]/70">
                  THE CREATIVE LAB
                </span>
              </div>
              <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl tracking-tight text-[var(--os-ink)]">
                Experimental Playground
              </h2>
              <p className="font-sans text-sm text-[var(--os-ink)]/80 mt-2 max-w-lg">
                Things I&apos;m building, breaking, testing, and vibe-coding with frontier AI.
              </p>
            </div>

            <NextLink
              href="/lab"
              className="btn-pill px-5 py-2.5 font-sans text-xs font-semibold tracking-wide uppercase inline-flex items-center gap-2 self-start sm:self-auto"
            >
              <span>EXPLORE ALL EXPERIMENTS</span>
              <ArrowUpRight className="w-4 h-4" />
            </NextLink>
          </div>

          {/* Embedded Yasin Machine Ideator */}
          <div className="mb-12">
            <YasinMachine compact />
          </div>

          {/* Featured Lab Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {featuredExperiments.map((exp) => (
              <NextLink
                key={exp.id}
                href={`/lab/${exp.slug}`}
                data-cursor="lab"
                data-cursor-text="TEST"
                className="group block p-6 rounded-[24px] border border-[var(--os-ink)] bg-white hover:-translate-y-1 transition-all duration-200 shadow-xs flex flex-col justify-between h-full"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-sans text-xs font-semibold px-3 py-1 rounded-full border border-[var(--os-ink)] bg-[var(--os-cream)] text-[var(--os-ink)]">
                      {exp.status}
                    </span>
                    <span className="font-sans text-xs font-semibold text-[var(--os-ink)]/50">
                      EXP #{exp.number}
                    </span>
                  </div>

                  <h3 className="font-serif text-2xl md:text-3xl text-[var(--os-ink)] group-hover:underline">
                    {exp.name}
                  </h3>

                  <p className="font-sans text-xs font-medium text-[var(--os-ink)]/60 mt-1 uppercase tracking-wider">
                    {exp.type}
                  </p>

                  <p className="font-sans text-xs md:text-sm text-[var(--os-ink)]/80 mt-3 leading-relaxed">
                    {exp.shortDescription}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-[var(--os-ink)]/20 flex items-center justify-between font-sans text-xs text-[var(--os-ink)]/60">
                  <div className="flex gap-2">
                    {exp.technology.slice(0, 2).map((tech) => (
                      <span key={tech}>[{tech}]</span>
                    ))}
                  </div>
                  <div className="w-8 h-8 rounded-full border border-[var(--os-ink)] bg-[var(--os-ink)] text-white flex items-center justify-center transition-transform group-hover:scale-110">
                    <ArrowUpRight className="w-4 h-4" />
                  </div>
                </div>
              </NextLink>
            ))}
          </div>
        </Container>
      </section>

      {/* Signature Creative Direction Manifest (Soft Pink Environment) */}
      <section className="w-full bg-[var(--os-pink)] text-[var(--os-ink)] border-t border-[var(--os-ink)] py-16 md:py-24">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 items-center">
            <div className="lg:col-span-8">
              <span className="font-sans text-xs font-bold uppercase tracking-wider text-[var(--os-ink)]/60 block mb-3">
                THE MANIFESTO
              </span>
              <blockquote className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl tracking-tight text-[var(--os-ink)] leading-[1.05]">
                &ldquo;Great identity design is not ornament. It is an operating system for human perception.&rdquo;
              </blockquote>
              <p className="mt-6 font-sans text-sm sm:text-base md:text-lg text-[var(--os-ink)]/90 max-w-2xl leading-relaxed">
                Over 15 years, I designed for founders, enterprises, and institutions. Modern AI gives one designer the velocity of an entire agency. I use that leverage to design, build, and ship without compromise.
              </p>
            </div>

            <div className="lg:col-span-4 border-t lg:border-t-0 lg:border-l border-[var(--os-ink)]/30 pt-6 lg:pt-0 lg:pl-8 space-y-6">
              <div>
                <div className="font-serif text-5xl md:text-6xl text-[var(--os-ink)] leading-none">15+</div>
                <div className="font-sans text-xs font-semibold uppercase tracking-wider text-[var(--os-ink)]/70 mt-1">
                  Years Design Experience
                </div>
              </div>
              <div>
                <div className="font-serif text-5xl md:text-6xl text-[var(--os-ink)] leading-none">10K+</div>
                <div className="font-sans text-xs font-semibold uppercase tracking-wider text-[var(--os-ink)]/70 mt-1">
                  Marks &amp; Explorations
                </div>
              </div>
              <div>
                <div className="font-serif text-5xl md:text-6xl text-[var(--os-ink)] leading-none">∞</div>
                <div className="font-sans text-xs font-semibold uppercase tracking-wider text-[var(--os-ink)]/70 mt-1">
                  Vibe-Coded Curiosity
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
