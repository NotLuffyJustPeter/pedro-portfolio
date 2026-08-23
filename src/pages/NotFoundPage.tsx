import { Link } from 'react-router-dom';

export function NotFoundPage() {
  return (
    <main className="foundation-page foundation-404">
      <span className="foundation-eyebrow">
        ERROR
      </span>

      <h1>
        404
      </h1>

      <p>
        This page doesn't exist.
      </p>

      <Link
        className="foundation-back"
        to="/"
      >
        Return home →
      </Link>
    </main>
  );
}
