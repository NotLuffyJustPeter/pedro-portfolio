export {};

declare module '*.glb' {
  const source: string;

  export default source;
}

declare module '*.png' {
  const source: string;

  export default source;
}

declare module 'meshline' {
  export class MeshLineGeometry {
    setPoints(
      points: unknown[],
    ): void;
  }

  export class MeshLineMaterial {}
}

declare global {
  namespace JSX {
    interface IntrinsicElements {
      meshLineGeometry:
        Record<
          string,
          unknown
        >;

      meshLineMaterial:
        Record<
          string,
          unknown
        >;
    }
  }
}
