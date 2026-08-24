export interface TechnologyGroup {
  title: string;
  technologies: string[];
}

export const TECHNOLOGY_GROUPS: TechnologyGroup[] = [
  {
    title:
      'Frontend',

    technologies: [
      'React',
      'Next.js',
      'Angular',
      'TypeScript',
      'JavaScript',
      'Tailwind CSS',
      'SCSS',
      'Motion',
    ],
  },

  {
    title:
      'Backend',

    technologies: [
      'Node.js',
      'NestJS',
      'Express',
      'Java',
      'Spring Boot',
      'Flask',
    ],
  },

  {
    title:
      'Mobile',

    technologies: [
      'Flutter',
      'Dart',
    ],
  },

  {
    title:
      'Data',

    technologies: [
      'PostgreSQL',
      'Prisma',
      'MySQL',
      'Supabase',
      'Firebase',
      'Neon',
    ],
  },

  {
    title:
      'Cloud & DevOps',

    technologies: [
      'Docker',
      'Docker Compose',
      'GitHub Actions',
      'Vercel',
      'Render',
      'AWS',
      'GCP',
      'Kubernetes',
      'Git',
    ],
  },

  {
    title:
      'AI, Maps & Realtime',

    technologies: [
      'Gemini API',
      'Socket.IO',
      'MapLibre GL',
      'Open-Meteo',
      'Nominatim',
      'Mailjet',
    ],
  },

  {
    title:
      'Architecture & Integration',

    technologies: [
      'REST APIs',
      'Microservices',
      'BFF',
      'RBAC',
      'Realtime Systems',
      'CI/CD',
    ],
  },
];
