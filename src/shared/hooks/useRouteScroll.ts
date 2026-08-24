import { useLayoutEffect } from 'react';
import { useLocation } from 'react-router-dom';

export function useRouteScroll() {
  const location = useLocation();

  useLayoutEffect(() => {
    let firstFrame = 0;
    let secondFrame = 0;

    const scroll = () => {
      const hash =
        location.hash.replace(
          '#',
          '',
        );

      /*
       * Si la ruta tiene hash,
       * buscamos esa sección.
       *
       * Usamos dos RAF para esperar
       * a que React haya montado
       * completamente la nueva página.
       */
      if (hash) {
        firstFrame =
          requestAnimationFrame(
            () => {
              secondFrame =
                requestAnimationFrame(
                  () => {
                    const element =
                      document.getElementById(
                        decodeURIComponent(
                          hash,
                        ),
                      );

                    if (element) {
                      element.scrollIntoView(
                        {
                          behavior:
                            'auto',
                          block:
                            'start',
                        },
                      );

                      return;
                    }

                    /*
                     * Si por alguna razón
                     * el elemento no existe,
                     * no dejamos la página
                     * en el scroll anterior.
                     */
                    window.scrollTo({
                      top: 0,
                      left: 0,
                      behavior:
                        'auto',
                    });
                  },
                );
            },
          );

        return;
      }

      /*
       * Ruta sin hash:
       * siempre comienza arriba.
       */
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'auto',
      });
    };

    scroll();

    return () => {
      if (firstFrame) {
        cancelAnimationFrame(
          firstFrame,
        );
      }

      if (secondFrame) {
        cancelAnimationFrame(
          secondFrame,
        );
      }
    };
  }, [
    location.pathname,
    location.hash,
    location.key,
  ]);
}
