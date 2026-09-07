import React from "react";
import { ArrowUpRight, Terminal, Sparkles } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { siteConfig } from "@/data/siteConfig";
import { ContactForm, CopyEmailButton } from "@/components/contact/ContactForm";

export const metadata = {
  title: "Contact // YASIN OS",
  description: "Have an idea? Let's make something real. Inquiries for brand architecture, design systems, and AI exploratory tools.",
};

export default function ContactPage() {
  const currentYear = new Date().getFullYear();

  return (
    <div className="w-full bg-[var(--bg-primary)]">
      {/* 1. Header Context & Headline (Prompt 10) */}
      <Section spacing="md" className="border-b border-[var(--border-subtle)] pb-12">
        <Container>
          <div className="max-w-4xl pb-8 border-b border-[var(--border-subtle)]">
            <div className="flex items-center gap-2 mb-3">
              <span className="w-2 h-2 bg-[var(--accent)]" />
              <span className="font-mono text-xs uppercase tracking-widest text-[var(--accent)] font-semibold">
                INDEX // 04 • DIRECT INITIATION
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tighter uppercase font-sans text-[var(--text-primary)] leading-[0.94] mb-4">
              HAVE AN IDEA?
            </h1>

            <p className="text-2xl sm:text-3xl text-[var(--text-secondary)] font-medium">
              Let&apos;s make something real.
            </p>
          </div>

          {/* Availability & Telemetry Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-8 font-mono text-xs">
            <div className="p-4 border border-[var(--border-subtle)] bg-[var(--surface-card)]">
              <span className="text-[var(--text-muted)] uppercase block mb-1">AVAILABILITY STATUS</span>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span className="text-[var(--text-primary)] font-bold">OPEN FOR Q2 / Q3 COMMISSIONS</span>
              </div>
            </div>

            <div className="p-4 border border-[var(--border-subtle)] bg-[var(--surface-card)]">
              <span className="text-[var(--text-muted)] uppercase block mb-1">STUDIO LOCATION</span>
              <span className="text-[var(--text-primary)] font-bold">DHAKA, BANGLADESH (UTC+6)</span>
            </div>

            <div className="p-4 border border-[var(--border-subtle)] bg-[var(--surface-card)]">
              <span className="text-[var(--text-muted)] uppercase block mb-1">DIRECT INQUIRIES</span>
              <span className="text-[var(--accent)] font-bold">HELLO@YASINARAFAT.COM</span>
            </div>
          </div>
        </Container>
      </Section>

      {/* 2. Contact Grid & Form */}
      <Section spacing="lg">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Left Column: Direct Outreach & Social Spaces */}
            <div className="lg:col-span-5 space-y-8">
              <div>
                <span className="font-mono text-xs uppercase tracking-widest text-[var(--accent)] font-semibold block mb-2">
                  DIRECT CONTACT
                </span>
                <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-4">
                  For brand architecture commissions, AI exploratory tools, design systems, or bespoke advisory:
                </p>

                <CopyEmailButton />
              </div>

              {/* Digital Channels */}
              <div className="border-t border-[var(--border-subtle)] pt-6">
                <span className="font-mono text-xs uppercase tracking-widest text-[var(--text-muted)] font-bold block mb-3">
                  DIGITAL PRESENCE &amp; PROFILES
                </span>
                <div className="space-y-2 font-mono text-xs">
                  {siteConfig.socials.map((soc) => (
                    <a
                      key={soc.name}
                      href={soc.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="min-h-[44px] flex items-center justify-between p-3 border border-[var(--border-subtle)] bg-[var(--surface-card)] hover:border-[var(--text-primary)] transition-colors group focus-visible:outline-2 focus-visible:outline-[var(--accent)]"
                    >
                      <span className="text-[var(--text-primary)] font-medium">
                        {soc.name}
                      </span>
                      <span className="text-[var(--text-muted)] group-hover:text-[var(--accent)] flex items-center gap-1">
                        <span>{soc.handle}</span>
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </span>
                    </a>
                  ))}
                </div>
              </div>

              <div className="p-4 border border-[var(--border-subtle)] bg-[var(--bg-secondary)] font-mono text-xs text-[var(--text-muted)] flex items-start gap-2.5">
                <Sparkles className="w-4 h-4 text-[var(--accent)] flex-shrink-0 mt-0.5" />
                <p className="leading-relaxed">
                  Fast response: Usually within 24–48 hours. Selective on projects to ensure total focus and zero compromise on craft.
                </p>
              </div>
            </div>

            {/* Right Column: Project Inquiry Interface */}
            <div className="lg:col-span-7">
              <ContactForm />
            </div>
          </div>
        </Container>
      </Section>

      {/* 3. Ending Footer Signature (Prompt 10) */}
      <footer className="border-t border-[var(--border-subtle)] bg-[var(--bg-secondary)]/50 py-12">
        <Container>
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 font-mono text-xs text-[var(--text-muted)]">
            <div className="flex items-center gap-2">
              <Terminal className="w-3.5 h-3.5 text-[var(--accent)]" />
              <span className="font-bold text-[var(--text-primary)]">YASIN ARAFAT</span>
              <span>{"//"}</span>
              <span>DESIGN × AI × CODE</span>
            </div>

            <div className="flex items-center gap-4">
              <span>EST. 2011</span>
              <span>•</span>
              <span>© {currentYear} ALL RIGHTS RESERVED</span>
            </div>
          </div>
        </Container>
      </footer>
    </div>
  );
}
