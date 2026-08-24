import type {
  CaseStudy,
  CaseStudyImage,
} from '../types/caseStudy';

const MERIDIAN_GALLERY: CaseStudyImage[] = [
  {
    src:
      'images/projects/meridian/01-landing.png',

    alt:
      'Meridian public landing page with the intelligent travel planning hero.',

    caption:
      'Production landing page and product positioning.',
  },

  {
    src:
      'images/projects/meridian/02-dashboard.png',

    alt:
      'Meridian journey dashboard showing travel statistics and an upcoming trip.',

    caption:
      'Journey dashboard with planning status and upcoming travel.',
  },

  {
    src:
      'images/projects/meridian/03-trip-overview.png',

    alt:
      'Meridian trip overview for Rio de Janeiro with dates, duration, currency and timezone.',

    caption:
      'Trip overview with the core journey context.',
  },

  {
    src:
      'images/projects/meridian/04-places-map.png',

    alt:
      'Meridian Places workspace with saved places and an interactive map of Rio de Janeiro.',

    caption:
      'Saved places and interactive map workspace.',
  },

  {
    src:
      'images/projects/meridian/05-itinerary-map.png',

    alt:
      'Meridian itinerary timeline beside an interactive journey map with linked activity markers.',

    caption:
      'Day-by-day itinerary connected to mapped activities.',
  },

  {
    src:
      'images/projects/meridian/06-budget.png',

    alt:
      'Meridian budget dashboard showing total budget, spending, remaining funds and category analytics.',

    caption:
      'Budget overview and spending analytics.',
  },

  {
    src:
      'images/projects/meridian/07-budget-details.png',

    alt:
      'Meridian budget details showing category limits, recent expenses and financial status.',

    caption:
      'Expense history, category limits and financial signals.',
  },

  {
    src:
      'images/projects/meridian/08-weather.png',

    alt:
      'Meridian weather workspace showing forecast conditions across the journey window.',

    caption:
      'Weather context aligned with the actual travel dates.',
  },
];

