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
}

];

