import {
  useEffect,
  useState,
} from 'react';

import LineSidebar from '../line-sidebar/LineSidebar';

import './ProjectLineSidebar.scss';

const CASE_STUDY_SECTIONS = [
  {
    id: 'overview',
    label: 'Overview',
  },

  {
    id: 'architecture',
    label: 'Architecture',
  },

  {
    id: 'features',
    label: 'Features',
  },

  {
    id: 'challenges',
    label: 'Challenges',
  },

  {
    id: 'gallery',
    label: 'Gallery',
  },

  {
    id: 'learnings',
    label: 'Learnings',
  },
];

export function ProjectLineSidebar() {
  const [
    activeIndex,
    setActiveIndex,
  ] = useState(0);

  const [
    visible,
    setVisible,
  ] = useState(false);

  useEffect(() => {
    let rafId = 0;

    const update =
      () => {
        rafId = 0;

        const sections =
          CASE_STUDY_SECTIONS.map(
            (section) => ({
              ...section,

              element:
                document.getElementById(
                  section.id,
                ),
            }),
          ).filter(
            (
              section,
            ): section is
              typeof section & {
                element: HTMLElement;
              } =>
              Boolean(
                section.element,
              ),
          );

        if (
          sections.length ===
          0
        ) {
          setVisible(false);
          return;
        }

        /*
         * Punto de lectura aproximadamente
         * a 38% del viewport.
         */
        const readingLine =
          window.innerHeight *
          0.38;

        let current = 0;

        sections.forEach(
          (
            section,
            index,
          ) => {
            const rect =
              section.element.getBoundingClientRect();

            if (
              rect.top <=
              readingLine
            ) {
              current =
                index;
            }
          },
        );

        setActiveIndex(
          current,
        );

        const first =
          sections[0]
            .element.getBoundingClientRect();

        const last =
          sections[
            sections.length - 1
          ].element.getBoundingClientRect();

        /*
         * No mostramos sidebar en Hero.
         * Tampoco lo dejamos sobre
         * Next Project / Footer.
         */
        const shouldShow =
          first.top <
            window.innerHeight *
              0.72 &&
          last.bottom >
            window.innerHeight *
              0.18;

        setVisible(
          shouldShow,
        );
      };

    const schedule =
      () => {
        if (rafId) {
          return;
        }

        rafId =
          requestAnimationFrame(
            update,
          );
      };

    update();

    window.addEventListener(
      'scroll',
      schedule,
      {
        passive: true,
      },
    );

    window.addEventListener(
      'resize',
      schedule,
    );

    return () => {
      window.removeEventListener(
        'scroll',
        schedule,
      );

      window.removeEventListener(
        'resize',
        schedule,
      );

      if (rafId) {
        cancelAnimationFrame(
          rafId,
        );
      }
    };
  }, []);

  const handleClick = (
    index: number,
  ) => {
    const section =
      CASE_STUDY_SECTIONS[
        index
      ];

    if (!section) {
      return;
    }

    const target =
      document.getElementById(
        section.id,
      );

    if (!target) {
      return;
    }

    setActiveIndex(index);

    target.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  };

  return (
    <aside
      className={`project-line-sidebar${
        visible
          ? ' is-visible'
          : ''
      }`}
    >
      <LineSidebar
        items={
          CASE_STUDY_SECTIONS.map(
            (section) =>
              section.label,
          )
        }
        accentColor="#8d6cff"
        textColor="#71717a"
        markerColor="#36363f"
        showIndex
        showMarker
        proximityRadius={95}
        maxShift={18}
        falloff="smooth"
        markerLength={42}
        markerGap={0}
        tickScale={0.4}
        scaleTick
        itemGap={16}
        fontSize={0.58}
        smoothing={95}
        activeIndex={
          activeIndex
        }
        onItemClick={(
          index,
        ) =>
          handleClick(index)
        }
      />
    </aside>
  );
}
