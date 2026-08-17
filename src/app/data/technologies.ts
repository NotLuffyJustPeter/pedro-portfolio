export interface TechnologyGroup {
  title: string;
  technologies: string[];
}

export const TECHNOLOGY_GROUPS: TechnologyGroup[] = [
  {
    title: 'Frontend',
    technologies: [
      'Angular',
      'React',
      'TypeScript',
      'JavaScript',
      'HTML',
      'CSS / SCSS'
    ]
  },

  {
    title: 'Backend',
    technologies: [
      'Node.js',
      'Express',
      'Java',
      'Spring Boot',
      'NestJS',
      'Flask'
    ]
  },

  {
    title: 'Mobile',
    technologies: [
      'Flutter',
      'Dart'
    ]
  },

  {
    title: 'Data',
    technologies: [
      'MySQL',
      'PostgreSQL',
      'Supabase',
      'Firebase'
    ]
  },

  {
    title: 'Cloud & DevOps',
    technologies: [
      'AWS',
      'GCP',
      'Docker',
      'Kubernetes',
      'CI/CD',
      'Git'
    ]
  },

  {
    title: 'Architecture & Integration',
    technologies: [
      'REST APIs',
      'Microservices',
      'Kafka',
      'Gemini API'
    ]
  }
];
