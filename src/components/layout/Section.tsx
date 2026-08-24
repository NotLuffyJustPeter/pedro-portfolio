import type {
  HTMLAttributes,
  ReactNode,
} from 'react';

interface SectionProps
  extends HTMLAttributes<HTMLElement> {
  children: ReactNode;
  divider?: boolean;
}

export function Section({
  children,
  divider = false,
  className = '',
  ...props
}: SectionProps) {
  return (
    <section
      className={[
        'section',
        divider
          ? 'section--divider'
          : '',
        className,
      ]
        .filter(Boolean)
        .join(' ')}
      {...props}
    >
      {children}
    </section>
  );
}
