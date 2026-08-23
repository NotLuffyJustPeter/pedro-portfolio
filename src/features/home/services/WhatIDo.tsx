import {
  useState,
} from 'react';

import type {
  CSSProperties,
} from 'react';

import type {
  IconType,
} from 'react-icons';

import {
  FiCpu,
  FiGlobe,
  FiMonitor,
  FiServer,
  FiSmartphone,
} from 'react-icons/fi';

import {
  SiAngular,
  SiDart,
  SiExpress,
  SiFlutter,
  SiGooglegemini,
  SiMysql,
  SiNestjs,
  SiNextdotjs,
  SiNodedotjs,
  SiPostgresql,
  SiReact,
  SiTypescript,
} from 'react-icons/si';

import {
  Container,
  Section,
} from '../../../components/layout';

import {
  Eyebrow,
  Reveal,
} from '../../../components/ui';

import './WhatIDo.scss';

/* =====================================================
   TYPES
===================================================== */

interface StackItem {
  name: string;

  icon: IconType;

  color: string;
}

interface ServiceItem {
  number: string;

  title: string;

  description: string;

  icon: IconType;

  accent:
    | 'violet'
    | 'blue'
    | 'green'
    | 'purple';

  stack: StackItem[];
}

type TechStyle =
  CSSProperties &
  Record<
    '--technology-color',
    string
  >;

/* =====================================================
   DATA
===================================================== */

const SERVICES: ServiceItem[] = [
  {
    number:
      '01',

    title:
      'Full-Stack Development',

    description:
      'End-to-end web products connecting interface, application logic, APIs, data and deployment into one cohesive system.',

    icon:
      FiMonitor,

    accent:
      'violet',

    stack: [
      {
        name:
          'React',

        icon:
          SiReact,

        color:
          '97 218 251',
      },

      {
        name:
          'Next.js',

        icon:
          SiNextdotjs,

        color:
          '255 255 255',
      },

      {
        name:
          'Angular',

        icon:
          SiAngular,

        color:
          '221 0 49',
      },

      {
        name:
          'TypeScript',

        icon:
          SiTypescript,

        color:
          '49 120 198',
      },

      {
        name:
          'Node.js',

        icon:
          SiNodedotjs,

        color:
          '95 160 78',
      },

      {
        name:
          'REST APIs',

        icon:
          FiGlobe,

        color:
          '167 139 250',
      },
    ],
  },

  {
    number:
      '02',

    title:
      'Mobile Applications',

    description:
      'Mobile experiences focused on real workflows, responsive interaction and reliable communication with backend services.',

    icon:
      FiSmartphone,

    accent:
      'blue',

    stack: [
      {
        name:
          'Flutter',

        icon:
          SiFlutter,

        color:
          '84 197 248',
      },

      {
        name:
          'Dart',

        icon:
          SiDart,

        color:
          '1 169 219',
      },

      {
        name:
          'React',

        icon:
          SiReact,

        color:
          '97 218 251',
      },

      {
        name:
          'Node.js',

        icon:
          SiNodedotjs,

        color:
          '95 160 78',
      },

      {
        name:
          'REST APIs',

        icon:
          FiGlobe,

        color:
          '56 189 248',
      },

      {
        name:
          'TypeScript',

        icon:
          SiTypescript,

        color:
          '49 120 198',
      },
    ],
  },

  {
    number:
      '03',

    title:
      'Backend & Architecture',

    description:
      'Backend systems built around maintainable APIs, business rules, authentication, relational data and scalable architecture.',

    icon:
      FiServer,

    accent:
      'green',

    stack: [
      {
        name:
          'Node.js',

        icon:
          SiNodedotjs,

        color:
          '95 160 78',
      },

      {
        name:
          'NestJS',

        icon:
          SiNestjs,

        color:
          '224 35 78',
      },

      {
        name:
          'Express',

        icon:
          SiExpress,

        color:
          '255 255 255',
      },

      {
        name:
          'PostgreSQL',

        icon:
          SiPostgresql,

        color:
          '65 115 148',
      },

      {
        name:
          'MySQL',

        icon:
          SiMysql,

        color:
          '68 121 161',
      },

      {
        name:
          'REST APIs',

        icon:
          FiGlobe,

        color:
          '52 211 153',
      },
    ],
  },

  {
    number:
      '04',

    title:
      'AI Integration',

    description:
      'AI-assisted product features designed around useful workflows, application context and dependable integration with existing systems.',

    icon:
      FiCpu,

    accent:
      'purple',

    stack: [
      {
        name:
          'Gemini',

        icon:
          SiGooglegemini,

        color:
          '139 125 255',
      },

      {
        name:
          'Node.js',

        icon:
          SiNodedotjs,

        color:
          '95 160 78',
      },

      {
        name:
          'TypeScript',

        icon:
          SiTypescript,

        color:
          '49 120 198',
      },

      {
        name:
          'REST APIs',

        icon:
          FiGlobe,

        color:
          '56 189 248',
      },

      {
        name:
          'Next.js',

        icon:
          SiNextdotjs,

        color:
          '255 255 255',
      },

      {
        name:
          'PostgreSQL',

        icon:
          SiPostgresql,

        color:
          '65 115 148',
      },
    ],
  },
];

