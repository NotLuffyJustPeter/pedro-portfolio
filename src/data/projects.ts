import type {
  ProjectSummary,
} from '../types/project';

export const PROJECTS: ProjectSummary[] = [
  {
    id: 1,

    slug: 'meridian',

    name: 'Meridian',

    subtitle:
      'Intelligent Travel Planning Platform',

    eyebrow:
      'AI TRAVEL PLANNER / FULL-STACK PRODUCT',

    year:
      '2026',

    shortDescription:
      'Production-deployed travel platform combining AI, maps, itinerary planning, realtime collaboration, budgets and weather.',

    description:
      'A production-deployed intelligent travel planning platform that centralizes itinerary building, maps, saved places, budgets, weather, collaboration and contextual AI assistance inside a single journey workspace.',

    type:
      'AI Full-Stack Product',

    status:
      'Completed',

    technologies: [
      'Next.js',
      'React',
      'NestJS',
      'PostgreSQL',
      'Gemini',
      'Socket.IO',
    ],

    cover:
      'images/projects/meridian/01-landing.png',

    github:
      'https://github.com/NotLuffyJustPeter/meridian',

    demo:
      'https://meridian-pi-vert.vercel.app',

    featured:
      true,
  },

  {
    id: 2,

    slug:
      'arcana',

    name:
      'ARCANA',

    subtitle:
      'AI-Powered Tarot Reading Platform',

    eyebrow:
      'AI PROJECT',

    year:
      '2026',

    shortDescription:
      'Full-stack platform for configurable tarot readings and AI-generated interpretations.',

    description:
      'A full-stack tarot reading platform combining dynamic spreads, persistent readings, multiple decks and contextual AI-generated interpretations.',

    type:
      'AI Full-Stack Application',

    status:
      'In Development',

    technologies: [
      'Angular',
      'TypeScript',
      'Node.js',
      'Express',
      'Supabase',
      'PostgreSQL',
      'Gemini',
    ],

    cover:
      'images/projects/arcana/cover.webp',

    featured:
      false,
  },

  {
    id:
      3,

    slug:
      'roma-app',

    name:
      'Roma APP',

    subtitle:
      'Furniture Inventory & Sales Mobile App',

    eyebrow:
      'CLIENT PROJECT',

    year:
      '2025',

    shortDescription:
      'Mobile inventory and sales application developed and delivered for a furniture retailer.',

    description:
      'A mobile application designed for a furniture retailer to manage products, stock locations, sales, customers and inventory operations across multiple users.',

    type:
      'Mobile Client Project',

    status:
      'Completed & Delivered',

    technologies: [
      'Flutter',
      'Dart',
      'Node.js',
      'Express',
      'MySQL',
      'REST API',
    ],

    cover:
      'images/projects/roma/cover.webp',

    featured:
      false,

    clientProject:
      true,
  },

  {
    id:
      4,

    slug:
      'kave-sys',

    name:
      'KAVE Sys',

    subtitle:
      'Inventory & Operations Management System',

    eyebrow:
      'BUSINESS PROJECT',

    year:
      '2025',

    shortDescription:
      'Full-stack business application for inventory, warehouse movements and stock control.',

    description:
      'Inventory management platform designed to centralize products, stock levels, warehouse movements, roles and operational information.',

    type:
      'Business Web Application',

    status:
      'Completed',

    technologies: [
      'Angular',
      'TypeScript',
      'Node.js',
      'Express',
      'MySQL',
      'Firebase',
    ],

    cover:
      'images/projects/kave/cover.webp',

    featured:
      false,
  },

  {
    id:
      5,

    slug:
      'nora-hayes',

    name:
      'Emily Limon Companion Patch',

    subtitle:
      'Persistent NPC System for Project Zomboid',

    eyebrow:
      'SYSTEMS PROJECT',

    year:
      '2026',

    shortDescription:
      'Lua addon extending existing NPC mods with persistence, dialogue, affinity and multiplayer-aware systems.',

    description:
      'A custom Project Zomboid addon extending Bandits NPC and True Companions with a persistent companion, contextual dialogue, quests and state management.',

    type:
      'Game Systems & Modding',

    status:
      'Functional Prototype',

    technologies: [
      'Lua',
      'State Management',
      'Persistence',
      'Multiplayer',
      'Game Modding',
    ],

    cover:
      'images/projects/nora/cover.webp',

    featured:
      false,
  },
];

export const findProjectBySlug = (
  slug?: string,
) =>
  PROJECTS.find(
    (project) =>
      project.slug === slug,
  );
