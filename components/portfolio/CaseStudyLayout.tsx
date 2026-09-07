"use client";

import React, { useState } from "react";
import Image from "next/image";
import NextLink from "next/link";
import { 
  ArrowLeft, 
  ArrowRight, 
  Check, 
  Copy, 
  Terminal,
  Play 
} from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Label } from "@/components/ui/Label";
import { Divider } from "@/components/ui/Divider";
import { Project } from "@/lib/types";

interface CaseStudyLayoutProps {
  project: Project;
  nextProject: Project | null;
}

export function CaseStudyLayout({ project, nextProject }: CaseStudyLayoutProps) {
  const [copiedHex, setCopiedHex] = useState<string | null>(null);

  const handleCopyHex = (hex: string) => {
    navigator.clipboard.writeText(hex);
    setCopiedHex(hex);
    setTimeout(() => setCopiedHex(null), 2000);
  };

  return (
    <article className="w-full bg-[var(--bg-primary)]">
      {/* 1. Top Context Navigation Bar */}
      <nav aria-label="Project context" className="border-b border-[var(--border-subtle)] bg-[var(--bg-secondary)]/40 py-3">
        <Container>
          <div className="flex items-center justify-between">
            <NextLink
              href="/work"
              data-cursor="link"
              className="min-h-[44px] inline-flex items-center gap-2 py-2 px-1 font-mono text-xs uppercase tracking-wider text-[var(--text-secondary)] hover:text-[var(--accent)] transition-colors focus-visible:outline-2 focus-visible:outline-[var(--accent)]"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>BACK TO WORK INDEX</span>
            </NextLink>

            <div className="flex items-center gap-3">
              <span className="font-mono text-xs text-[var(--text-muted)]">
                ARCHIVE /{project.number}
              </span>
              <Label variant="status" size="sm">
                {project.category}
              </Label>
            </div>
          </div>
        </Container>
      </nav>

      {/* 2. Project Header & Metadata */}
      <header className="pt-10 md:pt-16 pb-12 border-b border-[var(--border-subtle)]">
        <Container>
          <div className="max-w-5xl">
            <div className="flex items-center gap-3 mb-4">
              <span className="font-mono text-xs text-[var(--accent)] uppercase tracking-widest font-semibold">
                CASE STUDY // {project.category}
              </span>
              <span className="text-[var(--border-strong)]">/</span>
              <span className="font-mono text-xs text-[var(--text-muted)]">
                CLIENT: {project.client} ({project.year})
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tight uppercase font-sans text-[var(--text-primary)] leading-[0.94] mb-6">
              {project.title}
            </h1>

            <p className="text-lg sm:text-xl md:text-2xl text-[var(--text-secondary)] leading-relaxed font-normal max-w-4xl">
              {project.shortDescription}
            </p>
          </div>

          {/* Structured Metadata Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 pt-10 mt-10 border-t border-[var(--border-subtle)]">
            <div>
              <span className="font-mono text-[10px] uppercase tracking-widest text-[var(--text-muted)] block mb-1.5">
                DISCIPLINE
              </span>
              <span className="font-mono text-xs font-bold text-[var(--text-primary)]">
                {project.category}
              </span>
            </div>

            <div>
              <span className="font-mono text-[10px] uppercase tracking-widest text-[var(--text-muted)] block mb-1.5">
                TIMELINE / YEAR
              </span>
              <span className="font-mono text-xs font-bold text-[var(--text-primary)]">
                {project.year}
              </span>
            </div>

            <div>
              <span className="font-mono text-[10px] uppercase tracking-widest text-[var(--text-muted)] block mb-1.5">
                ROLE &amp; DIRECTIVE
              </span>
              <span className="font-mono text-xs font-bold text-[var(--text-primary)]">
                {project.credits[0]?.role || "Lead Designer"}
              </span>
            </div>

            <div>
              <span className="font-mono text-[10px] uppercase tracking-widest text-[var(--text-muted)] block mb-1.5">
                SERVICES DELIVERED
              </span>
              <div className="flex flex-wrap gap-1 mt-0.5">
                {project.services.slice(0, 3).map((srv) => (
                  <span key={srv} className="font-mono text-[11px] text-[var(--text-secondary)]">
                    #{srv}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </header>

      {/* 3. Hero Visual Frame */}
      <Section spacing="none" className="py-8 md:py-12 bg-[var(--bg-secondary)]/30 border-b border-[var(--border-subtle)]">
        <Container size="lg">
          <figure className="relative aspect-[16/9] w-full border border-[var(--border-subtle)] overflow-hidden bg-[var(--surface-card)] shadow-sm">
            <Image
              src={project.heroImage}
              alt={`Primary visual hero showcase for ${project.title}`}
              fill
              priority
              sizes="(max-width: 1400px) 100vw, 1400px"
              className="object-cover"
            />
            <figcaption className="absolute bottom-3 right-3 bg-[var(--surface-card)]/90 backdrop-blur-sm px-3 py-1 border border-[var(--border-subtle)] font-mono text-[11px] text-[var(--text-muted)]">
              FIG 01 // {project.title.toUpperCase()} HERO SHOWCASE
            </figcaption>
          </figure>
        </Container>
      </Section>

      {/* 4. "The Idea" Editorial Pull Quote & Strategic Summary */}
      <Section spacing="lg">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="lg:col-span-8 space-y-8">
              <div>
                <span className="font-mono text-xs uppercase tracking-widest text-[var(--accent)] font-semibold block mb-3">
                  01 // THE IDEA &amp; ARCHITECTURAL PREMISE
                </span>
                <blockquote className="text-2xl sm:text-3xl md:text-4xl font-black tracking-tight text-[var(--text-primary)] leading-tight mb-6 border-l-4 border-[var(--accent)] pl-6">
                  &ldquo;{project.theIdea}&rdquo;
                </blockquote>
                <p className="text-base md:text-lg text-[var(--text-secondary)] leading-relaxed font-normal">
                  {project.overview}
                </p>
              </div>

              {/* Challenge vs Strategy Comparison */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-6 border-t border-[var(--border-subtle)]">
                <div className="p-6 border border-[var(--border-subtle)] bg-[var(--surface-card)]">
                  <span className="font-mono text-[11px] uppercase tracking-widest text-[var(--text-muted)] block mb-2 font-bold">
                    [ THE CHALLENGE ]
                  </span>
                  <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                    {project.challenge}
                  </p>
                </div>

                <div className="p-6 border border-[var(--border-subtle)] bg-[var(--surface-card)]">
                  <span className="font-mono text-[11px] uppercase tracking-widest text-[var(--accent)] block mb-2 font-bold">
                    [ STRATEGIC EXECUTION ]
                  </span>
                  <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                    {project.strategy}
                  </p>
                </div>
              </div>

              {/* Authentic Verified Metrics Bar (Prompt 06) */}
              {project.metrics && project.metrics.length > 0 && (
                <div className="pt-8 border-t border-[var(--border-subtle)]">
                  <span className="font-mono text-xs uppercase tracking-widest text-[var(--accent)] font-semibold block mb-4">
                    AUTHENTIC DELIVERED METRICS
                  </span>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                    {project.metrics.map((m) => (
                      <div key={m.label} className="p-4 border border-[var(--border-subtle)] bg-[var(--surface-card)]">
                        <span className="font-sans text-2xl font-black text-[var(--text-primary)] tracking-tight block">
                          {m.value}
                        </span>
                        <span className="font-mono text-[10px] text-[var(--text-muted)] uppercase tracking-wider block mt-1">
                          {m.label}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Sidebar Specifications */}
            <aside className="lg:col-span-4 space-y-8 lg:border-l lg:border-[var(--border-subtle)] lg:pl-8">
              {project.identitySystem && (
                <div className="p-5 border border-[var(--border-subtle)] bg-[var(--bg-secondary)]">
                  <span className="font-mono text-xs uppercase tracking-widest text-[var(--accent)] font-bold block mb-2">
                    IDENTITY SYSTEM
                  </span>
                  <p className="font-mono text-xs text-[var(--text-secondary)] leading-relaxed">
                    {project.identitySystem}
                  </p>
                </div>
              )}

              {project.applications && (
                <div>
                  <span className="font-mono text-xs uppercase tracking-widest text-[var(--text-muted)] font-bold block mb-3">
                    APPLICATIONS &amp; TOUCHPOINTS
                  </span>
                  <ul className="space-y-2 font-mono text-xs text-[var(--text-secondary)]">
                    {project.applications.map((app) => (
                      <li key={app} className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 bg-[var(--accent)]" />
                        <span>{app}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              <div>
                <span className="font-mono text-xs uppercase tracking-widest text-[var(--text-muted)] font-bold block mb-3">
                  VERIFIED OUTCOME
                </span>
                <div className="p-4 border-l-2 border-[var(--text-primary)] bg-[var(--surface-card)]">
                  <p className="text-xs text-[var(--text-primary)] font-medium leading-relaxed">
                    {project.outcome}
                  </p>
                </div>
              </div>
            </aside>
          </div>
        </Container>
      </Section>

      <Divider label="GEOMETRY &amp; VISUAL EXPLORATION" crosshairs />

      {/* 5. Logo Exploration & Geometry Grid (Prompt 06) */}
      {project.logoExploration && (
        <Section spacing="lg" className="bg-[var(--bg-secondary)]/20">
          <Container>
            <div className="max-w-4xl mb-8">
              <span className="font-mono text-xs uppercase tracking-widest text-[var(--accent)] font-semibold block mb-2">
                02 // LOGO EXPLORATION &amp; VECTOR GEOMETRY
              </span>
              <h2 className="text-3xl sm:text-4xl font-black uppercase tracking-tight text-[var(--text-primary)]">
                Proportional Construction &amp; Logic
              </h2>
              <p className="text-sm md:text-base text-[var(--text-secondary)] mt-2">
                {project.logoExploration.concept}
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              {/* Construction Diagram Canvas */}
              {project.logoExploration.svgDiagram && (
                <div className="lg:col-span-8">
                  <figure className="relative aspect-[16/10] w-full border border-[var(--border-subtle)] overflow-hidden bg-[#0D0E12] shadow-sm">
                    <Image
                      src={project.logoExploration.svgDiagram}
                      alt={`Vector construction geometry diagram for ${project.title}`}
                      fill
                      sizes="(max-width: 1024px) 100vw, 800px"
                      className="object-contain p-4"
                    />
                    <figcaption className="sr-only">
                      Geometric vector construction grid showing mathematical guides and nodal tangents.
                    </figcaption>
                  </figure>
                </div>
              )}

              {/* Grid Principles Column */}
              <div className="lg:col-span-4 space-y-4">
                <span className="font-mono text-xs uppercase tracking-widest text-[var(--text-muted)] font-bold block mb-2">
                  CONSTRUCTION RULES
                </span>
                {project.logoExploration.gridPrinciples.map((rule, idx) => (
                  <div key={idx} className="p-4 border border-[var(--border-subtle)] bg-[var(--surface-card)]">
                    <span className="font-mono text-[10px] text-[var(--accent)] block mb-1">
                      RULE 0{idx + 1}
                    </span>
                    <p className="font-mono text-xs text-[var(--text-primary)] leading-relaxed">
                      {rule}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </Container>
        </Section>
      )}

      {/* 6. Typography Specimen Section (Prompt 06) */}
      {project.typographySpecimen && (
        <Section spacing="lg" className="border-t border-[var(--border-subtle)]">
          <Container>
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
              <div>
                <span className="font-mono text-xs uppercase tracking-widest text-[var(--accent)] font-semibold block mb-2">
                  03 // TYPOGRAPHIC ARCHITECTURE
                </span>
                <h2 className="text-3xl sm:text-4xl font-black uppercase tracking-tight text-[var(--text-primary)]">
                  {project.typographySpecimen.primaryFont}
                </h2>
                <span className="font-mono text-xs text-[var(--text-muted)]">
                  CLASSIFICATION: {project.typographySpecimen.classification}
                </span>
              </div>

              <div className="flex flex-wrap gap-2">
                {project.typographySpecimen.weights.map((w) => (
                  <Label key={w} variant="outline" size="sm">
                    {w}
                  </Label>
                ))}
              </div>
            </div>

            {/* Typography Pangram Display Box */}
            <div className="p-6 md:p-10 border border-[var(--border-subtle)] bg-[var(--surface-card)] space-y-6">
              <div className="border-b border-[var(--border-subtle)] pb-6">
                <p className="text-2xl sm:text-3xl md:text-4xl font-black uppercase tracking-tight text-[var(--text-primary)] leading-tight">
                  {project.typographySpecimen.pangram}
                </p>
              </div>

              <div className="font-mono text-xs md:text-sm text-[var(--text-muted)] tracking-widest break-all">
                ABCDEFGHIJKLMNOPQRSTUVWXYZ • 0123456789 • !@#$%&amp;*()_+-=[]
              </div>

              <div className="pt-4 border-t border-[var(--border-subtle)]">
                <p className="font-mono text-xs text-[var(--text-secondary)] leading-relaxed">
                  <strong className="text-[var(--text-primary)]">Rationale: </strong>
                  {project.typographySpecimen.rationale}
                </p>
              </div>
            </div>
          </Container>
        </Section>
      )}

      {/* 7. Color Architecture Section (Prompt 06) */}
      {project.colorPalette && (
        <Section spacing="lg" className="border-t border-[var(--border-subtle)] bg-[var(--bg-secondary)]/40">
          <Container>
            <div className="mb-8">
              <span className="font-mono text-xs uppercase tracking-widest text-[var(--accent)] font-semibold block mb-2">
                04 // COLOR ARCHITECTURE &amp; VALUES
              </span>
              <h2 className="text-3xl sm:text-4xl font-black uppercase tracking-tight text-[var(--text-primary)]">
                Chromatic Restraint
              </h2>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {project.colorPalette.map((swatch) => (
                <button
                  key={swatch.hex}
                  type="button"
                  onClick={() => handleCopyHex(swatch.hex)}
                  aria-label={`Copy color code for ${swatch.name}: ${swatch.hex}`}
                  title="Click to copy HEX"
                  className="group p-4 border border-[var(--border-subtle)] bg-[var(--surface-card)] cursor-pointer hover:border-[var(--text-primary)] transition-all text-left focus-visible:outline-2 focus-visible:outline-[var(--accent)]"
                >
                  <div
                    className="w-full aspect-[4/3] border border-black/10 mb-3 relative flex items-end justify-end p-2 transition-transform group-hover:scale-[1.02]"
                    style={{ backgroundColor: swatch.hex }}
                  >
                    <span className="font-mono text-[10px] px-1.5 py-0.5 bg-black/60 text-white backdrop-blur-xs opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-1">
                      {copiedHex === swatch.hex ? <Check className="w-2.5 h-2.5" /> : <Copy className="w-2.5 h-2.5" />}
                      <span>{copiedHex === swatch.hex ? "COPIED" : "COPY"}</span>
                    </span>
                  </div>

                  <span className="font-mono text-xs font-bold text-[var(--text-primary)] block">
                    {swatch.name}
                  </span>
                  <span className="font-mono text-xs text-[var(--text-muted)] block mt-0.5">
                    {swatch.hex}
                  </span>
                </button>
              ))}
            </div>
          </Container>
        </Section>
      )}

      {/* 8. Visual Gallery & Collateral (Prompt 06) */}
      {project.gallery && project.gallery.length > 0 && (
        <Section spacing="lg" className="border-t border-[var(--border-subtle)]">
          <Container>
            <div className="mb-10">
              <span className="font-mono text-xs uppercase tracking-widest text-[var(--accent)] font-semibold block mb-2">
                05 // VISUAL GALLERY &amp; IMPLEMENTATION
              </span>
              <h2 className="text-3xl sm:text-4xl font-black uppercase tracking-tight text-[var(--text-primary)]">
                Collateral &amp; Brand Artifacts
              </h2>
            </div>

            <div className="space-y-8">
              {project.gallery.map((item, idx) => (
                <figure
                  key={idx}
                  className="border border-[var(--border-subtle)] bg-[var(--surface-card)] overflow-hidden shadow-xs"
                >
                  <div className="relative aspect-[16/9] w-full bg-[var(--bg-secondary)]">
                    <Image
                      src={item.url}
                      alt={item.alt}
                      fill
                      sizes="(max-width: 1200px) 100vw, 1200px"
                      className="object-cover"
                    />
                  </div>
                  <figcaption className="p-4 border-t border-[var(--border-subtle)] bg-[var(--surface-card)] flex items-center justify-between font-mono text-xs text-[var(--text-secondary)]">
                    <span>{item.caption}</span>
                    <span className="text-[var(--text-muted)]">FIG 0{idx + 2}</span>
                  </figcaption>
                </figure>
              ))}
            </div>
          </Container>
        </Section>
      )}

      {/* 9. Digital Stack & Vibe-Coded Architecture (Prompt 06) */}
      {project.digitalStack && (
        <Section spacing="lg" className="border-t border-[var(--border-subtle)] bg-[var(--bg-secondary)]/50">
          <Container>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              <div className="lg:col-span-4">
                <div className="flex items-center gap-2 mb-2">
                  <Terminal className="w-4 h-4 text-[var(--accent)]" />
                  <span className="font-mono text-xs uppercase tracking-widest text-[var(--accent)] font-semibold">
                    06 // VIBE-CODED ARCHITECTURE
                  </span>
                </div>
                <h2 className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-[var(--text-primary)]">
                  Interactive Technology Stack
                </h2>
              </div>

              <div className="lg:col-span-8 p-6 border border-[var(--border-subtle)] bg-[var(--surface-card)] space-y-4 font-mono text-xs">
                <div>
                  <span className="text-[var(--text-muted)] uppercase block mb-1">FRAMEWORKS &amp; LIBRARIES:</span>
                  <div className="flex flex-wrap gap-1.5">
                    {project.digitalStack.frameworks.map((f) => (
                      <span key={f} className="px-2 py-0.5 bg-[var(--bg-secondary)] border border-[var(--border-subtle)] text-[var(--text-primary)] font-semibold">
                        {f}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-3 border-t border-[var(--border-subtle)]">
                  <span className="text-[var(--text-muted)] uppercase block mb-1">ARCHITECTURE SPECIFICATION:</span>
                  <p className="text-[var(--text-secondary)] leading-relaxed">
                    {project.digitalStack.architecture}
                  </p>
                </div>

                {project.digitalStack.performanceNotes && (
                  <div className="pt-3 border-t border-[var(--border-subtle)]">
                    <span className="text-[var(--accent)] uppercase block mb-1">PERFORMANCE TELEMETRY:</span>
                    <p className="text-[var(--text-primary)] font-bold">
                      {project.digitalStack.performanceNotes}
                    </p>
                  </div>
                )}
              </div>
            </div>
          </Container>
        </Section>
      )}

      {/* 07 // Video / Motion Prototype Frame (Prompt 06) */}
      {project.videoPlaceholder && (
        <Section spacing="lg" className="border-t border-[var(--border-subtle)] bg-[var(--surface-card)]/40">
          <Container>
            <div className="mb-6">
              <span className="font-mono text-xs uppercase tracking-widest text-[var(--accent)] font-semibold block mb-2">
                07 // MOTION STUDY &amp; PROTOTYPE INTERACTION
              </span>
              <h2 className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-[var(--text-primary)]">
                {project.videoPlaceholder.title}
              </h2>
            </div>

            <div className="border border-[var(--border-subtle)] bg-[var(--bg-secondary)] overflow-hidden shadow-xs">
              {/* Video HUD Control Bar */}
              <div className="flex items-center justify-between p-3 border-b border-[var(--border-subtle)] bg-[var(--surface-card)] font-mono text-xs text-[var(--text-muted)]">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[var(--accent)] animate-pulse" />
                  <span>REC // 4K 60FPS TIME-LOCKED</span>
                </div>
                <div className="flex items-center gap-4">
                  <span>TIMECODE: {project.videoPlaceholder.duration || "00:48"}</span>
                  <span className="text-[var(--text-primary)] font-bold">STATUS: READY</span>
                </div>
              </div>

              {/* Video Visual Frame */}
              <button
                type="button"
                aria-label={`Initialize interactive motion prototype for ${project.videoPlaceholder.title}`}
                className="relative aspect-[16/9] w-full flex items-center justify-center bg-black/95 group cursor-pointer focus-visible:outline-2 focus-visible:outline-[var(--accent)] block"
              >
                <Image
                  src={project.heroImage}
                  alt={project.videoPlaceholder.title}
                  fill
                  sizes="(max-width: 1200px) 100vw, 1200px"
                  className="object-cover opacity-40 group-hover:opacity-60 transition-opacity"
                />
                <div className="relative z-10 flex flex-col items-center gap-3">
                  <div className="w-16 h-16 rounded-full border-2 border-white/80 flex items-center justify-center bg-black/50 backdrop-blur-xs group-hover:scale-110 group-hover:border-[var(--accent)] transition-all">
                    <Play className="w-6 h-6 text-white group-hover:text-[var(--accent)] ml-1 fill-white" />
                  </div>
                  <span className="font-mono text-xs text-white uppercase tracking-widest bg-black/80 px-3 py-1 border border-white/20">
                    CLICK TO INITIALIZE PROTOTYPE
                  </span>
                </div>
              </button>

              <div className="p-4 border-t border-[var(--border-subtle)] bg-[var(--surface-card)] font-mono text-xs text-[var(--text-secondary)]">
                {project.videoPlaceholder.caption}
              </div>
            </div>
          </Container>
        </Section>
      )}

      {/* 08 // Credits & Collaborators */}
      <Section spacing="md" className="border-t border-[var(--border-subtle)]">
        <Container>
          <div className="max-w-3xl">
            <span className="font-mono text-xs uppercase tracking-widest text-[var(--text-muted)] font-bold block mb-4">
              PROJECT CREDITS &amp; COLLABORATORS
            </span>
            <div className="divide-y divide-[var(--border-subtle)] border-t border-b border-[var(--border-subtle)]">
              {project.credits.map((cr) => (
                <div key={cr.role} className="py-3 flex items-center justify-between font-mono text-xs">
                  <span className="text-[var(--text-muted)] uppercase">{cr.role}</span>
                  <span className="text-[var(--text-primary)] font-bold">{cr.name}</span>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      {/* 11. Next Project Navigation Footer Bar */}
      {nextProject && (
        <footer className="border-t border-[var(--border-subtle)] bg-[var(--surface-card)] transition-colors hover:bg-[var(--bg-secondary)]">
          <Container>
            <NextLink
              href={`/work/${nextProject.slug}`}
              data-cursor="project"
              data-cursor-text="NEXT"
              className="group flex flex-col sm:flex-row sm:items-center justify-between gap-6 py-8 md:py-12 focus-visible:outline-2 focus-visible:outline-[var(--accent)]"
            >
              <div>
                <span className="font-mono text-xs uppercase tracking-widest text-[var(--accent)] font-semibold block mb-1">
                  NEXT PROJECT /{nextProject.number}
                </span>
                <h3 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-tight text-[var(--text-primary)] group-hover:translate-x-2 transition-transform duration-200">
                  {nextProject.title}
                </h3>
                <span className="font-mono text-xs text-[var(--text-muted)] mt-2 block">
                  {nextProject.category}{" // "}{nextProject.year}
                </span>
              </div>

              <div className="w-14 h-14 rounded-full border border-[var(--border-strong)] flex items-center justify-center group-hover:bg-[var(--accent)] group-hover:border-[var(--accent)] group-hover:text-white transition-all duration-200 self-end sm:self-center">
                <ArrowRight className="w-6 h-6 transition-transform group-hover:translate-x-1" />
              </div>
            </NextLink>
          </Container>
        </footer>
      )}
    </article>
  );
}
