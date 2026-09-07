"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence, useReducedMotion } from "motion/react";
import {
  Search,
  Sparkles,
  ArrowRight,
  Copy,
  Check,
  Terminal,
  X,
  ExternalLink,
} from "lucide-react";
import { navItems, siteConfig } from "@/data/siteConfig";
import { machineIdeas } from "@/data/machineIdeas";
import { projects } from "@/data/projects";
import { labExperiments } from "@/data/labExperiments";

interface CommandMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export function CommandMenu({ isOpen, onClose }: CommandMenuProps) {
  const router = useRouter();
  const shouldReduceMotion = useReducedMotion();
  const [query, setQuery] = useState("");
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [randomIdea, setRandomIdea] = useState<string | null>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        if (isOpen) {
          onClose();
        } else {
          // Open menu
          // We let parent or custom event handle it, or standard open
        }
      }
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  const handleNavigate = (href: string) => {
    onClose();
    router.push(href);
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("hello@yasinarafat.com");
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleTriggerIdea = () => {
    const random = machineIdeas[Math.floor(Math.random() * machineIdeas.length)];
    setRandomIdea(`[${random.category}] ${random.idea}`);
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div
        role="dialog"
        aria-modal="true"
        aria-label="YASIN OS Command Palette"
        className="fixed inset-0 z-50 flex items-start justify-center pt-16 sm:pt-24 px-4 bg-black/50 backdrop-blur-xs"
        onClick={onClose}
      >
        <motion.div
          initial={{ opacity: 0, scale: shouldReduceMotion ? 1 : 0.98, y: -8 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: shouldReduceMotion ? 1 : 0.98, y: -8 }}
          transition={{ duration: 0.18, ease: "easeOut" }}
          onClick={(e) => e.stopPropagation()}
          className="w-full max-w-xl bg-[var(--surface-card)] border border-[var(--border-strong)] shadow-2xl overflow-hidden"
        >
          {/* Top Search Input Bar */}
          <div className="flex items-center px-4 py-3 border-b border-[var(--border-subtle)] gap-3 bg-[var(--bg-secondary)]">
            <Search className="w-4 h-4 text-[var(--text-muted)] shrink-0" />
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Type a command or jump to section..."
              autoFocus
              className="w-full bg-transparent font-mono text-xs md:text-sm text-[var(--text-primary)] placeholder-[var(--text-muted)] focus:outline-hidden"
            />
            <button
              onClick={onClose}
              aria-label="Close dialog"
              className="p-1 text-[var(--text-muted)] hover:text-[var(--text-primary)]"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Machine Idea Banner if triggered */}
          {randomIdea && (
            <div className="p-3 bg-[var(--accent)] text-white font-mono text-xs border-b border-[var(--border-subtle)] flex items-start justify-between gap-2">
              <div>
                <span className="font-bold">YASIN MACHINE: </span>
                <span>{randomIdea}</span>
              </div>
              <button
                onClick={() => setRandomIdea(null)}
                className="hover:underline shrink-0 text-[10px]"
              >
                DISMISS
              </button>
            </div>
          )}

          {/* Command Options List */}
          <div className="p-2 max-h-[60vh] overflow-y-auto space-y-1">
            {/* Filter calculations */}
            {(() => {
              const q = query.trim().toLowerCase();
              const matchedNav = navItems.filter(
                (item) => item.label.toLowerCase().includes(q) || item.href.toLowerCase().includes(q)
              );
              const matchedProjects = projects.filter(
                (p) => p.title.toLowerCase().includes(q) || p.category.toLowerCase().includes(q)
              );
              const matchedLabs = labExperiments.filter(
                (l) => l.name.toLowerCase().includes(q) || l.type.toLowerCase().includes(q)
              );

              const hasMatches = matchedNav.length > 0 || matchedProjects.length > 0 || matchedLabs.length > 0;

              if (q && !hasMatches) {
                return (
                  <div className="p-6 text-center">
                    <p className="font-mono text-xs text-[var(--text-muted)]">NO COMMANDS OR ARTIFACTS MATCHING &quot;{query}&quot;</p>
                  </div>
                );
              }

              return (
                <>
                  {/* Navigation Group */}
                  {matchedNav.length > 0 && (
                    <>
                      <div className="px-3 py-1 font-mono text-[10px] uppercase tracking-widest text-[var(--text-muted)]">
                        Navigation {q && `(${matchedNav.length})`}
                      </div>
                      {matchedNav.map((item) => (
                        <button
                          key={item.href}
                          type="button"
                          onClick={() => handleNavigate(item.href)}
                          className="w-full flex items-center justify-between px-3 py-2 text-left hover:bg-[var(--bg-secondary)] transition-colors group cursor-pointer"
                        >
                          <div className="flex items-center gap-3">
                            <span className="font-mono text-xs text-[var(--accent)]">
                              /{item.number}
                            </span>
                            <span className="text-sm font-semibold tracking-tight text-[var(--text-primary)]">
                              {item.label}
                            </span>
                          </div>
                          <ArrowRight className="w-4 h-4 text-[var(--text-muted)] group-hover:text-[var(--text-primary)] group-hover:translate-x-1 transition-all" />
                        </button>
                      ))}
                    </>
                  )}

                  {/* Case Studies Group */}
                  {matchedProjects.length > 0 && (
                    <>
                      <div className="pt-2 px-3 py-1 font-mono text-[10px] uppercase tracking-widest text-[var(--text-muted)]">
                        Case Studies {q && `(${matchedProjects.length})`}
                      </div>
                      {matchedProjects.map((proj) => (
                        <button
                          key={proj.slug}
                          type="button"
                          onClick={() => handleNavigate(`/work/${proj.slug}`)}
                          className="w-full flex items-center justify-between px-3 py-2 text-left hover:bg-[var(--bg-secondary)] transition-colors group cursor-pointer"
                        >
                          <div className="flex items-center gap-3">
                            <span className="font-mono text-xs text-[var(--text-muted)]">
                              #{proj.number}
                            </span>
                            <span className="text-sm font-medium text-[var(--text-primary)]">
                              {proj.title}
                            </span>
                            <span className="font-mono text-[10px] text-[var(--accent)] border border-[var(--border-subtle)] px-1.5 py-0.5">
                              {proj.category}
                            </span>
                          </div>
                          <ArrowRight className="w-4 h-4 text-[var(--text-muted)] group-hover:text-[var(--text-primary)] group-hover:translate-x-1 transition-all" />
                        </button>
                      ))}
                    </>
                  )}

                  {/* Lab Experiments Group */}
                  {matchedLabs.length > 0 && (
                    <>
                      <div className="pt-2 px-3 py-1 font-mono text-[10px] uppercase tracking-widest text-[var(--text-muted)]">
                        Lab Experiments {q && `(${matchedLabs.length})`}
                      </div>
                      {matchedLabs.map((lab) => (
                        <button
                          key={lab.slug}
                          type="button"
                          onClick={() => handleNavigate(`/lab/${lab.slug}`)}
                          className="w-full flex items-center justify-between px-3 py-2 text-left hover:bg-[var(--bg-secondary)] transition-colors group cursor-pointer"
                        >
                          <div className="flex items-center gap-3">
                            <span className="font-mono text-xs text-[var(--text-muted)]">
                              EXP
                            </span>
                            <span className="text-sm font-medium text-[var(--text-primary)]">
                              {lab.name}
                            </span>
                            <span className="font-mono text-[10px] text-[var(--accent)] border border-[var(--border-subtle)] px-1.5 py-0.5">
                              {lab.type}
                            </span>
                          </div>
                          <ArrowRight className="w-4 h-4 text-[var(--text-muted)] group-hover:text-[var(--text-primary)] group-hover:translate-x-1 transition-all" />
                        </button>
                      ))}
                    </>
                  )}

                  {/* Interactive Actions (shown when search is empty or matches action terms) */}
                  {(!q || "idea random yasin machine email copy contact".includes(q)) && (
                    <>
                      <div className="pt-2 px-3 py-1 font-mono text-[10px] uppercase tracking-widest text-[var(--text-muted)]">
                        Interactive Tools & Actions
                      </div>

                      <button
                        type="button"
                        onClick={handleTriggerIdea}
                        className="w-full flex items-center justify-between px-3 py-2 text-left hover:bg-[var(--bg-secondary)] transition-colors group cursor-pointer"
                      >
                        <div className="flex items-center gap-3">
                          <Sparkles className="w-4 h-4 text-[var(--accent)]" />
                          <span className="text-sm font-medium text-[var(--text-primary)]">
                            Trigger Random Creative Idea (Yasin Machine)
                          </span>
                        </div>
                        <span className="font-mono text-[10px] text-[var(--text-muted)]">
                          IDEA
                        </span>
                      </button>

                      <button
                        type="button"
                        onClick={handleCopyEmail}
                        className="w-full flex items-center justify-between px-3 py-2 text-left hover:bg-[var(--bg-secondary)] transition-colors group cursor-pointer"
                      >
                        <div className="flex items-center gap-3">
                          {copiedEmail ? (
                            <Check className="w-4 h-4 text-emerald-600" />
                          ) : (
                            <Copy className="w-4 h-4 text-[var(--text-muted)]" />
                          )}
                          <span className="text-sm font-medium text-[var(--text-primary)]">
                            {copiedEmail ? "Copied to clipboard!" : "Copy Inquiries Email"}
                          </span>
                        </div>
                        <span className="font-mono text-[10px] text-[var(--text-muted)]">
                          hello@yasinarafat.com
                        </span>
                      </button>
                    </>
                  )}

                  {/* External Archives (shown when query is empty) */}
                  {!q && (
                    <>
                      <div className="pt-2 px-3 py-1 font-mono text-[10px] uppercase tracking-widest text-[var(--text-muted)]">
                        External Archives
                      </div>
                      {siteConfig.socials.slice(0, 3).map((soc) => (
                        <a
                          key={soc.name}
                          href={soc.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-full flex items-center justify-between px-3 py-2 text-left hover:bg-[var(--bg-secondary)] transition-colors group"
                        >
                          <div className="flex items-center gap-3">
                            <Terminal className="w-4 h-4 text-[var(--text-muted)]" />
                            <span className="text-sm text-[var(--text-primary)]">
                              {soc.name}
                            </span>
                          </div>
                          <ExternalLink className="w-3.5 h-3.5 text-[var(--text-muted)]" />
                        </a>
                      ))}
                    </>
                  )}
                </>
              );
            })()}
          </div>

          {/* Footer Bar inside Command Menu */}
          <div className="p-3 border-t border-[var(--border-subtle)] bg-[var(--bg-secondary)] flex items-center justify-between font-mono text-[10px] text-[var(--text-muted)]">
            <span>PRESS ESC TO CLOSE</span>
            <span className="text-[var(--accent)] font-semibold">
              YASIN OS v2.6
            </span>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