/* =====================================================
   COMPONENT
===================================================== */

export function WhatIDo() {
  const [
    activeService,
    setActiveService,
  ] =
    useState<
      string | null
    >(null);

  const toggleService = (
    number: string,
  ) => {
    setActiveService(
      (
        current,
      ) =>
        current === number
          ? null
          : number,
    );
  };

  return (
    <Section
      id="what-i-do"
      className="what-i-do"
    >
      <Container>
        {/* =====================
            TOP
        ===================== */}

        <Reveal>
          <div className="what-i-do__top">
            <Eyebrow>
              04 / WHAT I DO
            </Eyebrow>

            <span>
              PRODUCT /
              ENGINEERING
            </span>
          </div>
        </Reveal>

        {/* =====================
            HEADER
        ===================== */}

        <header className="what-i-do__header">
          <Reveal>
            <h2>
              <span>
                From product
              </span>

              <span>
                idea to
              </span>

              <span>
                production.
              </span>
            </h2>
          </Reveal>

          <Reveal
            delay={0.08}
          >
            <p className="what-i-do__intro">
              I work across the
              different layers of
              digital products,
              choosing tools based
              on the problem rather
              than forcing every
              project into the same
              stack.
            </p>
          </Reveal>
        </header>

        {/* =====================
            CARDS
        ===================== */}

        <div className="what-i-do__grid">
          {SERVICES.map(
            (
              service,
              index,
            ) => {
              const ServiceIcon =
                service.icon;

              const active =
                activeService ===
                service.number;

              return (
                <Reveal
                  key={
                    service.number
                  }
                  delay={
                    index *
                    0.05
                  }
                >
                  <article
                    className={[
                      'service-card',

                      `service-card--${service.accent}`,

                      active
                        ? 'service-card--active'
                        : '',
                    ]
                      .filter(Boolean)
                      .join(' ')}
                    tabIndex={0}
                    role="button"
                    aria-pressed={
                      active
                    }
                    onClick={() =>
                      toggleService(
                        service.number,
                      )
                    }
                    onKeyDown={(
                      event,
                    ) => {
                      if (
                        event.key ===
                          'Enter' ||
                        event.key ===
                          ' '
                      ) {
                        event.preventDefault();

                        toggleService(
                          service.number,
                        );
                      }
                    }}
                  >
                    {/* =====================
                        FRONT
                    ===================== */}

                    <div className="service-card__face service-card__front">
                      <div className="service-card__top">
                        <span className="service-card__number">
                          {
                            service.number
                          }
                        </span>

                        <div className="service-card__icon">
                          <ServiceIcon
                            aria-hidden="true"
                          />
                        </div>
                      </div>

                      <div className="service-card__front-content">
                        <h3>
                          {
                            service.title
                          }
                        </h3>

                        <p>
                          {
                            service.description
                          }
                        </p>
                      </div>

                      <div className="service-card__front-footer">
                        <span>
                          EXPLORE STACK
                        </span>

                        <i />

                        <span>
                          HOVER /
                          CLICK
                        </span>
                      </div>
                    </div>

                    {/* =====================
                        BACK
                    ===================== */}

                    <div className="service-card__face service-card__back">
                      <div className="service-card__back-header">
                        <div>
                          <span className="service-card__number">
                            {
                              service.number
                            }
                          </span>

                          <small>
                            CORE STACK
                          </small>
                        </div>

                        <div className="service-card__icon service-card__icon--active">
                          <ServiceIcon
                            aria-hidden="true"
                          />
                        </div>
                      </div>

                      <div className="service-card__back-title">
                        <span>
                          {
                            service.title
                          }
                        </span>

                        <h3>
                          Tools I use
                          <br />
                          to build it.
                        </h3>
                      </div>

                      <div className="service-stack">
                        {service.stack.map(
                          (
                            technology,
                          ) => {
                            const TechnologyIcon =
                              technology.icon;

                            const style:
                              TechStyle = {
                                '--technology-color':
                                  technology.color,
                              };

                            return (
                              <div
                                key={
                                  technology.name
                                }
                                className="service-stack__item"
                                style={
                                  style
                                }
                              >
                                <TechnologyIcon
                                  aria-hidden="true"
                                />

                                <span>
                                  {
                                    technology.name
                                  }
                                </span>
                              </div>
                            );
                          },
                        )}
                      </div>
                    </div>
                  </article>
                </Reveal>
              );
            },
          )}
        </div>
      </Container>
    </Section>
  );
}
