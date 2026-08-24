import {
  motion,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
} from 'motion/react';

import {
  useRef,
  useState,
} from 'react';

import './ScrollExpand.scss';

type ScrollExpandProps = {
  image?: string;
  alt: string;
  title: string;
};

export function ScrollExpand({
  image,
  alt,
  title,
}: ScrollExpandProps) {
  const sectionRef =
    useRef<HTMLElement>(null);

  const [failedImage, setFailedImage] =
    useState<string | null>(null);

  const prefersReducedMotion =
    useReducedMotion();

  const { scrollYProgress } =
    useScroll({
      target: sectionRef,

      offset: [
        'start start',
        'end end',
      ],
    });

  const progress =
    useSpring(
      scrollYProgress,
      {
        stiffness: 80,
        damping: 24,
        mass: 0.28,
      },
    );

  /* ========================================
     MEDIA
  ======================================== */

  const width =
    useTransform(
      progress,
      [0, 0.82, 1],
      [
        '72vw',
        '94vw',
        '100vw',
      ],
    );

  const height =
    useTransform(
      progress,
      [0, 1],
      [
        '64vh',
        '100vh',
      ],
    );

  const borderRadius =
    useTransform(
      progress,
      [0, 0.72, 1],
      [
        28,
        12,
        0,
      ],
    );

  const scale =
    useTransform(
      progress,
      [0, 1],
      [
        0.94,
        1,
      ],
    );

  /* ========================================
     IMAGE
  ======================================== */

  const imageScale =
    useTransform(
      progress,
      [0, 1],
      [
        1.08,
        1,
      ],
    );

  /* ========================================
     UI
  ======================================== */

  const scrollLabelOpacity =
    useTransform(
      progress,
      [0, 0.15, 0.28],
      [
        1,
        1,
        0,
      ],
    );

  const scrollLabelY =
    useTransform(
      progress,
      [0, 0.3],
      [
        0,
        -18,
      ],
    );

  const productLabelOpacity =
    useTransform(
      progress,
      [0.42, 0.65],
      [
        0,
        1,
      ],
    );

  const productLabelY =
    useTransform(
      progress,
      [0.42, 0.65],
      [
        15,
        0,
      ],
    );

  /* ========================================
     BACKGROUND
  ======================================== */

  const glowOpacity =
    useTransform(
      progress,
      [0, 0.5, 1],
      [
        0.15,
        0.45,
        0.16,
      ],
    );

  const backdropOpacity =
    useTransform(
      progress,
      [0, 1],
      [
        0,
        1,
      ],
    );

  const overlayOpacity =
    useTransform(
      progress,
      [0, 0.7, 1],
      [
        0.24,
        0.08,
        0,
      ],
    );

  const hasValidImage =
    Boolean(image) &&
    failedImage !== image;

  return (
    <section
      ref={sectionRef}
      className="scroll-expand"
    >
      <div className="scroll-expand__sticky">
        {/* BACKGROUND */}

        <motion.div
          className="scroll-expand__backdrop"
          style={
            prefersReducedMotion
              ? undefined
              : {
                  opacity:
                    backdropOpacity,
                }
          }
          aria-hidden="true"
        />

        <motion.div
          className="scroll-expand__glow"
          style={
            prefersReducedMotion
              ? undefined
              : {
                  opacity:
                    glowOpacity,
                }
          }
          aria-hidden="true"
        />

        {/* SCROLL LABEL */}

        <motion.div
          className="scroll-expand__label"
          style={
            prefersReducedMotion
              ? undefined
              : {
                  opacity:
                    scrollLabelOpacity,

                  y:
                    scrollLabelY,
                }
          }
        >
          <span>
            SCROLL TO EXPLORE
          </span>

          <span
            className="scroll-expand__label-arrow"
            aria-hidden="true"
          >
            ↓
          </span>
        </motion.div>

        {/* MEDIA */}

        <motion.div
          className="scroll-expand__media"
          style={
            prefersReducedMotion
              ? undefined
              : {
                  width,
                  height,
                  borderRadius,
                  scale,
                }
          }
        >
          {hasValidImage ? (
            <motion.img
              src={image}
              alt={alt}
              decoding="async"
              onError={() => {
                setFailedImage(
                  image ?? null,
                );
              }}
              style={
                prefersReducedMotion
                  ? undefined
                  : {
                      scale:
                        imageScale,
                    }
              }
            />
          ) : (
            <div className="scroll-expand__placeholder">
              <div className="scroll-expand__placeholder-inner">
                <span className="scroll-expand__placeholder-label">
                  FEATURED PROJECT
                </span>

                <strong>
                  {title}
                </strong>

                <span className="scroll-expand__placeholder-copy">
                  Project preview coming soon.
                </span>
              </div>
            </div>
          )}

          <motion.div
            className="scroll-expand__overlay"
            style={
              prefersReducedMotion
                ? undefined
                : {
                    opacity:
                      overlayOpacity,
                  }
            }
          />

          {/* PRODUCT LABEL */}

          <motion.div
            className="scroll-expand__product-label"
            style={
              prefersReducedMotion
                ? undefined
                : {
                    opacity:
                      productLabelOpacity,

                    y:
                      productLabelY,
                  }
            }
          >
            <span>
              01 / PRODUCT VIEW
            </span>

            <span>
              {title}
            </span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
