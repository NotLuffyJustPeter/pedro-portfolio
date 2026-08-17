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
    ]

  }

];
