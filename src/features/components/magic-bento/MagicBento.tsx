import {
  useCallback,
  useEffect,
  useRef,
  useState,
  type CSSProperties,
  type ReactNode,
} from 'react';

import {
  useReducedMotion,
} from 'motion/react';

import { gsap } from 'gsap';

import './MagicBento.scss';

const MOBILE_BREAKPOINT =
  768;

const DEFAULT_PARTICLE_COUNT =
  12;

const DEFAULT_SPOTLIGHT_RADIUS =
  300;

const DEFAULT_GLOW_COLOR =
  '132, 0, 255';

export type MagicBentoItem = {
  id: string;
  number: string;
  label?: string;
  content: ReactNode;
  footer?: string;
};

type MagicBentoProps = {
  items: MagicBentoItem[];

  textAutoHide?: boolean;

  enableStars?: boolean;

  enableSpotlight?: boolean;

  enableBorderGlow?: boolean;

  enableTilt?: boolean;

  enableMagnetism?: boolean;

  clickEffect?: boolean;

  spotlightRadius?: number;

  particleCount?: number;

  glowColor?: string;

  disableAnimations?: boolean;
};

type ParticleCardProps = {
  children: ReactNode;

  className?: string;

  style?: CSSProperties;

  disableAnimations: boolean;

  particleCount: number;

  glowColor: string;

  enableTilt: boolean;

  clickEffect: boolean;

  enableMagnetism: boolean;
};

function useMobileDetection() {
  const [
    isMobile,
    setIsMobile,
  ] = useState(false);

  useEffect(() => {
    const checkMobile =
      () => {
        setIsMobile(
          window.innerWidth <=
            MOBILE_BREAKPOINT,
        );
      };

    checkMobile();

    window.addEventListener(
      'resize',
      checkMobile,
    );

    return () => {
      window.removeEventListener(
        'resize',
        checkMobile,
      );
    };
  }, []);

  return isMobile;
}

function createParticleElement(
  x: number,
  y: number,
  color: string,
) {
  const particle =
    document.createElement(
      'div',
    );

  particle.className =
    'magic-bento-particle';

  particle.style.left =
    `${x}px`;

  particle.style.top =
    `${y}px`;

  particle.style.background =
    `rgba(${color}, 1)`;

  particle.style.boxShadow =
    `0 0 8px rgba(${color}, 0.75)`;

  return particle;
}

