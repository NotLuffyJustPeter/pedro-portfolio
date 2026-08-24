import { assetUrl } from '../../../shared/utils/assetUrl';
import type {
  CaseStudy,
  CaseStudyImage,
} from '../types/caseStudy';

/* =========================================================
   MERIDIAN GALLERY
========================================================= */

const MERIDIAN_GALLERY: CaseStudyImage[] = [
  {
    src:
      assetUrl('/images/projects/meridian/01-landing.png'),

    alt:
      'Meridian public landing page with the intelligent travel planning hero.',

    caption:
      'Production landing page and product positioning.',
  },

  {
    src:
      assetUrl('/images/projects/meridian/02-dashboard.png'),

    alt:
      'Meridian journey dashboard showing travel statistics and an upcoming trip.',

    caption:
      'Journey dashboard with planning status and upcoming travel.',
  },

  {
    src:
      assetUrl('/images/projects/meridian/03-trip-overview.png'),

    alt:
      'Meridian trip overview with dates, duration, currency and timezone.',

    caption:
      'Trip overview with the core journey context.',
  },

  {
    src:
      assetUrl('/images/projects/meridian/04-places-map.png'),

    alt:
      'Meridian Places workspace with saved places and an interactive map.',

    caption:
      'Saved places and interactive map workspace.',
  },

  {
    src:
      assetUrl('/images/projects/meridian/05-itinerary-map.png'),

    alt:
      'Meridian itinerary timeline beside an interactive journey map with linked activity markers.',

    caption:
      'Day-by-day itinerary connected to mapped activities.',
  },

  {
    src:
      assetUrl('/images/projects/meridian/06-budget.png'),

    alt:
      'Meridian budget dashboard showing total budget, spending and remaining funds.',

    caption:
      'Budget overview and spending analytics.',
  },

  {
    src:
      assetUrl('/images/projects/meridian/07-budget-details.png'),

    alt:
      'Meridian budget details showing category limits and recent expenses.',

    caption:
      'Expense history, category limits and financial signals.',
  },

  {
    src:
      assetUrl('/images/projects/meridian/08-weather.png'),

    alt:
      'Meridian weather workspace showing forecast conditions across the journey window.',

    caption:
      'Weather context aligned with the actual travel dates.',
  },
];


/* =========================================================
   ARCANA GALLERY
========================================================= */

const ARCANA_GALLERY: CaseStudyImage[] =
  Array.from(
    {
      length: 34,
    },

    (_, index) => {
      const number =
        index + 1;

      return {
        src:
          assetUrl(`/images/projects/arcana/Arcana ${number}.png`),

        alt:
          `ARCANA application screenshot ${number}`,

        caption:
          `ARCANA application interface — view ${number}.`,
      };
    },
  );


/* =========================================================
   ROMA GALLERY
========================================================= */

const ROMA_GALLERY: CaseStudyImage[] = [
  {
    src:
      assetUrl('/images/projects/roma/Roma1.png'),

    alt:
      'Roma APP main dashboard',

    caption:
      'Delivery management organized by pending, scheduled and completed orders.',
  },

  {
    src:
      assetUrl('/images/projects/roma/Roma2.png'),

    alt:
      'Roma APP inventory and sales workflow',

    caption:
      'Point-of-sale workflow with branch, customer, delivery date, product selection and shopping cart.',
  },

  {
    src:
      assetUrl('/images/projects/roma/Roma3.png'),

    alt:
      'Roma APP product detail',

    caption:
      'Product detail with pricing, category, description and stock distributed across different locations.',
  },

  {
    src:
      assetUrl('/images/projects/roma/Roma4.png'),

    alt:
      'Roma APP sale ticket',

    caption:
      'Generated ticket for a completed furniture sale.',
  },

  {
    src:
      assetUrl('/images/projects/roma/Roma5.png'),

    alt:
      'Roma APP inventory full view',

    caption:
      'Complete inventory view with product availability and stock information.',
  },

  {
    src:
      assetUrl('/images/projects/roma/Roma6.png'),

    alt:
      'Roma APP product details',

    caption:
      'Detailed product information inside the mobile inventory workflow.',
  },
];


