import {
  motion,
  useReducedMotion,
} from 'motion/react';

import type { CaseStudy } from '../../projects/types/caseStudy';

import './ProjectFeatures.scss';

type ProjectFeaturesProps = {
  project: CaseStudy;
};

export function ProjectFeatures({
  project,
}: ProjectFeaturesProps) {
  const reduceMotion =
    useReducedMotion();

  return (
    <section
      className="project-features"
      id="features"
    >
      <div className="project-features__inner">
        {/* ============================== */}
        {/* HEADER */}
        {/* ============================== */}

        <motion.header
          className="project-features__header"
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
          <div className="project-features__eyebrow">
            <span>
              03 / FEATURES
            </span>

            <span>
              CORE CAPABILITIES
            </span>
          </div>

          <div className="project-features__heading">
            <h2>
              Designed around
              <br />
              real workflows.
            </h2>

            <p>
              The product is structured
              around capabilities that
              support the complete workflow
              rather than isolated interface
              elements.
            </p>
          </div>
        </motion.header>

        {/* ============================== */}
        {/* FEATURE GRID */}
        {/* ============================== */}

        <div className="project-features__grid">
          {project.features.map(
            (feature, index) => (
              <article
                key={`${feature.number}-${feature.title}`}
                className={`feature-card feature-card--${
                  (index % 3) + 1
                }`}
              >
                <div className="feature-card__surface">
                  {/* TOP */}

                  <div className="feature-card__meta">
                    <span>
                      {feature.number}
                    </span>

                    <span>
                      FEATURE
                    </span>
                  </div>

                  {/* GHOST NUMBER */}

                  <span
                    className="feature-card__ghost"
                    aria-hidden="true"
                  >
                    {feature.number}
                  </span>

                  {/* CONTENT */}

                  <div className="feature-card__content">
                    <span className="feature-card__label">
                      PRODUCT CAPABILITY
                    </span>

                    <h3>
                      {feature.title}
                    </h3>

                    <p>
                      {feature.description}
                    </p>
                  </div>

                  {/* FOOTER */}

                  <div className="feature-card__footer">
                    <span>
                      {project.title}
                    </span>

                    <i aria-hidden="true" />
                  </div>
                </div>
              </article>
            ),
          )}
        </div>
      </div>
    </section>
  );
}