function ParticleCard({
  children,
  className = '',
  style,
  disableAnimations,
  particleCount,
  glowColor,
  enableTilt,
  clickEffect,
  enableMagnetism,
}: ParticleCardProps) {
  const cardRef =
    useRef<HTMLDivElement>(
      null,
    );

  const particlesRef =
    useRef<
      HTMLDivElement[]
    >([]);

  const timeoutsRef =
    useRef<
      ReturnType<
        typeof setTimeout
      >[]
    >([]);

  const isHoveredRef =
    useRef(false);

  const clearParticles =
    useCallback(() => {
      timeoutsRef.current.forEach(
        (timeout) => {
          clearTimeout(
            timeout,
          );
        },
      );

      timeoutsRef.current =
        [];

      particlesRef.current.forEach(
        (particle) => {
          gsap.killTweensOf(
            particle,
          );

          gsap.to(
            particle,
            {
              scale: 0,
              opacity: 0,
              duration: 0.25,

              onComplete:
                () => {
                  particle.remove();
                },
            },
          );
        },
      );

      particlesRef.current =
        [];
    }, []);

  const createParticles =
    useCallback(() => {
      const card =
        cardRef.current;

      if (!card) {
        return;
      }

      const rect =
        card.getBoundingClientRect();

      for (
        let index = 0;
        index <
        particleCount;
        index += 1
      ) {
        const timeout =
          setTimeout(() => {
            if (
              !isHoveredRef
                .current ||
              !cardRef.current
            ) {
              return;
            }

            const x =
              Math.random() *
              rect.width;

            const y =
              Math.random() *
              rect.height;

            const particle =
              createParticleElement(
                x,
                y,
                glowColor,
              );

            cardRef.current.appendChild(
              particle,
            );

            particlesRef.current.push(
              particle,
            );

            gsap.fromTo(
              particle,
              {
                scale: 0,
                opacity: 0,
              },
              {
                scale: 1,
                opacity: 1,
                duration: 0.3,
                ease: 'back.out(1.7)',
              },
            );

            gsap.to(
              particle,
              {
                x:
                  (Math.random() -
                    0.5) *
                  90,

                y:
                  (Math.random() -
                    0.5) *
                  90,

                rotation:
                  Math.random() *
                  360,

                duration:
                  2 +
                  Math.random() *
                    2,

                repeat: -1,
                yoyo: true,

                ease: 'none',
              },
            );

            gsap.to(
              particle,
              {
                opacity: 0.3,

                duration: 1.4,

                repeat: -1,

                yoyo: true,

                ease:
                  'power2.inOut',
              },
            );
          }, index * 75);

        timeoutsRef.current.push(
          timeout,
        );
      }
    }, [
      glowColor,
      particleCount,
    ]);

  useEffect(() => {
    if (
      disableAnimations
    ) {
      return;
    }

    const card =
      cardRef.current;

    if (!card) {
      return;
    }

    const handleEnter =
      () => {
        isHoveredRef.current =
          true;

        createParticles();
      };

    const handleLeave =
      () => {
        isHoveredRef.current =
          false;

        clearParticles();

        gsap.to(
          card,
          {
            rotateX: 0,
            rotateY: 0,
            x: 0,
            y: 0,
            duration: 0.35,
            ease:
              'power3.out',
          },
        );
      };

    const handleMove = (
      event: MouseEvent,
    ) => {
      if (
        !enableTilt &&
        !enableMagnetism
      ) {
        return;
      }

      const rect =
        card.getBoundingClientRect();

      const x =
        event.clientX -
        rect.left;

      const y =
        event.clientY -
        rect.top;

      const centerX =
        rect.width / 2;

      const centerY =
        rect.height / 2;

      if (enableTilt) {
        const rotateX =
          ((y -
            centerY) /
            centerY) *
          -5;

        const rotateY =
          ((x -
            centerX) /
            centerX) *
          5;

        gsap.to(
          card,
          {
            rotateX,
            rotateY,

            duration: 0.15,

            ease:
              'power2.out',

            transformPerspective:
              1000,
          },
        );
      }

      if (
        enableMagnetism
      ) {
        gsap.to(
          card,
          {
            x:
              (x -
                centerX) *
              0.025,

            y:
              (y -
                centerY) *
              0.025,

            duration: 0.3,

            ease:
              'power2.out',
          },
        );
      }
    };

    const handleClick = (
      event: MouseEvent,
    ) => {
      if (!clickEffect) {
        return;
      }

      const rect =
        card.getBoundingClientRect();

      const x =
        event.clientX -
        rect.left;

      const y =
        event.clientY -
        rect.top;

      const maxDistance =
        Math.max(
          Math.hypot(
            x,
            y,
          ),

          Math.hypot(
            x -
              rect.width,
            y,
          ),

          Math.hypot(
            x,
            y -
              rect.height,
          ),

          Math.hypot(
            x -
              rect.width,
            y -
              rect.height,
          ),
        );

      const ripple =
        document.createElement(
          'div',
        );

      ripple.className =
        'magic-bento-ripple';

      ripple.style.width =
        `${maxDistance * 2}px`;

      ripple.style.height =
        `${maxDistance * 2}px`;

      ripple.style.left =
        `${
          x -
          maxDistance
        }px`;

      ripple.style.top =
        `${
          y -
          maxDistance
        }px`;

      ripple.style.background =
        `radial-gradient(
          circle,
          rgba(${glowColor}, 0.32) 0%,
          rgba(${glowColor}, 0.12) 35%,
          transparent 70%
        )`;

      card.appendChild(
        ripple,
      );

      gsap.fromTo(
        ripple,
        {
          scale: 0,
          opacity: 1,
        },
        {
          scale: 1,
          opacity: 0,
          duration: 0.8,

          ease:
            'power2.out',

          onComplete:
            () => {
              ripple.remove();
            },
        },
      );
    };

    card.addEventListener(
      'mouseenter',
      handleEnter,
    );

    card.addEventListener(
      'mouseleave',
      handleLeave,
    );

    card.addEventListener(
      'mousemove',
      handleMove,
    );

    card.addEventListener(
      'click',
      handleClick,
    );

    return () => {
      isHoveredRef.current =
        false;

      card.removeEventListener(
        'mouseenter',
        handleEnter,
      );

      card.removeEventListener(
        'mouseleave',
        handleLeave,
      );

      card.removeEventListener(
        'mousemove',
        handleMove,
      );

      card.removeEventListener(
        'click',
        handleClick,
      );

      clearParticles();
    };
  }, [
    clickEffect,
    clearParticles,
    createParticles,
    disableAnimations,
    enableMagnetism,
    enableTilt,
    glowColor,
  ]);

  return (
    <div
      ref={cardRef}
      className={`${className} magic-bento-particle-container`}
      style={style}
    >
      {children}
    </div>
  );
}

