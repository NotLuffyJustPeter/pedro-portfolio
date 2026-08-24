import {
  lazy,
  Suspense,
} from 'react';

import {
  FiCode,
  FiLayers,
  FiMapPin,
} from 'react-icons/fi';

import {
  Container,
  Section,
} from '../../../components/layout';

import {
  BorderGlow,
  Eyebrow,
  Reveal,
} from '../../../components/ui';

import './About.scss';

const Lanyard =
  lazy(
    () =>
      import(
        './lanyard/Lanyard'
      ),
  );

export function About() {
  return (
    <Section
      id="about"
      className="about"
    >
      <Container>
        <Reveal>
          <div className="about__top">
            <Eyebrow>
              03 / ABOUT
            </Eyebrow>

            <span>
              ENGINEERING /
              PRODUCT
            </span>
          </div>
        </Reveal>

        <div className="about__layout">
          <div className="about__content">
            <Reveal>
              <h2>
                I build across
                <br />
                the stack.
              </h2>
            </Reveal>

            <Reveal
              delay={0.08}
            >
              <p className="about__lead">
                I design and build
                digital products
                from interface to
                production,
                connecting
                frontend, backend,
                data and
                infrastructure.
              </p>
            </Reveal>

            <Reveal
              delay={0.12}
            >
              <p className="about__copy">
                My work spans web
                applications,
                backend systems,
                mobile products and
                AI-assisted
                experiences. I
                enjoy working where
                product decisions
                and engineering
                meet.
              </p>
            </Reveal>

            <Reveal
              delay={0.16}
            >
              <div className="about__profile-grid">
                <BorderGlow
                  className="about-profile-glow"
                  animated={false}
                >
                  <article className="about-profile">
                    <div className="about-profile__icon">
                      <FiLayers
                        aria-hidden="true"
                      />
                    </div>

                    <div className="about-profile__content">
                      <span>
                        ENGINEERING
                      </span>

                      <strong>
                        Full-Stack
                      </strong>

                      <p>
                        Interface ↔
                        Systems ↔
                        Production
                      </p>
                    </div>
                  </article>
                </BorderGlow>

                <BorderGlow
                  className="about-profile-glow"
                  animated={false}
                >
                  <article className="about-profile">
                    <div className="about-profile__icon">
                      <FiCode
                        aria-hidden="true"
                      />
                    </div>

                    <div className="about-profile__content">
                      <span>
                        PRODUCTS
                      </span>

                      <strong>
                        Web · Mobile · AI
                      </strong>

                      <p>
                        Product-focused
                        development
                      </p>
                    </div>
                  </article>
                </BorderGlow>

                <BorderGlow
                  className="about-profile-glow"
                  animated={false}
                >
                  <article className="about-profile">
                    <div className="about-profile__icon">
                      <FiMapPin
                        aria-hidden="true"
                      />
                    </div>

                    <div className="about-profile__content">
                      <span>
                        BASE
                      </span>

                      <strong>
                        México
                      </strong>

                      <p>
                        Open to new
                        opportunities
                      </p>
                    </div>
                  </article>
                </BorderGlow>
              </div>
            </Reveal>
          </div>

          <Reveal
            delay={0.08}
            className="about__lanyard"
          >
            <div className="about__lanyard-stage">
              <div className="about__lanyard-glow" />

              <Suspense
                fallback={
                  <div className="about__loading">
                    <span>
                      PD.
                    </span>

                    <small>
                      Loading
                      identity…
                    </small>
                  </div>
                }
              >
                <Lanyard />
              </Suspense>
            </div>
          </Reveal>
        </div>
      </Container>
    </Section>
  );
}
