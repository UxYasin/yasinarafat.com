"use client";

import React, { useState } from "react";
import Image from "next/image";
import NextLink from "next/link";
import { Terminal, Cpu, Sparkles, Lightbulb, Archive } from "lucide-react";
import { LabExperiment, LabStatus } from "@/lib/types";
import { CircleButton } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

const statuses: ("ALL" | LabStatus)[] = [
  "ALL",
  "LIVE",
  "BUILDING",
  "EXPERIMENT",
  "IDEA",
  "ARCHIVED",
];

interface LabGridProps {
  experiments: LabExperiment[];
}

export function LabGrid({ experiments }: LabGridProps) {
  const [selectedStatus, setSelectedStatus] = useState<"ALL" | LabStatus>("ALL");

  const filteredExperiments = selectedStatus === "ALL"
    ? experiments
    : experiments.filter((e) => e.status === selectedStatus);

  const getStatusIcon = (status: LabStatus) => {
    switch (status) {
      case "LIVE":
        return <Sparkles className="w-3 h-3 text-emerald-600" />;
      case "BUILDING":
        return <Cpu className="w-3 h-3 text-amber-600" />;
      case "EXPERIMENT":
        return <Terminal className="w-3 h-3 text-[var(--os-ink)]" />;
      case "IDEA":
        return <Lightbulb className="w-3 h-3 text-yellow-600" />;
      case "ARCHIVED":
        return <Archive className="w-3 h-3 text-neutral-500" />;
    }
  };

  return (
    <div className="w-full">
      {/* Status Filter Pill Bar */}
      <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-[var(--os-ink)]/20 mb-8">
        <div className="flex items-center gap-2 font-sans text-xs font-semibold uppercase tracking-wider text-[var(--os-ink)]/70">
          <span>STATUS:</span>
        </div>

        <div className="flex flex-wrap items-center gap-2">
          {statuses.map((status) => {
            const count = status === "ALL"
              ? experiments.length
              : experiments.filter((e) => e.status === status).length;

            return (
              <button
                key={status}
                type="button"
                onClick={() => setSelectedStatus(status)}
                className={cn(
                  "px-3.5 py-1.5 rounded-full border border-[var(--os-ink)] font-sans text-xs font-semibold tracking-wide transition-all cursor-pointer",
                  selectedStatus === status
                    ? "bg-[var(--os-ink)] text-white shadow-xs"
                    : "bg-white text-[var(--os-ink)] hover:bg-white/80"
                )}
              >
                <span>{status}</span>
                <span className="ml-1 text-[10px] opacity-60">({count})</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Experiments Grid */}
      {filteredExperiments.length === 0 ? (
        <div className="py-20 text-center rounded-[24px] border border-dashed border-[var(--os-ink)]/40 bg-white/40">
          <p className="font-sans text-xs uppercase tracking-wider text-[var(--os-ink)]/60">
            NO EXPERIMENTS IN THIS CATEGORY YET
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredExperiments.map((exp) => (
            <NextLink
              key={exp.id}
              href={`/lab/${exp.slug}`}
              data-cursor="lab"
              data-cursor-text="RUN"
              className="group block border border-[var(--os-ink)] rounded-[24px] bg-white p-4 sm:p-5 transition-all duration-300 hover:-translate-y-1 shadow-xs flex flex-col justify-between h-full focus-visible:outline-2 focus-visible:outline-[var(--os-ink)]"
            >
              <div>
                {/* Header Row */}
                <div className="flex items-center justify-between mb-3 px-1">
                  <div className="flex items-center gap-1.5 px-2.5 py-0.5 rounded-full border border-[var(--os-ink)] bg-[var(--os-cream)] text-[var(--os-ink)] font-sans text-[11px] font-semibold">
                    {getStatusIcon(exp.status)}
                    <span>{exp.status}</span>
                  </div>
                  <span className="font-sans text-xs font-semibold text-[var(--os-ink)]/50">
                    EXP #{exp.number}
                  </span>
                </div>

                {/* Inner Image Container */}
                <div className="relative aspect-[16/10] w-full overflow-hidden rounded-[18px] border border-[var(--os-ink)] bg-neutral-50 mb-4">
                  <Image
                    src={exp.visual}
                    alt={exp.name}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute bottom-2.5 right-2.5">
                    <CircleButton size="sm" />
                  </div>
                </div>

                <div className="px-1">
                  <span className="font-sans text-[11px] uppercase tracking-wider font-semibold text-[var(--os-ink)]/60">
                    {exp.type} • {exp.year}
                  </span>
                  <h3 className="font-serif text-2xl md:text-3xl text-[var(--os-ink)] mt-1 group-hover:underline">
                    {exp.name}
                  </h3>
                  <p className="font-sans text-xs text-[var(--os-ink)]/80 mt-2 leading-relaxed line-clamp-2">
                    {exp.shortDescription}
                  </p>
                </div>
              </div>

              {/* Technology Tags Bottom Row */}
              <div className="mt-5 pt-3.5 border-t border-[var(--os-ink)]/20 px-1 flex flex-wrap gap-1">
                {exp.technology.slice(0, 3).map((tech) => (
                  <span
                    key={tech}
                    className="font-sans text-[10px] font-semibold px-2 py-0.5 rounded-md border border-[var(--os-ink)]/30 bg-[var(--os-paper)] text-[var(--os-ink)]"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </NextLink>
          ))}
        </div>
      )}
    </div>
  );
}