type GlobalSpotlightProps = {
  gridRef:
    React.RefObject<HTMLDivElement | null>;

  disabled: boolean;

  enabled: boolean;

  spotlightRadius: number;

  glowColor: string;
};

function GlobalSpotlight({
  gridRef,
  disabled,
  enabled,
  spotlightRadius,
  glowColor,
}: GlobalSpotlightProps) {
  const spotlightRef =
    useRef<HTMLDivElement>(
      null,
    );

  useEffect(() => {
    if (
      disabled ||
      !enabled
    ) {
      return;
    }

    const grid =
      gridRef.current;

    const spotlight =
      spotlightRef.current;

    if (
      !grid ||
      !spotlight
    ) {
      return;
    }

    const section =
      grid.closest(
        '.magic-bento-section',
      ) as HTMLElement | null;

    if (!section) {
      return;
    }

    const handleMove = (
      event: MouseEvent,
    ) => {
      const sectionRect =
        section.getBoundingClientRect();

      const relativeX =
        event.clientX -
        sectionRect.left;

      const relativeY =
        event.clientY -
        sectionRect.top;

      spotlight.style.left =
        `${relativeX}px`;

      spotlight.style.top =
        `${relativeY}px`;

      spotlight.style.opacity =
        '1';

      const cards =
        grid.querySelectorAll<HTMLElement>(
          '.magic-bento-card',
        );

      cards.forEach(
        (card) => {
          const rect =
            card.getBoundingClientRect();

          const x =
            ((event.clientX -
              rect.left) /
              rect.width) *
            100;

          const y =
            ((event.clientY -
              rect.top) /
              rect.height) *
            100;

          const centerX =
            rect.left +
            rect.width /
              2;

          const centerY =
            rect.top +
            rect.height /
              2;

          const distance =
            Math.hypot(
              event.clientX -
                centerX,

              event.clientY -
                centerY,
            );

          const intensity =
            Math.max(
              0,

              1 -
                distance /
                  spotlightRadius,
            );

          card.style.setProperty(
            '--glow-x',
            `${x}%`,
          );

          card.style.setProperty(
            '--glow-y',
            `${y}%`,
          );

          card.style.setProperty(
            '--glow-intensity',
            intensity.toString(),
          );

          card.style.setProperty(
            '--glow-radius',
            `${spotlightRadius}px`,
          );
        },
      );
    };

    const handleLeave =
      () => {
        spotlight.style.opacity =
          '0';

        const cards =
          grid.querySelectorAll<HTMLElement>(
            '.magic-bento-card',
          );

        cards.forEach(
          (card) => {
            card.style.setProperty(
              '--glow-intensity',
              '0',
            );
          },
        );
      };

    section.addEventListener(
      'mousemove',
      handleMove,
    );

    section.addEventListener(
      'mouseleave',
      handleLeave,
    );

    return () => {
      section.removeEventListener(
        'mousemove',
        handleMove,
      );

      section.removeEventListener(
        'mouseleave',
        handleLeave,
      );
    };
  }, [
    disabled,
    enabled,
    glowColor,
    gridRef,
    spotlightRadius,
  ]);

  if (
    disabled ||
    !enabled
  ) {
    return null;
  }

  return (
    <div
      ref={spotlightRef}
      className="magic-bento-global-spotlight"
      style={
        {
          '--spotlight-color':
            glowColor,
        } as CSSProperties
      }
      aria-hidden="true"
    />
  );
}

