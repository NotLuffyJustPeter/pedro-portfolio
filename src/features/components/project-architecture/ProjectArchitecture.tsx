import {
  motion,
  useReducedMotion,
} from 'motion/react';

import {
  GoArrowRight,
} from 'react-icons/go';

import type {
  CaseStudy,
} from '../../projects/types/caseStudy';

import './ProjectArchitecture.scss';

type ProjectArchitectureProps = {
  project: CaseStudy;
};

function getArchitectureMark(
  label: string,
) {
  const normalized =
    label.toLowerCase();

  if (
    normalized.includes('next')
  ) {
    return 'NEXT';
  }

  if (
    normalized.includes('nest')
  ) {
    return 'NEST';
  }

  if (
    normalized.includes('prisma')
  ) {
    return 'PRISMA';
  }

  if (
    normalized.includes('postgres')
  ) {
    return 'PG';
  }

  if (
    normalized.includes('angular')
  ) {
    return 'NG';
  }

  if (
    normalized.includes('express')
  ) {
    return 'API';
  }

  if (
    normalized.includes('supabase')
  ) {
    return 'SB';
  }

  if (
    normalized.includes('gemini')
  ) {
    return 'AI';
  }

  if (
    normalized.includes('flutter')
  ) {
    return 'FLUTTER';
  }

  if (
    normalized.includes('rest')
  ) {
    return 'REST';
  }

  if (
    normalized.includes('node')
  ) {
    return 'NODE';
  }

  if (
    normalized.includes('mysql')
  ) {
    return 'MYSQL';
  }

  if (
    normalized.includes('firebase')
  ) {
    return 'FIREBASE';
  }

  if (
    normalized.includes(
      'project zomboid',
    )
  ) {
    return 'PZ';
  }

  if (
    normalized.includes('bandits')
  ) {
    return 'NPC';
  }

  if (
    normalized.includes(
      'true companions',
    )
  ) {
    return 'TC';
  }

  if (
    normalized.includes('lua')
  ) {
    return 'LUA';
  }

  return label
    .replace(
      /[^a-zA-Z]/g,
      '',
    )
    .slice(0, 5)
    .toUpperCase();
}

export function ProjectArchitecture({
  project,
}: ProjectArchitectureProps) {
  const reduceMotion =
    useReducedMotion();

  return (
    <section
      className="project-architecture"
      id="architecture"
    >
      <div
        className="project-architecture__mesh"
        aria-hidden="true"
      />

      <div className="project-architecture__inner">
        <motion.header
          className="project-architecture__header"
          initial={
            reduceMotion
              ? false
              : {
                  opacity: 0,
                  y: 20,
                }
          }
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.2,
          }}
          transition={{
            duration: 0.65,
            ease: [
              0.22,
              1,
              0.36,
              1,
            ],
          }}
        >
          <div className="project-architecture__eyebrow">
            <span>
              02 / ARCHITECTURE
            </span>

            <span>
              SYSTEM DESIGN
            </span>
          </div>

          <div className="project-architecture__heading">
            <h2>
              Built as a system,
              <br />
              not a collection of screens.
            </h2>

            <p>
              Each layer has a defined
              responsibility, keeping
              interface, application logic
              and persistence separated as
              the product evolves.
            </p>
          </div>
        </motion.header>

        {/* NO MOTION HIDDEN STATE HERE */}

        <div className="project-architecture__grid">
          {project.architecture.map(
            (item, index) => {
              const isLast =
                index ===
                project.architecture
                  .length -
                  1;

              return (
                <div
                  key={`${item.label}-${index}`}
                  className="architecture-card-wrap"
                >
                  <article
                    className={`architecture-card architecture-card--${
                      (index % 3) + 1
                    }`}
                  >
                    <div className="architecture-card__surface">
                      <div className="architecture-card__meta">
                        <span>
                          {String(
                            index + 1,
                          ).padStart(
                            2,
                            '0',
                          )}
                        </span>

                        <span>
                          SYSTEM LAYER
                        </span>
                      </div>

                      <div
                        className="architecture-card__mark"
                        aria-hidden="true"
                      >
                        {getArchitectureMark(
                          item.label,
                        )}
                      </div>

                      <span
                        className="architecture-card__ghost"
                        aria-hidden="true"
                      >
                        {String(
                          index + 1,
                        ).padStart(
                          2,
                          '0',
                        )}
                      </span>

                      <div className="architecture-card__content">
                        <h3>
                          {item.label}
                        </h3>

                        <p>
                          {
                            item.description
                          }
                        </p>
                      </div>
                    </div>
                  </article>

                  {!isLast && (
                    <div
                      className="architecture-card__connector"
                      aria-hidden="true"
                    >
                      <GoArrowRight />
                    </div>
                  )}
                </div>
              );
            },
          )}
        </div>

        <div className="project-architecture__flow-labels">
          <span>CLIENT</span>

          <i />

          <span>
            APPLICATION
          </span>

          <i />

          <span>
            DATA ACCESS
          </span>

          <i />

          <span>
            PERSISTENCE
          </span>
        </div>

        {project.visual ===
          'meridian' && (
          <motion.div
            className="project-architecture__ai"
            initial={
              reduceMotion
                ? false
                : {
                    opacity: 0,
                    y: 20,
                  }
            }
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
              amount: 0.2,
            }}
            transition={{
              duration: 0.65,
              ease: [
                0.22,
                1,
                0.36,
                1,
              ],
            }}
          >
            <div className="project-architecture__ai-copy">
              <span>
                AI / INTELLIGENCE
                LAYER
              </span>

              <h3>
                Context in.
                <br />
                Structured data
                out.
              </h3>

              <p>
                AI-assisted
                itinerary generation
                works alongside the
                application rather
                than replacing it.
                Generated suggestions
                become structured
                entities that
                participate in the
                rest of the trip
                model.
              </p>
            </div>

            <div
              className="project-architecture__ai-visual"
              aria-hidden="true"
            >
              <div className="architecture-ai-ring architecture-ai-ring--outer">
                <span />
              </div>

              <div className="architecture-ai-ring architecture-ai-ring--middle">
                <span />
              </div>

              <div className="architecture-ai-ring architecture-ai-ring--inner">
                <span />
              </div>

              <div className="architecture-ai-core">
                AI
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </section>
  );
}
