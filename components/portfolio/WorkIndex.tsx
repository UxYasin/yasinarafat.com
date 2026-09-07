"use client";

import React, { useState } from "react";
import Image from "next/image";
import NextLink from "next/link";
import { ArrowUpRight, LayoutGrid, Split } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { ProjectCard } from "@/components/ui/ProjectCard";
import { CircleButton } from "@/components/ui/Button";
import { Project, ProjectCategory } from "@/lib/types";
import { cn } from "@/lib/utils";

const categories: ("ALL" | ProjectCategory)[] = [
  "ALL",
  "BRANDING",
  "LOGO DESIGN",
  "VISUAL IDENTITY",
  "DIGITAL",
  "PRODUCT",
];

interface WorkIndexProps {
  projects: Project[];
  title?: string;
  subtitle?: string;
  showFilters?: boolean;
  headingLevel?: "h1" | "h2";
  isSectionSheet?: boolean;
}

export function WorkIndex({
  projects,
  title = "Selected Works",
  subtitle = "Enduring marks, design systems, and visual identity architectures crafted over 15 years.",
  showFilters = true,
  headingLevel = "h2",
  isSectionSheet = true,
}: WorkIndexProps) {
  const [selectedCategory, setSelectedCategory] = useState<"ALL" | ProjectCategory>("ALL");
  const [viewMode, setViewMode] = useState<"grid" | "split">("grid");
  const [hoveredProject, setHoveredProject] = useState<Project>(projects[0]);

  const HeadingTag = headingLevel;

  const filteredProjects = selectedCategory === "ALL"
    ? projects
    : projects.filter((p) => p.category === selectedCategory);

  const activeProject = filteredProjects.includes(hoveredProject)
    ? hoveredProject
    : filteredProjects[0] || projects[0];

  return (
    <section
      id="selected-works"
      className={cn(
        "w-full bg-[var(--os-cream)] text-[var(--os-ink)] transition-colors duration-300",
        isSectionSheet
          ? "border-t border-[var(--os-ink)] rounded-t-[32px] sm:rounded-t-[44px] md:rounded-t-[54px] pt-12 md:pt-20 pb-20 md:pb-28"
          : "pt-8 md:pt-14 pb-20"
      )}
    >
      <Container>
        {/* Section Header: Large Instrument Serif Title & Copyright Metadata */}
        <div className="flex flex-col md:flex-row md:items-baseline justify-between gap-4 pb-8 mb-10 border-b border-[var(--os-ink)]/20">
          <div>
            <HeadingTag className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-8xl tracking-tight text-[var(--os-ink)]">
              {title}
            </HeadingTag>
            {subtitle && (
              <p className="mt-3 font-sans text-sm md:text-base text-[var(--os-ink)]/80 max-w-xl leading-relaxed">
                {subtitle}
              </p>
            )}
          </div>

          <div className="flex items-center gap-4">
            <span className="font-serif text-2xl md:text-3xl text-[var(--os-ink)]">
              ©2013/26
            </span>

            {/* View Mode Toggle */}
            <div className="hidden md:flex items-center gap-1 rounded-full border border-[var(--os-ink)] bg-white p-1">
              <button
                type="button"
                onClick={() => setViewMode("grid")}
                aria-label="Grid View"
                className={cn(
                  "p-1.5 rounded-full transition-colors",
                  viewMode === "grid"
                    ? "bg-[var(--os-ink)] text-white"
                    : "text-[var(--os-ink)] hover:bg-black/5"
                )}
              >
                <LayoutGrid className="w-4 h-4" />
              </button>
              <button
                type="button"
                onClick={() => setViewMode("split")}
                aria-label="Split Index View"
                className={cn(
                  "p-1.5 rounded-full transition-colors",
                  viewMode === "split"
                    ? "bg-[var(--os-ink)] text-white"
                    : "text-[var(--os-ink)] hover:bg-black/5"
                )}
              >
                <Split className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Category Filters Pill Bar */}
        {showFilters && (
          <div className="flex flex-wrap items-center gap-2 mb-10 sm:mb-12">
            {categories.map((cat) => {
              const isSelected = selectedCategory === cat;
              const count = cat === "ALL" ? projects.length : projects.filter((p) => p.category === cat).length;
              if (count === 0 && cat !== "ALL") return null;

              return (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setSelectedCategory(cat)}
                  className={cn(
                    "px-4 py-2 rounded-full border border-[var(--os-ink)] font-sans text-xs font-semibold tracking-wide transition-all duration-200 cursor-pointer select-none",
                    isSelected
                      ? "bg-[var(--os-ink)] text-white shadow-xs"
                      : "bg-white text-[var(--os-ink)] hover:bg-white/80"
                  )}
                >
                  {cat} <span className="text-[10px] opacity-60 ml-1">({count})</span>
                </button>
              );
            })}
          </div>
        )}

        {/* Main Content Layout: Grid or Split */}
        {viewMode === "grid" ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            {filteredProjects.map((project, idx) => (
              <div
                key={project.slug}
                className={cn(
                  "transition-transform duration-300",
                  idx % 2 === 1 ? "md:translate-y-6" : ""
                )}
              >
                <ProjectCard project={project} index={idx} />
              </div>
            ))}
          </div>
        ) : (
          /* Split Index with Live Canvas */
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left: Interactive Rows */}
            <div className="lg:col-span-7 space-y-3">
              {filteredProjects.map((project, idx) => {
                const isCurrent = activeProject?.slug === project.slug;

                return (
                  <div
                    key={project.slug}
                    onMouseEnter={() => setHoveredProject(project)}
                    className={cn(
                      "border border-[var(--os-ink)] rounded-[20px] p-4 md:p-5 transition-all duration-200 cursor-pointer",
                      isCurrent
                        ? "bg-white shadow-sm -translate-x-1"
                        : "bg-white/60 hover:bg-white"
                    )}
                  >
                    <NextLink href={`/work/${project.slug}`} className="block">
                      <div className="flex items-center justify-between">
                        <div className="flex items-baseline gap-3">
                          <span className="font-sans text-xs font-bold text-[var(--os-ink)]/50">
                            0{idx + 1}
                          </span>
                          <h3 className="font-serif text-2xl md:text-3xl text-[var(--os-ink)]">
                            {project.title}
                          </h3>
                        </div>
                        <CircleButton size="sm" />
                      </div>
                      <div className="mt-2 flex items-center justify-between font-sans text-xs text-[var(--os-ink)]/70">
                        <span>{project.category}</span>
                        <span>{project.year}</span>
                      </div>
                    </NextLink>
                  </div>
                );
              })}
            </div>

            {/* Right: Sticky Live Preview Canvas */}
            <div className="hidden lg:block lg:col-span-5 sticky top-28">
              {activeProject && (
                <div className="border border-[var(--os-ink)] rounded-[28px] p-5 bg-white shadow-md">
                  <div className="flex items-center justify-between mb-3 px-1">
                    <span className="font-sans text-xs font-bold uppercase tracking-wider text-[var(--os-ink)]">
                      PREVIEW // {activeProject.title}
                    </span>
                    <span className="font-sans text-xs text-[var(--os-ink)]/60">
                      {activeProject.year}
                    </span>
                  </div>

                  <div className="relative aspect-[16/11] w-full rounded-[20px] overflow-hidden border border-[var(--os-ink)] bg-neutral-100">
                    <Image
                      src={activeProject.heroImage}
                      alt={activeProject.title}
                      fill
                      sizes="500px"
                      className="object-cover"
                    />
                  </div>

                  <p className="mt-4 font-sans text-xs text-[var(--os-ink)]/80 line-clamp-2 leading-relaxed">
                    {activeProject.overview}
                  </p>

                  <div className="mt-4 pt-4 border-t border-[var(--os-ink)]/20 flex items-center justify-between">
                    <span className="font-sans text-xs font-semibold text-[var(--os-ink)]">
                      {activeProject.client}
                    </span>
                    <NextLink
                      href={`/work/${activeProject.slug}`}
                      className="inline-flex items-center gap-1.5 font-sans text-xs font-bold uppercase text-[var(--os-ink)] hover:underline"
                    >
                      VIEW CASE STUDY
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </NextLink>
                  </div>
                </div>
              )}
            </div>
          </div>
        )}
      </Container>
    </section>
  );
}
