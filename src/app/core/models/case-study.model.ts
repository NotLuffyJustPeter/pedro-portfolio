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

export interface CaseStudy {
  slug: string;

  eyebrow: string;

  title: string;
  subtitle: string;

  description: string;

  technologies: string[];

  meta: CaseStudyMeta[];

  problemTitle: string;
  problem: string[];

  solutionTitle: string;
  solution: string[];

  architecture: ArchitectureNode[];

  features: CaseStudyFeature[];

  challenges: CaseStudyChallenge[];

  learnings: string[];

  github?: string;
  demo?: string;
}
