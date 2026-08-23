import {
  useCallback,
  useEffect,
  useMemo,
  useRef,
} from 'react';

import {
  gsap,
} from 'gsap';

import type {
  CSSProperties,
} from 'react';

import './DotGrid.scss';

interface Dot {
  cx: number;
  cy: number;

  xOffset: number;
  yOffset: number;

  active: boolean;
}

interface DotGridProps {
  dotSize?: number;
  gap?: number;

  baseColor?: string;
  activeColor?: string;

  proximity?: number;

  speedTrigger?: number;

  shockRadius?: number;
  shockStrength?: number;

  maxSpeed?: number;

  returnDuration?: number;

  className?: string;

  style?: CSSProperties;
}

interface PointerState {
  x: number;
  y: number;

  vx: number;
  vy: number;

  speed: number;

  lastTime: number;
  lastX: number;
  lastY: number;
}

interface RGB {
  r: number;
  g: number;
  b: number;
}

function hexToRgb(
  hex: string,
): RGB {
  const match =
    hex.match(
      /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i,
    );

  if (!match) {
    return {
      r: 0,
      g: 0,
      b: 0,
    };
  }

  return {
    r:
      Number.parseInt(
        match[1],
        16,
      ),

    g:
      Number.parseInt(
        match[2],
        16,
      ),

    b:
      Number.parseInt(
        match[3],
        16,
      ),
  };
}

