export type ProjectCategory = 
  | "BRANDING"
  | "LOGO DESIGN"
  | "VISUAL IDENTITY"
  | "DIGITAL"
  | "PRODUCT";

export interface LogoExploration {
  concept: string;
  gridPrinciples: string[];
  svgDiagram?: string;
}

export interface TypographySpecimen {
  primaryFont: string;
  classification: string;
  weights: string[];
  pangram: string;
  rationale: string;
}

export interface GalleryItem {
  url: string;
  caption: string;
  alt: string;
  span?: "full" | "half";
}

export interface DigitalStack {
  frameworks: string[];
  architecture: string;
  performanceNotes?: string;
}

export interface ProjectSection {
  title: string;
  content: string;
  type?: "text" | "split" | "quote" | "gallery" | "metric";
  quote?: string;
  author?: string;
  metrics?: { label: string; value: string }[];
  images?: { url: string; caption?: string; alt: string }[];
}

export interface Project {
  id: string;
  slug: string;
  number: string;
  title: string;
  client: string;
  category: ProjectCategory;
  year: string;
  shortDescription: string;
  services: string[];
  heroImage: string;
  featured: boolean;
  accentColor?: string;
  overview: string;
  theIdea: string;
  challenge: string;
  strategy: string;
  identitySystem?: string;
  typographyNotes?: string;
  logoExploration?: LogoExploration;
  typographySpecimen?: TypographySpecimen;
  gallery?: GalleryItem[];
  digitalStack?: DigitalStack;
  colorPalette?: { name: string; hex: string }[];
  applications?: string[];
  metrics?: { label: string; value: string }[];
  videoPlaceholder?: { title: string; caption: string; duration?: string };
  outcome: string;
  credits: { role: string; name: string }[];
  nextSlug?: string;
  sections?: ProjectSection[];
}

export type LabStatus = "LIVE" | "BUILDING" | "EXPERIMENT" | "IDEA" | "ARCHIVED";

export interface LabExperiment {
  id: string;
  slug: string;
  number: string;
  name: string;
  type: string;
  status: LabStatus;
  year: string;
  shortDescription: string;
  technology: string[];
  visual: string;
  whyIBuiltIt: string;
  whatILearned: string;
  liveUrl?: string;
  sourceUrl?: string;
  stats?: { label: string; value: string }[];
}

export type IdeaCategory = "BRANDING" | "AI" | "CODE" | "PRODUCT" | "DESIGN" | "RANDOM";

export interface MachineIdea {
  id: string;
  number: string;
  category: IdeaCategory;
  idea: string;
  observation?: string;
}

export interface SiteMeta {
  title: string;
  tagline: string;
  designer: string;
  experienceYears: number;
  disciplines: string[];
  location: string;
  timezone: string;
  status: string;
  bio: string;
  socials: {
    name: string;
    url: string;
    handle: string;
  }[];
}
