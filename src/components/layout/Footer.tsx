import {
  useState,
} from 'react';

import {
  FiArrowUp,
  FiCheck,
  FiCopy,
  FiFileText,
  FiGithub,
  FiLinkedin,
} from 'react-icons/fi';

import {
  Link,
} from 'react-router-dom';

import {
  PROFILE,
} from '../../data/profile';

import {
  Container,
} from './Container';

import './Footer.scss';

const FOOTER_LINKS = [
  {
    label:
      'Home',

    href:
      '#top',
  },

  {
    label:
      'Work',

    href:
      '#selected-work',
  },

  {
    label:
      'About',

    href:
      '#about',
  },

  {
    label:
      'Services',

    href:
      '#what-i-do',
  },

  {
    label:
      'Stack',

    href:
      '#tech-stack',
  },

  {
    label:
      'Contact',

    href:
      '#contact',
  },
];

export function Footer() {
  const [
    copied,
    setCopied,
  ] =
    useState(false);

  const currentYear =
    new Date().getFullYear();

  const copyEmail =
    async () => {
      try {
        await navigator.clipboard.writeText(
          PROFILE.email,
        );

        setCopied(true);

        window.setTimeout(
          () =>
            setCopied(
              false,
            ),
          1800,
        );
      } catch {
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
          () =>
            setCopied(
              false,
            ),
          1800,
        );
      }
    };

  const scrollTop =
    () => {
      window.scrollTo({
        top: 0,

        behavior:
          'smooth',
      });
    };

  return (
    <footer className="portfolio-footer">
      <Container>
        <div className="portfolio-footer__inner">
          {/* LOGO */}

          <Link
            to="/"
            className="portfolio-footer__mark"
            aria-label="Go to homepage"
          >
            <img
              src="/brand/pd-mark.svg"
              alt="Pedro Delgado"
            />
          </Link>

          {/* NAV */}

          <nav
            className="portfolio-footer__nav"
            aria-label="Footer navigation"
          >
            {FOOTER_LINKS.map(
              (
                link,
              ) => (
                <a
                  key={
                    link.label
                  }
                  href={
                    link.href
                  }
                >
                  {
                    link.label
                  }
                </a>
              ),
            )}
          </nav>

          {/* ACTIONS */}

          <div className="portfolio-footer__actions">
            <a
              href={
                PROFILE.github
              }
              target="_blank"
              rel="noreferrer noopener"
              aria-label="GitHub"
              title="GitHub"
            >
              <FiGithub
                aria-hidden="true"
              />
            </a>

            <a
              href={
                PROFILE.linkedin
              }
              target="_blank"
              rel="noreferrer noopener"
              aria-label="LinkedIn"
              title="LinkedIn"
            >
              <FiLinkedin
                aria-hidden="true"
              />
            </a>

            <button
              type="button"
              onClick={
                copyEmail
              }
              aria-label="Copy email"
              title={
                copied
                  ? 'Email copied'
                  : 'Copy email'
              }
              className={
                copied
                  ? 'is-copied'
                  : ''
              }
            >
              {copied ? (
                <FiCheck
                  aria-hidden="true"
                />
              ) : (
                <FiCopy
                  aria-hidden="true"
                />
              )}
            </button>

            <a
              href="/cv/Pedro-Delgado-CV-2026.pdf"
              target="_blank"
              rel="noreferrer"
              aria-label="Open CV"
              title="Open CV"
            >
              <FiFileText
                aria-hidden="true"
              />
            </a>

            <button
              type="button"
              onClick={
                scrollTop
              }
              aria-label="Back to top"
              title="Back to top"
            >
              <FiArrowUp
                aria-hidden="true"
              />
            </button>
          </div>

          {/* COPY STATUS */}

          <div
            className={[
              'portfolio-footer__copy-status',

              copied
                ? 'is-visible'
                : '',
            ]
              .filter(Boolean)
              .join(' ')}
            aria-live="polite"
          >
            Email copied to
            clipboard
          </div>

          {/* BOTTOM */}

          <div className="portfolio-footer__bottom">
            <span>
              © {currentYear}
              {' '}
              Pedro Delgado
            </span>

            <i />

            <span>
              Designed &
              engineered in México
            </span>
          </div>
        </div>
      </Container>
    </footer>
  );
}
