import type {
  CaseStudy,
} from '../types/caseStudy';

import {
  CASE_STUDIES as LEGACY_CASE_STUDIES,
} from './legacyCaseStudies';

import {
  MERIDIAN_CASE_STUDY,
} from './meridianCaseStudy';

const normalizeLegacyCaseStudy = (
  study: CaseStudy,
): CaseStudy => {
  switch (study.slug) {
    case 'arcana':
      return {
        ...study,

        eyebrow:
          'AI PROJECT · 02',

        nextProject: {
          slug:
            'roma-app',

          name:
            'Roma APP',
        },
      };

    case 'roma-app':
      return {
        ...study,

        eyebrow:
          'CLIENT PROJECT · 03',

        nextProject: {
          slug:
            'kave-sys',

          name:
            'KAVE Sys',
        },
      };

    case 'kave-sys':
      return {
        ...study,

        eyebrow:
          'BUSINESS PROJECT · 04',

        nextProject: {
          slug:
            'nora-hayes',

          name:
            'Emily Limon Companion Patch',
        },
      };

    case 'nora-hayes':
      return {
        ...study,

        eyebrow:
          'SYSTEMS PROJECT · 05',

        title:
          'Emily Limon Companion Patch',

        gallery:
          study.gallery.map(
            (image) => ({
              ...image,

              alt:
                image.alt.replace(
                  /Nora Hayes/gi,
                  'Emily Limon',
                ),

              caption:
                image.caption?.replace(
                  /Nora Hayes/gi,
                  'Emily Limon',
                ),
            }),
          ),

        nextProject: {
          slug:
            'meridian',

          name:
            'Meridian',
        },
      };

    default:
      return study;
  }
};

const NORMALIZED_LEGACY_CASE_STUDIES =
  LEGACY_CASE_STUDIES.map(
    normalizeLegacyCaseStudy,
  );

export const CASE_STUDIES: CaseStudy[] = [
  MERIDIAN_CASE_STUDY,

  ...NORMALIZED_LEGACY_CASE_STUDIES,
];

export const findCaseStudyBySlug = (
  slug?: string,
) =>
  CASE_STUDIES.find(
    (study) =>
      study.slug === slug,
  );
