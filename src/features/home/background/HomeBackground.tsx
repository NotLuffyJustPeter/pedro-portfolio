import type {
  ReactNode,
} from 'react';

import './HomeBackground.scss';

interface HomeBackgroundProps {
  children: ReactNode;
}

export function HomeBackground({
  children,
}: HomeBackgroundProps) {
  return (
    <div className="home-background">
      <div
        className="home-background__ambient"
        aria-hidden="true"
      />

      <div className="home-background__content">
        {children}
      </div>
    </div>
  );
}
