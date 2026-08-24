import {
  useCallback,
  useEffect,
  useRef,
  useState,
  type CSSProperties,
  type PointerEvent as ReactPointerEvent,
} from 'react';

import './LineSidebar.scss';

const FALLOFF_CURVES = {
  linear: (progress: number) =>
    progress,

  smooth: (progress: number) =>
    progress *
    progress *
    (3 - 2 * progress),

  sharp: (progress: number) =>
    progress *
    progress *
    progress,
};

type Falloff =
  keyof typeof FALLOFF_CURVES;

type LineSidebarProps = {
  items: string[];

  accentColor?: string;

  textColor?: string;

  markerColor?: string;

  showIndex?: boolean;

  showMarker?: boolean;

  proximityRadius?: number;

  maxShift?: number;

  falloff?: Falloff;

  markerLength?: number;

  markerGap?: number;

  tickScale?: number;

  scaleTick?: boolean;

  itemGap?: number;

  fontSize?: number;

  smoothing?: number;

  activeIndex?: number;

  defaultActive?: number;

  onItemClick?: (
    index: number,
    label: string,
  ) => void;

  className?: string;
};

export default function LineSidebar({
  items,

  accentColor = '#A855F7',

  textColor = '#8c8c94',

  markerColor = '#45454d',

  showIndex = true,

  showMarker = true,

  proximityRadius = 100,

  maxShift = 22,

  falloff = 'smooth',

  markerLength = 46,

  markerGap = 0,

  tickScale = 0.42,

  scaleTick = true,

  itemGap = 17,

  fontSize = 0.72,

  smoothing = 100,

  activeIndex:
    controlledActiveIndex,

  defaultActive = 0,

  onItemClick,

  className = '',
}: LineSidebarProps) {
  const listRef =
    useRef<HTMLUListElement>(
      null,
    );

  const itemRefs =
    useRef<
      Array<
        HTMLLIElement | null
      >
    >([]);

  const targetsRef =
    useRef<number[]>([]);

  const currentRef =
    useRef<number[]>([]);

  const rafRef =
    useRef<number | null>(
      null,
    );

  const activeRef =
    useRef(defaultActive);

  const smoothingRef =
    useRef(smoothing);

  const [
    internalActiveIndex,
    setInternalActiveIndex,
  ] = useState(
    defaultActive,
  );

  const activeIndex =
    controlledActiveIndex ??
    internalActiveIndex;

  /*
   * El loop vive dentro de startLoop.
   *
   * Así evitamos que un useCallback
   * tenga que referenciarse a sí mismo,
   * que era uno de los errores de ESLint.
   */
  const startLoop =
    useCallback(() => {
      if (
        rafRef.current !==
        null
      ) {
        cancelAnimationFrame(
          rafRef.current,
        );

        rafRef.current =
          null;
      }

      let lastTime =
        performance.now();

      const tick = (
        now: number,
      ) => {
        const dt =
          Math.min(
            (now -
              lastTime) /
              1000,

            0.05,
          );

        lastTime =
          now;

        const tau =
          Math.max(
            smoothingRef.current,
            1,
          ) / 1000;

        const easing =
          1 -
          Math.exp(
            -dt / tau,
          );

        let moving =
          false;

        const elements =
          itemRefs.current;

        for (
          let index = 0;
          index <
          elements.length;
          index += 1
        ) {
          const element =
            elements[index];

          if (!element) {
            continue;
          }

          const hoverTarget =
            targetsRef.current[
              index
            ] ?? 0;

          const activeTarget =
            activeRef.current ===
            index
              ? 1
              : 0;

          const target =
            Math.max(
              hoverTarget,
              activeTarget,
            );

          const current =
            currentRef.current[
              index
            ] ?? 0;

          const next =
            current +
            (target -
              current) *
              easing;

          const settled =
            Math.abs(
              target -
                next,
            ) <
            0.0015;

          const value =
            settled
              ? target
              : next;

          currentRef.current[
            index
          ] =
            value;

          element.style.setProperty(
            '--effect',
            value.toFixed(4),
          );

          if (!settled) {
            moving = true;
          }
        }

        if (moving) {
          rafRef.current =
            requestAnimationFrame(
              tick,
            );
        } else {
          rafRef.current =
            null;
        }
      };

      rafRef.current =
        requestAnimationFrame(
          tick,
        );
    }, []);

  /*
   * React 19:
   * refs que reflejan props/state
   * se actualizan desde effects,
   * NO durante render.
   */
  useEffect(() => {
    activeRef.current =
      activeIndex;

    startLoop();
  }, [
    activeIndex,
    startLoop,
  ]);

  useEffect(() => {
    smoothingRef.current =
      smoothing;
  }, [smoothing]);

  /*
   * Si cambia el número de items,
   * sincronizamos arrays internos.
   */
  useEffect(() => {
    targetsRef.current =
      items.map(
        (
          _item,
          index,
        ) =>
          targetsRef.current[
            index
          ] ?? 0,
      );

    currentRef.current =
      items.map(
        (
          _item,
          index,
        ) =>
          currentRef.current[
            index
          ] ?? 0,
      );

    itemRefs.current =
      itemRefs.current.slice(
        0,
        items.length,
      );

    startLoop();
  }, [
    items,
    startLoop,
  ]);

  const handlePointerMove =
    useCallback(
      (
        event: ReactPointerEvent<HTMLUListElement>,
      ) => {
        const list =
          listRef.current;

        if (!list) {
          return;
        }

        const rect =
          list.getBoundingClientRect();

        const pointerY =
          event.clientY -
          rect.top;

        const ease =
          FALLOFF_CURVES[
            falloff
          ];

        const elements =
          itemRefs.current;

        for (
          let index = 0;
          index <
          elements.length;
          index += 1
        ) {
          const element =
            elements[index];

          if (!element) {
            continue;
          }

          const center =
            element.offsetTop +
            element.offsetHeight /
              2;

          const distance =
            Math.abs(
              pointerY -
                center,
            );

          const rawProximity =
            Math.max(
              0,

              1 -
                distance /
                  proximityRadius,
            );

          targetsRef.current[
            index
          ] =
            ease(
              rawProximity,
            );
        }

        startLoop();
      },
      [
        falloff,
        proximityRadius,
        startLoop,
      ],
    );

  const handlePointerLeave =
    useCallback(() => {
      targetsRef.current =
        items.map(
          () => 0,
        );

      startLoop();
    }, [
      items,
      startLoop,
    ]);

  const handleClick =
    useCallback(
      (
        index: number,
        label: string,
      ) => {
        /*
         * Si activeIndex viene
         * controlado por el padre,
         * dejamos que el padre lo
         * actualice.
         */
        if (
          controlledActiveIndex ===
          undefined
        ) {
          setInternalActiveIndex(
            index,
          );
        }

        onItemClick?.(
          index,
          label,
        );
      },
      [
        controlledActiveIndex,
        onItemClick,
      ],
    );

  /*
   * Cleanup del único rAF activo.
   */
  useEffect(() => {
    return () => {
      if (
        rafRef.current !==
        null
      ) {
        cancelAnimationFrame(
          rafRef.current,
        );

        rafRef.current =
          null;
      }
    };
  }, []);

  const style = {
    '--accent-color':
      accentColor,

    '--text-color':
      textColor,

    '--marker-color':
      markerColor,

    '--marker-length':
      `${markerLength}px`,

    '--marker-gap':
      `${markerGap}px`,

    '--tick-scale':
      tickScale,

    '--max-shift':
      `${maxShift}px`,

    '--item-gap':
      `${itemGap}px`,

    '--font-size':
      `${fontSize}rem`,
  } as CSSProperties;

  return (
    <nav
      className={[
        'line-sidebar',

        showMarker
          ? 'line-sidebar--markers'
          : '',

        scaleTick
          ? 'line-sidebar--scale-tick'
          : '',

        className,
      ]
        .filter(Boolean)
        .join(' ')}
      style={style}
      aria-label="Case study sections"
    >
      <ul
        ref={listRef}
        className="line-sidebar__list"
        onPointerMove={
          handlePointerMove
        }
        onPointerLeave={
          handlePointerLeave
        }
      >
        {items.map(
          (
            label,
            index,
          ) => (
            <li
              key={`${label}-${index}`}
              ref={(
                element,
              ) => {
                itemRefs.current[
                  index
                ] =
                  element;
              }}
              className="line-sidebar__item"
              aria-current={
                activeIndex ===
                index
                  ? 'true'
                  : undefined
              }
              onClick={() =>
                handleClick(
                  index,
                  label,
                )
              }
            >
              {showMarker && (
                <span
                  className="line-sidebar__marker"
                  aria-hidden="true"
                />
              )}

              <span className="line-sidebar__label">
                {showIndex && (
                  <span className="line-sidebar__index">
                    {String(
                      index + 1,
                    ).padStart(
                      2,
                      '0',
                    )}
                  </span>
                )}

                <span className="line-sidebar__text">
                  {label}
                </span>
              </span>
            </li>
          ),
        )}
      </ul>
    </nav>
  );
}
