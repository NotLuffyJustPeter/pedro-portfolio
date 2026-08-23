import type {
  ReactNode,
} from 'react';

import {
  DotGrid,
} from './DotGrid';

import './HomeBackground.scss';

interface HomeBackgroundProps {
  children: ReactNode;
}

export function HomeBackground({
  children,
}: HomeBackgroundProps) {
  return (
    <div className="home-background">
      <DotGrid
        className="home-background__grid"
        dotSize={3}
        gap={23}
        baseColor="#26232f"
        activeColor="#7c5cfc"
        proximity={135}
        speedTrigger={130}
        shockRadius={210}
        shockStrength={0.38}
        maxSpeed={3800}
        returnDuration={1.1}
      />

      <div className="home-background__ambient" />

      <div className="home-background__content">
        {children}
      </div>
    </div>
  );
}
