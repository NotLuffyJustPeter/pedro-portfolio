import { Link } from 'react-router-dom';
import { PROJECTS } from '../data/projects';

export function HomePage() {
  const featuredProject =
  PROJECTS.find(
    (project) =>
      project.featured,
  );

const selectedProjects =
  PROJECTS.filter(
    (project) =>
      !project.featured,
  );

  return (
    <main className="foundation-page">
      <section className="foundation-hero">
        <span className="foundation-eyebrow">
          REACT PORTFOLIO / FOUNDATION
        </span>

        <h1>
          Pedro Delgado
        </h1>

        <p>
          Full-Stack Developer
        </p>
      </section>

      {featuredProject && (
        <section className="foundation-section">
          <span className="foundation-eyebrow">
            01 / FEATURED PROJECT
          </span>

          <Link
            className="foundation-featured"
            to={`/project/${featuredProject.slug}`}
          >
            <div>
              <span>
                {featuredProject.eyebrow}
              </span>

              <h2>
                {featuredProject.name}
              </h2>
            </div>

            <span>
              {featuredProject.year} ↗
            </span>
          </Link>
        </section>
      )}

      <section className="foundation-section">
        <span className="foundation-eyebrow">
          SELECTED WORK
        </span>

        <div className="foundation-projects">
          {selectedProjects.map((project, index) => (
            <Link
              key={project.slug}
              to={`/project/${project.slug}`}
              className="foundation-project"
            >
              <span>
                {String(index + 2).padStart(2, '0')}
              </span>

              <strong>
                {project.name}
              </strong>

              <span>
                {project.year} ↗
              </span>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