/* =========================================================
   KAVE GALLERY
========================================================= */

const KAVE_GALLERY: CaseStudyImage[] =
  Array.from(
    {
      length: 22,
    },

    (_, index) => {
      const number =
        index + 1;

      return {
        src:
          assetUrl(`/images/projects/kave/Kave ${number}.png`),

        alt:
          `KAVE Sys application screenshot ${number}`,

        caption:
          `KAVE Sys inventory and operations interface — view ${number}.`,
      };
    },
  );


/* =========================================================
   EMILY LIMÓN GALLERY
========================================================= */

const NORA_GALLERY: CaseStudyImage[] =
  Array.from(
    {
      length: 10,
    },

    (_, index) => {
      const number =
        index + 1;

      return {
        src:
          assetUrl(`/images/projects/nora/pz ${number}.png`),

        alt:
          `Emily Limón companion system screenshot ${number}`,

        caption:
          `Project Zomboid companion system, dialogue and gameplay — view ${number}.`,
      };
    },
  );


/* =========================================================
   CASE STUDIES
========================================================= */

export const CASE_STUDIES: CaseStudy[] = [
  /* =======================================================
     MERIDIAN
  ======================================================= */

  {
    slug:
      'meridian',

    eyebrow:
      'FEATURED CASE STUDY · 01',

    title:
      'MERIDIAN',

    subtitle:
      'AI-Powered Travel Planning Platform',

    description:
      'A production-deployed intelligent travel planning platform combining itineraries, interactive maps, saved places, budgets, weather, AI-assisted planning, authentication and realtime collaboration inside a single journey workspace.',

    cover:
      assetUrl('/images/projects/meridian/cover.webp'),

    technologies: [
      'Next.js',
      'React',
      'TypeScript',
      'NestJS',
      'PostgreSQL',
      'Prisma',
      'AI',
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
          'Travel Planning Platform',
      },

      {
        label:
          'STATUS',

        value:
          'Completed',
      },

      {
        label:
          'ARCHITECTURE',

        value:
          'Full-Stack Monorepo',
      },
    ],

    problemTitle:
      'Travel planning is fragmented by default.',

    problem: [
      'Planning a complete trip usually requires moving between maps, notes, spreadsheets, weather services, messaging tools and multiple travel applications.',

      'As itinerary data grows, places, activities, expenses and collaborators need to remain connected instead of becoming unrelated pieces of information.',

      'Adding AI and realtime collaboration also introduces architectural constraints around authorization, persistence and keeping the database as the reliable source of truth.',
    ],

    solutionTitle:
      'One workspace for the entire journey.',

    solution: [
      'Meridian centralizes the trip lifecycle inside a single workspace where itinerary days, activities, places, budgets, weather and collaborators share the same journey context.',

      'A Next.js frontend communicates through authenticated BFF workflows with a NestJS API, while Prisma and PostgreSQL provide the persistent relational domain model.',

      'Gemini adds context-aware planning assistance, MapLibre connects activities to real locations and Socket.IO distributes small trip-scoped updates while REST and PostgreSQL remain authoritative.',
    ],

    architecture: [
      {
        label:
          'Next.js',

        description:
          'Web application',
      },

      {
        label:
          'NestJS',

        description:
          'API & domain logic',
      },

      {
        label:
          'Prisma',

        description:
          'Data access layer',
      },

      {
        label:
          'PostgreSQL',

        description:
          'Relational persistence',
      },
    ],

    features: [
      {
        number:
          '01',

        title:
          'Intelligent Trip Workspace',

        description:
          'Each journey brings together overview data, itinerary days, activities, places, weather, expenses, collaborators and AI assistance without breaking the planning flow.',
      },

      {
        number:
          '02',

        title:
          'Meridian AI',

        description:
          'Context-aware travel assistance uses authorized journey information to generate recommendations based on dates, existing activities, saved places and the current itinerary.',
      },

      {
        number:
          '03',

        title:
          'Interactive Maps & Places',

        description:
          'MapLibre-based mapping combines saved locations, category filtering and markers connected directly to itinerary activities, including activities generated through Meridian AI.',
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
          'Trip-level budgeting includes category limits, expense registration and spending analytics while collaborative updates keep financial information synchronized.',
      },

      {
        number:
          '06',

        title:
          'Weather Integration',

        description:
          'Open-Meteo forecast information is aligned with the destination, timezone and travel window while explicit states handle unavailable or partial forecasts.',
      },

      {
        number:
          '07',

        title:
          'Realtime Collaboration',

        description:
          'Owners can invite editors and viewers with role-based permissions while Socket.IO trip rooms distribute presence and state invalidation events.',
      },

      {
        number:
          '08',

        title:
          'Secure Authentication',

        description:
          'Authentication includes password accounts, Google identity, HttpOnly cookies, refresh-token rotation, MFA, recovery codes, password reset and session security.',
      },

      {
        number:
          '09',

        title:
          'Production Delivery',

        description:
          'Meridian is publicly deployed through Vercel, Render and Neon with automated validation through GitHub Actions and production-oriented deployment workflows.',
      },
    ],

    challenges: [
      {
        number:
          '01',

        title:
          'Context-Aware AI',

        description:
          'The AI layer needed useful trip context without becoming tightly coupled to itinerary, places and budget internals. A dedicated context layer gathers authorized journey information before sending structured data to Gemini.',
      },

      {
        number:
          '02',

        title:
          'AI Activities & Map Locations',

        description:
          'AI-generated itinerary items initially existed only as text. The data model was extended so activities can reference persisted places and appear as real markers in the map workspace.',
      },

      {
        number:
          '03',

        title:
          'Realtime Consistency',

        description:
          'Realtime updates needed to remain useful without creating another source of truth. Mutations persist through REST and PostgreSQL before small Socket.IO events tell collaborators to refresh canonical state.',
      },

      {
        number:
          '04',

        title:
          'Role-Based Access',

        description:
          'Owner, editor and viewer permissions needed to remain consistent across trips, itinerary activities, places, budgets, expenses, AI and collaboration management.',
      },

      {
        number:
          '05',

        title:
          'Authentication Security',

        description:
          'Authentication combines HttpOnly cookies, refresh-token rotation, Google identity, account linking, encrypted TOTP secrets, recovery codes and secure password-reset flows.',
      },

      {
        number:
          '06',

        title:
          'Production Deployment',

        description:
          'The deployment architecture needed realistic service boundaries without recurring infrastructure cost, using Vercel, Render, Neon and Mailjet while accounting for provider failures and cold starts.',
      },

      {
        number:
          '07',

        title:
          'Regression & Delivery',

        description:
          'Automated unit and E2E coverage, production builds, dependency auditing and Docker validation were added to reduce regressions before changes reached production.',
      },
    ],

    gallery:
      MERIDIAN_GALLERY,

    learnings: [
      'AI features become substantially more useful when they consume structured application context instead of isolated text prompts.',

      'Realtime communication works best as a synchronization mechanism when persistent application data still has one canonical source of truth.',

      'Authorization needs to be evaluated at the domain boundary because related resources can expose the same journey data through multiple workflows.',

      'Production deployment forces architecture decisions around provider reliability, security, environment configuration and graceful failure states.',
    ],

    visual:
      'meridian',

    liveUrl:
      'https://meridian-pi-vert.vercel.app',

    githubUrl:
      'https://github.com/NotLuffyJustPeter/meridian',

    nextProject: {
      slug:
        'arcana',

      name:
        'ARCANA',
    },
  },


  /* =======================================================
     ARCANA
  ======================================================= */

  {
    slug:
      'arcana',

    eyebrow:
      'AI CASE STUDY · 02',

    title:
      'ARCANA',

    subtitle:
      'AI-Powered Tarot Reading Platform',

    description:
      'A full-stack application designed to create configurable tarot readings using structured data, persistent reading history and contextual AI-generated interpretations.',

    cover:
      assetUrl('/images/projects/arcana/cover.webp'),

    technologies: [
      'Angular',
      'TypeScript',
      'Node.js',
      'Express',
      'Supabase',
      'PostgreSQL',
      'Gemini',
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
          'AI Web Application',
      },

      {
        label:
          'STATUS',

        value:
          'In Development',
      },

      {
        label:
          'ARCHITECTURE',

        value:
          'Client / Server',
      },
    ],

    problemTitle:
      'More than randomly drawing cards.',

    problem: [
      'A tarot reading depends on significantly more information than the individual meaning of each card.',

      'The system needed to understand the user question, reading topic, spread, card position, orientation, timeframe and interpretation style while keeping the process flexible enough to support different types of readings.',

      'The challenge was turning all of those variables into structured application data that could later be transformed into useful context for a generative AI model.',
    ],

    solutionTitle:
      'A data-driven reading engine.',

    solution: [
      'ARCANA separates the interface, reading engine, persistence layer and AI integration into different responsibilities.',

      'Angular manages the reading configuration and interactive table, while Node.js and Express process the request and construct the information required for the interpretation.',

      'Supabase stores cards, catalogs and generated readings, while Gemini receives dynamically constructed context based on the actual configuration and selected cards.',
    ],

    architecture: [
      {
        label:
          'Angular',

        description:
          'UI & reading configuration',
      },

      {
        label:
          'Express API',

        description:
          'Reading engine',
      },

      {
        label:
          'Supabase',

        description:
          'Data & persistence',
      },

      {
        label:
          'Gemini',

        description:
          'AI interpretation',
      },
    ],

    features: [
      {
        number:
          '01',

        title:
          'Configurable Readings',

        description:
          'Users can define the topic, question, spread, timeframe, interpretation style and contextual information before generating a reading.',
      },

      {
        number:
          '02',

        title:
          'Multiple Spreads',

        description:
          'The application supports layouts with different card counts and positions, including Past · Present · Future and Celtic Cross configurations.',
      },

      {
        number:
          '03',

        title:
          'Manual Card Selection',

        description:
          'Users can interact with the deck and manually select the cards used in a reading instead of relying exclusively on random selection.',
      },

      {
        number:
          '04',

        title:
          'Upright & Reversed Cards',

        description:
          'Every card can appear in upright or reversed orientation, with independent meanings and visual representation.',
      },

      {
        number:
          '05',

        title:
          'AI Interpretations',

        description:
          'Structured reading information is transformed into contextual prompts used by Gemini to generate interpretations.',
      },

      {
        number:
          '06',

        title:
          'Reading History',

        description:
          'Generated readings are persisted and can be restored directly from their identifier even after refreshing the application.',
      },
    ],

    challenges: [
      {
        number:
          '01',

        title:
          'Reading Persistence',

        description:
          'Early versions relied heavily on frontend state. Reading data was later recovered using the route identifier and backend persistence so results survive page refreshes.',
      },

      {
        number:
          '02',

        title:
          'Dynamic Card Layouts',

        description:
          'Different spreads require radically different layouts, including overlapping and rotated cards. The visual representation had to be separated from the logical reading model.',
      },

      {
        number:
          '03',

        title:
          'Card Asset Management',

        description:
          'A large collection of cards and reversed versions required consistent image paths and synchronization between stored URLs and physical assets.',
      },

      {
        number:
          '04',

        title:
          'AI Context Generation',

        description:
          'The application needed to convert multiple structured variables into useful model context instead of sending only a simple list of card names.',
      },

      {
        number:
          '05',

        title:
          'Supabase Integration',

        description:
          'Connectivity problems required debugging the complete path between Angular, the Express backend, the Supabase client and the remote service.',
      },

      {
        number:
          '06',

        title:
          'Modern Angular Architecture',

        description:
          'The application evolved alongside newer Angular patterns such as standalone components, Signals and modern template control flow.',
      },
    ],

    gallery:
      ARCANA_GALLERY,

    learnings: [
      'Design application state around persistence instead of only the current browser session.',

      'Separate visual layouts from domain data when the same information needs multiple representations.',

      'Structured context produces significantly more useful AI integrations than sending raw text without application-level semantics.',

      'External service failures should be isolated from application errors during debugging.',
    ],

    visual:
      'arcana',

    nextProject: {
      slug:
        'roma-app',

      name:
        'Roma APP',
    },
  },


  /* =======================================================
     ROMA APP
  ======================================================= */

  {
    slug:
      'roma-app',

    eyebrow:
      'CLIENT CASE STUDY · 03',

    title:
      'Roma APP',

    subtitle:
      'Furniture Inventory & Sales Mobile Application',

    description:
      'A mobile application developed and delivered for a furniture retailer to centralize inventory, product locations, visual catalogs and sales operations across multiple users.',

    cover:
      assetUrl('/images/projects/roma/cover.webp'),

    technologies: [
      'Flutter',
      'Dart',
      'Node.js',
      'Express',
      'MySQL',
      'REST API',
    ],

    meta: [
      {
        label:
          'ROLE',

        value:
          'Full-Stack / Mobile Developer',
      },

      {
        label:
          'TYPE',

        value:
          'Client Mobile Application',
      },

      {
        label:
          'STATUS',

        value:
          'Completed & Delivered',
      },

      {
        label:
          'USERS',

        value:
          'Multi-user System',
      },
    ],

    problemTitle:
      'Inventory needed to move with the business.',

    problem: [
      'The furniture retailer needed a centralized way to know which products were available, where each piece of furniture was located and how inventory changed after sales and merchandise entries.',

      'Product information also needed to be visual. Employees had to identify furniture through photographs, descriptions and location information instead of relying exclusively on product codes.',

      'Because several employees used the system, inventory could not exist independently on each mobile device. Every user needed to work with the same shared data.',
    ],

    solutionTitle:
      'A mobile system connected to a shared inventory.',

    solution: [
      'Roma APP was developed as a Flutter mobile application connected to a centralized backend through a REST API.',

      'Employees can consult products, photographs, stock and locations directly from their mobile devices while the backend maintains the authoritative inventory state.',

      'Sales and merchandise entries update inventory as part of the business workflow, reducing the need for separate manual stock adjustments.',
    ],

    architecture: [
      {
        label:
          'Flutter',

        description:
          'Mobile application',
      },

      {
        label:
          'REST API',

        description:
          'Client/server communication',
      },

      {
        label:
          'Node.js',

        description:
          'Business logic',
      },

      {
        label:
          'MySQL',

        description:
          'Shared inventory data',
      },
    ],

    features: [
      {
        number:
          '01',

        title:
          'Visual Product Catalog',

        description:
          'Furniture can be consulted using photographs and product information, allowing employees to quickly identify items from the mobile application.',
      },

      {
        number:
          '02',

        title:
          'Inventory Management',

        description:
          'Users can check current stock and availability from a centralized inventory shared between the employees using the application.',
      },

      {
        number:
          '03',

        title:
          'Product Location',

        description:
          'Products include location information so employees can determine where a specific piece of furniture is physically available.',
      },

      {
        number:
          '04',

        title:
          'Sales Registration',

        description:
          'Sales can be created from the application with products, quantities, customer information and calculated totals.',
      },

      {
        number:
          '05',

        title:
          'Automatic Stock Updates',

        description:
          'Completing a sale updates the corresponding inventory instead of requiring employees to manually modify product stock afterward.',
      },

      {
        number:
          '06',

        title:
          'Purchase Tickets',

        description:
          'Registered sales can generate a purchase ticket containing products, quantities, prices and transaction totals.',
      },
    ],

    challenges: [
      {
        number:
          '01',

        title:
          'Shared Inventory State',

        description:
          'Multiple users needed to see consistent inventory information, which required moving the source of truth away from individual devices and into a centralized system.',
      },

      {
        number:
          '02',

        title:
          'Sales & Stock Consistency',

        description:
          'A sale affects several parts of the system. The sales record, sale details and inventory changes must remain synchronized to avoid inconsistent business data.',
      },

      {
        number:
          '03',

        title:
          'Mobile User Experience',

        description:
          'Business operations had to remain practical on small screens, requiring navigation and interfaces designed for frequent use from mobile devices.',
      },

      {
        number:
          '04',

        title:
          'Relational Data Model',

        description:
          'Products, customers, sales, sale details, inventory and movements needed relationships that could represent the real workflow of the furniture retailer.',
      },

      {
        number:
          '05',

        title:
          'Product Media',

        description:
          'Furniture photographs needed to remain associated with the correct product records while staying practical to consume from the mobile interface.',
      },

      {
        number:
          '06',

        title:
          'Client Delivery',

        description:
          'The application had to move beyond development and testing into a usable product that could be handed over for real business operations.',
      },
    ],

    gallery:
      ROMA_GALLERY,

    learnings: [
      'Business software should model the actual workflow rather than forcing the business to adapt to the application.',

      'Inventory operations should have one authoritative data source when multiple users depend on the same stock information.',

      'Operations such as sales should be designed as complete business transactions instead of unrelated database updates.',

      'Delivering software to a real client introduces requirements around usability, stability and maintainability that are difficult to reproduce in purely academic projects.',
    ],

    visual:
      'roma',

    nextProject: {
      slug:
        'kave-sys',

      name:
        'KAVE Sys',
    },
  },


  /* =======================================================
     KAVE SYS
  ======================================================= */

  {
    slug:
      'kave-sys',

    eyebrow:
      'BUSINESS CASE STUDY · 04',

    title:
      'KAVE Sys',

    subtitle:
      'Inventory & Operations Management System',

    description:
      'A full-stack business application designed to centralize products, warehouse movements, inventory levels, user roles and operational information.',

    cover:
      assetUrl('/images/projects/kave/cover.webp'),

    technologies: [
      'Angular',
      'TypeScript',
      'Node.js',
      'Express',
      'MySQL',
      'Firebase',
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
          'Business Web Application',
      },

      {
        label:
          'STATUS',

        value:
          'Completed',
      },

      {
        label:
          'DATABASE',

        value:
          'MySQL',
      },
    ],

    problemTitle:
      'Inventory data needed structure and visibility.',

    problem: [
      'Managing inventory requires more than storing the number of available products. The system needed to understand product categories, current stock, minimum and maximum levels and the movements responsible for changing inventory.',

      'Warehouse operations also required traceability. Entries and exits needed to remain associated with products and dates so users could understand how inventory evolved over time.',

      'Different users required different levels of access, making authentication and role-based functionality another important part of the application.',
    ],

    solutionTitle:
      'A centralized inventory workflow.',

    solution: [
      'KAVE Sys was designed using a separated Angular frontend and Node.js / Express backend connected through a REST API.',

      'MySQL provides persistent relational storage for products, categories and inventory operations while Firebase handles user authentication.',

      'Business rules interpret stock according to configured minimum and maximum values, helping users quickly identify products that require attention.',
    ],

    architecture: [
      {
        label:
          'Angular',

        description:
          'Interface & workflows',
      },

      {
        label:
          'Express API',

        description:
          'Business operations',
      },

      {
        label:
          'MySQL',

        description:
          'Inventory data',
      },

      {
        label:
          'Firebase',

        description:
          'Authentication',
      },
    ],

    features: [
      {
        number:
          '01',

        title:
          'Product Catalog',

        description:
          'Products can be managed with identifiers, categories, prices, pieces, current stock and configured minimum and maximum inventory levels.',
      },

      {
        number:
          '02',

        title:
          'Inventory Status',

        description:
          'Current stock is evaluated against business rules to identify normal inventory, low stock and overstock conditions.',
      },

      {
        number:
          '03',

        title:
          'Warehouse Movements',

        description:
          'Entries and exits modify inventory while preserving a history of the operations responsible for those changes.',
      },

      {
        number:
          '04',

        title:
          'Role-Based Access',

        description:
          'The interface supports different types of users and adapts available functionality according to their responsibilities.',
      },

      {
        number:
          '05',

        title:
          'Authentication',

        description:
          'Firebase Authentication manages user access before protected business functionality becomes available.',
      },

      {
        number:
          '06',

        title:
          'Operational Dashboard',

        description:
          'Inventory information can be transformed into indicators and charts to make stock conditions easier to understand.',
      },
    ],

    challenges: [
      {
        number:
          '01',

        title:
          'Frontend / Backend Integration',

        description:
          'Data originally handled in the frontend had to be migrated toward a real API backed by persistent MySQL storage.',
      },

      {
        number:
          '02',

        title:
          'Inventory Consistency',

        description:
          'Entries and exits needed to modify current product stock while maintaining a reliable history of inventory movements.',
      },

      {
        number:
          '03',

        title:
          'Business Rules',

        description:
          'Minimum stock, maximum stock and current inventory values needed to produce meaningful operational states throughout the interface.',
      },

      {
        number:
          '04',

        title:
          'Authentication & Roles',

        description:
          'Different users required different functionality while the application needed to preserve a consistent authentication state.',
      },

      {
        number:
          '05',

        title:
          'Angular Evolution',

        description:
          'The application evolved through newer Angular architecture patterns including standalone components and modern application configuration.',
      },

      {
        number:
          '06',

        title:
          'Environment Configuration',

        description:
          'Backend URLs, database credentials, CORS and environment variables needed to remain configurable between development environments.',
      },
    ],

    gallery:
      KAVE_GALLERY,

    learnings: [
      'Business rules should exist as explicit application logic rather than only visual conditions inside the interface.',

      'Inventory systems benefit from recording movements separately from the current stock value.',

      'Authentication and authorization should be treated as different responsibilities.',

      'Separating frontend and backend concerns makes the system easier to evolve and debug.',
    ],

    visual:
      'kave',

    nextProject: {
      slug:
        'nora-hayes',

      name:
        'Emily Limón Companion Patch',
    },
  },


  /* =======================================================
     EMILY LIMÓN
  ======================================================= */

  {
    slug:
      'nora-hayes',

    eyebrow:
      'SYSTEMS CASE STUDY · 05',

    title:
      'Emily Limón Companion Patch',

    subtitle:
      'Persistent NPC & Dialogue Extension for Project Zomboid',

    description:
      'A Lua addon that extends existing Project Zomboid NPC mods with a persistent fictional companion, contextual dialogue, affinity progression, narrative state and multiplayer-aware behavior.',

    cover:
      assetUrl('/images/projects/nora/cover.webp'),

    technologies: [
      'Lua',
      'Project Zomboid',
      'Persistence',
      'Multiplayer',
      'Game Modding',
    ],

    meta: [
      {
        label:
          'ROLE',

        value:
          'Lua Developer',
      },

      {
        label:
          'TYPE',

        value:
          'Game Systems Addon',
      },

      {
        label:
          'STATUS',

        value:
          'Functional Prototype',
      },

      {
        label:
          'PLATFORM',

        value:
          'Project Zomboid B42',
      },
    ],

    problemTitle:
      'Turning a generic NPC into a persistent character.',

    problem: [
      'Existing NPC systems could provide functional companions, but they were primarily designed around generic characters and behaviors.',

      'The goal was to create a specific fictional companion whose identity, dialogue, affinity, relationship state and narrative progression could remain consistent throughout a long-running game.',

      'The system also needed to behave correctly around save/load cycles and multiplayer, where client-side and server-side responsibilities introduce additional complexity.',
    ],

    solutionTitle:
      'An extension layer built around persistent state.',

    solution: [
      'The companion patch extends Bandits NPC and True Companions instead of replacing their existing systems.',

      'Custom Lua logic identifies the companion and attaches additional state related to affinity, relationship progression, dialogue availability, quests and persistence.',

      'The addon also introduces safeguards around restoration, spawning and multiplayer execution so companion behavior remains consistent across different game sessions.',
    ],

    architecture: [
      {
        label:
          'Project Zomboid',

        description:
          'Game runtime',
      },

      {
        label:
          'Bandits NPC',

        description:
          'NPC foundation',
      },

      {
        label:
          'True Companions',

        description:
          'Companion behavior',
      },

      {
        label:
          'Lua Patch',

        description:
          'Custom state & systems',
      },
    ],

    features: [
      {
        number:
          '01',

        title:
          'Persistent Identity',

        description:
          'Custom logic maintains the fictional companion identity and associated state instead of relying exclusively on dynamically generated NPC data.',
      },

      {
        number:
          '02',

        title:
          'Affinity System',

        description:
          'Interactions can depend on an affinity value used to represent progression in the relationship between player and companion.',
      },

      {
        number:
          '03',

        title:
          'Contextual Dialogue',

        description:
          'Dialogue availability can depend on affinity, relationship state, previous interactions and cooldown conditions.',
      },

      {
        number:
          '04',

        title:
          'Narrative Quests',

        description:
          'The companion can use custom quest states to represent narrative progression instead of relying only on isolated generic events.',
      },

      {
        number:
          '05',

        title:
          'Save / Load Persistence',

        description:
          'Relevant companion data can be serialized and restored when the game is closed and later loaded again.',
      },

      {
        number:
          '06',

        title:
          'Multiplayer-Aware Logic',

        description:
          'Certain operations distinguish between client and server responsibilities to reduce duplicate or inconsistent multiplayer behavior.',
      },
    ],

    challenges: [
      {
        number:
          '01',

        title:
          'Extending Existing Mods',

        description:
          'The addon needed to understand and integrate with systems that were not originally designed specifically for the custom companion.',
      },

      {
        number:
          '02',

        title:
          'Persistent State',

        description:
          'Affinity, relationship information, quest progress and identity had to survive save and load cycles without rebuilding the NPC incorrectly.',
      },

      {
        number:
          '03',

        title:
          'Duplicate Prevention',

        description:
          'Restoring a persistent companion requires checking whether the character already exists before creating another instance.',
      },

      {
        number:
          '04',

        title:
          'Client / Server Behavior',

        description:
          'Operations that work in single player may require different execution paths in multiplayer, especially around spawning and state ownership.',
      },

      {
        number:
          '05',

        title:
          'Event Debugging',

        description:
          'A highly event-driven mod environment required diagnosing runtime behavior through logs, Lua errors and controlled reproduction of issues.',
      },

      {
        number:
          '06',

        title:
          'Mod Interoperability',

        description:
          'The patch needed to add functionality without unnecessarily breaking or replacing behavior provided by its dependencies.',
      },
    ],

    gallery:
      NORA_GALLERY,

    learnings: [
      'Working inside an unfamiliar codebase often requires understanding existing assumptions before adding new behavior.',

      'Persistent systems should define a stable identity independently from temporary runtime objects.',

      'Multiplayer development requires a clear distinction between actions that belong to the client and actions that must be authoritative on the server.',

      'Logs and controlled reproduction are essential when debugging event-driven systems with multiple interacting mods.',
    ],

    visual:
      'nora',

    nextProject: {
      slug:
        'meridian',

      name:
        'MERIDIAN',
    },
  },
];


/* =========================================================
   HELPERS
========================================================= */

export function getCaseStudyBySlug(
  slug: string,
): CaseStudy | undefined {
  return CASE_STUDIES.find(
    (project) =>
      project.slug === slug,
  );
}

