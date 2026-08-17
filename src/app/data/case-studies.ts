import {
  CaseStudy
} from '../core/models/case-study.model';

export const CASE_STUDIES: CaseStudy[] = [

  {
    slug: 'arcana',

    eyebrow: 'FEATURED PROJECT · 01',

    title: 'ARCANA',

    subtitle:
      'AI-Powered Tarot Reading Platform',

    description:
      'A full-stack application designed to create configurable tarot readings using structured data, persistent reading history and contextual AI-generated interpretations.',


    technologies: [
      'Angular',
      'TypeScript',
      'Node.js',
      'Express',
      'Supabase',
      'PostgreSQL',
      'Gemini'
    ],


    meta: [
      {
        label: 'ROLE',
        value: 'Full-Stack Developer'
      },
      {
        label: 'TYPE',
        value: 'AI Web Application'
      },
      {
        label: 'STATUS',
        value: 'In Development'
      },
      {
        label: 'ARCHITECTURE',
        value: 'Client / Server'
      }
    ],


    problemTitle:
      'More than randomly drawing cards.',

    problem: [
      'A tarot reading depends on significantly more information than the individual meaning of each card.',

      'The system needed to understand the user question, reading topic, spread, card position, orientation, timeframe and interpretation style while keeping the process flexible enough to support different types of readings.',

      'The challenge was turning all of those variables into structured application data that could later be transformed into useful context for a generative AI model.'
    ],


    solutionTitle:
      'A data-driven reading engine.',

    solution: [
      'ARCANA separates the interface, reading engine, persistence layer and AI integration into different responsibilities.',

      'Angular manages the reading configuration and interactive table, while Node.js and Express process the request and construct the information required for the interpretation.',

      'Supabase stores cards, catalogs and generated readings, while Gemini receives dynamically constructed context based on the actual configuration and selected cards.'
    ],


    architecture: [
      {
        label: 'Angular',
        description: 'UI & reading configuration'
      },
      {
        label: 'Express API',
        description: 'Reading engine'
      },
      {
        label: 'Supabase',
        description: 'Data & persistence'
      },
      {
        label: 'Gemini',
        description: 'AI interpretation'
      }
    ],


    features: [

      {
        number: '01',

        title: 'Configurable Readings',

        description:
          'Users can define the topic, question, spread, timeframe, interpretation style and contextual information before generating a reading.'
      },

      {
        number: '02',

        title: 'Multiple Spreads',

        description:
          'The application supports layouts with different card counts and positions, including Past · Present · Future and Celtic Cross configurations.'
      },

      {
        number: '03',

        title: 'Manual Card Selection',

        description:
          'Users can interact with the deck and manually select the cards used in a reading instead of relying exclusively on random selection.'
      },

      {
        number: '04',

        title: 'Upright & Reversed Cards',

        description:
          'Every card can appear in upright or reversed orientation, with independent meanings and visual representation.'
      },

      {
        number: '05',

        title: 'AI Interpretations',

        description:
          'Structured reading information is transformed into contextual prompts used by Gemini to generate interpretations.'
      },

      {
        number: '06',

        title: 'Reading History',

        description:
          'Generated readings are persisted and can be restored directly from their identifier even after refreshing the application.'
      }

    ],


    challenges: [

      {
        number: '01',

        title: 'Reading Persistence',

        description:
          'Early versions relied heavily on frontend state. Reading data was later recovered using the route identifier and backend persistence so results survive page refreshes.'
      },

      {
        number: '02',

        title: 'Dynamic Card Layouts',

        description:
          'Different spreads require radically different layouts, including overlapping and rotated cards. The visual representation had to be separated from the logical reading model.'
      },

      {
        number: '03',

        title: 'Card Asset Management',

        description:
          'A large collection of cards and reversed versions required consistent image paths and synchronization between stored URLs and physical assets.'
      },

      {
        number: '04',

        title: 'AI Context Generation',

        description:
          'The application needed to convert multiple structured variables into useful model context instead of sending only a simple list of card names.'
      },

      {
        number: '05',

        title: 'Supabase Integration',

        description:
          'Connectivity problems required debugging the complete path between Angular, the Express backend, the Supabase client and the remote service.'
      },

      {
        number: '06',

        title: 'Modern Angular Architecture',

        description:
          'The application evolved alongside newer Angular patterns such as standalone components, Signals and modern template control flow.'
      }

    ],


    learnings: [
      'Design application state around persistence instead of only the current browser session.',

      'Separate visual layouts from domain data when the same information needs multiple representations.',

      'Structured context produces significantly more useful AI integrations than sending raw text without application-level semantics.',

      'External service failures should be isolated from application errors during debugging.'
    ],

    visual: 'arcana',

    nextProject: {
      slug: 'roma-app',
      name: 'Roma APP'
}
  },

  {
  slug: 'roma-app',

  eyebrow: 'CLIENT PROJECT · 02',

  title: 'Roma APP',

  subtitle:
    'Furniture Inventory & Sales Mobile Application',

  description:
    'A mobile application developed and delivered for a furniture retailer to centralize inventory, product locations, visual catalogs and sales operations across multiple users.',

  technologies: [
    'Flutter',
    'Dart',
    'Node.js',
    'Express',
    'MySQL',
    'REST API'
  ],

  meta: [
    {
      label: 'ROLE',
      value: 'Full-Stack / Mobile Developer'
    },
    {
      label: 'TYPE',
      value: 'Client Mobile Application'
    },
    {
      label: 'STATUS',
      value: 'Completed & Delivered'
    },
    {
      label: 'USERS',
      value: 'Multi-user System'
    }
  ],

  problemTitle:
    'Inventory needed to move with the business.',

  problem: [
    'The furniture retailer needed a centralized way to know which products were available, where each piece of furniture was located and how inventory changed after sales and merchandise entries.',

    'Product information also needed to be visual. Employees had to identify furniture through photographs, descriptions and location information instead of relying exclusively on product codes.',

    'Because several employees used the system, inventory could not exist independently on each mobile device. Every user needed to work with the same shared data.'
  ],

  solutionTitle:
    'A mobile system connected to a shared inventory.',

  solution: [
    'Roma APP was developed as a Flutter mobile application connected to a centralized backend through a REST API.',

    'Employees can consult products, photographs, stock and locations directly from their mobile devices while the backend maintains the authoritative inventory state.',

    'Sales and merchandise entries update inventory as part of the business workflow, reducing the need for separate manual stock adjustments.'
  ],

  architecture: [
    {
      label: 'Flutter',
      description: 'Mobile application'
    },
    {
      label: 'REST API',
      description: 'Client/server communication'
    },
    {
      label: 'Node.js',
      description: 'Business logic'
    },
    {
      label: 'MySQL',
      description: 'Shared inventory data'
    }
  ],

  features: [
    {
      number: '01',
      title: 'Visual Product Catalog',
      description:
        'Furniture can be consulted using photographs and product information, allowing employees to quickly identify items from the mobile application.'
    },

    {
      number: '02',
      title: 'Inventory Management',
      description:
        'Users can check current stock and availability from a centralized inventory shared between the employees using the application.'
    },

    {
      number: '03',
      title: 'Product Location',
      description:
        'Products include location information so employees can determine where a specific piece of furniture is physically available.'
    },

    {
      number: '04',
      title: 'Sales Registration',
      description:
        'Sales can be created from the application with products, quantities, customer information and calculated totals.'
    },

    {
      number: '05',
      title: 'Automatic Stock Updates',
      description:
        'Completing a sale updates the corresponding inventory instead of requiring employees to manually modify product stock afterward.'
    },

    {
      number: '06',
      title: 'Purchase Tickets',
      description:
        'Registered sales can generate a purchase ticket containing products, quantities, prices and transaction totals.'
    }
  ],

  challenges: [
    {
      number: '01',
      title: 'Shared Inventory State',
      description:
        'Multiple users needed to see consistent inventory information, which required moving the source of truth away from individual devices and into a centralized system.'
    },

    {
      number: '02',
      title: 'Sales & Stock Consistency',
      description:
        'A sale affects several parts of the system. The sales record, sale details and inventory changes must remain synchronized to avoid inconsistent business data.'
    },

    {
      number: '03',
      title: 'Mobile User Experience',
      description:
        'Business operations had to remain practical on small screens, requiring navigation and interfaces designed for frequent use from mobile devices.'
    },

    {
      number: '04',
      title: 'Relational Data Model',
      description:
        'Products, customers, sales, sale details, inventory and movements needed relationships that could represent the real workflow of the furniture retailer.'
    },

    {
      number: '05',
      title: 'Product Media',
      description:
        'Furniture photographs needed to remain associated with the correct product records while staying practical to consume from the mobile interface.'
    },

    {
      number: '06',
      title: 'Client Delivery',
      description:
        'The application had to move beyond development and testing into a usable product that could be handed over for real business operations.'
    }
  ],

  learnings: [
    'Business software should model the actual workflow rather than forcing the business to adapt to the application.',

    'Inventory operations should have one authoritative data source when multiple users depend on the same stock information.',

    'Operations such as sales should be designed as complete business transactions instead of unrelated database updates.',

    'Delivering software to a real client introduces requirements around usability, stability and maintainability that are difficult to reproduce in purely academic projects.'
  ],

  visual: 'roma',

  nextProject: {
    slug: 'kave-sys',
    name: 'KAVE Sys'
  }
},

  {
  slug: 'kave-sys',

  eyebrow: 'BUSINESS PROJECT · 03',

  title: 'KAVE Sys',

  subtitle:
    'Inventory & Operations Management System',

  description:
    'A full-stack business application designed to centralize products, warehouse movements, inventory levels, user roles and operational information.',

  technologies: [
    'Angular',
    'TypeScript',
    'Node.js',
    'Express',
    'MySQL',
    'Firebase'
  ],

  meta: [
    {
      label: 'ROLE',
      value: 'Full-Stack Developer'
    },
    {
      label: 'TYPE',
      value: 'Business Web Application'
    },
    {
      label: 'STATUS',
      value: 'Completed'
    },
    {
      label: 'DATABASE',
      value: 'MySQL'
    }
  ],

  problemTitle:
    'Inventory data needed structure and visibility.',

  problem: [
    'Managing inventory requires more than storing the number of available products. The system needed to understand product categories, current stock, minimum and maximum levels and the movements responsible for changing inventory.',

    'Warehouse operations also required traceability. Entries and exits needed to remain associated with products and dates so users could understand how inventory evolved over time.',

    'Different users required different levels of access, making authentication and role-based functionality another important part of the application.'
  ],

  solutionTitle:
    'A centralized inventory workflow.',

  solution: [
    'KAVE Sys was designed using a separated Angular frontend and Node.js / Express backend connected through a REST API.',

    'MySQL provides persistent relational storage for products, categories and inventory operations while Firebase handles user authentication.',

    'Business rules interpret stock according to configured minimum and maximum values, helping users quickly identify products that require attention.'
  ],

  architecture: [
    {
      label: 'Angular',
      description: 'Interface & workflows'
    },
    {
      label: 'Express API',
      description: 'Business operations'
    },
    {
      label: 'MySQL',
      description: 'Inventory data'
    },
    {
      label: 'Firebase',
      description: 'Authentication'
    }
  ],

  features: [
    {
      number: '01',
      title: 'Product Catalog',
      description:
        'Products can be managed with identifiers, categories, prices, pieces, current stock and configured minimum and maximum inventory levels.'
    },

    {
      number: '02',
      title: 'Inventory Status',
      description:
        'Current stock is evaluated against business rules to identify normal inventory, low stock and overstock conditions.'
    },

    {
      number: '03',
      title: 'Warehouse Movements',
      description:
        'Entries and exits modify inventory while preserving a history of the operations responsible for those changes.'
    },

    {
      number: '04',
      title: 'Role-Based Access',
      description:
        'The interface supports different types of users and adapts available functionality according to their responsibilities.'
    },

    {
      number: '05',
      title: 'Authentication',
      description:
        'Firebase Authentication manages user access before protected business functionality becomes available.'
    },

    {
      number: '06',
      title: 'Operational Dashboard',
      description:
        'Inventory information can be transformed into indicators and charts to make stock conditions easier to understand.'
    }
  ],

  challenges: [
    {
      number: '01',
      title: 'Frontend / Backend Integration',
      description:
        'Data originally handled in the frontend had to be migrated toward a real API backed by persistent MySQL storage.'
    },

    {
      number: '02',
      title: 'Inventory Consistency',
      description:
        'Entries and exits needed to modify current product stock while maintaining a reliable history of inventory movements.'
    },

    {
      number: '03',
      title: 'Business Rules',
      description:
        'Minimum stock, maximum stock and current inventory values needed to produce meaningful operational states throughout the interface.'
    },

    {
      number: '04',
      title: 'Authentication & Roles',
      description:
        'Different users required different functionality while the application needed to preserve a consistent authentication state.'
    },

    {
      number: '05',
      title: 'Angular Evolution',
      description:
        'The application evolved through newer Angular architecture patterns including standalone components and modern application configuration.'
    },

    {
      number: '06',
      title: 'Environment Configuration',
      description:
        'Backend URLs, database credentials, CORS and environment variables needed to remain configurable between development environments.'
    }
  ],

  learnings: [
    'Business rules should exist as explicit application logic rather than only visual conditions inside the interface.',

    'Inventory systems benefit from recording movements separately from the current stock value.',

    'Authentication and authorization should be treated as different responsibilities.',

    'Separating frontend and backend concerns makes the system easier to evolve and debug.'
  ],

  visual: 'kave',

  nextProject: {
    slug: 'nora-hayes',
    name: 'Nora Hayes Companion Patch'
  }
},

{
  slug: 'nora-hayes',

  eyebrow: 'SYSTEMS PROJECT · 04',

  title: 'Nora Hayes Companion Patch',

  subtitle:
    'Persistent NPC & Dialogue Extension for Project Zomboid',

  description:
    'A Lua addon that extends existing Project Zomboid NPC mods with a persistent fictional companion, contextual dialogue, affinity progression, narrative state and multiplayer-aware behavior.',

  technologies: [
    'Lua',
    'Project Zomboid',
    'State Management',
    'Persistence',
    'Multiplayer',
    'Game Modding'
  ],

  meta: [
    {
      label: 'ROLE',
      value: 'Lua Developer'
    },
    {
      label: 'TYPE',
      value: 'Game Systems Addon'
    },
    {
      label: 'STATUS',
      value: 'Functional Prototype'
    },
    {
      label: 'PLATFORM',
      value: 'Project Zomboid B42'
    }
  ],

  problemTitle:
    'Turning a generic NPC into a persistent character.',

  problem: [
    'Existing NPC systems could provide functional companions, but they were primarily designed around generic characters and behaviors.',

    'The goal was to create a specific fictional companion whose identity, dialogue, affinity, relationship state and narrative progression could remain consistent throughout a long-running game.',

    'The system also needed to behave correctly around save/load cycles and multiplayer, where client-side and server-side responsibilities introduce additional complexity.'
  ],

  solutionTitle:
    'An extension layer built around persistent state.',

  solution: [
    'The companion patch extends Bandits NPC and True Companions instead of replacing their existing systems.',

    'Custom Lua logic identifies the companion and attaches additional state related to affinity, relationship progression, dialogue availability, quests and persistence.',

    'The addon also introduces safeguards around restoration, spawning and multiplayer execution so companion behavior remains consistent across different game sessions.'
  ],

  architecture: [
    {
      label: 'Project Zomboid',
      description: 'Game runtime'
    },
    {
      label: 'Bandits NPC',
      description: 'NPC foundation'
    },
    {
      label: 'True Companions',
      description: 'Companion behavior'
    },
    {
      label: 'Lua Patch',
      description: 'Custom state & systems'
    }
  ],

  features: [
    {
      number: '01',

      title: 'Persistent Identity',

      description:
        'Custom logic maintains the fictional companion identity and associated state instead of relying exclusively on dynamically generated NPC data.'
    },

    {
      number: '02',

      title: 'Affinity System',

      description:
        'Interactions can depend on an affinity value used to represent progression in the relationship between player and companion.'
    },

    {
      number: '03',

      title: 'Contextual Dialogue',

      description:
        'Dialogue availability can depend on affinity, relationship state, previous interactions and cooldown conditions.'
    },

    {
      number: '04',

      title: 'Narrative Quests',

      description:
        'The companion can use custom quest states to represent narrative progression instead of relying only on isolated generic events.'
    },

    {
      number: '05',

      title: 'Save / Load Persistence',

      description:
        'Relevant companion data can be serialized and restored when the game is closed and later loaded again.'
    },

    {
      number: '06',

      title: 'Multiplayer-Aware Logic',

      description:
        'Certain operations distinguish between client and server responsibilities to reduce duplicate or inconsistent multiplayer behavior.'
    }
  ],

  challenges: [
    {
      number: '01',

      title: 'Extending Existing Mods',

      description:
        'The addon needed to understand and integrate with systems that were not originally designed specifically for the custom companion.'
    },

    {
      number: '02',

      title: 'Persistent State',

      description:
        'Affinity, relationship information, quest progress and identity had to survive save and load cycles without rebuilding the NPC incorrectly.'
    },

    {
      number: '03',

      title: 'Duplicate Prevention',

      description:
        'Restoring a persistent companion requires checking whether the character already exists before creating another instance.'
    },

    {
      number: '04',

      title: 'Client / Server Behavior',

      description:
        'Operations that work in single player may require different execution paths in multiplayer, especially around spawning and state ownership.'
    },

    {
      number: '05',

      title: 'Event Debugging',

      description:
        'A highly event-driven mod environment required diagnosing runtime behavior through logs, Lua errors and controlled reproduction of issues.'
    },

    {
      number: '06',

      title: 'Mod Interoperability',

      description:
        'The patch needed to add functionality without unnecessarily breaking or replacing behavior provided by its dependencies.'
    }
  ],

  learnings: [
    'Working inside an unfamiliar codebase often requires understanding existing assumptions before adding new behavior.',

    'Persistent systems should define a stable identity independently from temporary runtime objects.',

    'Multiplayer development requires a clear distinction between actions that belong to the client and actions that must be authoritative on the server.',

    'Logs and controlled reproduction are essential when debugging event-driven systems with multiple interacting mods.'
  ],

  visual: 'nora',

  nextProject: {
    slug: 'arcana',
    name: 'ARCANA'
  }
}

];

