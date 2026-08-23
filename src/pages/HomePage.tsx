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

import {
  SelectedWork,
} from '../features/home/projects/SelectedWork';

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

        <SelectedWork
          projects={
            selectedProjects
          }
        />
      </HomeBackground>
    </main>
  );
}
