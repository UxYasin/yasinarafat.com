import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { siteConfig } from "@/data/siteConfig";
import { Shell } from "@/components/layout/Shell";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://yasinarafat.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${siteConfig.title}`,
    template: `%s // ${siteConfig.designer}`,
  },
  description: siteConfig.tagline,
  authors: [{ name: siteConfig.designer, url: siteUrl }],
  creator: siteConfig.designer,
  publisher: siteConfig.designer,
  keywords: [
    "Yasin Arafat",
    "Brand Designer",
    "Logo Design",
    "Visual Identity Systems",
    "Indie Vibe-Coder",
    "AI Explorer",
    "Design Engineering",
    "YASIN OS",
    "Swiss Typography",
  ],
  openGraph: {
    title: siteConfig.title,
    description: siteConfig.tagline,
    url: siteUrl,
    siteName: "YASIN OS",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.title,
    description: siteConfig.tagline,
    creator: "@yasinarafat",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: siteUrl,
  },
};

export const viewport: Viewport = {
  themeColor: "#0047FF",
  width: "device-width",
  initialScale: 1,
};

const jsonLdPerson = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Yasin Arafat",
  url: siteUrl,
  jobTitle: "Lead Brand Designer & Indie Vibe-Coder",
  description: siteConfig.bio,
  knowsAbout: [
    "Logo Design",
    "Brand Architecture",
    "Typography",
    "Artificial Intelligence",
    "Next.js",
    "Design Systems",
  ],
  sameAs: siteConfig.socials.map((s) => s.url),
};

const jsonLdWebsite = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "YASIN OS",
  url: siteUrl,
  author: {
    "@type": "Person",
    name: "Yasin Arafat",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdPerson) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdWebsite) }}
        />
      </head>
      <body className="min-h-full flex flex-col font-sans">
        <Shell>{children}</Shell>
      </body>
    </html>
  );
}
