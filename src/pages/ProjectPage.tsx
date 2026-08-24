import {
  Link,
  useParams,
} from 'react-router-dom';

import {
  findCaseStudyBySlug,
} from '../data/caseStudies';

import {
  NotFoundPage,
} from './NotFoundPage';

function assetUrl(
  path: string,
) {
  return `${
    import.meta.env.BASE_URL
  }${path.replace(/^\/+/, '')}`;
}

export function ProjectPage() {
  const {
    slug,
  } = useParams();

  const project =
    findCaseStudyBySlug(slug);

  if (!project) {
    return <NotFoundPage />;
  }

  return (
    <main className="foundation-page project-foundation">
      <Link
        className="foundation-back"
        to="/"
      >
        ← Back home
      </Link>

      <header className="project-foundation__hero">
        <span className="foundation-eyebrow">
          {project.eyebrow}
        </span>

        <h1>
          {project.title}
        </h1>

        {project.headline && (
          <p className="project-foundation__headline">
            {project.headline}
          </p>
        )}

        <p className="project-foundation__description">
          {project.description}
        </p>

        <div className="project-foundation__meta">
          {project.meta.map(
            (item) => (
              <div key={item.label}>
                <span>
                  {item.label}
                </span>

                <strong>
                  {item.value}
                </strong>
              </div>
            ),
          )}
        </div>
      </header>

      {project.overview && (
        <section className="project-foundation__section">
          <span className="foundation-eyebrow">
            OVERVIEW
          </span>

          <h2>
            {project.overview.title}
          </h2>

          <p>
            {project.overview.description}
          </p>
        </section>
      )}

      {project.problem &&
        project.problem.length > 0 && (
          <section className="project-foundation__section">
            <span className="foundation-eyebrow">
              PROBLEM
            </span>

            <h2>
              {project.problemTitle}
            </h2>

            {project.problem.map(
              (paragraph) => (
                <p key={paragraph}>
                  {paragraph}
                </p>
              ),
            )}
          </section>
        )}

      {project.solution &&
        project.solution.length > 0 && (
          <section className="project-foundation__section">
            <span className="foundation-eyebrow">
              SOLUTION
            </span>

            <h2>
              {project.solutionTitle}
            </h2>

            {project.solution.map(
              (paragraph) => (
                <p key={paragraph}>
                  {paragraph}
                </p>
              ),
            )}
          </section>
        )}

      <section className="project-foundation__section">
        <span className="foundation-eyebrow">
          FEATURES
        </span>

        <div className="project-foundation__items">
          {project.features.map(
            (feature) => (
              <article key={feature.number}>
                <span>
                  {feature.number}
                </span>

                <h3>
                  {feature.title}
                </h3>

                <p>
                  {feature.description}
                </p>
              </article>
            ),
          )}
        </div>
      </section>

      <section className="project-foundation__section">
        <span className="foundation-eyebrow">
          TECHNICAL CHALLENGES
        </span>

        <div className="project-foundation__items">
          {project.challenges.map(
            (challenge) => (
              <article key={challenge.number}>
                <span>
                  {challenge.number}
                </span>

                <h3>
                  {challenge.title}
                </h3>

                <p>
                  {challenge.description}
                </p>
              </article>
            ),
          )}
        </div>
      </section>

      <section className="project-foundation__section">
        <span className="foundation-eyebrow">
          ARCHITECTURE
        </span>

        {project.architectureDescription && (
          <p>
            {project.architectureDescription}
          </p>
        )}

        <div className="project-foundation__architecture">
          {project.architecture.map(
            (node) => (
              <article key={node.label}>
                <strong>
                  {node.label}
                </strong>

                {node.description && (
                  <span>
                    {node.description}
                  </span>
                )}
              </article>
            ),
          )}
        </div>
      </section>

      <section className="project-foundation__section">
        <span className="foundation-eyebrow">
          STACK
        </span>

        <div className="project-foundation__stack">
          {project.technologies.map(
            (technology) => (
              <span key={technology}>
                {technology}
              </span>
            ),
          )}
        </div>
      </section>

      {project.gallery.length > 0 && (
        <section className="project-foundation__section">
          <span className="foundation-eyebrow">
            GALLERY
          </span>

          {project.galleryDescription && (
            <p>
              {project.galleryDescription}
            </p>
          )}

          <div className="project-foundation__gallery">
            {project.gallery.map(
              (image) => (
                <figure key={image.src}>
                  <img
                    src={assetUrl(image.src)}
                    alt={image.alt}
                    loading="lazy"
                  />

                  {image.caption && (
                    <figcaption>
                      {image.caption}
                    </figcaption>
                  )}
                </figure>
              ),
            )}
          </div>
        </section>
      )}

      {project.learnings &&
        project.learnings.length > 0 && (
          <section className="project-foundation__section">
            <span className="foundation-eyebrow">
              LEARNINGS
            </span>

            <div className="project-foundation__learnings">
              {project.learnings.map(
                (learning) => (
                  <p key={learning}>
                    {learning}
                  </p>
                ),
              )}
            </div>
          </section>
        )}

      {(project.github ||
        project.demo) && (
        <section className="project-foundation__links">
          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noreferrer"
            >
              Live product ↗
            </a>
          )}

          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noreferrer"
            >
              GitHub ↗
            </a>
          )}
        </section>
      )}

      {project.nextProject && (
        <Link
          className="project-foundation__next"
          to={`/project/${project.nextProject.slug}`}
        >
          <span>
            NEXT PROJECT
          </span>

          <strong>
            {project.nextProject.name}
          </strong>

          <span>
            →
          </span>
        </Link>
      )}
    </main>
  );
}
