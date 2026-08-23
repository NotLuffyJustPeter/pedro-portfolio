import {
  Link,
} from 'react-router-dom';

import {
  Container,
  Section,
} from '../components/layout';

import {
  Reveal,
  SectionHeader,
} from '../components/ui';

import {
  PROJECTS,
} from '../data/projects';

import {
  HomeBackground,
} from '../features/home/background/HomeBackground';

import {
  Hero,
} from '../features/home/hero/Hero';

import {
  FeaturedProject,
} from '../features/home/projects/FeaturedProject';

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

      <HomeBackground>
        {featuredProject && (
          <FeaturedProject
            project={
              featuredProject
            }
          />
        )}

        <Section divider>
          <Container>
            <Reveal>
              <SectionHeader
                eyebrow="02 / SELECTED WORK"
                title="More projects."
                description="A selection of full-stack, mobile, business and systems projects built across different platforms and technical challenges."
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
                      index *
                      0.06
                    }
                  >
                    <Link
                      to={`/project/${project.slug}`}
                      className="foundation-project"
                    >
                      <span>
                        {String(
                          index +
                            2,
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
      </HomeBackground>
    </main>
  );
}
