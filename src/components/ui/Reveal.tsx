import {
  motion,
  useReducedMotion,
} from 'motion/react';

import type {
  ReactNode,
} from 'react';

interface RevealProps {
  children: ReactNode;

  delay?: number;

  y?: number;

  className?: string;

  once?: boolean;
}

export function Reveal({
  children,
  delay = 0,
  y = 28,
  className = '',
  once = true,
}: RevealProps) {
  const shouldReduceMotion =
    useReducedMotion();

  if (shouldReduceMotion) {
    return (
      <div className={className}>
        {children}
      </div>
    );
  }

  return (
    <motion.div
      className={className}
      initial={{
        opacity: 0,
        y,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once,
        amount: 0.15,
      }}
      transition={{
        duration: 0.7,
        delay,
        ease: [
          0.16,
          1,
          0.3,
          1,
        ],
      }}
    >
      {children}
    </motion.div>
  );
}
