import {
  animate,
  motion,
  useMotionValue,
  useReducedMotion,
} from 'motion/react';

import {
  useRef,
  useState,
  useEffect,
  type CSSProperties,
  type KeyboardEvent,
} from 'react';

import {
  GoArrowLeft,
  GoArrowRight,
} from 'react-icons/go';

import type {
  CaseStudy,
  CaseStudyImage,
  CaseStudyVisual,
} from '../../projects/types/caseStudy';

import './ProjectGallery.scss';

type ProjectGalleryProps = {
  project: CaseStudy;
};

type GalleryLayout = {
  maxWidth: number;
  defaultRatio: number;
};

const GALLERY_LAYOUTS: Record<
  CaseStudyVisual,
  GalleryLayout
> = {
  meridian: {
    maxWidth: 1180,
    defaultRatio: 16 / 9,
  },

  arcana: {
    maxWidth: 1080,
    defaultRatio: 16 / 10,
  },

  roma: {
    maxWidth: 520,
    defaultRatio: 0.82,
  },

  kave: {
    maxWidth: 1080,
    defaultRatio: 16 / 10,
  },

  nora: {
    maxWidth: 1080,
    defaultRatio: 16 / 9,
  },
};

function clampRatio(
  ratio: number,
) {
  /*
   * Avoid extremely tall
   * mobile screenshots or
   * extremely wide panoramas
   * making the layout enormous.
   */
  return Math.min(
    1.9,
    Math.max(
      0.82,
      ratio,
    ),
  );
}

/* ========================================
   IMAGE
======================================== */

type GalleryImageProps = {
  image: CaseStudyImage;

  className?: string;

  onRatio?: (
    ratio: number,
  ) => void;
};

function GalleryImage({
  image,
  className,
  onRatio,
}: GalleryImageProps) {
  const [failed, setFailed] =
    useState(false);

  if (failed) {
    return (
      <div
        className={`project-gallery__image-fallback ${
          className ?? ''
        }`}
      >
        <span>
          PREVIEW UNAVAILABLE
        </span>

        <strong>
          {image.alt}
        </strong>
      </div>
    );
  }

  return (
    <img
      src={image.src}
      alt={image.alt}
      className={className}
      loading="lazy"
      decoding="async"
      draggable={false}
      onLoad={(event) => {
        const imageElement =
          event.currentTarget;

        if (
          imageElement
            .naturalWidth >
            0 &&
          imageElement
            .naturalHeight >
            0
        ) {
          onRatio?.(
            imageElement
              .naturalWidth /
              imageElement
                .naturalHeight,
          );
        }
      }}
      onError={() =>
        setFailed(true)
      }
    />
  );
}

/* ========================================
   THUMBNAILS
======================================== */

type GalleryThumbnailsProps = {
  items: CaseStudyImage[];

  index: number;

  setIndex: (
    index: number,
  ) => void;

  reduceMotion: boolean;
};

function GalleryThumbnails({
  items,
  index,
  setIndex,
  reduceMotion,
}: GalleryThumbnailsProps) {
  const containerRef =
    useRef<HTMLDivElement>(
      null,
    );

  useEffect(() => {
    const container =
      containerRef.current;

    if (!container) {
      return;
    }

    const frame =
      requestAnimationFrame(
        () => {
          const target =
            container.querySelector<
              HTMLButtonElement
            >(
              `[data-thumbnail="${index}"]`,
            );

          if (!target) {
            return;
          }

          const left =
            target.offsetLeft +
            target.offsetWidth /
              2 -
            container.clientWidth /
              2;

          container.scrollTo({
            left,

            behavior:
              reduceMotion
                ? 'auto'
                : 'smooth',
          });
        },
      );

    return () => {
      cancelAnimationFrame(
        frame,
      );
    };
  }, [
    index,
    reduceMotion,
  ]);

  return (
    <div
      ref={containerRef}
      className="project-gallery__thumbnails"
    >
      <div className="project-gallery__thumbnails-track">
        {items.map(
          (
            item,
            itemIndex,
          ) => {
            const active =
              index ===
              itemIndex;

            return (
              <motion.button
                key={`${item.src}-${itemIndex}`}
                type="button"
                data-thumbnail={
                  itemIndex
                }
                className={`project-gallery__thumbnail${
                  active
                    ? ' is-active'
                    : ''
                }`}
                aria-label={`View image ${
                  itemIndex + 1
                }: ${item.alt}`}
                aria-current={
                  active
                    ? 'true'
                    : undefined
                }
                onClick={() =>
                  setIndex(
                    itemIndex,
                  )
                }
                initial={false}
                animate={{
                  width:
                    active
                      ? 118
                      : 40,
                }}
                transition={
                  reduceMotion
                    ? {
                        duration: 0,
                      }
                    : {
                        duration:
                          0.32,

                        ease: [
                          0.16,
                          1,
                          0.3,
                          1,
                        ],
                      }
                }
              >
                <GalleryImage
                  image={item}
                />

                <span
                  className="project-gallery__thumbnail-shade"
                  aria-hidden="true"
                />

                <span className="project-gallery__thumbnail-index">
                  {String(
                    itemIndex +
                      1,
                  ).padStart(
                    2,
                    '0',
                  )}
                </span>
              </motion.button>
            );
          },
        )}
      </div>
    </div>
  );
}

