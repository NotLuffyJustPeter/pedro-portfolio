import type {
  CSSProperties,
  ReactNode,
} from 'react';

import {
  motion,
  useReducedMotion,
  type Variants,
} from 'motion/react';

import {
  Link,
} from 'react-router-dom';

import {
  SiAngular,
  SiDart,
  SiExpress,
  SiFirebase,
  SiFlutter,
  SiGithub,
  SiLua,
  SiMysql,
  SiNestjs,
  SiNextdotjs,
  SiNodedotjs,
  SiPostgresql,
  SiPrisma,
  SiReact,
  SiSupabase,
  SiTypescript,
} from 'react-icons/si';

import {
  GoArrowLeft,
} from 'react-icons/go';

import type {
  CaseStudy,
} from '../../projects/types/caseStudy';

import EmilyTerminalPreview from '../../projects/components/emily-terminal/EmilyTerminalPreview';

import './ProjectHero.scss';

type ProjectHeroProps = {
  project: CaseStudy;
};

type TechMeta = {
  icon: ReactNode;
  color: string;
};

/* =========================================================
   EMILY CORE STACK
========================================================= */

const EMILY_CORE_STACK = [
  'Lua',
  'Project Zomboid',
  'Persistence',
  'Multiplayer',
  'Game Modding',
] as const;

/* =========================================================
   GENERIC TECH ICON
========================================================= */

function GenericTechIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <path
        d="M8 7 3 12l5 5M16 7l5 5-5 5M14 4l-4 16"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

/* =========================================================
   PROJECT ZOMBOID ICON
========================================================= */

function ProjectZomboidIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <path
        d="M7.6 7.25h8.8c2.45 0 4.3 1.82 4.55 4.25l.45 4.25c.18 1.68-1.13 3.15-2.82 3.15-.82 0-1.6-.36-2.12-.99l-1.18-1.41H8.72l-1.18 1.41a2.76 2.76 0 0 1-2.12.99c-1.69 0-3-1.47-2.82-3.15l.45-4.25C3.3 9.07 5.15 7.25 7.6 7.25Z"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.55"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      <path
        d="M8 10.4v3.2M6.4 12h3.2"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.55"
        strokeLinecap="round"
      />

      <circle
        cx="15.9"
        cy="11"
        r=".85"
        fill="currentColor"
      />

      <circle
        cx="18.2"
        cy="13.1"
        r=".85"
        fill="currentColor"
      />
    </svg>
  );
}

/* =========================================================
   PERSISTENCE ICON
========================================================= */

function PersistenceIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <ellipse
        cx="12"
        cy="5.5"
        rx="6.5"
        ry="2.75"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.55"
      />

      <path
        d="M5.5 5.5v6.5c0 1.52 2.91 2.75 6.5 2.75s6.5-1.23 6.5-2.75V5.5"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.55"
      />

      <path
        d="M5.5 12v6.5c0 1.52 2.91 2.75 6.5 2.75s6.5-1.23 6.5-2.75V12"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.55"
      />
    </svg>
  );
}

/* =========================================================
   MULTIPLAYER ICON
========================================================= */

function MultiplayerIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <circle
        cx="9"
        cy="8"
        r="3"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.55"
      />

      <path
        d="M3.5 19c.15-3.35 2.34-5.5 5.5-5.5s5.35 2.15 5.5 5.5"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.55"
        strokeLinecap="round"
      />

      <path
        d="M15.4 5.6a2.85 2.85 0 0 1 0 5.4"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.55"
        strokeLinecap="round"
      />

      <path
        d="M16.4 13.75c2.45.45 3.9 2.22 4.1 4.75"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.55"
        strokeLinecap="round"
      />
    </svg>
  );
}

/* =========================================================
   GAME MODDING ICON
========================================================= */

function GameModdingIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <path
        d="m8.5 7-5 5 5 5M15.5 7l5 5-5 5"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.65"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      <path
        d="m13.5 4-3 16"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.65"
        strokeLinecap="round"
      />
    </svg>
  );
}

/* =========================================================
   TECH ICONS
========================================================= */

const FALLBACK_TECH: TechMeta = {
  icon: <GenericTechIcon />,
  color: '#9f86ff',
};

const TECH_META: Record<
  string,
  TechMeta
