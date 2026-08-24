import {
  useCallback,
  useEffect,
  useRef,
} from 'react';

import type {
  CSSProperties,
  ReactNode,
} from 'react';

import './BorderGlow.scss';

interface BorderGlowProps {
  children: ReactNode;

  className?: string;

  edgeSensitivity?: number;

  glowColor?: string;

  backgroundColor?: string;

  borderRadius?: number;

  glowRadius?: number;

  glowIntensity?: number;

  coneSpread?: number;

  animated?: boolean;

  colors?: string[];

  fillOpacity?: number;
}

type GlowStyle = CSSProperties &
  Record<
    `--${string}`,
    string | number
  >;

interface HslColor {
  h: number;
  s: number;
  l: number;
}

interface AnimateValueOptions {
  start?: number;
  end?: number;
  duration?: number;
  delay?: number;

  ease?: (
    value: number,
  ) => number;

  onUpdate: (
    value: number,
  ) => void;

  onEnd?: () => void;
}

const GRADIENT_POSITIONS = [
  '80% 55%',
  '69% 34%',
  '8% 6%',
  '41% 38%',
  '86% 85%',
  '82% 18%',
  '51% 4%',
];

const GRADIENT_KEYS = [
  '--gradient-one',
  '--gradient-two',
  '--gradient-three',
  '--gradient-four',
  '--gradient-five',
  '--gradient-six',
  '--gradient-seven',
];

const COLOR_MAP = [
  0,
  1,
  2,
  0,
  1,
  2,
  1,
];

const DEFAULT_COLORS = [
  '#7c5cfc',
  '#c084fc',
  '#38bdf8',
];

function parseHsl(
  value: string,
): HslColor {
  const match =
    value.match(
      /([\d.]+)\s*([\d.]+)%?\s*([\d.]+)%?/,
    );

  if (!match) {
    return {
      h: 262,
      s: 90,
      l: 68,
    };
  }

  return {
    h: Number.parseFloat(
      match[1],
    ),

    s: Number.parseFloat(
      match[2],
    ),

    l: Number.parseFloat(
      match[3],
    ),
  };
}

function buildGlowVars(
  glowColor: string,
  intensity: number,
) {
  const {
    h,
    s,
    l,
  } = parseHsl(
    glowColor,
  );

  const base =
    `${h}deg ${s}% ${l}%`;

  const opacities = [
    100,
    60,
    50,
    40,
    30,
    20,
    10,
  ];

  const keys = [
    '',
    '-60',
    '-50',
    '-40',
    '-30',
    '-20',
    '-10',
  ];

  const vars: Record<
    string,
    string
  > = {};

  for (
    let index = 0;
    index <
    opacities.length;
    index += 1
  ) {
    const opacity =
      Math.min(
        opacities[index] *
          intensity,
        100,
      );

    vars[
      `--glow-color${keys[index]}`
    ] =
      `hsl(${base} / ${opacity}%)`;
  }

  return vars;
}

function buildGradientVars(
  colors: string[],
) {
  const safeColors =
    colors.length > 0
      ? colors
      : DEFAULT_COLORS;

  const vars: Record<
    string,
    string
  > = {};

  for (
    let index = 0;
    index < 7;
    index += 1
  ) {
    const mappedIndex =
      Math.min(
        COLOR_MAP[index],
        safeColors.length -
          1,
      );

    const color =
      safeColors[
        mappedIndex
      ];

    vars[
      GRADIENT_KEYS[
        index
      ]
    ] =
      `radial-gradient(at ${GRADIENT_POSITIONS[index]}, ${color} 0px, transparent 50%)`;
  }

  vars[
    '--gradient-base'
  ] =
    `linear-gradient(${safeColors[0]} 0 100%)`;

  return vars;
}

function easeOutCubic(
  value: number,
) {
  return (
    1 -
    Math.pow(
      1 - value,
      3,
    )
  );
}

function easeInCubic(
  value: number,
) {
  return (
    value *
    value *
    value
  );
}

function animateValue({
  start = 0,
  end = 100,
  duration = 1000,
  delay = 0,
  ease = easeOutCubic,
  onUpdate,
  onEnd,
}: AnimateValueOptions) {
  let frameId:
    | number
    | null = null;

  let timeoutId:
    | ReturnType<
        typeof setTimeout
      >
    | null = null;

  let cancelled =
    false;

  timeoutId =
    setTimeout(
      () => {
        const startTime =
          performance.now();

        const tick = (
          now: number,
        ) => {
          if (
            cancelled
          ) {
            return;
          }

          const elapsed =
            now -
            startTime;

          const progress =
            Math.min(
              elapsed /
                duration,
              1,
            );

          onUpdate(
            start +
              (end -
                start) *
                ease(
                  progress,
                ),
          );

          if (
            progress < 1
          ) {
            frameId =
              requestAnimationFrame(
                tick,
              );
          } else {
            onEnd?.();
          }
        };

        frameId =
          requestAnimationFrame(
            tick,
          );
      },
      delay,
    );

  return () => {
    cancelled = true;

    if (
      timeoutId !== null
    ) {
      clearTimeout(
        timeoutId,
      );
    }

    if (
      frameId !== null
    ) {
      cancelAnimationFrame(
        frameId,
      );
    }
  };
}

