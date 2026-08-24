import {
  useState,
} from 'react';

import {
  FiCheck,
  FiCopy,
  FiGithub,
  FiLinkedin,
} from 'react-icons/fi';

import {
  GoArrowUpRight,
} from 'react-icons/go';

import {
  PROFILE,
} from '../../../data/profile';

import {
  Container,
  Section,
} from '../../../components/layout';

import {
  assetUrl,
} from '../../../shared/utils/assetUrl';

import {
  Eyebrow,
  Reveal,
} from '../../../components/ui';

import MaskedHeading from './masked-heading/MaskedHeading';

import './Contact.scss';

export function Contact() {
  const [
    copied,
    setCopied,
  ] = useState(false);

  const copyEmail =
    async () => {
      try {
        await navigator.clipboard.writeText(
          PROFILE.email,
        );

        setCopied(true);

        window.setTimeout(
          () => {
            setCopied(
              false,
            );
          },
          1800,
        );
      } catch {
        /*
         * Fallback for browsers
         * without Clipboard API.
         */
        const textarea =
          document.createElement(
            'textarea',
          );

        textarea.value =
          PROFILE.email;

        textarea.style.position =
          'fixed';

        textarea.style.opacity =
          '0';

        document.body.appendChild(
          textarea,
        );

        textarea.select();

        document.execCommand(
          'copy',
        );

        textarea.remove();

        setCopied(true);

        window.setTimeout(
          () => {
            setCopied(
              false,
            );
          },
          1800,
        );
      }
    };

  return (
    <Section
      id="contact"
      className="contact"
    >
      <Container>
        {/* =====================
            TOP
        ===================== */}

        <Reveal>
          <div className="contact__top">
            <Eyebrow>
              06 / CONTACT
            </Eyebrow>

            <span>
              LET&apos;S TALK
            </span>
          </div>
        </Reveal>

        {/* =====================
            HERO
        ===================== */}

        <div className="contact__hero">
          <Reveal>
            <div className="contact__heading">
              <MaskedHeading
                text="LET'S BUILD SOMETHING USEFUL."
                src={assetUrl(
                  '/images/contact/contact-mask.svg',
                )}
                fillScale={1.18}
                parallax={14}
                drift={8}
                brightness={1.08}
                saturation={1.12}
                grayscale={false}
                reveal="rise"
                trigger="view"
                duration={1}
                stagger={0.07}
                align="left"
                weight={600}
                tracking={-0.065}
                lineHeight={0.86}
                textScale={0.095}
              />
            </div>
          </Reveal>

          <Reveal
            delay={0.1}
          >
            <div className="contact__intro">
              <span>
                OPEN TO THE NEXT
                GOOD PROBLEM.
              </span>

              <p>
                Have a project,
                role or idea in
                mind? I&apos;m open
                to building useful
                products and
                solving interesting
                technical problems.
              </p>
            </div>
          </Reveal>
        </div>

        {/* =====================
            CONTACT PANEL
        ===================== */}

        <Reveal
          delay={0.12}
        >
          <div className="contact__panel">
            <div className="contact__identity">
              <span>
                PEDRO DELGADO
              </span>

              <small>
                FULL-STACK
                DEVELOPER
              </small>
            </div>

            <button
              type="button"
              className={[
                'contact__email',

                copied
                  ? 'contact__email--copied'
                  : '',
              ]
                .filter(Boolean)
                .join(' ')}
              onClick={
                copyEmail
              }
              aria-label="Copy email address"
            >
              <div className="contact__email-copy-icon">
                {copied ? (
                  <FiCheck
                    aria-hidden="true"
                  />
                ) : (
                  <FiCopy
                    aria-hidden="true"
                  />
                )}
              </div>

              <div className="contact__email-copy">
                <span>
                  {copied
                    ? 'COPIED TO CLIPBOARD'
                    : 'COPY EMAIL'}
                </span>

                <strong>
                  {
                    PROFILE.email
                  }
                </strong>
              </div>

              <span className="contact__email-action">
                {copied
                  ? 'DONE'
                  : 'COPY'}
              </span>
            </button>

            <div className="contact__socials">
              <span className="contact__socials-label">
                ELSEWHERE
              </span>

              <div className="contact__social-list">
                <a
                  href={
                    PROFILE.github
                  }
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  <FiGithub
                    aria-hidden="true"
                  />

                  <span>
                    GitHub
                  </span>

                  <GoArrowUpRight
                    aria-hidden="true"
                  />
                </a>

                <a
                  href={
                    PROFILE.linkedin
                  }
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  <FiLinkedin
                    aria-hidden="true"
                  />

                  <span>
                    LinkedIn
                  </span>

                  <GoArrowUpRight
                    aria-hidden="true"
                  />
                </a>
              </div>
            </div>
          </div>
        </Reveal>

        {/* =====================
            BOTTOM META
        ===================== */}

        <Reveal
          delay={0.16}
        >
          <div className="contact__footer">
            <div className="contact__availability">
              <i />

              <span>
                AVAILABLE FOR
                OPPORTUNITIES
              </span>
            </div>

            <span>
              MÉXICO / REMOTE
            </span>
          </div>
        </Reveal>
      </Container>
    </Section>
  );
}
