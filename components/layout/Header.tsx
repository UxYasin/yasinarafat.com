"use client";

import React, { useState, useEffect } from "react";
import NextLink from "next/link";
import { usePathname } from "next/navigation";
import { Command, Menu, X } from "lucide-react";
import { navItems } from "@/data/siteConfig";
import { cn } from "@/lib/utils";
import { MobileMenu } from "./MobileMenu";

interface HeaderProps {
  onOpenCommand?: () => void;
}

export function Header({ onOpenCommand }: HeaderProps) {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [currentTime, setCurrentTime] = useState("");
  const [prevPathname, setPrevPathname] = useState(pathname);

  // Sync mobile menu close upon route change during render
  if (prevPathname !== pathname) {
    setPrevPathname(pathname);
    setIsMobileMenuOpen(false);
  }

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Update live clock for Dhaka (UTC+6)
  useEffect(() => {
    const updateTime = () => {
      try {
        const timeString = new Intl.DateTimeFormat("en-US", {
          timeZone: "Asia/Dhaka",
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
          hour12: false,
        }).format(new Date());
        setCurrentTime(`${timeString} DHK`);
      } catch {
        setCurrentTime("12:00:00 UTC+6");
      }
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <header
        role="banner"
        className={cn(
          "fixed top-0 left-0 right-0 z-40 transition-all duration-300 border-b",
          isScrolled
            ? "bg-[var(--bg-primary)]/90 backdrop-blur-md border-[var(--border-subtle)] py-3 shadow-[0_1px_3px_rgba(0,0,0,0.02)]"
            : "bg-[var(--bg-primary)] border-transparent py-5 md:py-6"
        )}
      >
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 flex items-center justify-between">
          {/* Distinctive Typographic Wordmark */}
          <NextLink
            href="/"
            aria-label="YASIN OS Home"
            data-cursor="link"
            className="group flex items-baseline gap-2 text-[var(--text-primary)] select-none focus-visible:outline-2 focus-visible:outline-[var(--accent)]"
          >
            <span className="text-xl md:text-2xl font-extrabold tracking-tighter uppercase font-sans group-hover:text-[var(--accent)] transition-colors duration-200">
              YASIN
            </span>
            <span className="font-mono text-[10px] tracking-widest text-[var(--text-muted)] group-hover:text-[var(--text-primary)] transition-colors uppercase border border-[var(--border-subtle)] px-1.5 py-0.5">
              OS v2.6
            </span>
          </NextLink>

          {/* Desktop Live Telemetry / Status (Center) */}
          <div className="hidden lg:flex items-center gap-4 text-xs font-mono text-[var(--text-muted)]">
            <span className="inline-flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-[var(--accent)] animate-pulse" />
              <span className="text-[var(--text-secondary)]">ACTIVE</span>
            </span>
            <span className="text-[var(--border-subtle)]">|</span>
            <span className="tabular-nums">{currentTime || "UTC+6"}</span>
            <span className="text-[var(--border-subtle)]">|</span>
            <span className="text-[11px] tracking-wide text-[var(--text-secondary)] uppercase">
              15Y BRANDING × AI BUILDER
            </span>
          </div>

          {/* Desktop Navigation Links */}
          <nav
            role="navigation"
            aria-label="Main Navigation"
            className="hidden md:flex items-center gap-1 sm:gap-2"
          >
            {navItems.map((item) => {
              const isActive =
                pathname === item.href ||
                (item.href !== "/" && pathname.startsWith(item.href));

              return (
                <NextLink
                  key={item.href}
                  href={item.href}
                  data-cursor="link"
                  aria-current={isActive ? "page" : undefined}
                  className={cn(
                    "relative px-3 py-1.5 font-mono text-xs tracking-widest uppercase transition-all duration-200 group focus-visible:outline-2 focus-visible:outline-[var(--accent)]",
                    isActive
                      ? "text-[var(--text-primary)] font-bold"
                      : "text-[var(--text-secondary)] hover:text-[var(--text-primary)]"
                  )}
                >
                  <span className="flex items-center gap-1.5">
                    <span
                      className={cn(
                        "text-[9px] font-normal transition-colors",
                        isActive ? "text-[var(--accent)]" : "text-[var(--text-muted)]"
                      )}
                    >
                      /{item.number}
                    </span>
                    <span>{item.label}</span>
                  </span>
                  {isActive && (
                    <span className="absolute bottom-0 left-3 right-3 h-[2px] bg-[var(--accent)]" />
                  )}
                </NextLink>
              );
            })}

            {/* Quick Command Palette Button */}
            {onOpenCommand && (
              <button
                type="button"
                onClick={onOpenCommand}
                data-cursor="button"
                aria-label="Open Command Palette (Cmd+K)"
                className="ml-2 inline-flex items-center gap-1.5 px-2.5 py-1.5 text-xs font-mono border border-[var(--border-subtle)] bg-[var(--bg-secondary)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:border-[var(--text-primary)] transition-colors cursor-pointer select-none"
              >
                <Command className="w-3 h-3 text-[var(--text-muted)]" />
                <span className="text-[10px] tracking-wider hidden xl:inline">CMD+K</span>
              </button>
            )}
          </nav>

          {/* Mobile Menu & Command Actions */}
          <div className="flex md:hidden items-center gap-2">
            {onOpenCommand && (
              <button
                type="button"
                onClick={onOpenCommand}
                aria-label="Open Command Palette"
                className="min-w-[44px] min-h-[44px] flex items-center justify-center p-2 border border-[var(--border-subtle)] text-[var(--text-primary)] bg-[var(--bg-secondary)] focus-visible:outline-2 focus-visible:outline-[var(--accent)]"
              >
                <Command className="w-4 h-4" />
              </button>
            )}
            <button
              type="button"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label={isMobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
              aria-expanded={isMobileMenuOpen}
              className="min-w-[44px] min-h-[44px] flex items-center justify-center p-2 border border-[var(--border-strong)] text-[var(--text-primary)] bg-[var(--surface-card)] focus-visible:outline-2 focus-visible:outline-[var(--accent)] cursor-pointer"
            >
              {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Full-Screen Mobile Navigation Overlay */}
      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
        currentTime={currentTime}
      />
    </>
  );
}
