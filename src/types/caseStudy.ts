export interface CaseStudyMeta {
  label: string;
  value: string;
}

export interface CaseStudyFeature {
  number: string;
  title: string;
  description: string;
}

export interface CaseStudyChallenge {
  number: string;
  title: string;
  description: string;
}

export interface ArchitectureNode {
  label: string;
  description?: string;
}

export interface CaseStudyImage {
  src: string;
  alt: string;
  caption?: string;
}

export interface CaseStudyOverview {
  title: string;
  description: string;
}

export type CaseStudyVisual =
  | 'meridian'
  | 'arcana'
  | 'roma'
  | 'kave'
  | 'nora';

export interface CaseStudy {
  slug: string;

  eyebrow: string;

  title: string;
  subtitle: string;

  headline?: string;

  description: string;

  technologies: string[];

  meta: CaseStudyMeta[];

  overview?: CaseStudyOverview;

  problemTitle?: string;
  problem?: string[];

  solutionTitle?: string;
  solution?: string[];

  architecture: ArchitectureNode[];
  architectureDescription?: string;

  features: CaseStudyFeature[];

  challenges: CaseStudyChallenge[];

  gallery: CaseStudyImage[];
  galleryDescription?: string;

  learnings?: string[];

  visual: CaseStudyVisual;

  nextProject?: {
    slug: string;
    name: string;
  };

  github?: string;
  demo?: string;
}
