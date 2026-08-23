import {
  PROJECTS,
} from '../data/projects';

import {
  Footer,
} from '../components/layout/Footer';

import {
  About,
} from '../features/home/about/About';

import {
  HomeBackground,
} from '../features/home/background/HomeBackground';

import {
  Contact,
} from '../features/home/contact/Contact';

import {
  Hero,
} from '../features/home/hero/Hero';

import {
  FeaturedProject,
} from '../features/home/projects/FeaturedProject';

import {
  SelectedWork,
} from '../features/home/projects/SelectedWork';

import {
  WhatIDo,
} from '../features/home/services/WhatIDo';

import {
  TechStack,
} from '../features/home/stack/TechStack';

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
    <main id="top">
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

      <About />

      <WhatIDo />

      <TechStack />

      <Contact />

      <Footer />
    </main>
  );
}
