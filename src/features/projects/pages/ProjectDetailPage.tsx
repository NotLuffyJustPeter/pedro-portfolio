import {
  Navigate,
  useParams,
} from 'react-router-dom';

import {
  getCaseStudyBySlug,
} from '../data/caseStudies';

import {
  ProjectHero,
} from '../../components/project-hero/ProjectHero';

import {
  ScrollExpand,
} from '../../components/scroll-expand/ScrollExpand';

import {
  ProjectOverview,
} from '../../components/project-overview/ProjectOverview';

import {
  ProjectArchitecture,
} from '../../components/project-architecture/ProjectArchitecture';

import {
  ProjectFeatures,
} from '../../components/project-features/ProjectFeatures';

import {
  ProjectChallenges,
} from '../../components/project-challenges/ProjectChallenges';

import {
  ProjectGallery,
} from '../../components/project-gallery/ProjectGallery';

import {
  ProjectLearnings,
} from '../../components/project-learnings/ProjectLearnings';

import {
  ProjectNext,
} from '../../components/project-next/ProjectNext';

import {
  ProjectLineSidebar,
} from '../../components/project-line-sidebar/ProjectLineSidebar';

/*
 * MISMO FOOTER QUE HOME.
 *
 * Si tu Footer está en otra ruta,
 * únicamente cambia este import.
 */
import {
  Footer,
} from '../../../components/layout/Footer';

import {
  useRouteScroll,
} from '../../../shared/hooks/useRouteScroll';

import './ProjectDetailPage.scss';

export function ProjectDetailPage() {
  const { slug } =
    useParams<{
      slug: string;
    }>();

  useRouteScroll();

  const project =
    slug
      ? getCaseStudyBySlug(
          slug,
        )
      : undefined;

  if (!project) {
    return (
      <Navigate
        to="/"
        replace
      />
    );
  }

  return (
    <main
      key={project.slug}
      className={`project-detail project-detail--${project.visual}`}
    >
      <ProjectLineSidebar />

      <ProjectHero
        key={`hero-${project.slug}`}
        project={project}
      />

      <ScrollExpand
        key={`scroll-${project.slug}`}
        image={
          project.cover
        }
        alt={`${project.title} project cover`}
        title={
          project.title
        }
      />

      <ProjectOverview
        key={`overview-${project.slug}`}
        project={project}
      />

      <ProjectArchitecture
        key={`architecture-${project.slug}`}
        project={project}
      />

      <ProjectFeatures
        key={`features-${project.slug}`}
        project={project}
      />

      <ProjectChallenges
        key={`challenges-${project.slug}`}
        project={project}
      />

      <ProjectGallery
        key={`gallery-${project.slug}`}
        project={project}
      />

      <ProjectLearnings
        key={`learnings-${project.slug}`}
        project={project}
      />

      <ProjectNext
        key={`next-${project.slug}`}
        project={project}
      />

      <Footer />
    </main>
  );
}
