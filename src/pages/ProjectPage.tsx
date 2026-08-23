import { Link, useParams } from 'react-router-dom';
import { findProjectBySlug } from '../data/projects';
import { NotFoundPage } from './NotFoundPage';

export function ProjectPage() {
  const { slug } = useParams();

  const project = findProjectBySlug(slug);

  if (!project) {
    return <NotFoundPage />;
  }

  return (
    <main className="foundation-page">
      <Link
        className="foundation-back"
        to="/"
      >
        ← Back home
      </Link>

      <section className="foundation-project-page">
        <span className="foundation-eyebrow">
          {project.eyebrow}
        </span>

        <h1>
          {project.name}
        </h1>

        <p>
          {project.year}
        </p>

        <div className="foundation-placeholder">
          Case study migration pending.
        </div>
      </section>
    </main>
  );
}
