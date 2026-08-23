import {
  Link,
} from 'react-router-dom';

import {
  motion,
  useReducedMotion,
} from 'motion/react';

import {
  Container,
} from '../../../components/layout';

import {
  Eyebrow,
} from '../../../components/ui';

import {
  LetterGlitch,
} from './LetterGlitch';

import {
  TerminalCard,
} from './TerminalCard';

import './Hero.scss';

export function Hero() {
  const reduceMotion =
    useReducedMotion();

  const reveal = (
    delay: number,
  ) => ({
    initial:
      reduceMotion
        ? false
        : {
            opacity: 0,
            y: 26,
          },

    animate: {
      opacity: 1,
      y: 0,
    },

    transition: {
      duration:
        0.75,

      delay,

      ease: [
        0.16,
        1,
        0.3,
        1,
      ] as [
        number,
        number,
        number,
        number,
      ],
    },
  });

  return (
    <section
      id="home"
      className="hero"
    >
      <LetterGlitch
        glitchSpeed={
          65
        }
        colors={[
          '#221b35',
          '#443378',
          '#7c5cfc',
          '#9b87f5',
        ]}
        centerVignette
        outerVignette
        smooth
      />

      <div className="hero__veil" />

      <Container className="hero__container">
        <div className="hero__content">
          <motion.div
            {...reveal(
              0.1,
            )}
          >
            <Eyebrow>
              FULL-STACK
              DEVELOPER /
              2026
            </Eyebrow>
          </motion.div>

          <motion.h1
            className="hero__title"
            {...reveal(
              0.18,
            )}
          >
            Pedro
            <br />
            Delgado
          </motion.h1>

          <motion.p
            className="hero__description body-large"
            {...reveal(
              0.28,
            )}
          >
            Building
            full-stack,
            mobile and
            intelligent
            digital
            products from
            interface to
            production.
          </motion.p>

          <motion.div
            className="hero__actions"
            {...reveal(
              0.36,
            )}
          >
            <Link
              className="hero__primary-link"
              to="/#projects"
            >
              View selected
              work

              <span>
                ↘
              </span>
            </Link>

            <a
              className="hero__secondary-link"
              href="mailto:pedrogadel@gmail.com"
            >
              Contact me
            </a>
          </motion.div>
        </div>

        <div className="hero__terminal">
          <TerminalCard />
        </div>
      </Container>

      <div className="hero__scroll">
        <span>
          SCROLL
        </span>

        <span className="hero__scroll-line" />
      </div>
    </section>
  );
}
