import { Project } from '../core/models/project.model';

export const PROJECTS: Project[] = [
  {
    id: 1,

    slug: 'arcana',

    name: 'ARCANA',

    subtitle: 'AI-Powered Tarot Reading Platform',

    shortDescription:
      'Full-stack platform for configurable tarot readings and AI-generated interpretations.',

    description:
      'A full-stack tarot reading platform combining dynamic spreads, persistent readings, multiple decks and contextual AI-generated interpretations.',

    type: 'AI Full-Stack Application',

    status: 'In Development',

    technologies: [
      'Angular',
      'TypeScript',
      'Node.js',
      'Express',
      'Supabase',
      'PostgreSQL',
      'Gemini'
    ],

    cover: 'images/projects/arcana/cover.webp',

    featured: true
  },

  {
    id: 2,

    slug: 'roma-app',

    name: 'Roma APP',

    subtitle: 'Furniture Inventory & Sales Mobile App',

    shortDescription:
      'Mobile inventory and sales application developed and delivered for a furniture retailer.',

    description:
      'A mobile application designed for a furniture retailer to manage products, stock locations, sales, customers and inventory operations across multiple users.',

    type: 'Mobile Client Project',

    status: 'Completed & Delivered',

    technologies: [
      'Flutter',
      'Dart',
      'Node.js',
      'Express',
      'MySQL',
      'REST API'
    ],

    cover: 'images/projects/roma/cover.webp',

    featured: true,

    clientProject: true
  },

  {
    id: 3,

    slug: 'kave-sys',

    name: 'KAVE Sys',

    subtitle: 'Inventory & Operations Management System',

    shortDescription:
      'Full-stack business application for inventory, warehouse movements and stock control.',

    description:
      'Inventory management platform designed to centralize products, stock levels, warehouse movements, roles and operational information.',

    type: 'Business Web Application',

    status: 'Completed',

    technologies: [
      'Angular',
      'TypeScript',
      'Node.js',
      'Express',
      'MySQL',
      'Firebase'
    ],

    cover: 'images/projects/kave/cover.webp',

    featured: true
  },

  {
    id: 4,

    slug: 'nora-hayes',

    name: 'Nora Hayes Companion Patch',

    subtitle: 'Persistent NPC System for Project Zomboid',

    shortDescription:
      'Lua addon extending existing NPC mods with persistence, dialogue, affinity and multiplayer-aware systems.',

    description:
      'A custom Project Zomboid addon that extends Bandits NPC and True Companions with a persistent fictional companion, contextual dialogue, quests and state management.',

    type: 'Game Systems & Modding',

    status: 'Experimental',

    technologies: [
      'Lua',
      'State Management',
      'Persistence',
      'Multiplayer',
      'Game Modding'
    ],

    cover: 'images/projects/nora/cover.webp',

    featured: true
  }
];
