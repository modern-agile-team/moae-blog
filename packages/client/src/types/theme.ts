export interface ThemeType {
  COLORS: ColorType;
  FONT: FontType;
}

type ColorType = {
  BG1: string;
  MAIN: string;
  MAINDARK: string;
};

type FontType = {
  HEAD1: FontSet;
  HEAD2: FontSet;
  HEAD3: FontSet;
  HEAD4: FontSet;
  HEAD5: FontSet;
  HEAD6: FontSet;
  NORMAL: FontSet;
  SMALL: FontSet;
};

type FontSet = {
  fontWeight: string;
  fontSize: string;
  lineHeight: number;
};