/* ========================================
   GALLERY
======================================== */

export function ProjectGallery({
  project,
}: ProjectGalleryProps) {
  const reducedMotion =
    useReducedMotion() ===
    true;

  const [index, setIndex] =
    useState(0);

  const [
    isDragging,
    setIsDragging,
  ] = useState(false);

  const [
    imageRatios,
    setImageRatios,
  ] = useState<
    Record<number, number>
  >({});

  const containerRef =
    useRef<HTMLDivElement>(
      null,
    );

  const x =
    useMotionValue(0);

  const items =
    project.gallery;

  const layout =
    GALLERY_LAYOUTS[
      project.visual
    ];

  const safeIndex =
    items.length
      ? Math.min(
          index,
          items.length - 1,
        )
      : 0;

  const rawRatio =
    imageRatios[
      safeIndex
    ] ??
    layout.defaultRatio;

  const activeRatio =
    clampRatio(rawRatio);

  const activeItem =
    items[safeIndex];

  const viewportStyle: CSSProperties =
    {
      maxWidth:
        layout.maxWidth,

      aspectRatio:
        activeRatio,
    };

  const controlsStyle: CSSProperties =
    {
      maxWidth:
        layout.maxWidth,
    };

  useEffect(() => {
    if (
      isDragging ||
      !containerRef.current ||
      items.length === 0
    ) {
      return;
    }

    const width =
      containerRef.current
        .offsetWidth || 1;

    const targetX =
      -safeIndex *
      width;

    if (reducedMotion) {
      x.set(targetX);
      return;
    }

    const controls =
      animate(
        x,
        targetX,
        {
          type: 'spring',
          stiffness: 260,
          damping: 30,
          mass: 0.75,
        },
      );

    return () => {
      controls.stop();
    };
  }, [
    safeIndex,
    x,
    isDragging,
    items.length,
    reducedMotion,
  ]);

  useEffect(() => {
    const container =
      containerRef.current;

    if (
      !container ||
      typeof ResizeObserver ===
        'undefined'
    ) {
      return;
    }

    const observer =
      new ResizeObserver(
        () => {
          x.set(
            -safeIndex *
              (
                container.offsetWidth ||
                1
              ),
          );
        },
      );

    observer.observe(
      container,
    );

    return () => {
      observer.disconnect();
    };
  }, [
    safeIndex,
    x,
  ]);

  const goPrevious = () => {
    setIndex((current) =>
      Math.max(
        0,
        current - 1,
      ),
    );
  };

  const goNext = () => {
    setIndex((current) =>
      Math.min(
        items.length - 1,
        current + 1,
      ),
    );
  };

  const handleKeyboard = (
    event: KeyboardEvent<HTMLDivElement>,
  ) => {
    if (
      event.key ===
      'ArrowLeft'
    ) {
      event.preventDefault();
      goPrevious();
    }

    if (
      event.key ===
      'ArrowRight'
    ) {
      event.preventDefault();
      goNext();
    }
  };

  return (
    <section
      className={`project-gallery project-gallery--${project.visual}`}
      id="gallery"
    >
      <div className="project-gallery__inner">
        <motion.header
          className="project-gallery__header"
          initial={
            reducedMotion
              ? false
              : {
                  opacity: 0,
                  y: 20,
                }
          }
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.2,
          }}
          transition={{
            duration: 0.65,

            ease: [
              0.22,
              1,
              0.36,
              1,
            ],
          }}
        >
          <div className="project-gallery__eyebrow">
            <span>
              05 / GALLERY
            </span>

            <span>
              PRODUCT VIEWS
            </span>
          </div>

          <div className="project-gallery__heading">
            <h2>
              The product,
              <br />
              in context.
            </h2>

            <p>
              A closer look at
              the interfaces,
              workflows and
              systems that make
              up {project.title}.
            </p>
          </div>
        </motion.header>

        {items.length ===
        0 ? (
          <div className="project-gallery__empty">
            <span>
              GALLERY / COMING
              SOON
            </span>

            <strong>
              {project.title}
            </strong>
          </div>
        ) : (
          <div className="project-gallery__experience">
            <div className="project-gallery__stage">
              <div
                ref={
                  containerRef
                }
                className="project-gallery__viewport"
                style={
                  viewportStyle
                }
                role="region"
                aria-label={`${project.title} image gallery`}
                tabIndex={0}
                onKeyDown={
                  handleKeyboard
                }
              >
                <motion.div
                  className="project-gallery__slides"
                  drag={
                    reducedMotion
                      ? false
                      : 'x'
                  }
                  dragElastic={
                    0.18
                  }
                  dragMomentum={
                    false
                  }
                  style={{ x }}
                  onDragStart={() =>
                    setIsDragging(
                      true,
                    )
                  }
                  onDragEnd={(
                    _event,
                    info,
                  ) => {
                    setIsDragging(
                      false,
                    );

                    const width =
                      containerRef
                        .current
                        ?.offsetWidth ||
                      1;

                    const offset =
                      info.offset.x;

                    const velocity =
                      info.velocity.x;

                    let next =
                      safeIndex;

                    if (
                      Math.abs(
                        velocity,
                      ) > 500
                    ) {
                      next =
                        velocity >
                        0
                          ? safeIndex -
                            1
                          : safeIndex +
                            1;
                    } else if (
                      Math.abs(
                        offset,
                      ) >
                      width *
                        0.25
                    ) {
                      next =
                        offset >
                        0
                          ? safeIndex -
                            1
                          : safeIndex +
                            1;
                    }

                    next =
                      Math.max(
                        0,
                        Math.min(
                          items.length -
                            1,
                          next,
                        ),
                      );

                    setIndex(
                      next,
                    );
                  }}
                >
                  {items.map(
                    (
                      item,
                      itemIndex,
                    ) => (
                      <div
                        key={`${item.src}-${itemIndex}`}
                        className="project-gallery__slide"
                      >
                        <div className="project-gallery__media-frame">
                          <GalleryImage
                            image={
                              item
                            }
                            className="project-gallery__main-image"
                            onRatio={(
                              ratio,
                            ) => {
                              setImageRatios(
                                (
                                  current,
                                ) => {
                                  if (
                                    current[
                                      itemIndex
                                    ] ===
                                    ratio
                                  ) {
                                    return current;
                                  }

                                  return {
                                    ...current,

                                    [itemIndex]:
                                      ratio,
                                  };
                                },
                              );
                            }}
                          />
                        </div>
                      </div>
                    ),
                  )}
                </motion.div>

                <button
                  type="button"
                  className="project-gallery__arrow project-gallery__arrow--previous"
                  aria-label="Previous image"
                  disabled={
                    safeIndex ===
                    0
                  }
                  onClick={
                    goPrevious
                  }
                >
                  <GoArrowLeft />
                </button>

                <button
                  type="button"
                  className="project-gallery__arrow project-gallery__arrow--next"
                  aria-label="Next image"
                  disabled={
                    safeIndex ===
                    items.length -
                      1
                  }
                  onClick={
                    goNext
                  }
                >
                  <GoArrowRight />
                </button>

                <div className="project-gallery__counter">
                  <span>
                    {String(
                      safeIndex +
                        1,
                    ).padStart(
                      2,
                      '0',
                    )}
                  </span>

                  <i />

                  <span>
                    {String(
                      items.length,
                    ).padStart(
                      2,
                      '0',
                    )}
                  </span>
                </div>
              </div>
            </div>

            <div
              className="project-gallery__controls"
              style={
                controlsStyle
              }
            >
              {activeItem && (
                <div className="project-gallery__caption">
                  <div className="project-gallery__caption-index">
                    <span>
                      {String(
                        safeIndex +
                          1,
                      ).padStart(
                        2,
                        '0',
                      )}
                    </span>

                    <span>
                      VIEW
                    </span>
                  </div>

                  <p>
                    {activeItem.caption ??
                      activeItem.alt}
                  </p>

                  <span className="project-gallery__drag-hint">
                    DRAG / SWIPE
                  </span>
                </div>
              )}

              <GalleryThumbnails
                items={items}
                index={
                  safeIndex
                }
                setIndex={
                  setIndex
                }
                reduceMotion={
                  reducedMotion
                }
              />
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
