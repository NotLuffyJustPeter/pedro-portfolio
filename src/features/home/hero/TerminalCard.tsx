import {
  motion,
  useReducedMotion,
} from 'motion/react';

import {
  BorderGlow,
} from '../../../components/ui';

import './TerminalCard.scss';

interface TerminalLine {
  command?: string;
  output?: string;
  accent?: boolean;
}

const TERMINAL_LINES: TerminalLine[] = [
  {
    command:
      'whoami',
  },

  {
    output:
      'Pedro Delgado',
    accent:
      true,
  },

  {
    output:
      'Full-Stack Developer',
  },

  {
    command:
      'focus --current',
  },

  {
    output:
      'Web · Mobile · Backend · AI',
  },

  {
    command:
      'featured --project',
  },

  {
    output:
      'Meridian — AI Travel Planner',
    accent:
      true,
  },

  {
    command:
      'status',
  },

  {
    output:
      'Available for new opportunities',
  },
];

export function TerminalCard() {
  const reduceMotion =
    useReducedMotion();

return (
  <motion.div
    className="terminal-card-motion"
    initial={
      reduceMotion
        ? false
        : {
            opacity: 0,
            y: 32,
            scale: 0.97,
          }
    }
    animate={{
      opacity: 1,
      y: 0,
      scale: 1,
    }}
    transition={{
      duration: 0.8,
      delay: 0.35,
      ease: [
        0.16,
        1,
        0.3,
        1,
      ],
    }}
  >
    <BorderGlow
      className="terminal-glow"
      edgeSensitivity={28}
      glowColor="262 90 68"
      backgroundColor="rgba(10, 11, 14, 0.82)"
      borderRadius={16}
      glowRadius={38}
      glowIntensity={0.9}
      coneSpread={24}
      animated={false}
      fillOpacity={0.22}
      colors={[
        '#7c5cfc',
        '#c084fc',
        '#38bdf8',
      ]}
    >
      <div className="terminal-card">
        <div className="terminal-card__toolbar">
          <div
            className="terminal-card__controls"
            aria-hidden="true"
          >
            <span className="terminal-control terminal-control--red" />

            <span className="terminal-control terminal-control--yellow" />

            <span className="terminal-control terminal-control--green" />
          </div>

          <p className="terminal-card__title">
            pedro@portfolio: ~
          </p>

          <span className="terminal-card__tab">
            +
          </span>
        </div>

        <div className="terminal-card__body">
          {TERMINAL_LINES.map(
            (
              line,
              index,
            ) => (
              <motion.div
                key={`${line.command ?? line.output}-${index}`}
                className="terminal-line"
                initial={
                  reduceMotion
                    ? false
                    : {
                        opacity: 0,
                        x: -8,
                      }
                }
                animate={{
                  opacity: 1,
                  x: 0,
                }}
                transition={{
                  duration:
                    0.35,

                  delay:
                    0.65 +
                    index *
                      0.09,
                }}
              >
                {line.command && (
                  <>
                    <span className="terminal-line__user">
                      pedro@portfolio
                    </span>

                    <span className="terminal-line__location">
                      ~
                    </span>

                    <span className="terminal-line__prompt">
                      $
                    </span>

                    <span className="terminal-line__command">
                      {
                        line.command
                      }
                    </span>
                  </>
                )}

                {line.output && (
                  <span
                    className={[
                      'terminal-line__output',

                      line.accent
                        ? 'terminal-line__output--accent'
                        : '',
                    ]
                      .filter(
                        Boolean,
                      )
                      .join(
                        ' ',
                      )}
                  >
                    {
                      line.output
                    }
                  </span>
                )}
              </motion.div>
            ),
          )}

          <div className="terminal-line terminal-line--active">
            <span className="terminal-line__user">
              pedro@portfolio
            </span>

            <span className="terminal-line__location">
              ~
            </span>

            <span className="terminal-line__prompt">
              $
            </span>

            <span className="terminal-cursor" />
          </div>
        </div>
      </div>
    </BorderGlow>
  </motion.div>
);
}
