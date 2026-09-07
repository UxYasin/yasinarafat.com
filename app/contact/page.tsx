import React from "react";
import { ArrowUpRight, Mail } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { OSWindow } from "@/components/ui/OSWindow";
import { siteConfig } from "@/data/siteConfig";
import { ContactForm, CopyEmailButton } from "@/components/contact/ContactForm";

export const metadata = {
  title: "Contact // YASIN OS",
  description: "Have an idea? Let's make something real. Inquiries for brand architecture, design systems, and AI exploratory tools.",
};

export default function ContactPage() {
  return (
    <div className="w-full bg-[var(--os-butter)] text-[var(--os-ink)] min-h-screen pt-20 md:pt-28 pb-24 transition-colors duration-300">
      <Container>
        {/* Header */}
        <div className="pb-10 mb-12 border-b border-[var(--os-ink)]/20">
          <div className="flex items-center gap-2 mb-3">
            <span className="w-2.5 h-2.5 rounded-full bg-[var(--os-ink)]" />
            <span className="font-sans text-xs font-semibold uppercase tracking-wider text-[var(--os-ink)]/70">
              ROOM 04 // CONTACT
            </span>
          </div>

          <h1 className="font-serif text-6xl sm:text-7xl md:text-8xl lg:text-9xl tracking-tight text-[var(--os-ink)] leading-[0.92]">
            Have
            <br />
            An Idea?
          </h1>

          <p className="mt-4 font-sans text-xl sm:text-2xl text-[var(--os-ink)]/90 font-medium">
            Let&apos;s make something real.
          </p>

          {/* Quick Contact Action Pills */}
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <CopyEmailButton />
            <a
              href="mailto:hello@yasinarafat.com"
              className="btn-pill px-5 py-2.5 text-xs font-sans font-semibold tracking-wide uppercase inline-flex items-center gap-2"
            >
              <Mail className="w-4 h-4" />
              <span>OPEN DIRECT EMAIL</span>
            </a>
          </div>
        </div>

        {/* Form and Details Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left: Interactive Form in OSWindow */}
          <div className="lg:col-span-7">
            <OSWindow
              title="INQUIRY DISPATCH // YASIN OS"
              subtitle="Direct Comm Channel"
              surface="cream"
              showDots
              radius="2xl"
              className="p-6 md:p-8"
            >
              <ContactForm />
            </OSWindow>
          </div>

          {/* Right: Studio Details & Socials */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-6 rounded-[24px] border border-[var(--os-ink)] bg-white shadow-xs">
              <span className="font-sans text-xs font-bold uppercase tracking-wider text-[var(--os-ink)]/60 block mb-2">
                AVAILABILITY
              </span>
              <div className="flex items-center gap-2 font-sans text-sm font-semibold">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-600 animate-pulse" />
                <span>OPEN FOR Q2 / Q3 2026 COMMISSIONS</span>
              </div>
              <p className="font-sans text-xs text-[var(--os-ink)]/80 mt-2 leading-relaxed">
                Accepting select brand architecture, design systems, and creative technology collaborations.
              </p>
            </div>

            <div className="p-6 rounded-[24px] border border-[var(--os-ink)] bg-white shadow-xs">
              <span className="font-sans text-xs font-bold uppercase tracking-wider text-[var(--os-ink)]/60 block mb-2">
                STUDIO LOCATION
              </span>
              <div className="font-sans text-sm font-semibold text-[var(--os-ink)]">
                DHAKA, BANGLADESH (UTC+6)
              </div>
              <p className="font-sans text-xs text-[var(--os-ink)]/80 mt-1">
                Collaborating globally across Tokyo, Singapore, Zurich, and North America.
              </p>
            </div>

            <div className="p-6 rounded-[24px] border border-[var(--os-ink)] bg-white shadow-xs">
              <span className="font-sans text-xs font-bold uppercase tracking-wider text-[var(--os-ink)]/60 block mb-3">
                EXTERNAL ARCHIVES
              </span>
              <div className="flex flex-wrap gap-2">
                {siteConfig.socials.map((soc) => (
                  <a
                    key={soc.name}
                    href={soc.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3 py-1.5 rounded-full border border-[var(--os-ink)] bg-[var(--os-cream)] text-xs font-sans font-medium text-[var(--os-ink)] hover:bg-[var(--os-ink)] hover:text-white transition-colors inline-flex items-center gap-1.5"
                  >
                    <span>{soc.name}</span>
                    <ArrowUpRight className="w-3 h-3" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
