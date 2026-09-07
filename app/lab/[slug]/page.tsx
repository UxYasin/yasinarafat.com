import React from "react";
import Image from "next/image";
import NextLink from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, ExternalLink, Code2, Terminal, Cpu } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Label } from "@/components/ui/Label";
import { Button } from "@/components/ui/Button";
import { labExperiments } from "@/data/labExperiments";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return labExperiments.map((exp) => ({
    slug: exp.slug,
  }));
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const experiment = labExperiments.find((e) => e.slug === slug);

  if (!experiment) {
    return {
      title: "Experiment Not Found // The Lab",
    };
  }

  return {
    title: `${experiment.name} // The Lab Experiment`,
    description: experiment.shortDescription,
  };
}

export default async function LabDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const currentIndex = labExperiments.findIndex((e) => e.slug === slug);

  if (currentIndex === -1) {
    notFound();
  }

  const experiment = labExperiments[currentIndex];
  const nextExperiment = labExperiments[(currentIndex + 1) % labExperiments.length];

  return (
    <article className="w-full bg-[var(--bg-primary)]">
      {/* Breadcrumb Header */}
      <nav aria-label="Lab navigation" className="border-b border-[var(--border-subtle)] bg-[var(--bg-secondary)]/40 py-3">
        <Container>
          <div className="flex items-center justify-between">
            <NextLink
              href="/lab"
              data-cursor="link"
              className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-[var(--text-secondary)] hover:text-[var(--accent)] transition-colors"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>BACK TO THE LAB</span>
            </NextLink>

            <div className="flex items-center gap-3">
              <span className="font-mono text-xs text-[var(--text-muted)]">
                EXP /{experiment.number}
              </span>
              <Label
                variant={experiment.status === "LIVE" ? "accent" : "outline"}
                size="sm"
                dot={experiment.status === "LIVE"}
              >
                {experiment.status}
              </Label>
            </div>
          </div>
        </Container>
      </nav>

      {/* Hero Title & Overview */}
      <header className="pt-10 md:pt-16 pb-12 border-b border-[var(--border-subtle)]">
        <Container>
          <div className="max-w-4xl">
            <div className="flex items-center gap-2 font-mono text-xs tracking-widest text-[var(--text-muted)] uppercase mb-4">
              <Terminal className="w-3.5 h-3.5 text-[var(--accent)]" />
              <span>{experiment.type}</span>
              <span>{"//"}</span>
              <span>EST. {experiment.year}</span>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight uppercase text-[var(--text-primary)] leading-[0.95] mb-6">
              {experiment.name}
            </h1>

            <p className="text-lg md:text-xl text-[var(--text-secondary)] leading-relaxed font-normal">
              {experiment.shortDescription}
            </p>

            <div className="flex flex-wrap items-center gap-4 mt-8">
              {experiment.liveUrl && (
                <a
                  href={experiment.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button
                    variant="primary"
                    size="md"
                    icon={<ExternalLink className="w-4 h-4" />}
                  >
                    LAUNCH EXPERIMENT
                  </Button>
                </a>
              )}
              {experiment.sourceUrl && (
                <a
                  href={experiment.sourceUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button
                    variant="secondary"
                    size="md"
                    icon={<Code2 className="w-4 h-4 text-[var(--accent)]" />}
                  >
                    INSPECT SOURCE
                  </Button>
                </a>
              )}
            </div>
          </div>
        </Container>
      </header>

      {/* Visual Canvas Area */}
      <Section spacing="none" className="py-8 md:py-12 bg-[var(--bg-secondary)]/30 border-b border-[var(--border-subtle)]">
        <Container size="lg">
          <figure className="relative aspect-[16/9] w-full border border-[var(--border-subtle)] overflow-hidden bg-[var(--surface-card)] shadow-sm">
            <Image
              src={experiment.visual}
              alt={`Interactive preview of ${experiment.name}`}
              fill
              priority
              sizes="(max-width: 1400px) 100vw, 1400px"
              className="object-cover"
            />
            <figcaption className="absolute bottom-3 right-3 bg-[var(--surface-card)]/90 backdrop-blur-xs px-3 py-1 border border-[var(--border-subtle)] font-mono text-[11px] text-[var(--text-muted)]">
              TEST BENCH PREVIEW // {experiment.name.toUpperCase()}
            </figcaption>
          </figure>
        </Container>
      </Section>

      {/* Detailed Technical Narrative */}
      <Section spacing="lg">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="lg:col-span-7 space-y-10">
              <div>
                <span className="font-mono text-xs uppercase tracking-widest text-[var(--accent)] font-semibold block mb-3">
                  01 // WHY I BUILT IT
                </span>
                <p className="text-base sm:text-lg text-[var(--text-secondary)] leading-relaxed font-normal">
                  {experiment.whyIBuiltIt}
                </p>
              </div>

              <div>
                <span className="font-mono text-xs uppercase tracking-widest text-[var(--text-primary)] font-semibold block mb-3">
                  02 // WHAT I LEARNED
                </span>
                <div className="p-6 border-l-3 border-[var(--accent)] bg-[var(--surface-card)] border border-r-0 border-t-0 border-b-0 border-[var(--border-subtle)]">
                  <p className="text-sm sm:text-base text-[var(--text-secondary)] leading-relaxed font-mono">
                    {experiment.whatILearned}
                  </p>
                </div>
              </div>
            </div>

            <aside className="lg:col-span-5 space-y-8 lg:border-l lg:border-[var(--border-subtle)] lg:pl-8">
              <div>
                <span className="font-mono text-xs uppercase tracking-widest text-[var(--text-muted)] font-bold block mb-3">
                  TECHNOLOGIES USED
                </span>
                <div className="flex flex-wrap gap-2">
                  {experiment.technology.map((tech) => (
                    <span
                      key={tech}
                      className="font-mono text-xs px-3 py-1.5 bg-[var(--surface-card)] text-[var(--text-primary)] border border-[var(--border-subtle)] font-semibold"
                    >
                      [{tech}]
                    </span>
                  ))}
                </div>
              </div>

              {experiment.stats && (
                <div>
                  <span className="font-mono text-xs uppercase tracking-widest text-[var(--text-muted)] font-bold block mb-3">
                    BENCHMARKS &amp; TELEMETRY
                  </span>
                  <div className="grid grid-cols-2 gap-4">
                    {experiment.stats.map((st) => (
                      <div
                        key={st.label}
                        className="p-4 border border-[var(--border-subtle)] bg-[var(--surface-card)]"
                      >
                        <div className="text-2xl font-black font-mono text-[var(--text-primary)]">
                          {st.value}
                        </div>
                        <div className="font-mono text-[10px] text-[var(--text-muted)] uppercase mt-1">
                          {st.label}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              <div className="p-4 border border-[var(--border-subtle)] bg-[var(--bg-secondary)] font-mono text-xs text-[var(--text-muted)] flex items-center gap-2">
                <Cpu className="w-4 h-4 text-[var(--accent)]" />
                <span>EXPERIMENT STACK: CLIENT-SIDE VIBE-CODED</span>
              </div>
            </aside>
          </div>
        </Container>
      </Section>

      {/* Next Experiment Footer */}
      {nextExperiment && (
        <footer className="border-t border-[var(--border-subtle)] bg-[var(--surface-card)] hover:bg-[var(--bg-secondary)] transition-colors">
          <Container>
            <NextLink
              href={`/lab/${nextExperiment.slug}`}
              data-cursor="lab"
              data-cursor-text="NEXT"
              className="group flex flex-col sm:flex-row sm:items-center justify-between gap-6 py-8 md:py-12"
            >
              <div>
                <span className="font-mono text-xs uppercase tracking-widest text-[var(--accent)] font-semibold block mb-1">
                  NEXT EXPERIMENT /{nextExperiment.number}
                </span>
                <h3 className="text-3xl sm:text-4xl font-black uppercase tracking-tight text-[var(--text-primary)] group-hover:translate-x-2 transition-transform duration-200">
                  {nextExperiment.name}
                </h3>
                <span className="font-mono text-xs text-[var(--text-muted)] mt-1 block">
                  {nextExperiment.type}
                </span>
              </div>

              <div className="w-12 h-12 rounded-full border border-[var(--border-strong)] flex items-center justify-center group-hover:bg-[var(--accent)] group-hover:border-[var(--accent)] group-hover:text-white transition-all duration-200 self-end sm:self-center">
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-0.5" />
              </div>
            </NextLink>
          </Container>
        </footer>
      )}
    </article>
  );
}
