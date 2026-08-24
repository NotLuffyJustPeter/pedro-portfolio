import {
  useLayoutEffect,
  useRef,
  useState,
} from 'react';

import {
  Link,
} from 'react-router-dom';

import {
  gsap,
} from 'gsap';

import {
  GoArrowUpRight,
} from 'react-icons/go';

import './CardNav.scss';

export interface CardNavLink {
  label: string;
  ariaLabel: string;
  href: string;

  external?: boolean;
  download?: boolean;
}

export interface CardNavItem {
  label: string;

  bgColor: string;
  textColor: string;

  links: CardNavLink[];
}

interface CardNavCta {
  label: string;
  href: string;

  external?: boolean;
  download?: boolean;
}

interface CardNavProps {
  logo: string;

  logoAlt?: string;

  items: CardNavItem[];

  className?: string;

  ease?: string;

  baseColor?: string;

  menuColor?: string;

  buttonBgColor?: string;

  buttonTextColor?: string;

  cta?: CardNavCta;
}

export function CardNav({
  logo,

  logoAlt = 'Logo',

  items,

  className = '',

  ease = 'power3.out',

  baseColor = '#0e0f13',

  menuColor = '#f3f4f6',

  buttonBgColor = '#f3f4f6',

  buttonTextColor = '#08090b',

  cta,
}: CardNavProps) {
  const [
    isHamburgerOpen,
    setIsHamburgerOpen,
  ] = useState(false);

  const [
    isExpanded,
    setIsExpanded,
  ] = useState(false);

  const navRef =
    useRef<HTMLElement | null>(
      null,
    );

  const cardsRef =
    useRef<
      Array<HTMLDivElement | null>
    >([]);

  const tlRef =
    useRef<
      gsap.core.Timeline | null
    >(null);

  const getCards = () =>
    cardsRef.current.filter(
      (
        card,
      ): card is HTMLDivElement =>
        card !== null,
    );

  const calculateHeight = () => {
    const navEl =
      navRef.current;

    if (!navEl) {
      return 260;
    }

    const isMobile =
      window.matchMedia(
        '(max-width: 768px)',
      ).matches;

    if (isMobile) {
      const contentEl =
        navEl.querySelector<HTMLElement>(
          '.card-nav-content',
        );

      if (contentEl) {
        const previous = {
          visibility:
            contentEl.style.visibility,

          pointerEvents:
            contentEl.style.pointerEvents,

          position:
            contentEl.style.position,

          height:
            contentEl.style.height,
        };

        contentEl.style.visibility =
          'visible';

        contentEl.style.pointerEvents =
          'auto';

        contentEl.style.position =
          'static';

        contentEl.style.height =
          'auto';

        const topBar = 60;

        const padding = 16;

        const contentHeight =
          contentEl.scrollHeight;

        contentEl.style.visibility =
          previous.visibility;

        contentEl.style.pointerEvents =
          previous.pointerEvents;

        contentEl.style.position =
          previous.position;

        contentEl.style.height =
          previous.height;

        return (
          topBar +
          contentHeight +
          padding
        );
      }
    }

    return 260;
  };

  const createTimeline = () => {
    const navEl =
      navRef.current;

    if (!navEl) {
      return null;
    }

    const cards =
      getCards();

    const reduceMotion =
      window.matchMedia(
        '(prefers-reduced-motion: reduce)',
      ).matches;

    gsap.set(
      navEl,
      {
        height: 60,
        overflow: 'hidden',
      },
    );

    gsap.set(
      cards,
      {
        y: reduceMotion
          ? 0
          : 50,

        opacity:
          reduceMotion
            ? 1
            : 0,
      },
    );

    const tl =
      gsap.timeline({
        paused: true,
      });

    tl.to(
      navEl,
      {
        height:
          calculateHeight,

        duration:
          reduceMotion
            ? 0
            : 0.4,

        ease,
      },
    );

    tl.to(
      cards,
      {
        y: 0,

        opacity: 1,

        duration:
          reduceMotion
            ? 0
            : 0.4,

        ease,

        stagger:
          reduceMotion
            ? 0
            : 0.08,
      },

      reduceMotion
        ? 0
        : '-=0.1',
    );

    return tl;
  };

  useLayoutEffect(
    () => {
      const tl =
        createTimeline();

      tlRef.current =
        tl;

      return () => {
        tl?.kill();

        tlRef.current =
          null;
      };
    },

    // eslint-disable-next-line react-hooks/exhaustive-deps
    [ease, items],
  );

  useLayoutEffect(
    () => {
      const handleResize =
        () => {
          const currentTimeline =
            tlRef.current;

          if (
            !currentTimeline
          ) {
            return;
          }

          currentTimeline.kill();

          const newTimeline =
            createTimeline();

          if (!newTimeline) {
            return;
          }

          if (isExpanded) {
            newTimeline.progress(
              1,
            );
          }

          tlRef.current =
            newTimeline;
        };

      window.addEventListener(
        'resize',
        handleResize,
      );

      return () =>
        window.removeEventListener(
          'resize',
          handleResize,
        );
    },

    // eslint-disable-next-line react-hooks/exhaustive-deps
    [isExpanded],
  );

  const openMenu = () => {
    const tl =
      tlRef.current;

    if (!tl) {
      return;
    }

    setIsHamburgerOpen(
      true,
    );

    setIsExpanded(
      true,
    );

    tl.play(0);
  };

  const closeMenu = () => {
    const tl =
      tlRef.current;

    if (!tl) {
      return;
    }

    setIsHamburgerOpen(
      false,
    );

    tl.eventCallback(
      'onReverseComplete',
      () => {
        setIsExpanded(
          false,
        );
      },
    );

    tl.reverse();
  };

  const toggleMenu = () => {
    if (isExpanded) {
      closeMenu();

      return;
    }

    openMenu();
  };

  const setCardRef =
    (index: number) =>
    (
      element:
        HTMLDivElement | null,
    ) => {
      cardsRef.current[
        index
      ] = element;
    };

  const renderLink = (
    link: CardNavLink,
    index: number,
  ) => {
    const nativeNavigation =
      link.external ||
      link.download ||
      link.href.startsWith(
        'mailto:',
      ) ||
      link.href.startsWith(
        'tel:',
      ) ||
      link.href.startsWith(
        'http',
      );

    const content = (
      <>
        <GoArrowUpRight
          className="nav-card-link-icon"
          aria-hidden="true"
        />

        {link.label}
      </>
    );

    if (
      nativeNavigation
    ) {
      return (
        <a
          key={`${link.label}-${index}`}
          className="nav-card-link"
          href={link.href}
          aria-label={
            link.ariaLabel
          }
          target={
            link.external
              ? '_blank'
              : undefined
          }
          rel={
            link.external
              ? 'noreferrer'
              : undefined
          }
          download={
            link.download ||
            undefined
          }
          onClick={
            closeMenu
          }
        >
          {content}
        </a>
      );
    }

    return (
      <Link
        key={`${link.label}-${index}`}
        className="nav-card-link"
        to={link.href}
        aria-label={
          link.ariaLabel
        }
        onClick={
          closeMenu
        }
      >
        {content}
      </Link>
    );
  };

  const renderCta = () => {
    if (!cta) {
      return null;
    }

    const nativeNavigation =
      cta.external ||
      cta.download ||
      cta.href.startsWith(
        'mailto:',
      ) ||
      cta.href.startsWith(
        'http',
      );

    if (
      nativeNavigation
    ) {
      return (
        <a
          className="card-nav-cta-button"
          href={cta.href}
          target={
            cta.external
              ? '_blank'
              : undefined
          }
          rel={
            cta.external
              ? 'noreferrer'
              : undefined
          }
          download={
            cta.download ||
            undefined
          }
          style={{
            backgroundColor:
              buttonBgColor,

            color:
              buttonTextColor,
          }}
        >
          {cta.label}
        </a>
      );
    }

    return (
      <Link
        className="card-nav-cta-button"
        to={cta.href}
        style={{
          backgroundColor:
            buttonBgColor,

          color:
            buttonTextColor,
        }}
      >
        {cta.label}
      </Link>
    );
  };

  return (
    <div
      className={[
        'card-nav-container',
        className,
      ]
        .filter(Boolean)
        .join(' ')}
    >
      <nav
        ref={navRef}
        className={[
          'card-nav',

          isExpanded
            ? 'open'
            : '',
        ]
          .filter(Boolean)
          .join(' ')}
        style={{
          backgroundColor:
            baseColor,
        }}
      >
        <div className="card-nav-top">
          <button
            type="button"
            className={[
              'hamburger-menu',

              isHamburgerOpen
                ? 'open'
                : '',
            ]
              .filter(Boolean)
              .join(' ')}
            onClick={
              toggleMenu
            }
            aria-label={
              isExpanded
                ? 'Close menu'
                : 'Open menu'
            }
            aria-expanded={
              isExpanded
            }
            style={{
              color:
                menuColor,
            }}
          >
            <span className="hamburger-line" />

            <span className="hamburger-line" />
          </button>

          <Link
            className="logo-container"
            to="/"
            aria-label="Pedro Delgado — Home"
            onClick={
              closeMenu
            }
          >
            <img
              src={logo}
              alt={logoAlt}
              className="logo"
            />
          </Link>

          {renderCta()}
        </div>

        <div
          className="card-nav-content"
          aria-hidden={
            !isExpanded
          }
        >
          {items
            .slice(0, 3)
            .map(
              (
                item,
                index,
              ) => (
                <div
                  key={`${item.label}-${index}`}
                  className="nav-card"
                  ref={setCardRef(
                    index,
                  )}
                  style={{
                    backgroundColor:
                      item.bgColor,

                    color:
                      item.textColor,
                  }}
                >
                  <div className="nav-card-label">
                    {
                      item.label
                    }
                  </div>

                  <div className="nav-card-links">
                    {item.links.map(
                      renderLink,
                    )}
                  </div>
                </div>
              ),
            )}
        </div>
      </nav>
    </div>
  );
}
