import {
  useState,
  type KeyboardEvent,
} from 'react';

import type { CaseStudy } from '../../projects/types/caseStudy';

import './ProjectOverview.scss';

type ProjectOverviewProps = {
  project: CaseStudy;
};

type OverviewPanel = {
  number: string;
  label: string;
  title: string;
  paragraphs: string[];
};

export function ProjectOverview({
  project,
}: ProjectOverviewProps) {
  const [activePanel, setActivePanel] =
    useState(0);

  const panels: OverviewPanel[] = [
    {
      number: '01',
      label: 'PROJECT CONTEXT',
      title: project.subtitle,
      paragraphs: [
        project.description,
      ],
    },
    {
      number: '02',
      label: 'THE PROBLEM',
      title: project.problemTitle,
      paragraphs: project.problem,
    },
    {
      number: '03',
      label: 'THE SOLUTION',
      title: project.solutionTitle,
      paragraphs: project.solution,
    },
  ];

  const handleKeyboard = (
    event: KeyboardEvent<HTMLElement>,
    index: number,
  ) => {
    if (
      event.key === 'Enter' ||
      event.key === ' '
    ) {
      event.preventDefault();
      setActivePanel(index);
    }

    if (event.key === 'ArrowRight') {
      event.preventDefault();

      setActivePanel(
        (index + 1) %
          panels.length,
      );
    }

    if (event.key === 'ArrowLeft') {
      event.preventDefault();

      setActivePanel(
        (index -
          1 +
          panels.length) %
          panels.length,
      );
    }
  };

  return (
    <section
      className="project-overview"
      id="overview"
    >
      <div className="project-overview__inner">
        <header className="project-overview__header">
          <div className="project-overview__eyebrow">
            <span>
              01 / OVERVIEW
            </span>

            <span>
              PROJECT STORY
            </span>
          </div>

          <div className="project-overview__heading">
            <h2>
              From context
              <br />
              to solution.
            </h2>

            <p>
              Explore the context,
              challenge and solution
              behind {project.title}.
            </p>
          </div>
        </header>

        <div className="project-overview__accordion">
          {panels.map(
            (panel, index) => {
              const active =
                activePanel === index;

              return (
                <article
                  key={panel.label}
                  className={`project-overview__panel${
                    active
                      ? ' is-active'
                      : ''
                  }`}
                  role="button"
                  tabIndex={0}
                  aria-expanded={active}
                  onMouseEnter={() =>
                    setActivePanel(
                      index,
                    )
                  }
                  onFocus={() =>
                    setActivePanel(
                      index,
                    )
                  }
                  onClick={() =>
                    setActivePanel(
                      index,
                    )
                  }
                  onKeyDown={(
                    event,
                  ) =>
                    handleKeyboard(
                      event,
                      index,
                    )
                  }
                >
                  <div className="project-overview__panel-meta">
                    <span>
                      {panel.number}
                    </span>

                    <span>
                      {panel.label}
                    </span>
                  </div>

                  <div className="project-overview__collapsed">
                    <span>
                      {panel.title}
                    </span>
                  </div>

                  <div className="project-overview__panel-content">
                    <span className="project-overview__panel-kicker">
                      {panel.label}
                    </span>

                    <h3>
                      {panel.title}
                    </h3>

                    <div className="project-overview__copy">
                      {panel.paragraphs.map(
                        (
                          paragraph,
                          paragraphIndex,
                        ) => (
                          <p
                            key={`${panel.label}-${paragraphIndex}`}
                          >
                            {paragraph}
                          </p>
                        ),
                      )}
                    </div>
                  </div>

                  <div
                    className="project-overview__panel-glow"
                    aria-hidden="true"
                  />
                </article>
              );
            },
          )}
        </div>

        <div className="project-overview__hint">
          <span>
            HOVER / CLICK TO EXPLORE
          </span>

          <span>
            01 — 03
          </span>
        </div>
      </div>
    </section>
  );
}
