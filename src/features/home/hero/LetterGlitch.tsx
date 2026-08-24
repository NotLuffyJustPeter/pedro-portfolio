import {
  useEffect,
  useRef,
} from 'react';

import './LetterGlitch.scss';

interface Letter {
  char: string;
  color: string;
  targetColor: string;
  colorProgress: number;
}

interface LetterGlitchProps {
  colors?: string[];
  characters?: string;
  glitchSpeed?: number;
  centerVignette?: boolean;
  outerVignette?: boolean;
  smooth?: boolean;
  className?: string;
}

const DEFAULT_CHARACTERS =
  'ABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$&*()-_+=/[]{};:<>.,0123456789';

const DEFAULT_COLORS = [
  '#221b35',
  '#5539a8',
  '#7c5cfc',
  '#9b87f5',
];

export function LetterGlitch({
  colors = DEFAULT_COLORS,
  characters = DEFAULT_CHARACTERS,
  glitchSpeed = 65,
  centerVignette = true,
  outerVignette = true,
  smooth = true,
  className = '',
}: LetterGlitchProps) {
  const canvasRef =
    useRef<HTMLCanvasElement | null>(
      null,
    );

  const contextRef =
    useRef<CanvasRenderingContext2D | null>(
      null,
    );

  const animationRef =
    useRef<number | null>(
      null,
    );

  const lettersRef =
    useRef<Letter[]>([]);

  const gridRef =
    useRef({
      columns: 0,
      rows: 0,
    });

  const lastGlitchTimeRef =
    useRef(0);

  const fontSize =
    15;

  const charWidth =
    10;

  const charHeight =
    20;

  useEffect(
    () => {
      const canvas =
        canvasRef.current;

      if (!canvas) {
        return;
      }

      const parent =
        canvas.parentElement;

      if (!parent) {
        return;
      }

      const context =
        canvas.getContext(
          '2d',
        );

      if (!context) {
        return;
      }

      contextRef.current =
        context;

      const chars =
        Array.from(
          characters,
        );

      if (
        chars.length === 0 ||
        colors.length === 0
      ) {
        return;
      }

      const reducedMotion =
        window.matchMedia(
          '(prefers-reduced-motion: reduce)',
        ).matches;

      const getRandomChar =
        () =>
          chars[
            Math.floor(
              Math.random() *
                chars.length,
            )
          ];

      const getRandomColor =
        () =>
          colors[
            Math.floor(
              Math.random() *
                colors.length,
            )
          ];

      const hexToRgb = (
        hex: string,
      ) => {
        const normalized =
          hex
            .replace(
              '#',
              '',
            )
            .trim();

        if (
          normalized.length !==
          6
        ) {
          return null;
        }

        const r =
          Number.parseInt(
            normalized.slice(
              0,
              2,
            ),
            16,
          );

        const g =
          Number.parseInt(
            normalized.slice(
              2,
              4,
            ),
            16,
          );

        const b =
          Number.parseInt(
            normalized.slice(
              4,
              6,
            ),
            16,
          );

        if (
          Number.isNaN(r) ||
          Number.isNaN(g) ||
          Number.isNaN(b)
        ) {
          return null;
        }

        return {
          r,
          g,
          b,
        };
      };

      const interpolateColor = (
        start: {
          r: number;
          g: number;
          b: number;
        },

        end: {
          r: number;
          g: number;
          b: number;
        },

        factor: number,
      ) => {
        const r =
          Math.round(
            start.r +
              (end.r -
                start.r) *
                factor,
          );

        const g =
          Math.round(
            start.g +
              (end.g -
                start.g) *
                factor,
          );

        const b =
          Math.round(
            start.b +
              (end.b -
                start.b) *
                factor,
          );

        return `rgb(${r}, ${g}, ${b})`;
      };

      const initializeLetters = (
        columns: number,
        rows: number,
      ) => {
        gridRef.current = {
          columns,
          rows,
        };

        lettersRef.current =
          Array.from(
            {
              length:
                columns *
                rows,
            },

            () => {
              const color =
                getRandomColor();

              return {
                char:
                  getRandomChar(),

                color,

                targetColor:
                  color,

                colorProgress:
                  1,
              };
            },
          );
      };

      const drawLetters =
        () => {
          const currentCanvas =
            canvasRef.current;

          const ctx =
            contextRef.current;

          if (
            !currentCanvas ||
            !ctx ||
            lettersRef.current
              .length === 0
          ) {
            return;
          }

          const rect =
            currentCanvas.getBoundingClientRect();

          ctx.clearRect(
            0,
            0,
            rect.width,
            rect.height,
          );

          ctx.font =
            `${fontSize}px "JetBrains Mono", monospace`;

          ctx.textBaseline =
            'top';

          lettersRef.current.forEach(
            (
              letter,
              index,
            ) => {
              const columns =
                gridRef.current
                  .columns;

              if (
                columns <= 0
              ) {
                return;
              }

              const x =
                (index %
                  columns) *
                charWidth;

              const y =
                Math.floor(
                  index /
                    columns,
                ) *
                charHeight;

              ctx.fillStyle =
                letter.color;

              ctx.fillText(
                letter.char,
                x,
                y,
              );
            },
          );
        };

      const resizeCanvas =
        () => {
          const rect =
            parent.getBoundingClientRect();

          if (
            rect.width <= 0 ||
            rect.height <= 0
          ) {
            return;
          }

          const dpr =
            Math.min(
              window.devicePixelRatio ||
                1,
              2,
            );

          canvas.width =
            Math.max(
              1,
              Math.floor(
                rect.width *
                  dpr,
              ),
            );

          canvas.height =
            Math.max(
              1,
              Math.floor(
                rect.height *
                  dpr,
              ),
            );

          canvas.style.width =
            `${rect.width}px`;

          canvas.style.height =
            `${rect.height}px`;

          context.setTransform(
            dpr,
            0,
            0,
            dpr,
            0,
            0,
          );

          const columns =
            Math.max(
              1,
              Math.ceil(
                rect.width /
                  charWidth,
              ),
            );

          const rows =
            Math.max(
              1,
              Math.ceil(
                rect.height /
                  charHeight,
              ),
            );

          initializeLetters(
            columns,
            rows,
          );

          drawLetters();
        };

      const updateLetters =
        () => {
          const letters =
            lettersRef.current;

          if (
            letters.length === 0
          ) {
            return;
          }

          const percentage =
            reducedMotion
              ? 0.005
              : 0.035;

          const updateCount =
            Math.max(
              1,
              Math.floor(
                letters.length *
                  percentage,
              ),
            );

          for (
            let index = 0;
            index < updateCount;
            index += 1
          ) {
            const targetIndex =
              Math.floor(
                Math.random() *
                  letters.length,
              );

            const letter =
              letters[
                targetIndex
              ];

            if (!letter) {
              continue;
            }

            letter.char =
              getRandomChar();

            letter.targetColor =
              getRandomColor();

            if (!smooth) {
              letter.color =
                letter.targetColor;

              letter.colorProgress =
                1;
            } else {
              letter.colorProgress =
                0;
            }
          }
        };

      const handleSmoothTransitions =
        () => {
          if (!smooth) {
            return;
          }

          let needsRedraw =
            false;

          lettersRef.current.forEach(
            (letter) => {
              if (
                letter.colorProgress >=
                1
              ) {
                return;
              }

              letter.colorProgress =
                Math.min(
                  1,
                  letter.colorProgress +
                    0.06,
                );

              const startRgb =
                hexToRgb(
                  letter.color,
                );

              const endRgb =
                hexToRgb(
                  letter.targetColor,
                );

              if (
                !startRgb ||
                !endRgb
              ) {
                letter.color =
                  letter.targetColor;

                letter.colorProgress =
                  1;

                needsRedraw =
                  true;

                return;
              }

              letter.color =
                interpolateColor(
                  startRgb,
                  endRgb,
                  letter.colorProgress,
                );

              needsRedraw =
                true;
            },
          );

          if (
            needsRedraw
          ) {
            drawLetters();
          }
        };

      const animate = (
        now: number,
      ) => {
        const effectiveSpeed =
          reducedMotion
            ? 450
            : glitchSpeed;

        if (
          now -
            lastGlitchTimeRef.current >=
          effectiveSpeed
        ) {
          updateLetters();

          drawLetters();

          lastGlitchTimeRef.current =
            now;
        }

        handleSmoothTransitions();

        animationRef.current =
          requestAnimationFrame(
            animate,
          );
      };

      const handleVisibilityChange =
        () => {
          if (
            document.hidden
          ) {
            if (
              animationRef.current !==
              null
            ) {
              cancelAnimationFrame(
                animationRef.current,
              );

              animationRef.current =
                null;
            }

            return;
          }

          if (
            animationRef.current ===
            null
          ) {
            lastGlitchTimeRef.current =
              performance.now();

            animationRef.current =
              requestAnimationFrame(
                animate,
              );
          }
        };

      lastGlitchTimeRef.current =
        performance.now();

      resizeCanvas();

      animationRef.current =
        requestAnimationFrame(
          animate,
        );

      const resizeObserver =
        new ResizeObserver(
          () => {
            resizeCanvas();
          },
        );

      resizeObserver.observe(
        parent,
      );

      document.addEventListener(
        'visibilitychange',
        handleVisibilityChange,
      );

      return () => {
        resizeObserver.disconnect();

        document.removeEventListener(
          'visibilitychange',
          handleVisibilityChange,
        );

        if (
          animationRef.current !==
          null
        ) {
          cancelAnimationFrame(
            animationRef.current,
          );

          animationRef.current =
            null;
        }
      };
    },

    [
      characters,
      colors,
      glitchSpeed,
      smooth,
    ],
  );

  return (
    <div
      className={[
        'letter-glitch',
        className,
      ]
        .filter(Boolean)
        .join(' ')}
      aria-hidden="true"
    >
      <canvas
        ref={canvasRef}
        className="letter-glitch__canvas"
      />

      {outerVignette && (
        <div className="letter-glitch__outer-vignette" />
      )}

      {centerVignette && (
        <div className="letter-glitch__center-vignette" />
      )}
    </div>
  );
}
