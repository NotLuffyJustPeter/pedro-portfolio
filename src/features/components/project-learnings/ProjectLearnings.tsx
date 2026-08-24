import {
  motion,
  useReducedMotion,
} from 'motion/react';

import type {
  CaseStudy,
} from '../../projects/types/caseStudy';

import MagicBento from '../magic-bento/MagicBento';

import './ProjectLearnings.scss';

type ProjectLearningsProps = {
  project: CaseStudy;
};

export function ProjectLearnings({
  project,
}: ProjectLearningsProps) {
  const reduceMotion =
    useReducedMotion() ===
    true;

  const items =
    project.learnings.map(
      (
        learning,
        index,
      ) => ({
        id: `${project.slug}-learning-${index}`,

        number:
          String(
            index + 1,
          ).padStart(
            2,
            '0',
          ),

        label:
          'LEARNING',

        content:
          learning,

        footer:
          project.title,
      }),
    );

  if (
    project.learnings
      .length === 0
  ) {
    return null;
  }

  return (
    <section
      className="project-learnings"
      id="learnings"
    >
      <div className="project-learnings__inner">
        <motion.header
          className="project-learnings__header"
          initial={
            reduceMotion
              ? false
              : {
                  opacity: 0,
                  y: 24,
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
            duration: 0.68,
            ease: [
              0.16,
              1,
              0.3,
              1,
            ],
          }}
        >
          <div className="project-learnings__eyebrow">
            <span>
              06 / LEARNINGS
            </span>

            <span>
              AFTER THE BUILD
            </span>
          </div>

          <div className="project-learnings__heading">
            <h2>
              What the build
              <br />
              changed.
            </h2>

            <p>
              Decisions,
              constraints and
              lessons that became
              reusable engineering
              knowledge after
              building{' '}
              {project.title}.
            </p>
          </div>
        </motion.header>

        <motion.div
          className="project-learnings__bento"
          initial={
            reduceMotion
              ? false
              : {
                  opacity: 0,
                  y: 26,
                }
          }
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.08,
          }}
          transition={{
            duration: 0.7,

            delay: 0.08,

            ease: [
              0.16,
              1,
              0.3,
              1,
            ],
          }}
        >
          <MagicBento
            items={items}
            textAutoHide={
              true
            }
            enableStars
            enableSpotlight
            enableBorderGlow={
              true
            }
            enableTilt={
              false
            }
            enableMagnetism={
              false
            }
            clickEffect
            spotlightRadius={
              400
            }
            particleCount={
              12
            }
            glowColor="132, 0, 255"
            disableAnimations={
              false
            }
          />
        </motion.div>
      </div>
    </section>
  );
}
