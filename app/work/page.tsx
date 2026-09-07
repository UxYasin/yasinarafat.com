import React from "react";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { WorkIndex } from "@/components/portfolio/WorkIndex";
import { projects } from "@/data/projects";

export const metadata = {
  title: "Selected Work // YASIN OS",
  description: "15 years of logo design, brand identity systems, and product architectures by Yasin Arafat.",
};

export default function WorkPage() {
  return (
    <div className="w-full">
      <Section spacing="lg">
        <Container>
          <WorkIndex
            projects={projects}
            title="SELECTED WORK"
            subtitle="15 years of brand architecture, geometric identity marks, and experimental product design systems."
            showFilters={true}
            headingLevel="h1"
          />
        </Container>
      </Section>
    </div>
  );
}
