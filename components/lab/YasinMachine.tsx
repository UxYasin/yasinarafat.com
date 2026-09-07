"use client";

import React, { useState, useEffect, useCallback } from "react";
import { RefreshCw, Copy, Check, Terminal, CornerDownLeft } from "lucide-react";
import { machineIdeas } from "@/data/machineIdeas";
import { MachineIdea, IdeaCategory } from "@/lib/types";
import { Label } from "@/components/ui/Label";
import { cn } from "@/lib/utils";

const categories: ("ALL" | IdeaCategory)[] = [
  "ALL",
  "BRANDING",
  "AI",
  "CODE",
  "PRODUCT",
  "DESIGN",
  "RANDOM",
];

interface YasinMachineProps {
  className?: string;
  compact?: boolean;
}

export function YasinMachine({ className, compact = false }: YasinMachineProps) {
  const [selectedCategory, setSelectedCategory] = useState<"ALL" | IdeaCategory>("ALL");
  const [currentIdea, setCurrentIdea] = useState<MachineIdea>(machineIdeas[0]);
  const [isRolling, setIsRolling] = useState(false);
  const [copied, setCopied] = useState(false);

  // Filter ideas by category
  const filteredIdeas = selectedCategory === "ALL"
    ? machineIdeas
    : machineIdeas.filter((item) => item.category === selectedCategory);

  // Generate random idea
  const rollIdea = useCallback(() => {
    setIsRolling(true);
    
    // Quick random shuffle feel
    setTimeout(() => {
      const pool = filteredIdeas.length > 0 ? filteredIdeas : machineIdeas;
      const otherIdeas = pool.filter((i) => i.id !== currentIdea.id);
      const chosen = otherIdeas.length > 0
        ? otherIdeas[Math.floor(Math.random() * otherIdeas.length)]
        : pool[0];
      
      setCurrentIdea(chosen);
      setIsRolling(false);
    }, 180);
  }, [filteredIdeas, currentIdea]);

  // Copy idea to clipboard
  const copyIdea = () => {
    const text = `Idea #${currentIdea.number} [${currentIdea.category}]: "${currentIdea.idea}" - ${currentIdea.observation || ""}`;
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  // Keyboard shortcut listener: Space or R to generate when focused or on page
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Don't trigger if user is typing in an input or textarea
      if (["INPUT", "TEXTAREA"].includes((e.target as HTMLElement)?.tagName)) {
        return;
      }
      if (e.code === "KeyR" && !e.metaKey && !e.ctrlKey) {
        e.preventDefault();
        rollIdea();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [rollIdea]);

  return (
    <div
      role="region"
      aria-label="The Yasin Machine Idea Synthesizer"
      className={cn(
        "border border-[var(--border-subtle)] bg-[var(--surface-card)] transition-all duration-300 shadow-sm",
        compact ? "p-5" : "p-6 md:p-8",
        className
      )}
    >
      {/* Top Device Telemetry Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-[var(--border-subtle)] mb-6">
        <div className="flex items-center gap-2.5">
          <div className="w-2.5 h-2.5 bg-[var(--accent)] animate-pulse" />
          <span className="font-mono text-xs font-bold uppercase tracking-wider text-[var(--text-primary)]">
            THE YASIN MACHINE // IDEA SYNTHESIZER
          </span>
          <span className="font-mono text-[10px] text-[var(--text-muted)] border border-[var(--border-subtle)] px-1.5 py-0.2 hidden sm:inline">
            v2.6 CLIENT-SIDE
          </span>
        </div>

        <div className="flex items-center gap-2">
          <Label variant="accent" size="sm">
            {currentIdea.category}
          </Label>
          <span className="font-mono text-xs font-bold text-[var(--text-muted)]">
            IDEA #{currentIdea.number}
          </span>
        </div>
      </div>

      {/* Category Filter Pills */}
      <div className="flex flex-wrap items-center gap-1.5 mb-6">
        <span className="font-mono text-[10px] text-[var(--text-muted)] uppercase tracking-wider mr-1 hidden sm:inline">
          FILTER:
        </span>
        {categories.map((cat) => (
          <button
            key={cat}
            type="button"
            onClick={() => {
              setSelectedCategory(cat);
              const newPool = cat === "ALL" ? machineIdeas : machineIdeas.filter((i) => i.category === cat);
              if (newPool.length > 0) {
                setCurrentIdea(newPool[Math.floor(Math.random() * newPool.length)]);
              }
            }}
            className={cn(
              "min-h-[36px] px-3 py-1.5 font-mono text-[11px] uppercase tracking-wider border transition-colors cursor-pointer focus-visible:outline-2 focus-visible:outline-[var(--accent)]",
              selectedCategory === cat
                ? "border-[var(--text-primary)] bg-[var(--text-primary)] text-[var(--bg-primary)] font-bold"
                : "border-[var(--border-subtle)] bg-[var(--bg-secondary)]/50 text-[var(--text-secondary)] hover:border-[var(--text-primary)]"
            )}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Main Idea Readout Display */}
      <div 
        aria-live="polite" 
        aria-atomic="true"
        className="min-h-[140px] flex flex-col justify-center py-4 px-2 border-l-2 border-[var(--accent)] pl-5 bg-[var(--bg-secondary)]/30 mb-6 transition-opacity duration-150"
      >
        <p
          className={cn(
            "text-xl sm:text-2xl md:text-3xl font-extrabold tracking-tight text-[var(--text-primary)] leading-snug transition-all duration-200",
            isRolling ? "opacity-30 blur-[1px] translate-y-1" : "opacity-100 translate-y-0"
          )}
        >
          &ldquo;{currentIdea.idea}&rdquo;
        </p>

        {currentIdea.observation && (
          <p
            className={cn(
              "font-mono text-xs text-[var(--text-muted)] mt-3 leading-relaxed transition-opacity duration-200",
              isRolling ? "opacity-20" : "opacity-90"
            )}
          >
            {"// "}Observation: {currentIdea.observation}
          </p>
        )}
      </div>

      {/* Bottom Controls Bar */}
      <div className="pt-4 border-t border-[var(--border-subtle)] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        {/* Keyboard hint */}
        <div className="flex items-center gap-2 font-mono text-[11px] text-[var(--text-muted)]">
          <Terminal className="w-3.5 h-3.5 text-[var(--accent)]" />
          <span>PRESS [R] ON KEYBOARD OR CLICK TO ROLL</span>
        </div>

        {/* Action Buttons */}
        <div className="flex items-center gap-2.5">
          <button
            type="button"
            onClick={copyIdea}
            className="min-h-[44px] inline-flex items-center gap-1.5 px-3.5 py-2 font-mono text-xs uppercase tracking-wider border border-[var(--border-subtle)] bg-[var(--surface-card)] hover:border-[var(--text-primary)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-all cursor-pointer focus-visible:outline-2 focus-visible:outline-[var(--accent)]"
            title="Copy idea text"
          >
            {copied ? <Check className="w-3.5 h-3.5 text-[var(--accent)]" /> : <Copy className="w-3.5 h-3.5" />}
            <span>{copied ? "COPIED" : "COPY"}</span>
          </button>

          <button
            type="button"
            onClick={rollIdea}
            disabled={isRolling}
            className="min-h-[44px] inline-flex items-center gap-2 px-4 py-2 font-mono text-xs font-bold uppercase tracking-widest bg-[var(--accent)] text-white hover:bg-[var(--accent-hover)] transition-all cursor-pointer shadow-xs active:translate-y-0.5 focus-visible:outline-2 focus-visible:outline-[var(--accent)]"
          >
            <RefreshCw className={cn("w-3.5 h-3.5", isRolling && "animate-spin motion-reduce:animate-none")} />
            <span>GENERATE AGAIN</span>
            <CornerDownLeft className="w-3 h-3 opacity-60 hidden sm:inline" />
          </button>
        </div>
      </div>
    </div>
  );
}
