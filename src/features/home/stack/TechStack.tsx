import {
  useState,
} from 'react';

import type {
  CSSProperties,
  KeyboardEvent,
} from 'react';

import type {
  IconType,
} from 'react-icons';

import {
  FaAndroid,
  FaAws,
  FaJava,
} from 'react-icons/fa';

import {
  FiCloud,
  FiDatabase,
  FiGitBranch,
  FiLayers,
  FiRepeat,
  FiServer,
  FiSmartphone,
} from 'react-icons/fi';

import {
  SiAngular,
  SiApachekafka,
  SiCss,
  SiDart,
  SiDocker,
  SiExpress,
  SiFirebase,
  SiFlask,
  SiFlutter,
  SiGit,
  SiGithubactions,
  SiGooglecloud,
  SiGooglegemini,
  SiHtml5,
  SiJavascript,
  SiKubernetes,
  SiMysql,
  SiNestjs,
  SiNextdotjs,
  SiNodedotjs,
  SiPostgresql,
  SiReact,
  SiSpringboot,
  SiSupabase,
  SiTailwindcss,
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

import LogoLoop from './logo-loop/LogoLoop';

import './TechStack.scss';

/* =====================================================
   TYPES
===================================================== */

interface Technology {
  id: string;
  name: string;
  icon: IconType;
  color: string;
}

interface StackArea {
  id: string;
  title: string;
  description: string;
  icon: IconType;
  accent: string;
  technologies: string[];
}

type TechStyle =
  CSSProperties &
  Record<
    '--tech-color',
    string
  >;

type AreaStyle =
  CSSProperties &
  Record<
    '--area-accent',
    string
  >;

/* =====================================================
   TECHNOLOGIES
===================================================== */

const TECHNOLOGIES: Technology[] = [
  {
    id: 'react',
    name: 'React',
    icon: SiReact,
    color: '97 218 251',
  },

  {
    id: 'next',
    name: 'Next.js',
    icon: SiNextdotjs,
    color: '255 255 255',
  },

  {
    id: 'angular',
    name: 'Angular',
    icon: SiAngular,
    color: '221 0 49',
  },

  {
    id: 'typescript',
    name: 'TypeScript',
    icon: SiTypescript,
    color: '49 120 198',
  },

  {
    id: 'javascript',
    name: 'JavaScript',
    icon: SiJavascript,
    color: '247 223 30',
  },

  {
    id: 'html',
    name: 'HTML',
    icon: SiHtml5,
    color: '227 76 38',
  },

  {
    id: 'css',
    name: 'CSS / SCSS',
    icon: SiCss,
    color: '102 153 255',
  },

  {
    id: 'tailwind',
    name: 'Tailwind',
    icon: SiTailwindcss,
    color: '56 189 248',
  },

  {
    id: 'node',
    name: 'Node.js',
    icon: SiNodedotjs,
    color: '95 160 78',
  },

  {
    id: 'nest',
    name: 'NestJS',
    icon: SiNestjs,
    color: '224 35 78',
  },

  {
    id: 'express',
    name: 'Express',
    icon: SiExpress,
    color: '255 255 255',
  },

  {
    id: 'java',
    name: 'Java',
    icon: FaJava,
    color: '234 76 45',
  },

  {
    id: 'spring',
    name: 'Spring Boot',
    icon: SiSpringboot,
    color: '109 179 63',
  },

  {
    id: 'flask',
    name: 'Flask',
    icon: SiFlask,
    color: '255 255 255',
  },

  {
    id: 'flutter',
    name: 'Flutter',
    icon: SiFlutter,
    color: '84 197 248',
  },

  {
    id: 'dart',
    name: 'Dart',
    icon: SiDart,
    color: '1 169 219',
  },

  {
    id: 'android-studio',
    name: 'Android Studio',
    icon: FaAndroid,
    color: '61 220 132',
  },

  {
    id: 'postgresql',
    name: 'PostgreSQL',
    icon: SiPostgresql,
    color: '65 115 148',
  },

  {
    id: 'mysql',
    name: 'MySQL',
    icon: SiMysql,
    color: '68 121 161',
  },

  {
    id: 'supabase',
    name: 'Supabase',
    icon: SiSupabase,
    color: '62 207 142',
  },

  {
    id: 'firebase',
    name: 'Firebase',
    icon: SiFirebase,
    color: '255 202 40',
  },

  {
    id: 'docker',
    name: 'Docker',
    icon: SiDocker,
    color: '36 150 237',
  },

  {
    id: 'kubernetes',
    name: 'Kubernetes',
    icon: SiKubernetes,
    color: '50 108 229',
  },

  {
    id: 'aws',
    name: 'AWS',
    icon: FaAws,
    color: '255 153 0',
  },

  {
    id: 'gcp',
    name: 'Google Cloud',
    icon: SiGooglecloud,
    color: '66 133 244',
  },

  {
    id: 'git',
    name: 'Git',
    icon: SiGit,
    color: '240 80 50',
  },

  {
    id: 'github-actions',
    name: 'GitHub Actions',
    icon: SiGithubactions,
    color: '32 139 246',
  },

  {
    id: 'kafka',
    name: 'Kafka',
    icon: SiApachekafka,
    color: '255 255 255',
  },

  {
    id: 'gemini',
    name: 'Gemini',
    icon: SiGooglegemini,
    color: '139 125 255',
  },

  {
    id: 'rest',
    name: 'REST APIs',
    icon: FiRepeat,
    color: '167 139 250',
  },
];

/* =====================================================
   HELPERS
===================================================== */

function getTechnology(
  id: string,
) {
  return TECHNOLOGIES.find(
    (technology) =>
      technology.id === id,
  );
}

/* =====================================================
   LOGO LOOP
===================================================== */

const LOOP_LOGOS =
  TECHNOLOGIES
    .filter(
      (technology) =>
        technology.id !== 'rest',
    )
    .map(
      (technology) => {
        const Icon =
          technology.icon;

        const style: TechStyle = {
          '--tech-color':
            technology.color,
        };

        return {
          title:
            technology.name,

          node: (
            <span
              className="tech-loop-logo"
              style={style}
              title={
                technology.name
              }
            >
              <Icon
                aria-hidden="true"
              />
            </span>
          ),
        };
      },
    );

/* =====================================================
   STACK AREAS
===================================================== */

const STACK_AREAS: StackArea[] = [
  {
    id: 'frontend',

    title: 'Frontend',

    description:
      'Interfaces and product experiences.',

    icon: FiLayers,

    accent:
      '124 92 252',

    technologies: [
      'react',
      'next',
      'angular',
      'typescript',
      'javascript',
      'tailwind',
    ],
  },

  {
    id: 'backend',

    title: 'Backend',

    description:
      'APIs, services and business logic.',

    icon: FiServer,

    accent:
      '56 189 248',

    technologies: [
      'node',
      'nest',
      'express',
      'java',
      'spring',
      'flask',
    ],
  },

  {
    id: 'data',

    title: 'Data',

    description:
      'Relational and cloud persistence.',

    icon: FiDatabase,

    accent:
      '52 211 153',

    technologies: [
      'postgresql',
      'mysql',
      'supabase',
      'firebase',
    ],
  },

  {
    id: 'mobile',

    title: 'Mobile',

    description:
      'Cross-platform and Android development.',

    icon: FiSmartphone,

    accent:
      '34 211 238',

    technologies: [
      'flutter',
      'dart',
      'android-studio',
      'java',
      'rest',
      'node',
    ],
  },

  {
    id: 'cloud',

    title: 'Cloud',

    description:
      'Containers and infrastructure.',

    icon: FiCloud,

    accent:
      '251 146 60',

    technologies: [
      'docker',
      'kubernetes',
      'aws',
      'gcp',
    ],
  },

  {
    id: 'delivery',

    title: 'Delivery',

    description:
      'CI/CD and engineering workflows.',

    icon: FiGitBranch,

    accent:
      '244 114 182',

    technologies: [
      'git',
      'github-actions',
      'docker',
      'kubernetes',
    ],
  },
];

/* =====================================================
   COMPONENT
===================================================== */

export function TechStack() {
  const [
    activeArea,
    setActiveArea,
  ] = useState<
    string | null
  >(null);

  const toggleArea = (
    id: string,
  ) => {
    setActiveArea(
      (current) =>
        current === id
          ? null
          : id,
    );
  };

  const handleKeyDown = (
    event:
      KeyboardEvent<HTMLElement>,
    id: string,
  ) => {
    if (
      event.key === 'Enter' ||
      event.key === ' '
    ) {
      event.preventDefault();

      toggleArea(id);
    }
  };

  return (
    <Section
      id="tech-stack"
      className="tech-stack"
    >
      <Container>
        {/* =====================
            TOP
        ===================== */}

        <Reveal>
          <div className="tech-stack__top">
            <Eyebrow>
              05 / TECH STACK
            </Eyebrow>

            <span>
              TOOLS / SYSTEMS
            </span>
          </div>
        </Reveal>

        {/* =====================
            HEADER
        ===================== */}

        <header className="tech-stack__header">
          <Reveal>
            <h2>
              Technology is
              <br />
              part of the
              <br />
              system.
            </h2>
          </Reveal>

          <Reveal
            delay={0.08}
          >
            <div className="tech-stack__intro">
              <span>
                NOT THE PRODUCT.
              </span>

              <p>
                I choose tools
                according to the
                product,
                architecture and
                constraints instead
                of forcing every
                project into the
                same stack.
              </p>
            </div>
          </Reveal>
        </header>

        {/* =====================
            LOGO LOOP
        ===================== */}

        <Reveal
          delay={0.08}
        >
          <div className="tech-stack__logos">
            <div className="tech-stack__logos-meta">
              <span>
                TECHNOLOGY /
                TOOLBOX
              </span>

              <span>
                HOVER TO PAUSE
              </span>
            </div>

            <div className="tech-stack__logos-loop">
              <LogoLoop
                logos={
                  LOOP_LOGOS
                }
                speed={50}
                direction="left"
                logoHeight={42}
                gap={48}
                hoverSpeed={0}
                scaleOnHover
                fadeOut
                fadeOutColor="#08090b"
                ariaLabel="Technologies and tools"
              />
            </div>
          </div>
        </Reveal>

        {/* =====================
            STACK AREAS
        ===================== */}

        <div className="tech-stack__areas">
          {STACK_AREAS.map(
            (
              area,
              index,
            ) => {
              const AreaIcon =
                area.icon;

              const isActive =
                activeArea ===
                area.id;

              const areaStyle:
                AreaStyle = {
                  '--area-accent':
                    area.accent,
                };

              return (
                <Reveal
                  key={
                    area.id
                  }
                  delay={
                    index *
                    0.035
                  }
                >
                  <article
                    className={[
                      'stack-area',

                      isActive
                        ? 'stack-area--active'
                        : '',
                    ]
                      .filter(Boolean)
                      .join(' ')}
                    style={
                      areaStyle
                    }
                    role="button"
                    tabIndex={0}
                    aria-pressed={
                      isActive
                    }
                    onClick={() =>
                      toggleArea(
                        area.id,
                      )
                    }
                    onKeyDown={(
                      event,
                    ) =>
                      handleKeyDown(
                        event,
                        area.id,
                      )
                    }
                  >
                    {/* FRONT */}

                    <div className="stack-area__face stack-area__front">
                      <div className="stack-area__front-top">
                        <div className="stack-area__icon">
                          <AreaIcon
                            aria-hidden="true"
                          />
                        </div>

                        <span className="stack-area__index">
                          {String(
                            index + 1,
                          ).padStart(
                            2,
                            '0',
                          )}
                        </span>
                      </div>

                      <div className="stack-area__front-copy">
                        <h3>
                          {
                            area.title
                          }
                        </h3>

                        <p>
                          {
                            area.description
                          }
                        </p>
                      </div>

                      <div className="stack-area__front-footer">
                        <span>
                          CORE STACK
                        </span>

                        <i />

                        <span>
                          HOVER /
                          CLICK
                        </span>
                      </div>
                    </div>

                    {/* BACK */}

                    <div className="stack-area__face stack-area__back">
                      <div className="stack-area__back-header">
                        <div>
                          <span>
                            {
                              area.title
                            }
                          </span>

                          <small>
                            CORE STACK
                          </small>
                        </div>

                        <span className="stack-area__index">
                          {String(
                            index + 1,
                          ).padStart(
                            2,
                            '0',
                          )}
                        </span>
                      </div>

                      <div className="stack-area__tech-grid">
                        {area.technologies.map(
                          (
                            technologyId,
                          ) => {
                            const technology =
                              getTechnology(
                                technologyId,
                              );

                            if (
                              !technology
                            ) {
                              return null;
                            }

                            const TechnologyIcon =
                              technology.icon;

                            const style:
                              TechStyle = {
                                '--tech-color':
                                  technology.color,
                              };

                            return (
                              <div
                                key={
                                  technology.id
                                }
                                className="stack-area__tech"
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
