import {
  Link,
} from 'react-router-dom';

import {
  GoArrowLeft,
  GoArrowUpRight,
} from 'react-icons/go';

import Noise from '../features/components/noise/Noise';

import {
  Footer,
} from '../components/layout/Footer';

import './NotFoundPage.scss';

export function NotFoundPage() {
  return (
    <div className="not-found">
      {/* =====================================
          NOISE BACKGROUND
      ====================================== */}

      <div className="not-found__background">
        <Noise
          patternSize={250}
          patternScaleX={2}
          patternScaleY={2}
          patternRefreshInterval={2}
          patternAlpha={15}
        />
      </div>

      {/* =====================================
          AMBIENT
      ====================================== */}

      <div
        className="not-found__ambient"
        aria-hidden="true"
      />

      {/* =====================================
          MAIN
      ====================================== */}

      <main className="not-found__main">
        {/* =================================
            TOP BAR
        ================================== */}

        <div className="not-found__top">
          <Link
            to="/"
            className="not-found__back"
          >
            <GoArrowLeft />

            <span>
              BACK HOME
            </span>
          </Link>

          <span className="not-found__status">
            SYSTEM ERROR · 404
          </span>
        </div>

        {/* =================================
            CONTENT
        ================================== */}

        <section className="not-found__content">
          <span className="not-found__code">
            ERROR / 404
          </span>

          {/* =============================
              FACE
          ============================== */}

          <div className="not-found__face-container">
            <svg
              className="not-found__face"
              viewBox="0 0 320 380"
              role="img"
              aria-label="404 error face"
            >
              <g
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="25"
              >
                <g
                  className="not-found__face-eyes"
                  transform="translate(0,112.5)"
                >
                  <g transform="translate(15,0)">
                    <polyline
                      className="not-found__face-eye-lid"
                      points="37,0 0,120 75,120"
                    />

                    <polyline
                      className="not-found__face-pupil"
                      points="55,120 55,155"
                      strokeDasharray="35 35"
                    />
                  </g>

                  <g transform="translate(230,0)">
                    <polyline
                      className="not-found__face-eye-lid"
                      points="37,0 0,120 75,120"
                    />

                    <polyline
                      className="not-found__face-pupil"
                      points="55,120 55,155"
                      strokeDasharray="35 35"
                    />
                  </g>
                </g>

                <rect
                  className="not-found__face-nose"
                  x="132.5"
                  y="112.5"
                  width="55"
                  height="155"
                  rx="4"
                  ry="4"
                />

                <g
                  transform="translate(65,334)"
                  strokeDasharray="102 102"
                >
                  <path
                    className="not-found__face-mouth-left"
                    d="M 0 30 C 0 30 40 0 95 0"
                  />

                  <path
                    className="not-found__face-mouth-right"
                    d="M 95 0 C 150 0 190 30 190 30"
                  />
                </g>
              </g>
            </svg>
          </div>

          {/* =============================
              COPY
          ============================== */}

          <div className="not-found__copy">
            <span className="not-found__eyebrow">
              SIGNAL LOST
            </span>

            <h1>
              This page wandered
              <br />
              off the map.
            </h1>

            <p>
              The route you requested
              doesn't exist, was moved,
              or got lost somewhere
              between here and the
              internet.
            </p>
          </div>

          {/* =============================
              ACTION
          ============================== */}

          <Link
            to="/"
            className="not-found__action"
          >
            <span>
              RETURN HOME
            </span>

            <GoArrowUpRight />
          </Link>

          {/* =============================
              META
          ============================== */}

          <div className="not-found__meta">
            <span>
              STATUS / NOT FOUND
            </span>

            <span className="not-found__meta-dot" />

            <span>
              CODE / 404
            </span>
          </div>
        </section>
      </main>

      {/* =====================================
          SAME HOME FOOTER
      ====================================== */}

      <div className="not-found__footer">
        <Footer />
      </div>
    </div>
  );
}
