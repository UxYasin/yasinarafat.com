"use client";

import React from "react";
import Image from "next/image";
import NextLink from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Project } from "@/lib/types";
import { CircleButton } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

const pastelCardThemes = [
  "bg-[#E9B7C8]", // Pink
  "bg-[#F2A65A]", // Orange
  "bg-[#B9AFE9]", // Lavender
  "bg-[#A9DCCB]", // Mint
  "bg-[#F6D76B]", // Butter
  "bg-[#AFCFE8]", // Sky
];

interface ProjectCardProps {
  project: Project;
  layout?: "grid" | "list" | "featured";
  index?: number;
}

export function ProjectCard({ project, layout = "grid", index = 0 }: ProjectCardProps) {
  const cardBg = pastelCardThemes[index % pastelCardThemes.length];

  if (layout === "list") {
    return (
      <NextLink
        href={`/work/${project.slug}`}
        data-cursor="project"
        data-cursor-text="VIEW"
        className="group block border border-[var(--os-ink)] rounded-[20px] p-4 md:p-6 mb-3 bg-[var(--os-paper)] hover:bg-[var(--os-cream)] transition-all duration-200 focus-visible:outline-2 focus-visible:outline-[var(--os-ink)]"
      >
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="flex items-baseline gap-4 md:gap-6">
            <span className="font-sans text-xs font-semibold text-[var(--os-ink)]/60">
              #{project.number}
            </span>
            <div>
              <h3 className="font-serif text-2xl md:text-3xl text-[var(--os-ink)] tracking-tight">
                {project.title}
              </h3>
              <p className="font-sans text-xs md:text-sm text-[var(--os-ink)]/70 mt-0.5 line-clamp-1">
                {project.shortDescription}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-4 justify-between md:justify-end">
            <div className="flex items-center gap-2">
              <span className="font-sans text-xs px-3 py-1 rounded-full border border-[var(--os-ink)] bg-white text-[var(--os-ink)]">
                {project.category}
              </span>
              <span className="font-sans text-xs text-[var(--os-ink)]/60">{project.year}</span>
            </div>
            <CircleButton size="sm" />
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
      className={cn(
        "group block border border-[var(--os-ink)] rounded-[24px] md:rounded-[28px] p-4 md:p-5 transition-all duration-300 ease-out hover:-translate-y-1 shadow-xs focus-visible:outline-2 focus-visible:outline-[var(--os-ink)] focus-visible:outline-offset-2",
        cardBg
      )}
    >
      {/* Top Metadata Header */}
      <div className="flex items-center justify-between mb-3 px-1">
        <div className="flex items-center gap-2">
          <span className="font-sans text-xs md:text-sm font-semibold tracking-tight text-[var(--os-ink)]">
            {project.title}
          </span>
          <span className="font-sans text-xs text-[var(--os-ink)]/50">•</span>
          <span className="font-sans text-xs text-[var(--os-ink)]/70">
            {project.year}
          </span>
        </div>
        <div className="flex items-center gap-1 text-[var(--os-ink)]" aria-hidden="true">
          <span className="w-1.5 h-1.5 rounded-full bg-[var(--os-ink)]" />
          <span className="w-1.5 h-1.5 rounded-full bg-[var(--os-ink)]" />
          <span className="w-1.5 h-1.5 rounded-full bg-[var(--os-ink)]" />
        </div>
      </div>

      {/* Rounded Image Container */}
      <div className="relative aspect-[16/11] md:aspect-[4/3] w-full overflow-hidden rounded-[18px] md:rounded-[22px] border border-[var(--os-ink)] bg-white">
        <Image
          src={project.heroImage}
          alt={project.title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.03]"
        />

        {/* Circular Action Button bottom-right */}
        <div className="absolute bottom-3 right-3 md:bottom-4 md:right-4 z-10">
          <div className="w-10 h-10 md:w-11 md:h-11 rounded-full bg-[var(--os-ink)] text-white border border-[var(--os-ink)] flex items-center justify-center transition-transform duration-200 group-hover:scale-110 shadow-md">
            <ArrowUpRight className="w-4 h-4 md:w-5 md:h-5 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </div>
        </div>
      </div>

      {/* Bottom Category Tag */}
      <div className="mt-3.5 px-1 flex items-center justify-between">
        <span className="font-sans text-[11px] uppercase tracking-wider font-semibold text-[var(--os-ink)]/80">
          {project.category}
        </span>
        <span className="font-sans text-[11px] text-[var(--os-ink)]/60">
          {project.client}
        </span>
      </div>
    </NextLink>
  );
}
