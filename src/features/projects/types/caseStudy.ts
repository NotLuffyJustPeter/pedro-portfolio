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

  description: string;

  cover: string;

  technologies: string[];

  meta: CaseStudyMeta[];

  problemTitle: string;
  problem: string[];

  solutionTitle: string;
  solution: string[];

  architecture: ArchitectureNode[];

  features: CaseStudyFeature[];

  challenges: CaseStudyChallenge[];

  gallery: CaseStudyImage[];

  learnings: string[];

  visual: CaseStudyVisual;

  nextProject?: {
    slug: string;
    name: string;
  };

  githubUrl?: string;
  liveUrl?: string;
}