> = {
  nextjs: {
    icon: <SiNextdotjs />,
    color: '#ffffff',
  },

  react: {
    icon: <SiReact />,
    color: '#61dafb',
  },

  typescript: {
    icon: <SiTypescript />,
    color: '#3178c6',
  },

  nestjs: {
    icon: <SiNestjs />,
    color: '#e0234e',
  },

  postgresql: {
    icon: <SiPostgresql />,
    color: '#6b9bd1',
  },

  prisma: {
    icon: <SiPrisma />,
    color: '#9aa8ff',
  },

  angular: {
    icon: <SiAngular />,
    color: '#dd0031',
  },

  nodejs: {
    icon: <SiNodedotjs />,
    color: '#68a063',
  },

  express: {
    icon: <SiExpress />,
    color: '#ffffff',
  },

  supabase: {
    icon: <SiSupabase />,
    color: '#3ecf8e',
  },

  flutter: {
    icon: <SiFlutter />,
    color: '#42a5f5',
  },

  dart: {
    icon: <SiDart />,
    color: '#0175c2',
  },

  mysql: {
    icon: <SiMysql />,
    color: '#67a4c8',
  },

  firebase: {
    icon: <SiFirebase />,
    color: '#ffca28',
  },

  lua: {
    icon: <SiLua />,
    color: '#7777ff',
  },

  projectzomboid: {
    icon: <ProjectZomboidIcon />,
    color: '#f3f4f6',
  },

  persistence: {
    icon: <PersistenceIcon />,
    color: '#f3f4f6',
  },

  multiplayer: {
    icon: <MultiplayerIcon />,
    color: '#f3f4f6',
  },

  gamemodding: {
    icon: <GameModdingIcon />,
    color: '#f3f4f6',
  },

  statemanagement: {
    icon: <PersistenceIcon />,
    color: '#f3f4f6',
  },
};

/* =========================================================
   TECH HELPERS
========================================================= */

function normalizeTechnology(
  technology: string,
) {
  const normalized =
    technology
      .toLowerCase()
      .replace(
        /[^a-z0-9]/g,
        '',
      );

  if (
    normalized === 'node' ||
    normalized.includes(
      'nodejs',
    )
  ) {
    return 'nodejs';
  }

  if (
    normalized.includes(
      'postgres',
    )
  ) {
    return 'postgresql';
  }

  if (
    normalized.includes(
      'express',
    )
  ) {
    return 'express';
  }

  return normalized;
}

function getTechnologyMeta(
  technology: string,
) {
  return (
    TECH_META[
      normalizeTechnology(
        technology,
      )
    ] ??
    FALLBACK_TECH
  );
}

/* =========================================================
   LETTER REVEAL
========================================================= */

const titleContainer: Variants = {
  hidden: {},

  visible: {
    transition: {
      delayChildren: 0.18,
      staggerChildren: 0.022,
    },
  },
};

const titleLetter: Variants = {
  hidden: {
    y: '115%',
    opacity: 0,
    rotate: 2,
  },

  visible: {
    y: '0%',
    opacity: 1,
    rotate: 0,

    transition: {
      duration: 0.7,

      ease: [
        0.16,
        1,
        0.3,
        1,
      ],
    },
  },
};

type AnimatedProjectTitleProps = {
  title: string;
  reduceMotion: boolean;
  className?: string;
};

function AnimatedProjectTitle({
  title,
  reduceMotion,
  className = '',
}: AnimatedProjectTitleProps) {
  const words =
    title.split(' ');

  const classes = [
    'project-hero__title',
    className,
  ]
    .filter(Boolean)
    .join(' ');

  if (reduceMotion) {
    return (
      <h1 className={classes}>
        {title}
      </h1>
    );
  }

  return (
    <motion.h1
      className={classes}
      aria-label={title}
      variants={titleContainer}
      initial="hidden"
      animate="visible"
    >
      {words.map(
        (
          word,
          wordIndex,
        ) => (
          <span
            className="project-hero__title-word"
            key={`${word}-${wordIndex}`}
            aria-hidden="true"
          >
            {Array.from(
              word,
            ).map(
              (
                character,
                characterIndex,
              ) => (
                <span
                  className="project-hero__letter-mask"
                  key={`${word}-${characterIndex}`}
                >
                  <motion.span
                    className="project-hero__letter"
                    variants={titleLetter}
                  >
                    {character}
                  </motion.span>
                </span>
              ),
            )}
          </span>
        ),
      )}
    </motion.h1>
  );
}