export function DotGrid({
  dotSize = 3,

  gap = 22,

  baseColor = '#26232f',

  activeColor = '#7c5cfc',

  proximity = 130,

  speedTrigger = 120,

  shockRadius = 220,

  shockStrength = 0.45,

  maxSpeed = 4000,

  returnDuration = 1.15,

  className = '',

  style,
}: DotGridProps) {
  const wrapperRef =
    useRef<HTMLDivElement | null>(
      null,
    );

  const canvasRef =
    useRef<HTMLCanvasElement | null>(
      null,
    );

  const animationRef =
    useRef<number | null>(
      null,
    );

  const dotsRef =
    useRef<Dot[]>([]);

  const pointerRef =
    useRef<PointerState>({
      x:
        Number.NEGATIVE_INFINITY,

      y:
        Number.NEGATIVE_INFINITY,

      vx:
        0,

      vy:
        0,

      speed:
        0,

      lastTime:
        0,

      lastX:
        0,

      lastY:
        0,
    });

  const baseRgb =
    useMemo(
      () =>
        hexToRgb(
          baseColor,
        ),

      [baseColor],
    );

  const activeRgb =
    useMemo(
      () =>
        hexToRgb(
          activeColor,
        ),

      [activeColor],
    );

  const circlePath =
    useMemo(
      () => {
        if (
          typeof Path2D ===
          'undefined'
        ) {
          return null;
        }

        const path =
          new Path2D();

        path.arc(
          0,
          0,
          dotSize / 2,
          0,
          Math.PI * 2,
        );

        return path;
      },

      [dotSize],
    );

  const buildGrid =
    useCallback(
      () => {
        const wrapper =
          wrapperRef.current;

        const canvas =
          canvasRef.current;

        if (
          !wrapper ||
          !canvas
        ) {
          return;
        }

        const {
          width,
          height,
        } =
          wrapper.getBoundingClientRect();

        if (
          width <= 0 ||
          height <= 0
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
          Math.floor(
            width * dpr,
          );

        canvas.height =
          Math.floor(
            height * dpr,
          );

        canvas.style.width =
          `${width}px`;

        canvas.style.height =
          `${height}px`;

        const context =
          canvas.getContext(
            '2d',
          );

        if (!context) {
          return;
        }

        context.setTransform(
          dpr,
          0,
          0,
          dpr,
          0,
          0,
        );

        const cell =
          dotSize +
          gap;

        const columns =
          Math.max(
            1,
            Math.floor(
              (width +
                gap) /
                cell,
            ),
          );

        const rows =
          Math.max(
            1,
            Math.floor(
              (height +
                gap) /
                cell,
            ),
          );

        const gridWidth =
          cell *
            columns -
          gap;

        const gridHeight =
          cell *
            rows -
          gap;

        const startX =
          (width -
            gridWidth) /
            2 +
          dotSize / 2;

        const startY =
          (height -
            gridHeight) /
            2 +
          dotSize / 2;

        const dots: Dot[] =
          [];

        for (
          let row = 0;
          row < rows;
          row += 1
        ) {
          for (
            let column = 0;
            column <
            columns;
            column += 1
          ) {
            dots.push({
              cx:
                startX +
                column *
                  cell,

              cy:
                startY +
                row *
                  cell,

              xOffset:
                0,

              yOffset:
                0,

              active:
                false,
            });
          }
        }

        dotsRef.current =
          dots;
      },

      [
        dotSize,
        gap,
      ],
    );

  const pushDot =
    useCallback(
      (
        dot: Dot,

        pushX: number,

        pushY: number,
      ) => {
        if (
          dot.active
        ) {
          return;
        }

        dot.active =
          true;

        gsap.killTweensOf(
          dot,
        );

        gsap.to(
          dot,
          {
            xOffset:
              pushX,

            yOffset:
              pushY,

            duration:
              0.16,

            ease:
              'power2.out',

            onComplete:
              () => {
                gsap.to(
                  dot,
                  {
                    xOffset:
                      0,

                    yOffset:
                      0,

                    duration:
                      returnDuration,

                    ease:
                      'elastic.out(1, 0.55)',

                    onComplete:
                      () => {
                        dot.active =
                          false;
                      },
                  },
                );
              },
          },
        );
      },

      [
        returnDuration,
      ],
    );

  useEffect(
    () => {
      if (
        !circlePath
      ) {
        return;
      }

      const reducedMotion =
        window.matchMedia(
          '(prefers-reduced-motion: reduce)',
        ).matches;

      const proximitySquared =
        proximity *
        proximity;

      const draw = () => {
        const canvas =
          canvasRef.current;

        if (!canvas) {
          return;
        }

        const context =
          canvas.getContext(
            '2d',
          );

        if (!context) {
          return;
        }

        const {
          width,
          height,
        } =
          canvas.getBoundingClientRect();

        context.clearRect(
          0,
          0,
          width,
          height,
        );

        const {
          x:
            pointerX,

          y:
            pointerY,
        } =
          pointerRef.current;

        for (
          const dot
          of dotsRef.current
        ) {
          const x =
            dot.cx +
            dot.xOffset;

          const y =
            dot.cy +
            dot.yOffset;

          const dx =
            dot.cx -
            pointerX;

          const dy =
            dot.cy -
            pointerY;

          const distanceSquared =
            dx * dx +
            dy * dy;

          let color =
            baseColor;

          if (
            !reducedMotion &&
            distanceSquared <=
              proximitySquared
          ) {
            const distance =
              Math.sqrt(
                distanceSquared,
              );

            const influence =
              1 -
              distance /
                proximity;

            const r =
              Math.round(
                baseRgb.r +
                  (activeRgb.r -
                    baseRgb.r) *
                    influence,
              );

            const g =
              Math.round(
                baseRgb.g +
                  (activeRgb.g -
                    baseRgb.g) *
                    influence,
              );

            const b =
              Math.round(
                baseRgb.b +
                  (activeRgb.b -
                    baseRgb.b) *
                    influence,
              );

            color =
              `rgb(${r}, ${g}, ${b})`;
          }

          context.save();

          context.translate(
            x,
            y,
          );

          context.fillStyle =
            color;

          context.fill(
            circlePath,
          );

          context.restore();
        }

        animationRef.current =
          requestAnimationFrame(
            draw,
          );
      };

      animationRef.current =
        requestAnimationFrame(
          draw,
        );

      return () => {
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
      activeRgb,
      baseColor,
      baseRgb,
      circlePath,
      proximity,
    ],
  );

  useEffect(
    () => {
      buildGrid();

      const wrapper =
        wrapperRef.current;

      if (!wrapper) {
        return;
      }

      const observer =
        new ResizeObserver(
          buildGrid,
        );

      observer.observe(
        wrapper,
      );

      return () => {
        observer.disconnect();
      };
    },

    [
      buildGrid,
    ],
  );

  useEffect(
    () => {
      const reducedMotion =
        window.matchMedia(
          '(prefers-reduced-motion: reduce)',
        ).matches;

      const coarsePointer =
        window.matchMedia(
          '(pointer: coarse)',
        ).matches;

      if (
        reducedMotion ||
        coarsePointer
      ) {
        return;
      }

      let lastMove =
        0;

      const handleMove = (
        event:
          PointerEvent,
      ) => {
        const canvas =
          canvasRef.current;

        if (!canvas) {
          return;
        }

        const now =
          performance.now();

        if (
          now -
            lastMove <
          35
        ) {
          return;
        }

        lastMove =
          now;

        const rect =
          canvas.getBoundingClientRect();

        const pointer =
          pointerRef.current;

        const deltaTime =
          pointer.lastTime
            ? Math.max(
                now -
                  pointer.lastTime,
                1,
              )
            : 16;

        const deltaX =
          event.clientX -
          pointer.lastX;

        const deltaY =
          event.clientY -
          pointer.lastY;

        let velocityX =
          (deltaX /
            deltaTime) *
          1000;

        let velocityY =
          (deltaY /
            deltaTime) *
          1000;

        let speed =
          Math.hypot(
            velocityX,
            velocityY,
          );

        if (
          speed >
          maxSpeed
        ) {
          const scale =
            maxSpeed /
            speed;

          velocityX *=
            scale;

          velocityY *=
            scale;

          speed =
            maxSpeed;
        }

        pointer.lastTime =
          now;

        pointer.lastX =
          event.clientX;

        pointer.lastY =
          event.clientY;

        pointer.vx =
          velocityX;

        pointer.vy =
          velocityY;

        pointer.speed =
          speed;

        pointer.x =
          event.clientX -
          rect.left;

        pointer.y =
          event.clientY -
          rect.top;

        if (
          speed <=
          speedTrigger
        ) {
          return;
        }

        for (
          const dot
          of dotsRef.current
        ) {
          const distance =
            Math.hypot(
              dot.cx -
                pointer.x,

              dot.cy -
                pointer.y,
            );

          if (
            distance >=
            proximity
          ) {
            continue;
          }

          const influence =
            1 -
            distance /
              proximity;

          const directionX =
            dot.cx -
            pointer.x;

          const directionY =
            dot.cy -
            pointer.y;

          const length =
            Math.max(
              Math.hypot(
                directionX,
                directionY,
              ),
              1,
            );

          const push =
            10 *
            influence;

          pushDot(
            dot,

            (directionX /
              length) *
              push +
              velocityX *
                0.0015,

            (directionY /
              length) *
              push +
              velocityY *
                0.0015,
          );
        }
      };

      const handleClick = (
        event:
          MouseEvent,
      ) => {
        const canvas =
          canvasRef.current;

        if (!canvas) {
          return;
        }

        const rect =
          canvas.getBoundingClientRect();

        const clickX =
          event.clientX -
          rect.left;

        const clickY =
          event.clientY -
          rect.top;

        for (
          const dot
          of dotsRef.current
        ) {
          const dx =
            dot.cx -
            clickX;

          const dy =
            dot.cy -
            clickY;

          const distance =
            Math.hypot(
              dx,
              dy,
            );

          if (
            distance >=
            shockRadius
          ) {
            continue;
          }

          const falloff =
            Math.max(
              0,
              1 -
                distance /
                  shockRadius,
            );

          pushDot(
            dot,

            dx *
              shockStrength *
              falloff,

            dy *
              shockStrength *
              falloff,
          );
        }
      };

      window.addEventListener(
        'pointermove',
        handleMove,
        {
          passive:
            true,
        },
      );

      window.addEventListener(
        'click',
        handleClick,
      );

      return () => {
        window.removeEventListener(
          'pointermove',
          handleMove,
        );

        window.removeEventListener(
          'click',
          handleClick,
        );
      };
    },

    [
      maxSpeed,
      proximity,
      pushDot,
      shockRadius,
      shockStrength,
      speedTrigger,
    ],
  );

  useEffect(
    () => {
      return () => {
        dotsRef.current.forEach(
          (dot) => {
            gsap.killTweensOf(
              dot,
            );
          },
        );
      };
    },
    [],
  );

  return (
    <div
      className={[
        'dot-grid',
        className,
      ]
        .filter(Boolean)
        .join(' ')}
      style={style}
      aria-hidden="true"
    >
      <div
        ref={wrapperRef}
        className="dot-grid__wrap"
      >
        <canvas
          ref={canvasRef}
          className="dot-grid__canvas"
        />
      </div>
    </div>
  );
}
