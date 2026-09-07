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
          hour12: false,
        }).format(new Date());
        setCurrentTime(`${timeString} DHK`);
      } catch {
        setCurrentTime("12:00 UTC+6");
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
          "fixed top-0 left-0 right-0 z-40 transition-all duration-300",
          isScrolled ? "py-3 bg-transparent backdrop-blur-xs" : "py-4 md:py-6"
        )}
      >
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-8 flex items-center justify-between">
          {/* Top Left: Circular black badge `Yasin*` */}
          <NextLink
            href="/"
            aria-label="Yasin OS Home"
            data-cursor="link"
            className="w-10 h-10 md:w-11 md:h-11 rounded-full bg-[var(--os-ink)] text-white border border-[var(--os-ink)] flex items-center justify-center font-sans font-bold text-xs md:text-sm tracking-tight transition-transform duration-200 hover:scale-105 active:scale-95 shadow-xs select-none focus-visible:outline-2 focus-visible:outline-[var(--os-ink)]"
          >
            <span>Yasin*</span>
          </NextLink>

          {/* Desktop Navigation Pill Bar (Center) */}
          <nav
            role="navigation"
            aria-label="Main Navigation"
            className="hidden md:flex items-center gap-1 rounded-full border border-[var(--os-ink)] bg-white/90 backdrop-blur-md p-1.5 shadow-xs"
          >
            {navItems.map((item) => {
              const isActive =
                item.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(item.href);

              return (
                <NextLink
                  key={item.href}
                  href={item.href}
                  data-cursor="link"
                  aria-current={isActive ? "page" : undefined}
                  className={cn(
                    "px-3.5 py-1.5 rounded-full text-xs font-sans tracking-wide uppercase transition-all duration-200 select-none focus-visible:outline-2 focus-visible:outline-[var(--os-ink)]",
                    isActive
                      ? "bg-[var(--os-ink)] text-white font-semibold shadow-xs"
                      : "text-[var(--os-ink)] hover:bg-black/5 font-medium"
                  )}
                >
                  {item.label}
                </NextLink>
              );
            })}

            {/* Command palette pill trigger */}
            {onOpenCommand && (
              <button
                type="button"
                onClick={onOpenCommand}
                data-cursor="button"
                aria-label="Open Command Palette (Cmd+K)"
                className="ml-1 px-2.5 py-1.5 rounded-full text-xs font-sans border border-transparent hover:border-[var(--os-ink)]/30 hover:bg-black/5 text-[var(--os-ink)] transition-colors flex items-center gap-1.5 cursor-pointer"
              >
                <Command className="w-3 h-3 text-[var(--os-ink)]" />
                <span className="text-[10px] uppercase tracking-wider hidden lg:inline">CMD+K</span>
              </button>
            )}
          </nav>

          {/* Top Right: Tactile GET IN TOUCH pill button */}
          <div className="flex items-center gap-2">
            <NextLink
              href="/contact"
              data-cursor="button"
              className="hidden sm:inline-flex btn-pill px-4 py-2 text-xs font-sans font-semibold tracking-wide uppercase min-h-[40px] items-center justify-center select-none shadow-xs"
            >
              GET IN TOUCH
            </NextLink>

            {/* Mobile Menu & Command Toggle */}
            {onOpenCommand && (
              <button
                type="button"
                onClick={onOpenCommand}
                aria-label="Open Command Palette"
                className="md:hidden min-w-[40px] min-h-[40px] rounded-full border border-[var(--os-ink)] bg-white text-[var(--os-ink)] flex items-center justify-center p-2 focus-visible:outline-2 focus-visible:outline-[var(--os-ink)]"
              >
                <Command className="w-4 h-4" />
              </button>
            )}

            <button
              type="button"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label={isMobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
              aria-expanded={isMobileMenuOpen}
              className="md:hidden min-w-[40px] min-h-[40px] rounded-full border border-[var(--os-ink)] bg-white text-[var(--os-ink)] flex items-center justify-center p-2 focus-visible:outline-2 focus-visible:outline-[var(--os-ink)] cursor-pointer"
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