export default function MagicBento({
  items,

  textAutoHide = true,

  enableStars = true,

  enableSpotlight = true,

  enableBorderGlow = true,

  enableTilt = false,

  enableMagnetism = false,

  clickEffect = true,

  spotlightRadius =
    DEFAULT_SPOTLIGHT_RADIUS,

  particleCount =
    DEFAULT_PARTICLE_COUNT,

  glowColor =
    DEFAULT_GLOW_COLOR,

  disableAnimations = false,
}: MagicBentoProps) {
  const gridRef =
    useRef<HTMLDivElement>(
      null,
    );

  const isMobile =
    useMobileDetection();

  const reduceMotion =
    useReducedMotion() ===
    true;

  const animationsDisabled =
    disableAnimations ||
    isMobile ||
    reduceMotion;

  return (
    <div className="magic-bento-section">
      <GlobalSpotlight
        gridRef={gridRef}
        disabled={
          animationsDisabled
        }
        enabled={
          enableSpotlight
        }
        spotlightRadius={
          spotlightRadius
        }
        glowColor={
          glowColor
        }
      />

      <div
        ref={gridRef}
        className="magic-bento-grid"
      >
        {items.map(
          (item) => {
            const classes = [
              'magic-bento-card',

              textAutoHide
                ? 'magic-bento-card--text-autohide'
                : '',

              enableBorderGlow
                ? 'magic-bento-card--border-glow'
                : '',
            ]
              .filter(Boolean)
              .join(' ');

            const content = (
              <>
                <div className="magic-bento-card__header">
                  <span className="magic-bento-card__number">
                    {
                      item.number
                    }
                  </span>

                  <span className="magic-bento-card__label">
                    {item.label ??
                      'LEARNING'}
                  </span>
                </div>

                <div className="magic-bento-card__content">
                  <span className="magic-bento-card__accent-label">
                    ENGINEERING NOTE
                  </span>

                  <p className="magic-bento-card__statement">
                    {
                      item.content
                    }
                  </p>
                </div>

                <div className="magic-bento-card__footer">
                  <span>
                    {item.footer}
                  </span>

                  <i />
                </div>

                <span
                  className="magic-bento-card__ghost"
                  aria-hidden="true"
                >
                  {
                    item.number
                  }
                </span>
              </>
            );

            const style = {
              '--glow-color':
                glowColor,
            } as CSSProperties;

            if (enableStars) {
              return (
                <ParticleCard
                  key={item.id}
                  className={
                    classes
                  }
                  style={style}
                  disableAnimations={
                    animationsDisabled
                  }
                  particleCount={
                    particleCount
                  }
                  glowColor={
                    glowColor
                  }
                  enableTilt={
                    enableTilt
                  }
                  clickEffect={
                    clickEffect
                  }
                  enableMagnetism={
                    enableMagnetism
                  }
                >
                  {content}
                </ParticleCard>
              );
            }

            return (
              <div
                key={item.id}
                className={
                  classes
                }
                style={style}
              >
                {content}
              </div>
            );
          },
        )}
      </div>
    </div>
  );
}
