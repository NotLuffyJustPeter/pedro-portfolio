import {
  useState,
  type KeyboardEvent,
} from 'react';

import {
  motion,
  useReducedMotion,
} from 'motion/react';

import type { CaseStudy } from '../../projects/types/caseStudy';

import './ProjectChallenges.scss';

type ProjectChallengesProps = {
  project: CaseStudy;
};

export function ProjectChallenges({
  project,
}: ProjectChallengesProps) {
  const reduceMotion =
    useReducedMotion();

  const [activeChallenge, setActiveChallenge] =
    useState(0);

  const handleKeyDown = (
    event: KeyboardEvent<HTMLElement>,
    index: number,
  ) => {
    const total =
      project.challenges.length;

    if (
      event.key === 'Enter' ||
      event.key === ' '
    ) {
      event.preventDefault();
      setActiveChallenge(index);
    }

    if (event.key === 'ArrowRight') {
      event.preventDefault();

      setActiveChallenge(
        (index + 1) % total,
      );
    }

    if (event.key === 'ArrowLeft') {
      event.preventDefault();

      setActiveChallenge(
        (index - 1 + total) % total,
      );
    }
  };

  return (
    <section
      className="project-challenges"
      id="challenges"
    >
      <div className="project-challenges__inner">
        {/* HEADER */}

        <motion.header
          className="project-challenges__header"
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
          <div className="project-challenges__eyebrow">
            <span>
              04 / CHALLENGES
            </span>

            <span>
              ENGINEERING NOTES
            </span>
          </div>

          <div className="project-challenges__heading">
            <h2>
              Problems worth
              <br />
              solving properly.
            </h2>

            <p>
              The most important engineering
              decisions came from constraints
              discovered while the product,
              data model and architecture
              evolved.
            </p>
          </div>
        </motion.header>

        {/* ACCORDION */}

        <div className="project-challenges__accordion">
          {project.challenges.map(
            (challenge, index) => {
              const active =
                activeChallenge === index;

              return (
                <article
                  key={`${challenge.number}-${challenge.title}`}
                  className={`challenge-panel${
                    active
                      ? ' is-active'
                      : ''
                  }`}
                  role="button"
                  tabIndex={0}
                  aria-expanded={active}
                  onMouseEnter={() =>
                    setActiveChallenge(
                      index,
                    )
                  }
                  onFocus={() =>
                    setActiveChallenge(
                      index,
                    )
                  }
                  onClick={() =>
                    setActiveChallenge(
                      index,
                    )
                  }
                  onKeyDown={(event) =>
                    handleKeyDown(
                      event,
                      index,
                    )
                  }
                >
                  {/* META */}

                  <div className="challenge-panel__meta">
                    <span>
                      {challenge.number}
                    </span>

                    <span>
                      CHALLENGE
                    </span>
                  </div>

                  {/* COLLAPSED */}

                  <div className="challenge-panel__collapsed">
                    <span>
                      {challenge.title}
                    </span>
                  </div>

                  {/* EXPANDED CONTENT */}

                  <div className="challenge-panel__content">
                    <span className="challenge-panel__label">
                      ENGINEERING CHALLENGE
                    </span>

                    <h3>
                      {challenge.title}
                    </h3>

                    <p>
                      {challenge.description}
                    </p>

                    <div className="challenge-panel__footer">
                      <span>
                        {project.title}
                      </span>

                      <span>
                        {challenge.number}
                        {' / '}
                        {String(
                          project.challenges
                            .length,
                        ).padStart(
                          2,
                          '0',
                        )}
                      </span>
                    </div>
                  </div>

                  {/* BACKGROUND NUMBER */}

                  <span
                    className="challenge-panel__ghost"
                    aria-hidden="true"
                  >
                    {challenge.number}
                  </span>

                  {/* ACCENT */}

                  <div
                    className="challenge-panel__accent"
                    aria-hidden="true"
                  />
                </article>
              );
            },
          )}
        </div>

        {/* HINT */}

        <div className="project-challenges__hint">
          <span>
            HOVER / CLICK TO EXPLORE
          </span>

          <span>
            {String(
              activeChallenge + 1,
            ).padStart(
              2,
              '0',
            )}
            {' / '}
            {String(
              project.challenges.length,
            ).padStart(
              2,
              '0',
            )}
          </span>
        </div>
      </div>
    </section>
  );
}
