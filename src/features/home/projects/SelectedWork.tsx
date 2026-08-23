import {
  Link,
} from 'react-router-dom';

import {
  motion,
  useReducedMotion,
} from 'motion/react';

import {
  GoArrowRight,
} from 'react-icons/go';

import {
  Container,
  Section,
} from '../../../components/layout';

import {
  Eyebrow,
  Reveal,
} from '../../../components/ui';

import type {
  ProjectSummary,
} from '../../../types/project';

import {
  TechDock,
} from './TechDock';

import './SelectedWork.scss';

interface SelectedWorkProps {
  projects: ProjectSummary[];
}

export function SelectedWork({
  projects,
}: SelectedWorkProps) {
  const reduceMotion =
    useReducedMotion();

  return (
    <Section
      id="selected-work"
      className="selected-work"
    >
      <Container>
        <Reveal>
          <header className="selected-work__header">
            <div className="selected-work__heading">
              <Eyebrow>
                02 / SELECTED WORK
              </Eyebrow>

              <h2>
                Other things
                <br />
                I've built.
              </h2>
            </div>

            <p>
              A selection of
              full-stack, mobile,
              business and systems
              projects built across
              different platforms
              and technical
              challenges.
            </p>
          </header>
        </Reveal>

        <div className="selected-work__grid">
          {projects.map(
            (
              project,
              index,
            ) => {
              const number =
                String(
                  index + 2,
                ).padStart(
                  2,
                  '0',
                );

              return (
                <Reveal
                  key={
                    project.slug
                  }
                  delay={
                    index *
                    0.06
                  }
                >
                  <motion.article
                    className={[
                      'project-panel',
                      `project-panel--${project.slug}`,
                    ].join(
                      ' ',
                    )}
                    whileHover={
                      reduceMotion
                        ? undefined
                        : {
                            y: -4,
                          }
                    }
                    transition={{
                      duration:
                        0.35,

                      ease: [
                        0.16,
                        1,
                        0.3,
                        1,
                      ],
                    }}
                  >
                    <div className="project-panel__ambient" />

                    <div className="project-panel__top">
                      <span className="project-panel__number">
                        {number}
                      </span>

                      <div className="project-panel__top-meta">
                        {project.clientProject && (
                          <span className="project-panel__client">
                            Client
                          </span>
                        )}

                        <span className="project-panel__type">
                          {
                            project.type
                          }
                        </span>
                      </div>
                    </div>

                    <div className="project-panel__body">
                      <h3>
                        {
                          project.name
                        }
                      </h3>

                      <p className="project-panel__subtitle">
                        {
                          project.subtitle
                        }
                      </p>

                      <p className="project-panel__description">
                        {
                          project.shortDescription
                        }
                      </p>
                    </div>

                    <div className="project-panel__footer">
                      <div className="project-panel__stack">
                        <span className="project-panel__stack-label">
                          CORE STACK
                        </span>

                        <TechDock
                          projectSlug={
                            project.slug
                          }
                          compact
                        />
                      </div>

                      <div className="project-panel__actions">
                        <span className="project-panel__year">
                          {
                            project.year
                          }
                        </span>

                        <Link
                          className="project-panel__button"
                          to={`/project/${project.slug}`}
                          aria-label={`View ${project.name} case study`}
                        >
                          <span>
                            View case study
                          </span>

                          <GoArrowRight
                            aria-hidden="true"
                          />
                        </Link>
                      </div>
                    </div>
                  </motion.article>
                </Reveal>
              );
            },
          )}
        </div>
      </Container>
    </Section>
  );
}
