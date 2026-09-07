"use client";

import React, { useState } from "react";
import Image from "next/image";
import NextLink from "next/link";
import { ArrowUpRight, Terminal, Cpu, Sparkles, Lightbulb, Archive } from "lucide-react";
import { LabExperiment, LabStatus } from "@/lib/types";
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
        return <Sparkles className="w-3 h-3 text-[var(--accent)]" />;
      case "BUILDING":
        return <Cpu className="w-3 h-3 text-amber-500" />;
      case "EXPERIMENT":
        return <Terminal className="w-3 h-3 text-[var(--text-primary)]" />;
      case "IDEA":
        return <Lightbulb className="w-3 h-3 text-yellow-600" />;
      case "ARCHIVED":
        return <Archive className="w-3 h-3 text-[var(--text-muted)]" />;
    }
  };

  return (
    <div className="w-full">
      {/* Status Filter Bar */}
      <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-[var(--border-subtle)] mb-8">
        <div className="flex items-center gap-2 font-mono text-xs text-[var(--text-muted)] uppercase tracking-wider">
          <Terminal className="w-4 h-4 text-[var(--accent)]" />
          <span>FILTER BY STATUS:</span>
        </div>

        <div className="flex flex-wrap items-center gap-1.5">
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
                  "min-h-[38px] sm:min-h-[34px] px-3 py-1.5 font-mono text-xs uppercase tracking-wider border transition-all cursor-pointer focus-visible:outline-2 focus-visible:outline-[var(--accent)]",
                  selectedStatus === status
                    ? "border-[var(--text-primary)] bg-[var(--text-primary)] text-[var(--bg-primary)] font-bold"
                    : "border-[var(--border-subtle)] bg-[var(--surface-card)] text-[var(--text-secondary)] hover:border-[var(--text-primary)]"
                )}
              >
                <span>{status}</span>
                <span className="ml-1 text-[10px] opacity-60">({count})</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Experiments Grid with Playful Hover Physics */}
      {filteredExperiments.length === 0 ? (
        <div className="py-20 text-center border border-dashed border-[var(--border-subtle)]">
          <p className="font-mono text-xs text-[var(--text-muted)] uppercase">
            NO EXPERIMENTS IN THIS CATEGORY YET
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredExperiments.map((exp, idx) => {
            // Playful alternating tilt angles on hover with reduced-motion protection
            const tiltClass = idx % 2 === 0
              ? "hover:-rotate-0.5 motion-reduce:hover:rotate-0"
              : "hover:rotate-0.5 motion-reduce:hover:rotate-0";

            return (
              <NextLink
                key={exp.id}
                href={`/lab/${exp.slug}`}
                data-cursor="lab"
                data-cursor-text="RUN"
                className={cn(
                  "group block border border-[var(--border-subtle)] bg-[var(--surface-card)] transition-all duration-300 hover:border-[var(--text-primary)] hover:shadow-md flex flex-col justify-between h-full transform focus-visible:outline-2 focus-visible:outline-[var(--accent)]",
                  tiltClass
                )}
              >
                {/* Visual Canvas Area */}
                <div className="relative aspect-[16/10] w-full overflow-hidden bg-[var(--bg-secondary)] border-b border-[var(--border-subtle)]">
                  <Image
                    src={exp.visual}
                    alt={exp.name}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute top-3 left-3 flex items-center gap-1.5 bg-[var(--surface-card)]/90 backdrop-blur-xs px-2 py-0.5 border border-[var(--border-subtle)]">
                    {getStatusIcon(exp.status)}
                    <span className="font-mono text-[10px] font-bold text-[var(--text-primary)]">
                      {exp.status}
                    </span>
                  </div>
                  <div className="absolute top-3 right-3 font-mono text-xs font-bold text-[var(--text-muted)] bg-[var(--surface-card)] px-2 py-0.5 border border-[var(--border-subtle)]">
                    /{exp.number}
                  </div>
                </div>

                {/* Content Area */}
                <div className="p-5 sm:p-6 flex flex-col flex-1 justify-between">
                  <div>
                    <div className="flex items-center justify-between mb-1.5">
                      <span className="font-mono text-[11px] uppercase tracking-widest text-[var(--text-muted)]">
                        {exp.type}
                      </span>
                      <span className="font-mono text-xs text-[var(--text-muted)]">
                        {exp.year}
                      </span>
                    </div>

                    <h3 className="text-xl font-bold uppercase tracking-tight text-[var(--text-primary)] group-hover:text-[var(--accent)] transition-colors">
                      {exp.name}
                    </h3>

                    <p className="text-xs text-[var(--text-secondary)] mt-2.5 leading-relaxed">
                      {exp.shortDescription}
                    </p>
                  </div>

                  {/* Technology & Direct Run Trigger */}
                  <div className="mt-6 pt-4 border-t border-[var(--border-subtle)] flex items-center justify-between">
                    <div className="flex flex-wrap gap-1">
                      {exp.technology.slice(0, 3).map((tech) => (
                        <span
                          key={tech}
                          className="font-mono text-[10px] text-[var(--text-muted)] uppercase"
                        >
                          [{tech}]
                        </span>
                      ))}
                    </div>

                    <div className="flex items-center gap-1 font-mono text-xs text-[var(--text-primary)] group-hover:text-[var(--accent)] transition-colors">
                      <span className="text-[11px] font-semibold uppercase tracking-wider">Inspect</span>
                      <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </div>
                  </div>
                </div>
              </NextLink>
            );
          })}
        </div>
      )}
    </div>
  );
}
