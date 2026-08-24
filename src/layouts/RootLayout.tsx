import {
  Outlet,
} from 'react-router-dom';

import {
  PortfolioNav,
} from '../components/navigation/PortfolioNav';

import {
  HashScroll,
} from '../components/navigation/HashScroll';

export function RootLayout() {
  return (
    <>
      <HashScroll />

      <PortfolioNav />

      <div className="app-shell">
        <Outlet />
      </div>
    </>
  );
}
