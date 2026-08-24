import {
  Link,
} from 'react-router-dom';

import {
  GoArrowRight,
} from 'react-icons/go';

import type {
  CaseStudy,
} from '../../projects/types/caseStudy';

import './ProjectNext.scss';

type ProjectNextProps = {
  project: CaseStudy;
};

export function ProjectNext({
  project,
}: ProjectNextProps) {
  const next =
    project.nextProject;

  if (!next) {
    return null;
  }

  return (
    <section className="project-next">
      <div className="project-next__inner">
        <Link
          to={`/project/${next.slug}`}
          className="project-next__link"
        >
          <div className="project-next__meta">
            <span className="project-next__index">
              07 / CONTINUE
            </span>

            <span className="project-next__type">
              NEXT CASE STUDY
            </span>
          </div>

          <div className="project-next__main">
            <span className="project-next__eyebrow">
              UP NEXT
            </span>

            <h2>
              {next.name}
            </h2>
          </div>

          <div className="project-next__direction">
            <span>
              VIEW CASE STUDY
            </span>

            <GoArrowRight />
          </div>

          <div
            className="project-next__glow"
            aria-hidden="true"
          />

          <div
            className="project-next__line"
            aria-hidden="true"
          />
        </Link>
      </div>
    </section>
  );
}
