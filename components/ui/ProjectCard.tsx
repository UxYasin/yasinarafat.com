"use client";

import React from "react";
import Image from "next/image";
import NextLink from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Project } from "@/lib/types";
import { Label } from "@/components/ui/Label";

interface ProjectCardProps {
  project: Project;
  layout?: "grid" | "list" | "featured";
  index?: number;
}

export function ProjectCard({ project, layout = "grid" }: ProjectCardProps) {
  if (layout === "list") {
    return (
      <NextLink
        href={`/work/${project.slug}`}
        data-cursor="project"
        data-cursor-text="EXPLORE"
        className="group block border-b border-[var(--border-subtle)] py-6 md:py-8 transition-colors duration-200 hover:bg-[var(--bg-secondary)] focus-visible:outline-2 focus-visible:outline-[var(--accent)]"
      >
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="flex items-baseline gap-4 md:gap-8">
            <span className="font-mono text-xs text-[var(--text-muted)] group-hover:text-[var(--accent)] transition-colors">
              /{project.number}
            </span>
            <div>
              <h3 className="text-xl md:text-2xl font-bold tracking-tight text-[var(--text-primary)] group-hover:translate-x-1 transition-transform duration-200">
                {project.title}
              </h3>
              <p className="text-xs md:text-sm text-[var(--text-secondary)] mt-1 line-clamp-1">
                {project.shortDescription}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-6 justify-between md:justify-end">
            <div className="flex items-center gap-2">
              <Label variant="outline" size="sm">{project.category}</Label>
              <span className="font-mono text-xs text-[var(--text-muted)]">{project.year}</span>
            </div>
            <div className="w-8 h-8 rounded-full border border-[var(--border-subtle)] flex items-center justify-center group-hover:border-[var(--accent)] group-hover:bg-[var(--accent)] group-hover:text-white transition-all duration-200">
              <ArrowUpRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </div>
          </div>
        </div>
      </NextLink>
    );
  }

  return (
    <NextLink
      href={`/work/${project.slug}`}
      data-cursor="project"
      data-cursor-text="VIEW"
      className="group block border border-[var(--border-subtle)] bg-[var(--surface-card)] transition-all duration-300 hover:border-[var(--text-primary)] hover:shadow-sm flex flex-col h-full focus-visible:outline-2 focus-visible:outline-[var(--accent)]"
    >
      {/* Visual Canvas Area */}
      <div className="relative aspect-[16/10] w-full overflow-hidden bg-[var(--bg-secondary)] border-b border-[var(--border-subtle)]">
        <Image
          src={project.heroImage}
          alt={project.title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.03]"
        />
        <div className="absolute top-3 left-3">
          <Label variant="status" size="sm">
            {project.category}
          </Label>
        </div>
        <div className="absolute top-3 right-3 font-mono text-xs font-bold text-[var(--text-primary)] bg-[var(--surface-card)] px-2 py-0.5 border border-[var(--border-subtle)]">
          /{project.number}
        </div>
      </div>

      {/* Editorial Content Area */}
      <div className="p-5 md:p-6 flex flex-col flex-1 justify-between bg-transparent">
        <div>
          <div className="flex items-center justify-between mb-2">
            <span className="font-mono text-[11px] uppercase tracking-widest text-[var(--text-muted)]">
              {project.client}
            </span>
            <span className="font-mono text-xs text-[var(--text-muted)]">
              {project.year}
            </span>
          </div>
          <h3 className="text-xl md:text-2xl font-bold tracking-tight text-[var(--text-primary)] group-hover:text-[var(--accent)] transition-colors duration-200">
            {project.title}
          </h3>
          <p className="text-xs md:text-sm text-[var(--text-secondary)] mt-2 leading-relaxed">
            {project.shortDescription}
          </p>
        </div>

        {/* Services & Action row */}
        <div className="mt-6 pt-4 border-t border-[var(--border-subtle)] flex items-center justify-between">
          <div className="flex flex-wrap gap-1.5">
            {project.services.slice(0, 2).map((service) => (
              <span
                key={service}
                className="font-mono text-[10px] text-[var(--text-muted)] uppercase"
              >
                #{service}
              </span>
            ))}
          </div>
          <div className="flex items-center gap-1 font-mono text-xs text-[var(--text-primary)] group-hover:text-[var(--accent)] transition-colors">
            <span className="text-[11px] font-medium uppercase tracking-wider">Case Study</span>
            <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </div>
        </div>
      </div>
    </NextLink>
  );
}
