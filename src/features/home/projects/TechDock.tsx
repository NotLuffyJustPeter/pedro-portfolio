import {
  useId,
} from 'react';

import type {
  CSSProperties,
} from 'react';

import type {
  IconType,
} from 'react-icons';

import {
  SiAngular,
  SiDart,
  SiExpress,
  SiFirebase,
  SiFlutter,
  SiGooglegemini,
  SiLua,
  SiMysql,
  SiNestjs,
  SiNextdotjs,
  SiNodedotjs,
  SiPostgresql,
  SiReact,
  SiSocketdotio,
  SiSupabase,
  SiTypescript,
} from 'react-icons/si';

import {
  FaGamepad,
} from 'react-icons/fa';

import {
  FiCode,
  FiDatabase,
  FiUsers,
} from 'react-icons/fi';

import './TechDock.scss';

interface TechDockItem {
  name: string;

  icon: IconType;

  /**
   * RGB triplet so SCSS can use:
   * rgb(var(--tech-color) / opacity)
   */
  color: string;
}

interface TechDockProps {
  projectSlug?: string;

  compact?: boolean;
}

type TechStyle =
  CSSProperties &
  Record<
    '--tech-color',
    string
  >;

const STACKS: Record<
  string,
  TechDockItem[]
> = {
  meridian: [
    {
      name: 'Next.js',
      icon: SiNextdotjs,
      color: '255 255 255',
    },

    {
      name: 'React',
      icon: SiReact,
      color: '97 218 251',
    },

    {
      name: 'NestJS',
      icon: SiNestjs,
      color: '224 35 78',
    },

    {
      name: 'PostgreSQL',
      icon: SiPostgresql,
      color: '65 115 148',
    },

    {
      name: 'Gemini',
      icon: SiGooglegemini,
      color: '139 125 255',
    },

    {
      name: 'Socket.IO',
      icon: SiSocketdotio,
      color: '255 255 255',
    },
  ],

  arcana: [
    {
      name: 'Angular',
      icon: SiAngular,
      color: '221 0 49',
    },

    {
      name: 'TypeScript',
      icon: SiTypescript,
      color: '49 120 198',
    },

    {
      name: 'Node.js',
      icon: SiNodedotjs,
      color: '95 160 78',
    },

    {
      name: 'Supabase',
      icon: SiSupabase,
      color: '62 207 142',
    },

    {
      name: 'PostgreSQL',
      icon: SiPostgresql,
      color: '65 115 148',
    },

    {
      name: 'Gemini',
      icon: SiGooglegemini,
      color: '139 125 255',
    },
  ],

  'roma-app': [
    {
      name: 'Flutter',
      icon: SiFlutter,
      color: '84 197 248',
    },

    {
      name: 'Dart',
      icon: SiDart,
      color: '1 169 219',
    },

    {
      name: 'Node.js',
      icon: SiNodedotjs,
      color: '95 160 78',
    },

    {
      name: 'Express',
      icon: SiExpress,
      color: '255 255 255',
    },

    {
      name: 'MySQL',
      icon: SiMysql,
      color: '68 121 161',
    },
  ],

  'kave-sys': [
    {
      name: 'Angular',
      icon: SiAngular,
      color: '221 0 49',
    },

    {
      name: 'TypeScript',
      icon: SiTypescript,
      color: '49 120 198',
    },

    {
      name: 'Node.js',
      icon: SiNodedotjs,
      color: '95 160 78',
    },

    {
      name: 'MySQL',
      icon: SiMysql,
      color: '68 121 161',
    },

    {
      name: 'Firebase',
      icon: SiFirebase,
      color: '255 202 40',
    },
  ],

  'nora-hayes': [
    {
      name: 'Lua',
      icon: SiLua,
      color: '112 112 255',
    },

    {
      name: 'Project Zomboid',
      icon: FaGamepad,
      color: '163 230 53',
    },

    {
      name: 'Persistence',
      icon: FiDatabase,
      color: '148 163 184',
    },

    {
      name: 'Multiplayer',
      icon: FiUsers,
      color: '56 189 248',
    },

    {
      name: 'Game Modding',
      icon: FiCode,
      color: '244 114 182',
    },
  ],
};

export function TechDock({
  projectSlug = 'meridian',

  compact = false,
}: TechDockProps) {
  const rawId =
    useId();

  const clipId =
    `tech-squircle-${rawId.replace(
      /:/g,
      '',
    )}`;

  const technologies =
    STACKS[
      projectSlug
    ] ??
    STACKS.meridian;

  return (
    <div
      className={[
        'tech-dock',

        compact
          ? 'tech-dock--compact'
          : '',
      ]
        .filter(Boolean)
        .join(' ')}
    >
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
        <div className="tech-dock__track">
          {technologies.map(
            ({
              name,
              icon: Icon,
              color,
            }) => {
              const style: TechStyle = {
                '--tech-color':
                  color,
              };

              return (
                <div
                  key={name}
                  className="tech-dock__item"
                  style={style}
                >
                  <div
                    className="tech-dock__icon"
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
              );
            },
          )}
        </div>
      </div>
    </div>
  );
}
