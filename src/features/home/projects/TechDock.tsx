import {
  useId,
} from 'react';

import type {
  IconType,
} from 'react-icons';

import {
  SiGooglegemini,
  SiNestjs,
  SiNextdotjs,
  SiPostgresql,
  SiReact,
  SiSocketdotio,
} from 'react-icons/si';

import './TechDock.scss';

interface TechItem {
  name: string;
  icon: IconType;
  className: string;
}

const TECHNOLOGIES: TechItem[] = [
  {
    name:
      'Next.js',

    icon:
      SiNextdotjs,

    className:
      'tech-dock__icon--next',
  },

  {
    name:
      'React',

    icon:
      SiReact,

    className:
      'tech-dock__icon--react',
  },

  {
    name:
      'NestJS',

    icon:
      SiNestjs,

    className:
      'tech-dock__icon--nest',
  },

  {
    name:
      'PostgreSQL',

    icon:
      SiPostgresql,

    className:
      'tech-dock__icon--postgres',
  },

  {
    name:
      'Gemini',

    icon:
      SiGooglegemini,

    className:
      'tech-dock__icon--gemini',
  },

  {
    name:
      'Socket.IO',

    icon:
      SiSocketdotio,

    className:
      'tech-dock__icon--socket',
  },
];

export function TechDock() {
  const rawId =
    useId();

  const clipId =
    `tech-squircle-${rawId.replace(
      /:/g,
      '',
    )}`;

  return (
    <div className="tech-dock">
      <svg
        width="0"
        height="0"
        className="tech-dock__defs"
        aria-hidden="true"
      >
        <defs>
          <clipPath
            id={clipId}
            clipPathUnits="objectBoundingBox"
          >
            <path
              d="
                M 0,0.5
                C 0,0 0,0 0.5,0
                S 1,0 1,0.5
                1,1 0.5,1
                0,1 0,0.5
              "
            />
          </clipPath>
        </defs>
      </svg>

      <div className="tech-dock__surface">
        {TECHNOLOGIES.map(
          ({
            name,
            icon:
              Icon,
            className,
          }) => (
            <div
              key={name}
              className="tech-dock__item"
            >
              <div
                className={[
                  'tech-dock__icon',
                  className,
                ].join(
                  ' ',
                )}
                style={{
                  clipPath:
                    `url(#${clipId})`,
                }}
              >
                <Icon
                  aria-hidden="true"
                />
              </div>

              <span className="tech-dock__label">
                {name}
              </span>
            </div>
          ),
        )}
      </div>
    </div>
  );
}
