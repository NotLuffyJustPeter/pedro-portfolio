import type {
  CSSProperties,
  ComponentType,
  HTMLAttributes,
} from 'react';

export interface MaskedHeadingProps
  extends Omit<
    HTMLAttributes<HTMLElement>,
    'style'
  > {
  text?: string;

  tag?: string;

  mediaType?:
    | 'image'
    | 'video';

  src?: string;

  poster?: string;

  fillScale?: number;

  parallax?: number;

  drift?: number;

  brightness?: number;

  saturation?: number;

  grayscale?: boolean;

  reveal?:
    | 'rise'
    | 'wipe'
    | 'fade'
    | 'none';

  duration?: number;

  stagger?: number;

  trigger?:
    | 'view'
    | 'hover'
    | 'load';

  align?:
    | 'left'
    | 'center'
    | 'right';

  weight?:
    number;

  tracking?:
    number;

  lineHeight?:
    number;

  textScale?:
    number;

  className?:
    string;

  style?:
    CSSProperties;
}

declare const MaskedHeading:
  ComponentType<
    MaskedHeadingProps
  >;

export default MaskedHeading;
