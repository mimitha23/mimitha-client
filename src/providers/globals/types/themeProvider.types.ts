import { ModeT } from "styled-components";

type ThemeContextT = {
  mode: ModeT;
  setTheme: (mode: ModeT) => void;
  changeNavHeight: (partial: boolean) => void;
};

type ThemeProviderT = {
  children: React.ReactNode;
};

export type { ThemeContextT, ThemeProviderT };
