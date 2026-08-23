import type { ProjectSummary } from '../types/project';

export const projects: ProjectSummary[] = [
  {
    slug: 'meridian',
    name: 'Meridian',
    eyebrow: 'AI TRAVEL PLANNER / FULL-STACK PRODUCT',
    year: '2026',
    featured: true,
  },
  {
    slug: 'arcana',
    name: 'ARCANA',
    eyebrow: 'AI TAROT PLATFORM',
    year: '2026',
  },
  {
    slug: 'roma-app',
    name: 'Roma APP',
    eyebrow: 'MOBILE INVENTORY PLATFORM',
    year: '2025',
  },
  {
    slug: 'kave-sys',
    name: 'KAVE Sys',
    eyebrow: 'INVENTORY MANAGEMENT SYSTEM',
    year: '2025',
  },
  {
    slug: 'nora-hayes',
    name: 'Emily Limon Companion Patch',
    eyebrow: 'GAMEPLAY SYSTEM / LUA ADDON',
    year: '2026',
  },
];

export const findProjectBySlug = (slug?: string) =>
  projects.find((project) => project.slug === slug);
