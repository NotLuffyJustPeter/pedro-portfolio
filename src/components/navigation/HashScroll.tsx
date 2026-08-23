import {
  useEffect,
} from 'react';

import {
  useLocation,
} from 'react-router-dom';

export function HashScroll() {
  const {
    hash,
    pathname,
  } = useLocation();

  useEffect(
    () => {
      if (!hash) {
        return;
      }

      const id =
        decodeURIComponent(
          hash.slice(1),
        );

      const scroll =
        () => {
          const element =
            document.getElementById(
              id,
            );

          element?.scrollIntoView({
            behavior:
              'smooth',

            block:
              'start',
          });
        };

      const firstFrame =
        requestAnimationFrame(
          () => {
            requestAnimationFrame(
              scroll,
            );
          },
        );

      return () =>
        cancelAnimationFrame(
          firstFrame,
        );
    },

    [
      hash,
      pathname,
    ],
  );

  return null;
}
