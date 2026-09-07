# YASIN OS v2.6 — Creative Laboratory & Portfolio

> **15 Years of Brand Architecture × Indie Vibe-Coding × Frontier AI Exploration**
> Official portfolio and interactive experimental operating system of **Yasin Arafat**.

[![Next.js](https://img.shields.io/badge/Next.js-16.3.4-black?style=flat&logo=next.js)](https://nextjs.org/)
[![Turbopack](https://img.shields.io/badge/Engine-Turbopack-0047FF?style=flat)](https://turbo.build/pack)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-3178C6?style=flat&logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-v4-38B2AC?style=flat&logo=tailwind-css)](https://tailwindcss.com/)
[![Motion](https://img.shields.io/badge/Motion-13.2-EA4C89?style=flat)](https://motion.dev/)
[![Deployment](https://img.shields.io/badge/Deploy-Vercel-black?style=flat&logo=vercel)](https://vercel.com/)

---

## Architecture Overview

**YASIN OS** is built as an uncompromising, tactile digital experience combining classical Swiss editorial typography with rapid modern vibe-coding principles.

- **Framework**: [Next.js 16 (App Router)](https://nextjs.org) with Turbopack compilation.
- **Data Layer**: Structured, data-driven architecture (`data/projects.ts`, `data/labExperiments.ts`, `data/machineIdeas.ts`, `data/siteConfig.ts`). Zero mock database calls or unverified claims.
- **Styling**: Tailwind CSS v4 design system with custom CSS custom properties (`#0047FF` cobalt accent, `#FBFBF9` warm off-white canvas, `#111111` near-black typography).
- **Motion**: Restrained physical springs via [Motion](https://motion.dev) with strict `@media (prefers-reduced-motion: reduce)` compliance.
- **SEO & Discoverability**: Dynamic sitemap (`/sitemap.xml`), robots (`/robots.txt`), web manifest (`/manifest.webmanifest`), and JSON-LD structured data (`schema.org/Person`, `schema.org/WebSite`).
- **Accessibility**: 100% keyboard operable, >=44px touch targets across all mobile viewports, high-contrast `:focus-visible` rings, semantic heading hierarchy (`h1` -> `h2` -> `h3`), and ARIA live regions.

---

## Key Modules & Routes

| Route | Purpose | Architecture |
| :--- | :--- | :--- |
| `/` | **Home & Hero Experience** | Oversized typography, interactive discipline matrix, live Dhaka (UTC+6) telemetry, and embedded ideator |
| `/work` | **Selected Work Index** | Split editorial index with sticky desktop live preview canvas + responsive grid fallback |
| `/work/[slug]` | **Editorial Case Studies** | Vector construction geometry diagrams, typography pangrams, copyable HEX swatches, authentic delivered metrics, and 4K prototype frames |
| `/lab` | **The Lab & Experiments** | Vibe-coded microtools, client-side AI experiments, and status filtering (`LIVE`, `BUILDING`, `EXPERIMENT`, `IDEA`, `ARCHIVED`) |
| `/lab/[slug]` | **Lab Detail Deep Dives** | "Why I Built It", "What I Learned", tech stacks, and live benchmark telemetry |
| `/about` | **Story & Principles** | 15-year career timeline (est. 2013), operating principles, research focus, and personal manifesto |
| `/contact` | **Initiation Interface** | Transparent client-side brief generator, dual mailto + clipboard copy, direct email copy, and social matrix |

### The Signature Feature: The Yasin Machine
The **Yasin Machine** (`components/lab/YasinMachine.tsx`) is a 100% client-side ideation synthesizer loaded with 52+ curated design, AI, code, and product experiments. Operable via click or keyboard shortcut (`R`), with full `aria-live` screen reader announcements.

---

## Getting Started Locally

### Prerequisites
- Node.js 20+
- npm, pnpm, or bun

### Installation
```bash
# Clone the repository
git clone https://github.com/yasinarafat/yasin-portfolio.git
cd yasin-portfolio

# Install dependencies
npm install
```

### Environment Configuration
Copy the template environment file:
```bash
cp .env.example .env.local
```
Configure your canonical domain:
```env
NEXT_PUBLIC_SITE_URL=https://yasinarafat.com
```

### Development Server
Run the Turbopack local development server:
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) to view the application.

---

## Production Verification & Quality Checks

Run the verification pipeline locally:

```bash
# 1. Type check
npm run type-check

# 2. Lint check
npm run lint

# 3. Production build
npm run build
```

The build compiles 21 static outputs (18 SSG pages + 3 SEO endpoints) in under 2 seconds.

---

## Deployment to Vercel

The project is zero-config ready for Vercel deployment:

1. **Connect Repository**: Push to GitHub and import the repository in the [Vercel Dashboard](https://vercel.com/new).
2. **Environment Variable**: Set `NEXT_PUBLIC_SITE_URL` to your production domain (e.g., `https://yasinarafat.com`).
3. **Build Command**: `next build` (default).
4. **Install Command**: `npm install` (default).

Or deploy directly using the Vercel CLI:
```bash
npm i -g vercel
vercel
vercel --prod
```

---

## License

© 2011–Present Yasin Arafat. All rights reserved.
Design crafted with pride in Dhaka, Bangladesh.
