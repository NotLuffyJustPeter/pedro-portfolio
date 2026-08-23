import {
  Link,
} from 'react-router-dom';

import {
  Container,
  Section,
} from '../components/layout';

import {
  Eyebrow,
  Reveal,
  SectionHeader,
} from '../components/ui';

import {
  PROJECTS,
} from '../data/projects';

import {
  Hero,
} from '../features/home/hero/Hero';

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
    <main>
      <Hero />

      {featuredProject && (
        <Section divider>
          <Container>
            <Reveal>
              <SectionHeader
                eyebrow="01 / FEATURED PROJECT"
                title="Selected work."
                description="A production-focused selection of projects across full-stack development, AI, mobile applications and software systems."
              />
            </Reveal>

            <Reveal delay={0.08}>
              <Link
                className="foundation-featured"
                to={`/project/${featuredProject.slug}`}
              >
                <div>
                  <Eyebrow>
                    {featuredProject.eyebrow}
                  </Eyebrow>

                  <h2>
                    {featuredProject.name}
                  </h2>

                  <p>
                    {
                      featuredProject.shortDescription
                    }
                  </p>
                </div>

                <span>
                  {featuredProject.year} ↗
                </span>
              </Link>
            </Reveal>
          </Container>
        </Section>
      )}

      <Section divider>
        <Container>
          <Reveal>
            <SectionHeader
              eyebrow="02 / SELECTED WORK"
              title="More projects."
            />
          </Reveal>

          <div className="foundation-projects">
            {selectedProjects.map(
              (
                project,
                index,
              ) => (
                <Reveal
                  key={
                    project.slug
                  }
                  delay={
                    index * 0.06
                  }
                >
                  <Link
                    to={`/project/${project.slug}`}
                    className="foundation-project"
                  >
                    <span>
                      {String(
                        index + 2,
                      ).padStart(
                        2,
                        '0',
                      )}
                    </span>

                    <strong>
                      {
                        project.name
                      }
                    </strong>

                    <span>
                      {
                        project.year
                      }{' '}
                      ↗
                    </span>
                  </Link>
                </Reveal>
              ),
            )}
          </div>
        </Container>
      </Section>
    </main>
  );
}
