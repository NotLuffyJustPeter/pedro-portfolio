import {
  useEffect,
  useRef,
} from 'react';

import './Noise.css';

type NoiseProps = {
  patternSize?: number;
  patternScaleX?: number;
  patternScaleY?: number;
  patternRefreshInterval?: number;
  patternAlpha?: number;
};

export default function Noise({
  patternSize = 250,
  patternScaleX = 1,
  patternScaleY = 1,
  patternRefreshInterval = 2,
  patternAlpha = 15,
}: NoiseProps) {
  const grainRef =
    useRef<HTMLCanvasElement | null>(
      null,
    );

  useEffect(() => {
    const canvas =
      grainRef.current;

    if (!canvas) {
      return;
    }

    const ctx =
      canvas.getContext('2d', {
        alpha: true,
      });

    if (!ctx) {
      return;
    }

    const patternCanvas =
      document.createElement(
        'canvas',
      );

    const patternCtx =
      patternCanvas.getContext(
        '2d',
        {
          alpha: true,
        },
      );

    if (!patternCtx) {
      return;
    }

    const safePatternSize =
      Math.max(
        32,
        Math.floor(
          patternSize,
        ),
      );

    patternCanvas.width =
      safePatternSize;

    patternCanvas.height =
      safePatternSize;

    let frame = 0;

    let animationId:
      | number
      | null = null;

    let isRunning = true;

    const resize = () => {
      const rect =
        canvas.getBoundingClientRect();

      const dpr =
        Math.min(
          window.devicePixelRatio ||
            1,
          2,
        );

      canvas.width =
        Math.max(
          1,
          Math.round(
            rect.width *
              dpr,
          ),
        );

      canvas.height =
        Math.max(
          1,
          Math.round(
            rect.height *
              dpr,
          ),
        );

      ctx.setTransform(
        dpr,
        0,
        0,
        dpr,
        0,
        0,
      );

      ctx.imageSmoothingEnabled =
        false;
    };

    const createNoisePattern =
      () => {
        const imageData =
          patternCtx.createImageData(
            safePatternSize,
            safePatternSize,
          );

        const {
          data,
        } = imageData;

        const alpha =
          Math.max(
            0,
            Math.min(
              255,
              patternAlpha,
            ),
          );

        for (
          let i = 0;
          i < data.length;
          i += 4
        ) {
          const value =
            Math.floor(
              Math.random() *
                256,
            );

          data[i] =
            value;

          data[i + 1] =
            value;

          data[i + 2] =
            value;

          data[i + 3] =
            alpha;
        }

        patternCtx.putImageData(
          imageData,
          0,
          0,
        );
      };

    const drawNoise = () => {
      const width =
        canvas.clientWidth;

      const height =
        canvas.clientHeight;

      if (
        width <= 0 ||
        height <= 0
      ) {
        return;
      }

      ctx.clearRect(
        0,
        0,
        width,
        height,
      );

      const tileWidth =
        safePatternSize *
        Math.max(
          0.1,
          patternScaleX,
        );

      const tileHeight =
        safePatternSize *
        Math.max(
          0.1,
          patternScaleY,
        );

      for (
        let y = 0;
        y < height;
        y += tileHeight
      ) {
        for (
          let x = 0;
          x < width;
          x += tileWidth
        ) {
          ctx.drawImage(
            patternCanvas,
            x,
            y,
            tileWidth,
            tileHeight,
          );
        }
      }
    };

    const loop = () => {
      if (!isRunning) {
        return;
      }

      if (
        frame %
          Math.max(
            1,
            patternRefreshInterval,
          ) ===
        0
      ) {
        createNoisePattern();
        drawNoise();
      }

      frame += 1;

      animationId =
        window.requestAnimationFrame(
          loop,
        );
    };

    const handleVisibility =
      () => {
        if (
          document.hidden
        ) {
          isRunning = false;

          if (
            animationId !==
            null
          ) {
            window.cancelAnimationFrame(
              animationId,
            );

            animationId =
              null;
          }

          return;
        }

        if (
          !isRunning
        ) {
          isRunning = true;

          animationId =
            window.requestAnimationFrame(
              loop,
            );
        }
      };

    resize();

    createNoisePattern();
    drawNoise();

    window.addEventListener(
      'resize',
      resize,
    );

    document.addEventListener(
      'visibilitychange',
      handleVisibility,
    );

    animationId =
      window.requestAnimationFrame(
        loop,
      );

    return () => {
      isRunning = false;

      window.removeEventListener(
        'resize',
        resize,
      );

      document.removeEventListener(
        'visibilitychange',
        handleVisibility,
      );

      if (
        animationId !== null
      ) {
        window.cancelAnimationFrame(
          animationId,
        );
      }
    };
  }, [
    patternSize,
    patternScaleX,
    patternScaleY,
    patternRefreshInterval,
    patternAlpha,
  ]);

  return (
    <canvas
      ref={grainRef}
      className="noise-overlay"
      aria-hidden="true"
    />
  );
}
