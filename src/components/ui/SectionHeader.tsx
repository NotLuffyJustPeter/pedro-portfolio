import {
  Eyebrow,
} from './Eyebrow';

interface SectionHeaderProps {
  eyebrow?: string;
  title: string;
  description?: string;

  align?: 'left' | 'right';

  className?: string;
}

export function SectionHeader({
  eyebrow,
  title,
  description,
  align = 'left',
  className = '',
}: SectionHeaderProps) {
  return (
    <header
      className={[
        'section-header',
        `section-header--${align}`,
        className,
      ]
        .filter(Boolean)
        .join(' ')}
    >
      {eyebrow && (
        <Eyebrow>
          {eyebrow}
        </Eyebrow>
      )}

      <h2 className="heading-2">
        {title}
      </h2>

      {description && (
        <p className="body-large">
          {description}
        </p>
      )}
    </header>
  );
}
