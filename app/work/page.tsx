import React from "react";
import { WorkIndex } from "@/components/portfolio/WorkIndex";
import { projects } from "@/data/projects";

export const metadata = {
  title: "Selected Work // YASIN OS",
  description: "15 years of logo design, brand identity systems, and product architectures by Yasin Arafat.",
};

export default function WorkPage() {
  return (
    <div className="w-full bg-[var(--os-cream)] min-h-screen pt-16 md:pt-24">
      <WorkIndex
        projects={projects}
        title="Selected Works"
        subtitle="15 years of brand architecture, geometric identity marks, and experimental product design systems."
        showFilters={true}
        headingLevel="h1"
        isSectionSheet={false}
      />
    </div>
  );
}
