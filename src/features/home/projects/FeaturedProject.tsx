import {
  Link,
} from 'react-router-dom';

import {
  motion,
  useReducedMotion,
} from 'motion/react';

import {
  GoArrowRight,
  GoArrowUpRight,
} from 'react-icons/go';

import {
  SiGithub,
} from 'react-icons/si';

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

import './FeaturedProject.scss';

interface FeaturedProjectProps {
  project: ProjectSummary;
}

function assetUrl(
  path: string,
) {
  return `${
    import.meta.env.BASE_URL
  }${path.replace(/^\/+/, '')}`;
}

export function FeaturedProject({
  project,
}: FeaturedProjectProps) {
  const reduceMotion =
    useReducedMotion();

  return (
    <Section
      id="projects"
      divider
      className="featured-project-section"
    >
      <Container>
        <Reveal>
          <div className="featured-project__intro">
            <Eyebrow>
              01 / FEATURED PROJECT
            </Eyebrow>

            <span className="featured-project__year">
              {project.year}
            </span>
          </div>
        </Reveal>

        <div className="featured-project__heading">
          <Reveal>
            <h2 className="featured-project__title">
              {project.name}
            </h2>
          </Reveal>

          <Reveal
            delay={0.08}
            className="featured-project__heading-meta"
          >
            <p>
              {project.eyebrow}
            </p>

            <div className="featured-project__status">
              <span className="featured-project__status-dot" />

              <span>
                {project.status}
              </span>
            </div>
          </Reveal>
        </div>

        <Reveal
          delay={0.12}
          className="featured-project__visual-reveal"
        >
          <motion.div
            className="featured-project__visual"
            whileHover={
              reduceMotion
                ? undefined
                : {
                    y: -6,
                  }
            }
            transition={{
              duration: 0.4,

              ease: [
                0.16,
                1,
                0.3,
                1,
              ],
            }}
          >
            <Link
              className="featured-project__image-link"
              to={`/project/${project.slug}`}
              aria-label={`View ${project.name} case study`}
            >
              <img
                className="featured-project__image"
                src={assetUrl(
                  project.cover,
                )}
                alt={`${project.name} application interface`}
                loading="lazy"
              />

              <div className="featured-project__image-overlay" />

              <div className="featured-project__image-top">
                <span>
                  PRODUCTION
                </span>

                <span>
                  FULL-STACK
                </span>
              </div>

              <div className="featured-project__image-bottom">
                <span>
                  View case study
                </span>

                <GoArrowUpRight
                  aria-hidden="true"
                />
              </div>
            </Link>
          </motion.div>
        </Reveal>

        <div className="featured-project__details">
          <Reveal>
            <div className="featured-project__description">
              <Eyebrow>
                ABOUT THE PROJECT
              </Eyebrow>

              <p>
                {
                  project.shortDescription
                }
              </p>
            </div>
          </Reveal>

          <Reveal
            delay={0.08}
            className="featured-project__stack-wrapper"
          >
            <div className="featured-project__stack">
              <Eyebrow>
                CORE STACK
              </Eyebrow>

              <TechDock
                projectSlug={
                  project.slug
                }
              />
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.12}>
          <div className="featured-project__actions">
            <Link
              className="featured-project__action featured-project__action--primary"
              to={`/project/${project.slug}`}
            >
              <span>
                View case study
              </span>

              <GoArrowRight
                aria-hidden="true"
              />
            </Link>

            {project.demo && (
              <a
                className="featured-project__action featured-project__action--secondary"
                href={
                  project.demo
                }
                target="_blank"
                rel="noreferrer"
              >
                <span>
                  Live product
                </span>

                <GoArrowUpRight
                  aria-hidden="true"
                />
              </a>
            )}

            {project.github && (
              <a
                className="featured-project__github-button"
                href={
                  project.github
                }
                target="_blank"
                rel="noreferrer"
                aria-label={`View ${project.name} source code on GitHub`}
              >
                <span
                  className="featured-project__github-shine"
                  aria-hidden="true"
                />

                <span className="featured-project__github-main">
                  <SiGithub
                    className="featured-project__github-logo"
                    aria-hidden="true"
                  />

                  <span>
                    View on GitHub
                  </span>
                </span>

                <span className="featured-project__github-meta">
                  <svg
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
                    />
                  </svg>

                  <span>
                    Repo
                  </span>
                </span>
              </a>
            )}
          </div>
        </Reveal>
      </Container>
    </Section>
  );
}
