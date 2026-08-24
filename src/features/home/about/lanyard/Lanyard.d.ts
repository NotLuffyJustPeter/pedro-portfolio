import type {
  ComponentType,
} from 'react';

export type LanyardVector3 = [
  number,
  number,
  number,
];

export interface LanyardProps {
  position?: LanyardVector3;

  gravity?: LanyardVector3;

  fov?: number;

  transparent?: boolean;

  frontImage?:
    | string
    | null;

  backImage?:
    | string
    | null;

  imageFit?:
    | 'cover'
    | 'contain';

  lanyardImage?:
    | string
    | null;

  lanyardWidth?: number;
}

declare const Lanyard:
  ComponentType<LanyardProps>;

export default Lanyard;
