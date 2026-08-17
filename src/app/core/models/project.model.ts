export interface Project {
  id: number;
  slug: string;

  name: string;
  subtitle: string;

  shortDescription: string;
  description: string;

  type: string;
  status: string;

  technologies: string[];

  cover: string;

  github?: string;
  demo?: string;

  featured: boolean;

  clientProject?: boolean;
}
