export type keys = "xs" | "s" | "m" | "l" | "xl";

export type values = { width: number; column: number };

export type IBreakPoint = {
  [size in keys]: values;
};

export const breakPoint: IBreakPoint = {
  xs: {
    width: 300,
    column: 1,
  },
  s: {
    width: 600,
    column: 2,
  },
  m: {
    width: 900,
    column: 3,
  },
  l: {
    width: 1200,
    column: 4,
  },
  xl: {
    width: 1500,
    column: 5,
  },
};

export const createBreakPoint = (breakPoint: values) => {
  const { width } = breakPoint;

  return {
    breakPointUp: `@media (min-width: ${width}px)`,
    breakPointDown: `@media (max-width: ${width}px)`,
    ...breakPoint,
  };
};
