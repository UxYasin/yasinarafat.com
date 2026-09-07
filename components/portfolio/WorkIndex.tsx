"use client";

import React, { useState } from "react";
import Image from "next/image";
import NextLink from "next/link";
import { ArrowUpRight, LayoutGrid, Split, ArrowRight } from "lucide-react";
import { ProjectCard } from "@/components/ui/ProjectCard";
import { Label } from "@/components/ui/Label";
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
}

export function WorkIndex({
  projects,
  title = "SELECTED WORK",
  subtitle = "15 years of logo design, brand architecture, and tactile visual identity systems crafted for ambitious companies.",
  showFilters = true,
  headingLevel = "h2",
}: WorkIndexProps) {
  const [selectedCategory, setSelectedCategory] = useState<"ALL" | ProjectCategory>("ALL");
  const [viewMode, setViewMode] = useState<"split" | "grid">("split");
  const [hoveredProject, setHoveredProject] = useState<Project>(projects[0]);

  const HeadingTag = headingLevel;

  const filteredProjects = selectedCategory === "ALL"
    ? projects
    : projects.filter((p) => p.category === selectedCategory);

  const activeProject = filteredProjects.includes(hoveredProject)
    ? hoveredProject
    : filteredProjects[0] || projects[0];

  return (
    <div className="w-full">
      {/* Header & Controls Bar */}
      <div className="border-b border-[var(--border-subtle)] pb-8 mb-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="w-2 h-2 bg-[var(--accent)]" />
              <span className="font-mono text-xs uppercase tracking-widest text-[var(--accent)] font-semibold">
                ARCHIVE // INDEX 01
              </span>
            </div>
            <HeadingTag className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tighter uppercase font-sans text-[var(--text-primary)]">
              {title}
            </HeadingTag>
            {subtitle && (
              <p className="mt-3 text-sm md:text-base text-[var(--text-secondary)] max-w-xl">
                {subtitle}
              </p>
            )}
          </div>

          {/* View Mode Switcher */}
          <div className="flex items-center gap-2 border border-[var(--border-subtle)] p-1 bg-[var(--surface-card)] self-start md:self-auto">
            <button
              type="button"
              onClick={() => setViewMode("split")}
              className={cn(
                "hidden md:flex items-center gap-1.5 min-h-[38px] px-3 py-1.5 font-mono text-xs uppercase transition-colors cursor-pointer focus-visible:outline-2 focus-visible:outline-[var(--accent)]",
                viewMode === "split"
                  ? "bg-[var(--text-primary)] text-[var(--bg-primary)]"
                  : "text-[var(--text-muted)] hover:text-[var(--text-primary)]"
              )}
              title="Split Editorial Index with live preview"
            >
              <Split className="w-3.5 h-3.5" />
              <span>SPLIT INDEX</span>
            </button>

            <button
              type="button"
              onClick={() => setViewMode("grid")}
              className={cn(
                "flex items-center gap-1.5 min-h-[38px] px-3 py-1.5 font-mono text-xs uppercase transition-colors cursor-pointer focus-visible:outline-2 focus-visible:outline-[var(--accent)]",
                viewMode === "grid"
                  ? "bg-[var(--text-primary)] text-[var(--bg-primary)]"
                  : "text-[var(--text-muted)] hover:text-[var(--text-primary)]"
              )}
              title="Grid View"
            >
              <LayoutGrid className="w-3.5 h-3.5" />
              <span>GRID</span>
            </button>
          </div>
        </div>

        {/* Dynamic Category Filters */}
        {showFilters && (
          <div className="flex flex-wrap items-center gap-2 pt-6">
            {categories.map((cat) => {
              const count = cat === "ALL"
                ? projects.length
                : projects.filter((p) => p.category === cat).length;

              return (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setSelectedCategory(cat)}
                  className={cn(
                    "min-h-[38px] sm:min-h-[36px] px-3 py-1.5 font-mono text-xs uppercase tracking-wider transition-all duration-150 cursor-pointer border focus-visible:outline-2 focus-visible:outline-[var(--accent)]",
                    selectedCategory === cat
                      ? "border-[var(--text-primary)] bg-[var(--text-primary)] text-[var(--bg-primary)]"
                      : "border-[var(--border-subtle)] bg-[var(--surface-card)] text-[var(--text-secondary)] hover:border-[var(--text-primary)] hover:text-[var(--text-primary)]"
                  )}
                >
                  <span>{cat}</span>
                  <span className="ml-1.5 text-[10px] opacity-60">({count})</span>
                </button>
              );
            })}
          </div>
        )}
      </div>

      {/* Main Work Display Area */}
      {filteredProjects.length === 0 ? (
        <div className="py-24 text-center border border-dashed border-[var(--border-subtle)]">
          <p className="font-mono text-xs text-[var(--text-muted)] uppercase tracking-wider">
            NO PROJECTS FOUND IN THIS CATEGORY
          </p>
        </div>
      ) : viewMode === "split" ? (
        /* EXPERIMENTAL SPLIT EDITORIAL INDEX (Prompt 05) */
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Interactive Project Rows */}
          <div className="lg:col-span-7 divide-y divide-[var(--border-subtle)] border-t border-b border-[var(--border-subtle)]">
            {filteredProjects.map((project) => {
              const isHovered = activeProject?.id === project.id;

              return (
                <NextLink
                  key={project.id}
                  href={`/work/${project.slug}`}
                  onMouseEnter={() => setHoveredProject(project)}
                  onFocus={() => setHoveredProject(project)}
                  data-cursor="project"
                  data-cursor-text="EXPLORE"
                  className={cn(
                    "group block py-5 px-3 transition-all duration-200 cursor-pointer focus-visible:outline-2 focus-visible:outline-[var(--accent)]",
                    isHovered
                      ? "bg-[var(--bg-secondary)] pl-5"
                      : "hover:bg-[var(--bg-secondary)]/50"
                  )}
                >
                  <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2">
                    <div className="flex items-baseline gap-4">
                      <span className={cn(
                        "font-mono text-xs transition-colors",
                        isHovered ? "text-[var(--accent)] font-bold" : "text-[var(--text-muted)]"
                      )}>
                        /{project.number}
                      </span>
                      <div>
                        <h2 className={cn(
                          "text-xl sm:text-2xl font-black uppercase tracking-tight transition-transform duration-200",
                          isHovered ? "text-[var(--text-primary)] translate-x-1" : "text-[var(--text-primary)]"
                        )}>
                          {project.title}
                        </h2>
                        <span className="font-mono text-xs text-[var(--text-muted)] block sm:inline">
                          CLIENT: {project.client}
                        </span>
                      </div>
                    </div>

                    <div className="flex items-center gap-3 self-end sm:self-auto">
                      <Label variant={isHovered ? "accent" : "outline"} size="sm">
                        {project.category}
                      </Label>
                      <span className="font-mono text-xs text-[var(--text-muted)]">
                        {project.year}
                      </span>
                      <ArrowRight className={cn(
                        "w-4 h-4 transition-transform duration-200",
                        isHovered
                          ? "translate-x-1 text-[var(--accent)]"
                          : "text-[var(--text-muted)] group-hover:translate-x-0.5"
                      )} />
                    </div>
                  </div>

                  {/* Expose Services & Metadata on Hover */}
                  <div className={cn(
                    "mt-3 pt-2 border-t border-[var(--border-subtle)] flex flex-wrap gap-2 text-[11px] font-mono transition-opacity duration-200",
                    isHovered ? "opacity-100" : "opacity-0 h-0 overflow-hidden sm:h-auto sm:opacity-40"
                  )}>
                    {project.services.map((srv) => (
                      <span key={srv} className="text-[var(--text-muted)]">
                        #{srv}
                      </span>
                    ))}
                  </div>
                </NextLink>
              );
            })}
          </div>

          {/* Right Column: Sticky Live Inspector Preview Canvas (Desktop) */}
          <div className="hidden lg:block lg:col-span-5 sticky top-24">
            {activeProject && (
              <div className="border border-[var(--border-subtle)] bg-[var(--surface-card)] p-4 shadow-sm transition-all duration-300">
                {/* Visual Canvas Area */}
                <div className="relative aspect-[16/10] w-full overflow-hidden bg-[var(--bg-secondary)] border border-[var(--border-subtle)] mb-4">
                  <Image
                    src={activeProject.heroImage}
                    alt={activeProject.title}
                    fill
                    sizes="500px"
                    className="object-cover transition-transform duration-500 hover:scale-105"
                  />
                  <div className="absolute top-3 left-3">
                    <Label variant="status" size="sm">
                      {activeProject.category}
                    </Label>
                  </div>
                  <div className="absolute top-3 right-3 font-mono text-xs font-bold text-[var(--text-primary)] bg-[var(--surface-card)] px-2 py-0.5 border border-[var(--border-subtle)]">
                    /{activeProject.number}
                  </div>
                </div>

                {/* Project Specs */}
                <div>
                  <div className="flex items-center justify-between font-mono text-xs text-[var(--text-muted)] mb-1">
                    <span>{activeProject.client}</span>
                    <span>{activeProject.year}</span>
                  </div>

                  <h3 className="text-xl font-bold uppercase tracking-tight text-[var(--text-primary)]">
                    {activeProject.title}
                  </h3>

                  <p className="text-xs text-[var(--text-secondary)] mt-2 leading-relaxed line-clamp-3">
                    {activeProject.shortDescription}
                  </p>

                  <div className="mt-4 pt-3 border-t border-[var(--border-subtle)] flex items-center justify-between">
                    <div className="flex flex-wrap gap-1">
                      {activeProject.services.slice(0, 2).map((s) => (
                        <span key={s} className="font-mono text-[10px] text-[var(--text-muted)]">
                          [{s}]
                        </span>
                      ))}
                    </div>

                    <NextLink
                      href={`/work/${activeProject.slug}`}
                      className="inline-flex items-center gap-1 font-mono text-xs font-semibold text-[var(--accent)] hover:underline"
                    >
                      <span>VIEW FULL CASE STUDY</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </NextLink>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      ) : (
        /* TACTILE EDITORIAL GRID (Prompt 05) */
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} layout="grid" />
          ))}
        </div>
      )}
    </div>
  );
}
