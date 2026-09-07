"use client";

import React, { useState } from "react";
import { Copy, Check, Send, Mail } from "lucide-react";
import { Button } from "@/components/ui/Button";

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    projectType: "Brand Identity & Architecture",
    budget: "$10k - $25k",
    message: "",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);
  const [copiedBrief, setCopiedBrief] = useState(false);

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.name.trim()) newErrors.name = "Please enter your name.";
    if (!formData.email.trim()) {
      newErrors.email = "Please enter your email address.";
    } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address.";
    }
    if (!formData.message.trim()) newErrors.message = "Please provide a brief description of your project.";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const getFormattedBrief = () => {
    return `PROJECT INQUIRY FOR YASIN ARAFAT
----------------------------------------
CLIENT NAME: ${formData.name}
EMAIL: ${formData.email}
PROJECT TYPE: ${formData.projectType}
ESTIMATED BUDGET: ${formData.budget}
DATE: ${new Date().toISOString().split("T")[0]}

PROJECT BRIEF:
${formData.message}
----------------------------------------
Generated via YASIN OS // https://yasinarafat.com`;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    const subject = encodeURIComponent(`Project Inquiry: ${formData.projectType} — ${formData.name}`);
    const body = encodeURIComponent(getFormattedBrief());
    
    // Transparent mailto trigger
    window.location.href = `mailto:hello@yasinarafat.com?subject=${subject}&body=${body}`;
    setSubmitted(true);
  };

  const handleCopyBrief = () => {
    navigator.clipboard.writeText(getFormattedBrief());
    setCopiedBrief(true);
    setTimeout(() => setCopiedBrief(false), 2500);
  };

  return (
    <div className="w-full">
      <div className="flex items-center justify-between mb-2">
        <h2 className="font-serif text-3xl md:text-4xl text-[var(--os-ink)]">
          Direct Inquiry
        </h2>
        <span className="font-sans text-xs font-semibold px-3 py-1 rounded-full border border-[var(--os-ink)] bg-white text-[var(--os-ink)]">
          DIRECT BRIEF
        </span>
      </div>

      <p className="font-sans text-xs sm:text-sm text-[var(--os-ink)]/70 mb-6">
        Fill in the outline below to launch your email client with a preformatted project brief.
      </p>

      {submitted ? (
        <div className="py-8 px-6 text-center space-y-4 rounded-[20px] bg-white border border-[var(--os-ink)]">
          <div className="w-12 h-12 rounded-full bg-[var(--os-ink)] text-white flex items-center justify-center mx-auto">
            <Check className="w-6 h-6" />
          </div>

          <h3 className="font-serif text-2xl text-[var(--os-ink)]">
            Inquiry Ready
          </h3>

          <p className="font-sans text-xs sm:text-sm text-[var(--os-ink)]/80 max-w-md mx-auto leading-relaxed">
            Your default email application was opened with this inquiry. If your client didn&apos;t open automatically, copy the formatted brief below and email directly to <strong>hello@yasinarafat.com</strong>.
          </p>

          <div className="pt-2 flex flex-wrap items-center justify-center gap-3">
            <Button
              variant="primary"
              size="sm"
              onClick={handleCopyBrief}
              icon={copiedBrief ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
            >
              {copiedBrief ? "BRIEF COPIED TO CLIPBOARD" : "COPY FORMATTED BRIEF"}
            </Button>

            <Button
              variant="secondary"
              size="sm"
              onClick={() => setSubmitted(false)}
            >
              EDIT INQUIRY
            </Button>
          </div>
        </div>
      ) : (
        <form onSubmit={handleSubmit} noValidate className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label htmlFor="contact-name" className="block font-sans text-xs uppercase tracking-wider text-[var(--os-ink)] mb-1.5 font-bold">
                YOUR NAME *
              </label>
              <input
                id="contact-name"
                name="name"
                type="text"
                required
                aria-required="true"
                aria-invalid={!!errors.name}
                aria-describedby={errors.name ? "contact-name-error" : undefined}
                value={formData.name}
                onChange={(e) => {
                  setFormData({ ...formData, name: e.target.value });
                  if (errors.name) setErrors({ ...errors, name: "" });
                }}
                placeholder="e.g. Maya Lin"
                className="w-full px-4 py-3 font-sans text-sm rounded-xl bg-white border border-[var(--os-ink)] text-[var(--os-ink)] focus:outline-hidden focus-visible:outline-2 focus-visible:outline-[var(--os-ink)]"
              />
              {errors.name && (
                <span id="contact-name-error" role="alert" className="font-sans text-xs text-red-600 block mt-1">
                  {errors.name}
                </span>
              )}
            </div>

            <div>
              <label htmlFor="contact-email" className="block font-sans text-xs uppercase tracking-wider text-[var(--os-ink)] mb-1.5 font-bold">
                EMAIL ADDRESS *
              </label>
              <input
                id="contact-email"
                name="email"
                type="email"
                required
                aria-required="true"
                aria-invalid={!!errors.email}
                aria-describedby={errors.email ? "contact-email-error" : undefined}
                value={formData.email}
                onChange={(e) => {
                  setFormData({ ...formData, email: e.target.value });
                  if (errors.email) setErrors({ ...errors, email: "" });
                }}
                placeholder="e.g. maya@frontier.com"
                className="w-full px-4 py-3 font-sans text-sm rounded-xl bg-white border border-[var(--os-ink)] text-[var(--os-ink)] focus:outline-hidden focus-visible:outline-2 focus-visible:outline-[var(--os-ink)]"
              />
              {errors.email && (
                <span id="contact-email-error" role="alert" className="font-sans text-xs text-red-600 block mt-1">
                  {errors.email}
                </span>
              )}
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label htmlFor="contact-type" className="block font-sans text-xs uppercase tracking-wider text-[var(--os-ink)] mb-1.5 font-bold">
                PROJECT TYPE
              </label>
              <select
                id="contact-type"
                name="projectType"
                value={formData.projectType}
                onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                className="w-full px-4 py-3 font-sans text-sm rounded-xl bg-white border border-[var(--os-ink)] text-[var(--os-ink)] focus:outline-hidden focus-visible:outline-2 focus-visible:outline-[var(--os-ink)] cursor-pointer"
              >
                <option>Brand Identity &amp; Architecture</option>
                <option>Logo Design &amp; Monogram</option>
                <option>Design Systems &amp; Guidelines</option>
                <option>AI Tooling &amp; Vibe-Coding</option>
                <option>Spatial &amp; Product Interface</option>
                <option>Advisory &amp; Direction</option>
              </select>
            </div>

            <div>
              <label htmlFor="contact-budget" className="block font-sans text-xs uppercase tracking-wider text-[var(--os-ink)] mb-1.5 font-bold">
                ESTIMATED BUDGET
              </label>
              <select
                id="contact-budget"
                name="budget"
                value={formData.budget}
                onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                className="w-full px-4 py-3 font-sans text-sm rounded-xl bg-white border border-[var(--os-ink)] text-[var(--os-ink)] focus:outline-hidden focus-visible:outline-2 focus-visible:outline-[var(--os-ink)] cursor-pointer"
              >
                <option>&lt; $5,000</option>
                <option>$5,000 - $10,000</option>
                <option>$10,000 - $25,000</option>
                <option>$25,000+</option>
              </select>
            </div>
          </div>

          <div>
            <label htmlFor="contact-message" className="block font-sans text-xs uppercase tracking-wider text-[var(--os-ink)] mb-1.5 font-bold">
              PROJECT BRIEF / GOALS *
            </label>
            <textarea
              id="contact-message"
              name="message"
              rows={4}
              required
              aria-required="true"
              aria-invalid={!!errors.message}
              aria-describedby={errors.message ? "contact-message-error" : undefined}
              value={formData.message}
              onChange={(e) => {
                setFormData({ ...formData, message: e.target.value });
                if (errors.message) setErrors({ ...errors, message: "" });
              }}
              placeholder="Tell me about what you are building, your timeline, and what success looks like..."
              className="w-full px-4 py-3 font-sans text-sm rounded-xl bg-white border border-[var(--os-ink)] text-[var(--os-ink)] focus:outline-hidden focus-visible:outline-2 focus-visible:outline-[var(--os-ink)] resize-none"
            />
            {errors.message && (
              <span id="contact-message-error" role="alert" className="font-sans text-xs text-red-600 block mt-1">
                {errors.message}
              </span>
            )}
          </div>

          <div className="pt-2 flex items-center justify-between">
            <Button
              type="submit"
              variant="primary"
              size="md"
              icon={<Send className="w-3.5 h-3.5" />}
            >
              LAUNCH INQUIRY
            </Button>

            <span className="font-sans text-xs text-[var(--os-ink)]/60 hidden sm:inline">
              OPENS DIRECT MAIL CLIENT
            </span>
          </div>
        </form>
      )}
    </div>
  );
}

export function CopyEmailButton() {
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("hello@yasinarafat.com");
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  return (
    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[var(--os-ink)] bg-white shadow-xs">
      <Mail className="w-4 h-4 text-[var(--os-ink)]" />
      <a
        href="mailto:hello@yasinarafat.com"
        className="font-sans text-xs sm:text-sm font-semibold text-[var(--os-ink)] hover:underline"
      >
        hello@yasinarafat.com
      </a>
      <button
        type="button"
        onClick={handleCopyEmail}
        aria-label="Copy direct email address to clipboard"
        className="ml-1 px-2.5 py-1 rounded-full text-[10px] font-sans font-bold uppercase tracking-wider border border-[var(--os-ink)] bg-[var(--os-cream)] hover:bg-[var(--os-ink)] hover:text-white transition-colors cursor-pointer"
      >
        {copiedEmail ? "COPIED" : "COPY"}
      </button>
    </div>
  );
}
