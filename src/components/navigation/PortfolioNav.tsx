import type {
  CardNavItem,
} from './CardNav';

import {
  CardNav,
} from './CardNav';

import {
  PROFILE,
} from '../../data/profile';

export function PortfolioNav() {
  const baseUrl =
    import.meta.env.BASE_URL;

  const items: CardNavItem[] = [
    {
      label:
        'About',

      bgColor:
        '#101116',

      textColor:
        '#f3f4f6',

      links: [
        {
          label:
            'Home',

          ariaLabel:
            'Go to portfolio home',

          href:
            '/',
        },

        {
          label:
            'About me',

          ariaLabel:
            'Go to about section',

          href:
            '/#about',
        },
      ],
    },

    {
      label:
        'Work',

      bgColor:
        '#171320',

      textColor:
        '#f3f4f6',

      links: [
        {
          label:
            'Meridian',

          ariaLabel:
            'View Meridian case study',

          href:
            '/project/meridian',
        },

        {
          label:
            'Selected work',

          ariaLabel:
            'View selected projects',

          href:
            '/#projects',
        },
      ],
    },

    {
      label:
        'Connect',

      bgColor:
        '#111217',

      textColor:
        '#f3f4f6',

      links: [
        {
          label:
            'Email',

          ariaLabel:
            'Send Pedro an email',

          href:
            `mailto:${PROFILE.email}`,
        },

        {
          label:
            'GitHub',

          ariaLabel:
            'Open Pedro GitHub profile',

          href:
            PROFILE.github,

          external:
            true,
        },

        {
          label:
            'LinkedIn',

          ariaLabel:
            'Open Pedro LinkedIn profile',

          href:
            PROFILE.linkedin,

          external:
            true,
        },
      ],
    },
  ];

  return (
    <CardNav
      logo={`${baseUrl}favicon.svg`}
      logoAlt="Pedro Delgado"
      items={items}
      baseColor="rgba(14, 15, 19, 0.9)"
      menuColor="var(--color-text)"
      buttonBgColor="var(--color-text)"
      buttonTextColor="var(--color-bg)"
      ease="circ.out"
      cta={{
        label:
          'Download CV',

        href:
          `${baseUrl}${PROFILE.cv}`,

        download:
          true,
      }}
    />
  );
}
