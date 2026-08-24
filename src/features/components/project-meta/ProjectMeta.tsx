import type { CaseStudyMeta } from '../../projects/types/caseStudy';

import './ProjectMeta.scss';

type ProjectMetaProps = {
  items: CaseStudyMeta[];
};

export function ProjectMeta({
  items,
}: ProjectMetaProps) {
  return (
    <div className="project-meta">
      {items.map((item) => (
        <div
          key={item.label}
          className="project-meta__item"
        >
          <span className="project-meta__label">
            {item.label}
          </span>

          <span className="project-meta__value">
            {item.value}
          </span>
        </div>
      ))}
    </div>
  );
}
