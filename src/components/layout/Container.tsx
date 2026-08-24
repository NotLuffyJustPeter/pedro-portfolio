import type {
  HTMLAttributes,
  ReactNode,
} from 'react';

interface ContainerProps
  extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  size?: 'default' | 'reading';
}

export function Container({
  children,
  size = 'default',
  className = '',
  ...props
}: ContainerProps) {
  return (
    <div
      className={[
        'container',
        size === 'reading'
          ? 'container--reading'
          : '',
        className,
      ]
        .filter(Boolean)
        .join(' ')}
      {...props}
    >
      {children}
    </div>
  );
}