export function BorderGlow({
  children,

  className = '',

  edgeSensitivity = 30,

  glowColor = '262 90 68',

  backgroundColor =
    'rgba(10, 11, 14, 0.78)',

  borderRadius = 16,

  glowRadius = 34,

  glowIntensity = 0.85,

  coneSpread = 24,

  animated = false,

  colors = DEFAULT_COLORS,

  fillOpacity = 0.28,
}: BorderGlowProps) {
  const cardRef =
    useRef<HTMLDivElement | null>(
      null,
    );

  const getCenterOfElement =
    useCallback(
      (
        element:
          HTMLElement,
      ) => {
        const {
          width,
          height,
        } =
          element.getBoundingClientRect();

        return [
          width / 2,
          height / 2,
        ] as const;
      },
      [],
    );

  const getEdgeProximity =
    useCallback(
      (
        element:
          HTMLElement,

        x: number,

        y: number,
      ) => {
        const [
          centerX,
          centerY,
        ] =
          getCenterOfElement(
            element,
          );

        const dx =
          x -
          centerX;

        const dy =
          y -
          centerY;

        let kx =
          Number.POSITIVE_INFINITY;

        let ky =
          Number.POSITIVE_INFINITY;

        if (dx !== 0) {
          kx =
            centerX /
            Math.abs(dx);
        }

        if (dy !== 0) {
          ky =
            centerY /
            Math.abs(dy);
        }

        return Math.min(
          Math.max(
            1 /
              Math.min(
                kx,
                ky,
              ),
            0,
          ),
          1,
        );
      },
      [
        getCenterOfElement,
      ],
    );

  const getCursorAngle =
    useCallback(
      (
        element:
          HTMLElement,

        x: number,

        y: number,
      ) => {
        const [
          centerX,
          centerY,
        ] =
          getCenterOfElement(
            element,
          );

        const dx =
          x -
          centerX;

        const dy =
          y -
          centerY;

        if (
          dx === 0 &&
          dy === 0
        ) {
          return 0;
        }

        const radians =
          Math.atan2(
            dy,
            dx,
          );

        let degrees =
          radians *
            (180 /
              Math.PI) +
          90;

        if (
          degrees < 0
        ) {
          degrees +=
            360;
        }

        return degrees;
      },
      [
        getCenterOfElement,
      ],
    );

  const handlePointerMove =
    useCallback(
      (
        event:
          React.PointerEvent<HTMLDivElement>,
      ) => {
        const card =
          cardRef.current;

        if (!card) {
          return;
        }

        if (
          event.pointerType ===
          'touch'
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

        const edge =
          getEdgeProximity(
            card,
            x,
            y,
          );

        const angle =
          getCursorAngle(
            card,
            x,
            y,
          );

        card.style.setProperty(
          '--edge-proximity',
          (
            edge * 100
          ).toFixed(3),
        );

        card.style.setProperty(
          '--cursor-angle',
          `${angle.toFixed(
            3,
          )}deg`,
        );
      },
      [
        getCursorAngle,
        getEdgeProximity,
      ],
    );

  const handlePointerLeave =
    useCallback(
      () => {
        const card =
          cardRef.current;

        if (!card) {
          return;
        }

        card.style.setProperty(
          '--edge-proximity',
          '0',
        );
      },
      [],
    );

  useEffect(
    () => {
      if (
        !animated ||
        !cardRef.current
      ) {
        return;
      }

      const reduceMotion =
        window.matchMedia(
          '(prefers-reduced-motion: reduce)',
        ).matches;

      if (
        reduceMotion
      ) {
        return;
      }

      const card =
        cardRef.current;

      const angleStart =
        110;

      const angleEnd =
        465;

      card.classList.add(
        'sweep-active',
      );

      card.style.setProperty(
        '--cursor-angle',
        `${angleStart}deg`,
      );

      const cleanups = [
        animateValue({
          duration:
            500,

          onUpdate:
            (value) =>
              card.style.setProperty(
                '--edge-proximity',
                `${value}`,
              ),
        }),

        animateValue({
          ease:
            easeInCubic,

          duration:
            1500,

          end:
            50,

          onUpdate:
            (value) => {
              const angle =
                (angleEnd -
                  angleStart) *
                  (value /
                    100) +
                angleStart;

              card.style.setProperty(
                '--cursor-angle',
                `${angle}deg`,
              );
            },
        }),

        animateValue({
          ease:
            easeOutCubic,

          delay:
            1500,

          duration:
            2250,

          start:
            50,

          end:
            100,

          onUpdate:
            (value) => {
              const angle =
                (angleEnd -
                  angleStart) *
                  (value /
                    100) +
                angleStart;

              card.style.setProperty(
                '--cursor-angle',
                `${angle}deg`,
              );
            },
        }),

        animateValue({
          ease:
            easeInCubic,

          delay:
            2500,

          duration:
            1500,

          start:
            100,

          end:
            0,

          onUpdate:
            (value) =>
              card.style.setProperty(
                '--edge-proximity',
                `${value}`,
              ),

          onEnd:
            () =>
              card.classList.remove(
                'sweep-active',
              ),
        }),
      ];

      return () => {
        cleanups.forEach(
          (cleanup) =>
            cleanup(),
        );

        card.classList.remove(
          'sweep-active',
        );
      };
    },
    [
      animated,
    ],
  );

  const style: GlowStyle = {
    '--card-bg':
      backgroundColor,

    '--edge-sensitivity':
      edgeSensitivity,

    '--border-radius':
      `${borderRadius}px`,

    '--glow-padding':
      `${glowRadius}px`,

    '--cone-spread':
      coneSpread,

    '--fill-opacity':
      fillOpacity,

    ...buildGlowVars(
      glowColor,
      glowIntensity,
    ),

    ...buildGradientVars(
      colors,
    ),
  };

  return (
    <div
      ref={cardRef}
      className={[
        'border-glow-card',
        className,
      ]
        .filter(Boolean)
        .join(' ')}
      style={style}
      onPointerMove={
        handlePointerMove
      }
      onPointerLeave={
        handlePointerLeave
      }
    >
      <span
        className="edge-light"
        aria-hidden="true"
      />

      <div className="border-glow-inner">
        {children}
      </div>
    </div>
  );
}