export const MERIDIAN_CASE_STUDY: CaseStudy = {
  slug:
    'meridian',

  eyebrow:
    'FEATURED PROJECT · 01',

  title:
    'Meridian',

  subtitle:
    'AI Travel Planner / Full-Stack Product',

  headline:
    'Plan smarter trips with AI, maps, collaboration and real-time travel tools.',

  description:
    'Meridian is a production-deployed intelligent travel planning platform that combines itinerary building, interactive maps, saved places, budgets, weather, AI-assisted recommendations, secure authentication and realtime collaboration in a single journey workspace.',

  overview: {
    title:
      'Overview',

    description:
      'Meridian is a portfolio-grade travel planning product designed to centralize the complete trip-planning workflow. Instead of switching between map apps, notes, spreadsheets, weather services and messaging tools, users can create trips, organize day-by-day itineraries, save places, track expenses, review weather, collaborate with other travelers and use Meridian AI to generate context-aware recommendations and planning suggestions.',
  },

  technologies: [
    'Next.js 16',
    'React 19',
    'TypeScript',
    'Tailwind CSS 4',
    'Motion',
    'NestJS 11',
    'Node.js',
    'PostgreSQL',
    'Prisma 7',
    'MapLibre GL',
    'Socket.IO',
    'Gemini API',
    'Open-Meteo',
    'Nominatim',
    'Mailjet',
    'Docker',
    'Docker Compose',
    'GitHub Actions',
    'Vercel',
    'Render',
    'Neon',
    'Jest',
    'Supertest',
    'pnpm',
  ],

  meta: [
    {
      label:
        'ROLE',

      value:
        'Full-Stack Developer',
    },

    {
      label:
        'TYPE',

      value:
        'AI Full-Stack Product',
    },

    {
      label:
        'STATUS',

      value:
        'Completed',
    },

    {
      label:
        'DEPLOYMENT',

      value:
        'Vercel · Render · Neon',
    },
  ],

  architectureDescription:
    'Meridian is organized as a pnpm monorepo. The frontend is a Next.js 16 application deployed on Vercel with server-side BFF routes for authenticated browser workflows. The backend is a NestJS 11 REST API deployed on Render using Prisma ORM and Neon PostgreSQL. Socket.IO provides realtime collaboration through short-lived signed tickets and trip-scoped rooms while REST and PostgreSQL remain the source of truth.',

  architecture: [
    {
      label:
        'Next.js 16',

      description:
        'Frontend & BFF on Vercel',
    },

    {
      label:
        'NestJS 11',

      description:
        'REST API on Render',
    },

    {
      label:
        'PostgreSQL / Neon',

      description:
        'Canonical application state',
    },

    {
      label:
        'Socket.IO',

      description:
        'Realtime collaboration',
    },

    {
      label:
        'Gemini',

      description:
        'Context-aware AI assistance',
    },

    {
      label:
        'MapLibre / Nominatim',

      description:
        'Maps & geocoding',
    },

    {
      label:
        'Open-Meteo',

      description:
        'Travel weather data',
    },

    {
      label:
        'Mailjet',

      description:
        'Transactional email',
    },
  ],

  features: [
    {
      number:
        '01',

      title:
        'Intelligent Trip Workspace',

      description:
        'A connected workspace where each journey brings together overview data, itinerary days, activities, places, weather, expenses, collaborators and AI assistance without breaking the planning flow.',
    },

    {
      number:
        '02',

      title:
        'Meridian AI',

      description:
        'Context-aware travel assistance powered by Gemini using authorized journey context including trip dates, activities, saved places and itinerary state.',
    },

    {
      number:
        '03',

      title:
        'Interactive Maps & Places',

      description:
        'MapLibre-based mapping with Nominatim geocoding, saved locations, category filtering and markers linked directly to itinerary activities.',
    },

    {
      number:
        '04',

      title:
        'Itinerary Builder',

      description:
        'Users can organize trips by day, create, edit, delete and reorder activities, connect them to saved places and keep the itinerary synchronized with the journey map.',
    },

    {
      number:
        '05',

      title:
        'Budget & Expense Tracking',

      description:
        'Trip-level budgeting with category limits, expenses, spending analytics and realtime invalidation.',
    },

    {
      number:
        '06',

      title:
        'Weather Integration',

      description:
        'Open-Meteo forecast data aligned with destination, timezone and travel window with explicit handling for partial forecasts and unavailable locations.',
    },

    {
      number:
        '07',

      title:
        'Realtime Collaboration',

      description:
        'Owners can invite editors and viewers with role-based permissions while Socket.IO trip rooms synchronize itinerary and budget changes.',
    },

    {
      number:
        '08',

      title:
        'Secure Authentication',

      description:
        'Password accounts, Google identity, account linking, HttpOnly cookies, refresh-token rotation, MFA, recovery codes, password reset and session security.',
    },

    {
      number:
        '09',

      title:
        'Production Delivery & Quality',

      description:
        'GitHub Actions validates formatting, type safety, linting, unit tests, PostgreSQL-backed E2E tests, dependency security and Docker builds.',
    },
  ],

  challenges: [
    {
      number:
        '01',

      title:
        'Context-aware AI without breaking domain boundaries',

      description:
        'A dedicated journey-context layer gathers authorized trip information before passing structured context to the Gemini provider.',
    },

    {
      number:
        '02',

      title:
        'Linking AI activities to real map locations',

      description:
        'The itinerary model was extended so AI-generated activities can reference persisted places and appear as real map markers.',
    },

    {
      number:
        '03',

      title:
        'Realtime consistency across collaborative features',

      description:
        'Mutations persist through REST and PostgreSQL before small trip-scoped invalidation events notify connected clients to refetch canonical state.',
    },

    {
      number:
        '04',

      title:
        'Role-based access across interconnected resources',

      description:
        'Owner, editor and viewer permissions remain consistent across trips, itinerary, places, budgets, AI and collaboration management.',
    },

    {
      number:
        '05',

      title:
        'Production-grade authentication security',

      description:
        'Authentication combines secure cookies, token rotation, Google identity, encrypted TOTP secrets, hashed recovery codes and password-reset token hashing.',
    },

    {
      number:
        '06',

      title:
        'Reliable free-tier production deployment',

      description:
        'The production architecture uses Vercel, Render, Neon and Mailjet while explicitly handling external provider failures and Render cold starts.',
    },

    {
      number:
        '07',

      title:
        'Regression coverage and delivery hardening',

      description:
        'The final regression baseline reached 161 unit tests across 24 suites and 82 E2E tests across 12 suites alongside production builds, dependency audits and Docker image validation.',
    },
  ],

  gallery:
    MERIDIAN_GALLERY,

  galleryDescription:
    'A production-focused view of Meridian covering the public landing page, dashboard, trip workspace, interactive places and maps, itinerary planning, budget analytics and weather integration.',

  visual:
    'meridian',

  nextProject: {
    slug:
      'arcana',

    name:
      'ARCANA',
  },

  github:
    'https://github.com/NotLuffyJustPeter/meridian',

  demo:
    'https://meridian-pi-vert.vercel.app',
};
