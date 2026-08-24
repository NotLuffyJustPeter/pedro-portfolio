import {
  useRef,
  useState,
} from 'react';

import {
  animate,
  motion,
  useMotionValue,
  useReducedMotion,
  useTransform,
} from 'motion/react';

import './Lanyard.scss';

const STRAP_BASE_LENGTH =
  169;

export default function Lanyard() {
  const constraintsRef =
    useRef(null);

  const reduceMotion =
    useReducedMotion();

  const [
    dragging,
    setDragging,
  ] = useState(false);

  const [
    flipped,
    setFlipped,
  ] = useState(false);

  const x =
    useMotionValue(0);

  const y =
    useMotionValue(0);

  const cardRotateZ =
    useTransform(
      x,
      [
        -220,
        0,
        220,
      ],
      [
        -12,
        0,
        12,
      ],
    );

  const cardRotateX =
    useTransform(
      y,
      [
        -180,
        0,
        180,
      ],
      [
        7,
        0,
        -7,
      ],
    );

  /*
   * Negative atan2 because CSS rotation
   * direction is opposite to the screen
   * coordinate calculation here.
   */
  const strapRotate =
    useTransform(
      () => {
        const dx =
          x.get();

        const dy =
          Math.max(
            55,
            STRAP_BASE_LENGTH +
              y.get(),
          );

        return (
          -Math.atan2(
            dx,
            dy,
          ) *
          (
            180 /
            Math.PI
          )
        );
      },
    );

  const strapScaleY =
    useTransform(
      () => {
        const dx =
          x.get();

        const dy =
          Math.max(
            55,
            STRAP_BASE_LENGTH +
              y.get(),
          );

        const distance =
          Math.sqrt(
            dx * dx +
              dy * dy,
          );

        return (
          distance /
          STRAP_BASE_LENGTH
        );
      },
    );

  const returnToRest =
    () => {
      animate(
        x,
        0,
        {
          type:
            'spring',

          stiffness:
            190,

          damping:
            18,

          mass:
            0.8,
        },
      );

      animate(
        y,
        0,
        {
          type:
            'spring',

          stiffness:
            190,

          damping:
            18,

          mass:
            0.8,
        },
      );
    };

  const toggleFlip =
    () => {
      if (
        reduceMotion ||
        dragging
      ) {
        return;
      }

      setFlipped(
        (
          current,
        ) =>
          !current,
      );
    };

  return (
    <div
      ref={
        constraintsRef
      }
      className={[
        'lanyard',

        dragging
          ? 'lanyard--dragging'
          : '',

        flipped
          ? 'lanyard--flipped'
          : '',
      ]
        .filter(Boolean)
        .join(' ')}
    >
      <div className="lanyard__ambient" />

      <div className="lanyard__anchor">
        <span />
      </div>

      <motion.div
        className="lanyard__strap"
        style={{
          rotate:
            reduceMotion
              ? 0
              : strapRotate,

          scaleY:
            reduceMotion
              ? 1
              : strapScaleY,
        }}
      >
        <div className="lanyard__strap-line" />

        <div className="lanyard__strap-detail">
          PD / ENGINEERING
          / 2026 /&nbsp;
          PD / ENGINEERING
          / 2026 /&nbsp;
          PD / ENGINEERING
          / 2026 /
        </div>
      </motion.div>

      <div className="lanyard__card-home">
        <motion.div
          className="lanyard__card-wrap"
          drag={
            reduceMotion
              ? false
              : true
          }
          dragConstraints={
            constraintsRef
          }
          dragElastic={
            0.12
          }
          dragMomentum={
            false
          }
          style={{
            x,
            y,

            rotateZ:
              reduceMotion
                ? 0
                : cardRotateZ,

            rotateX:
              reduceMotion
                ? 0
                : cardRotateX,
          }}
          whileDrag={{
            scale:
              1.035,
          }}
          onDragStart={() => {
            setDragging(
              true,
            );
          }}
          onDragEnd={() => {
            setDragging(
              false,
            );

            returnToRest();
          }}
        >
          <div className="lanyard__clip">
            <div className="lanyard__clip-hole" />
          </div>

          <motion.div
            className="lanyard__card-rotator"
            animate={{
              rotateY:
                flipped
                  ? 180
                  : 0,
            }}
            transition={{
              type:
                'spring',

              stiffness:
                180,

              damping:
                20,

              mass:
                0.75,
            }}
            onTap={
              toggleFlip
            }
            role="button"
            tabIndex={0}
            aria-label={
              flipped
                ? 'Show front of identity card'
                : 'Show back of identity card'
            }
            onKeyDown={(
              event,
            ) => {
              if (
                event.key ===
                  'Enter' ||
                event.key ===
                  ' '
              ) {
                event.preventDefault();

                toggleFlip();
              }
            }}
          >
            {/* FRONT */}

            <div className="lanyard__card-face lanyard__card-face--front">
              <div className="lanyard__card-glow" />

              <header className="lanyard__card-header">
                <span>
                  PD.
                </span>

                <small>
                  2026
                </small>
              </header>

              <div className="lanyard__identity">
                <span className="lanyard__role-index">
                  ID / 001
                </span>

                <h3>
                  Pedro
                  <br />
                  Delgado
                </h3>

                <p>
                  Full-Stack
                  Developer
                </p>
              </div>

              <div className="lanyard__card-bottom">
                <div>
                  <span>
                    SPECIALIZATION
                  </span>

                  <strong>
                    WEB / MOBILE /
                    AI
                  </strong>
                </div>

                <div className="lanyard__available">
                  <i />

                  <span>
                    Available
                  </span>
                </div>
              </div>

              <div className="lanyard__corner lanyard__corner--top" />

              <div className="lanyard__corner lanyard__corner--bottom" />
            </div>

            {/* BACK */}

            <div className="lanyard__card-face lanyard__card-face--back">
              <div className="lanyard__back-glow" />

              <header className="lanyard__back-header">
                <span>
                  PD /
                  ENGINEERING
                </span>

                <small>
                  001
                </small>
              </header>

              <div className="lanyard__back-main">
                <span>
                  PRODUCT
                  ENGINEERING
                </span>

                <strong>
                  BUILD.
                  <br />
                  SHIP.
                  <br />
                  ITERATE.
                </strong>
              </div>

              <div className="lanyard__back-stack">
                <span>
                  SYSTEM /
                  CAPABILITIES
                </span>

                <div>
                  <small>
                    FRONTEND
                  </small>

                  <small>
                    BACKEND
                  </small>

                  <small>
                    MOBILE
                  </small>

                  <small>
                    AI
                  </small>
                </div>
              </div>

              <footer className="lanyard__back-footer">
                <span>
                  FULL-STACK
                </span>

                <span>
                  PD. / 2026
                </span>
              </footer>

              <div className="lanyard__corner lanyard__corner--top" />

              <div className="lanyard__corner lanyard__corner--bottom" />
            </div>
          </motion.div>
        </motion.div>
      </div>

      <div className="lanyard__hint">
        <span>
          DRAG
        </span>

        <i />

        <span>
          TAP TO FLIP
        </span>
      </div>
    </div>
  );
}
