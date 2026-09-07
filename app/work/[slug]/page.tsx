import React from "react";
import { notFound } from "next/navigation";
import { projects } from "@/data/projects";
import { CaseStudyLayout } from "@/components/portfolio/CaseStudyLayout";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return {
      title: "Project Not Found // YASIN OS",
    };
  }

  return {
    title: `${project.title} // ${project.category} Case Study`,
    description: project.shortDescription,
  };
}

export default async function ProjectDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  const nextProject = project.nextSlug
    ? projects.find((p) => p.slug === project.nextSlug)
    : null;

  return (
    <div className="w-full">
      <CaseStudyLayout project={project} nextProject={nextProject || null} />
    </div>
  );
}
