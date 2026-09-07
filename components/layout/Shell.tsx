"use client";

import React, { useState } from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { CommandMenu } from "./CommandMenu";
import { PageTransition } from "./PageTransition";
import { Cursor } from "@/components/ui/Cursor";

interface ShellProps {
  children: React.ReactNode;
}

export function Shell({ children }: ShellProps) {
  const [isCommandOpen, setIsCommandOpen] = useState(false);

  return (
    <div className="relative min-h-screen flex flex-col bg-[var(--bg-primary)] text-[var(--text-primary)] selection:bg-[var(--accent)] selection:text-white">
      {/* Accessibility Skip Link */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 z-50 px-4 py-2 bg-[var(--accent)] text-white font-mono text-xs font-bold"
      >
        Skip to main content
      </a>

      {/* Global Custom Cursor System */}
      <Cursor />

      {/* Persistent Global Header */}
      <Header onOpenCommand={() => setIsCommandOpen(true)} />

      {/* Global Interactive Command Layer (Cmd+K) */}
      <CommandMenu
        isOpen={isCommandOpen}
        onClose={() => setIsCommandOpen(false)}
      />

      {/* Main Content Area with Page Transitions */}
      <main id="main-content" className="flex-1 w-full pt-20 md:pt-24 flex flex-col">
        <PageTransition>{children}</PageTransition>
      </main>

      {/* Persistent Global Footer */}
      <Footer />
    </div>
  );
}