/* =========================================================
   PROJECT HERO
========================================================= */

export function ProjectHero({
  project,
}: ProjectHeroProps) {
  const reduceMotion =
    useReducedMotion() === true;

  const isEmilyProject =
    project.slug ===
    'nora-hayes';

  /*
   * Emily uses the exact same five
   * technologies displayed in the
   * project card on the home page.
   */
  const technologies =
    isEmilyProject
      ? EMILY_CORE_STACK
      : project.technologies;

  const longTitle =
    project.title.length > 14;

  const veryLongTitle =
    project.title.length > 22;

  const heroClasses = [
    'project-hero',

    `project-hero--${project.visual}`,

    !isEmilyProject &&
    longTitle
      ? 'project-hero--long-title'
      : '',

    !isEmilyProject &&
    veryLongTitle
      ? 'project-hero--very-long-title'
      : '',

    isEmilyProject
      ? 'project-hero--emily'
      : '',
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <section
      key={project.slug}
      className={heroClasses}
    >
      <div
        className="project-hero__ambient"
        aria-hidden="true"
      />

      <div className="project-hero__inner">
        {/* =================================================
            TOP
        ================================================= */}

        <motion.div
          className="project-hero__top"
          initial={
            reduceMotion
              ? false
              : {
                  opacity: 0,
                  y: -10,
                }
          }
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.6,
            delay: 0.05,

            ease: [
              0.16,
              1,
              0.3,
              1,
            ],
          }}
        >
          <Link
            to="/#work"
            className="project-hero__back"
          >
            <GoArrowLeft />

            <span>
              BACK TO WORK
            </span>
          </Link>

          <span className="project-hero__eyebrow">
            {project.eyebrow}
          </span>
        </motion.div>

        {/* =================================================
            EMILY CUSTOM HERO
        ================================================= */}

        {isEmilyProject ? (
          <div className="project-hero__emily-layout">
            {/* LEFT */}

            <div className="project-hero__emily-copy">
              <motion.span
                className="project-hero__case-label"
                initial={
                  reduceMotion
                    ? false
                    : {
                        opacity: 0,
                        y: 12,
                      }
                }
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  duration: 0.55,
                  delay: 0.14,
                }}
              >
                CASE STUDY / 2026
              </motion.span>

              <div className="project-hero__title-wrap">
                <AnimatedProjectTitle
                  key={`title-${project.slug}`}
                  title={
                    project.subtitle
                  }
                  reduceMotion={
                    reduceMotion
                  }
                  className="project-hero__title--emily"
                />
              </div>
            </div>

            {/* RIGHT */}

            <motion.div
              className="project-hero__emily-visual-column"
              initial={
                reduceMotion
                  ? false
                  : {
                      opacity: 0,
                      x: 28,
                    }
              }
              animate={{
                opacity: 1,
                x: 0,
              }}
              transition={{
                duration: 0.85,
                delay: 0.38,

                ease: [
                  0.16,
                  1,
                  0.3,
                  1,
                ],
              }}
            >
              <div className="project-hero__visual">
                <EmilyTerminalPreview />
              </div>

              <motion.p
                className="project-hero__emily-description"
                initial={
                  reduceMotion
                    ? false
                    : {
                        opacity: 0,
                        y: 14,
                      }
                }
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  duration: 0.65,
                  delay: 0.72,
                }}
              >
                {project.description}
              </motion.p>
            </motion.div>
          </div>
        ) : (
          <>
            {/* =============================================
                NORMAL PROJECT TITLE
            ============================================= */}

            <div className="project-hero__headline-row">
              <div className="project-hero__title-wrap">
                <AnimatedProjectTitle
                  key={`title-${project.slug}`}
                  title={
                    project.title
                  }
                  reduceMotion={
                    reduceMotion
                  }
                />
              </div>
            </div>

            {/* =============================================
                NORMAL PROJECT STORY
            ============================================= */}

            <motion.div
              className="project-hero__story"
              initial={
                reduceMotion
                  ? false
                  : {
                      opacity: 0,
                      y: 26,
                    }
              }
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.75,
                delay: 0.48,

                ease: [
                  0.16,
                  1,
                  0.3,
                  1,
                ],
              }}
            >
              <div className="project-hero__subtitle-wrap">
                <span>
                  CASE STUDY / 2026
                </span>

                <h2>
                  {project.subtitle}
                </h2>
              </div>

              <p className="project-hero__description">
                {project.description}
              </p>
            </motion.div>
          </>
        )}

        {/* =================================================
            CORE STACK
        ================================================= */}

        <motion.div
          className="project-hero__stack-row"
          initial={
            reduceMotion
              ? false
              : {
                  opacity: 0,
                  y: 18,
                }
          }
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.65,

            delay:
              isEmilyProject
                ? 0.82
                : 0.64,

            ease: [
              0.16,
              1,
              0.3,
              1,
            ],
          }}
        >
          <span className="project-hero__stack-label">
            CORE STACK
          </span>

          <div className="project-hero__stack">
            {technologies.map(
              (
                technology,
                index,
              ) => {
                const meta =
                  getTechnologyMeta(
                    technology,
                  );

                const style = {
                  '--tech-color':
                    meta.color,
                } as CSSProperties;

                return (
                  <motion.span
                    key={technology}
                    className="project-hero__tech"
                    title={technology}
                    aria-label={
                      technology
                    }
                    style={style}
                    initial={
                      reduceMotion
                        ? false
                        : {
                            opacity:
                              0,

                            scale:
                              0.82,

                            y: 8,
                          }
                    }
                    animate={{
                      opacity: 1,
                      scale: 1,
                      y: 0,
                    }}
                    transition={{
                      duration:
                        0.38,

                      delay:
                        (isEmilyProject
                          ? 0.86
                          : 0.72) +
                        index *
                          0.055,

                      ease: [
                        0.16,
                        1,
                        0.3,
                        1,
                      ],
                    }}
                  >
                    {meta.icon}
                  </motion.span>
                );
              },
            )}
          </div>

          {/* =============================================
              ACTIONS
          ============================================= */}

          {(project.liveUrl ||
            project.githubUrl) && (
            <div className="project-hero__actions">
              {project.liveUrl && (
                <a
                  href={
                    project.liveUrl
                  }
                  target="_blank"
                  rel="noreferrer"
                  className="galaxy-btn"
                  aria-label={`Open live ${project.title} project`}
                >
                  <span className="galaxy-btn__content">
                    <span className="galaxy-btn__text">
                      Live Project
                    </span>

                    <svg
                      className="galaxy-btn__icon"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path
                        d="M13 14h-2a8.999 8.999 0 0 0-7.968 4.81A10.136 10.136 0 0 1 3 18C3 12.477 7.477 8 13 8V3l10 8-10 8v-5z"
                        fill="currentColor"
                      />
                    </svg>
                  </span>

                  <span
                    className="galaxy-btn__stars"
                    aria-hidden="true"
                  />
                </a>
              )}

              {project.githubUrl && (
                <a
                  href={
                    project.githubUrl
                  }
                  target="_blank"
                  rel="noreferrer"
                  className="github-shine-btn"
                  aria-label={`Open ${project.title} on GitHub`}
                >
                  <span
                    className="github-shine-btn__shine"
                    aria-hidden="true"
                  />

                  <span className="github-shine-btn__main">
                    <SiGithub />

                    <span>
                      View on GitHub
                    </span>
                  </span>

                  <svg
                    className="github-shine-btn__star"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
                    />
                  </svg>
                </a>
              )}
            </div>
          )}
        </motion.div>

        {/* =================================================
            META
        ================================================= */}

        <motion.div
          className="project-hero__meta"
          initial={
            reduceMotion
              ? false
              : {
                  opacity: 0,
                  y: 18,
                }
          }
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.65,

            delay:
              isEmilyProject
                ? 0.92
                : 0.78,

            ease: [
              0.16,
              1,
              0.3,
              1,
            ],
          }}
        >
          {project.meta.map(
            (item) => (
              <div
                className="project-hero__meta-item"
                key={item.label}
              >
                <span>
                  {item.label}
                </span>

                <strong>
                  {item.value}
                </strong>
              </div>
            ),
          )}
        </motion.div>
      </div>
    </section>
  );
}
