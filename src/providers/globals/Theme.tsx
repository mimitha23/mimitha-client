/* eslint-disable react-hooks/exhaustive-deps */
import { createContext, useContext, useState, useEffect } from "react";
import { ThemeProvider, ModeT, DefaultTheme } from "styled-components";

import { GlobalStyles } from "styles/GlobalStyles";
import { DarkTheme, LightTheme, BaseTheme } from "styles/Theme";
import { MIMITHA_THEME_KEY } from "config/consts";

import { ThemeContextT, ThemeProviderT } from "./types/themeProvider.types";

const ThemeContext = createContext<ThemeContextT>({
  mode: "light",
  setTheme: () => {},
  changeNavHeight: () => {},
});

const AppThemeProvider: React.FC<ThemeProviderT> = ({ children }) => {
  const [appTheme, setAppTheme] = useState<{
    mode: ModeT;
    theme: DefaultTheme;
  }>({
    mode: "light",
    theme: BaseTheme,
  });

  function setTheme(mode: ModeT) {
    setAppTheme((prev) => ({
      ...prev,
      mode: mode === "light" ? "light" : "dark",
      theme: mode === "light" ? LightTheme : DarkTheme,
    }));

    localStorage.setItem(MIMITHA_THEME_KEY, JSON.stringify(mode));
  }

  function changeNavHeight(partial: boolean) {
    const windowWidth = window.innerWidth;

    setAppTheme((prev) => ({
      ...prev,
      theme: {
        ...prev.theme,
        app: {
          ...prev.theme.app,
          nav_h: partial
            ? prev.theme.app.nav_h_partial
            : windowWidth > 500
            ? prev.theme.app.nav_h_full
            : prev.theme.app.nav_h_full_mobile,
        },
      },
    }));
  }

  // set locally saved theme on mount
  useEffect(() => {
    const mimitha_theme_local = localStorage.getItem(MIMITHA_THEME_KEY);
    const mode: ModeT = mimitha_theme_local
      ? JSON.parse(mimitha_theme_local || "")
      : "";

    if (!mode) localStorage.setItem(MIMITHA_THEME_KEY, JSON.stringify("light"));
    else
      setAppTheme(
        mode === "light"
          ? {
              mode: "light",
              theme: LightTheme,
            }
          : {
              mode: "dark",
              theme: DarkTheme,
            }
      );
  }, []);

  return (
    <ThemeContext.Provider
      value={{
        setTheme,
        changeNavHeight,
        mode: appTheme.mode,
      }}
    >
      <ThemeProvider theme={appTheme.theme}>
        <GlobalStyles />
        {children}
      </ThemeProvider>
    </ThemeContext.Provider>
  );
};

export default AppThemeProvider;
export const useThemeContext = () => useContext(ThemeContext);
