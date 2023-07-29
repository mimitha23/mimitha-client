/* eslint-disable react-hooks/exhaustive-deps */
import { createContext, useContext, useState, useEffect } from "react";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "styles/GlobalStyles";
import { DarkTheme, LightTheme } from "styles/Theme";
import { MIMITHA_THEME_KEY } from "config/consts";

const ThemeContext = createContext({
  mode: true,
  setTheme: (mode) => {},
  changeNavHeight: (partial) => {},
});

export default function AppThemeProvider({ children }) {
  const [appTheme, setAppTheme] = useState({
    lightMode: true,
    theme: LightTheme,
  });

  function setTheme(mode) {
    setAppTheme((prev) => ({
      ...prev,
      lightMode: mode,
      theme: mode ? LightTheme : DarkTheme,
    }));

    localStorage.setItem(MIMITHA_THEME_KEY, JSON.stringify(mode));
  }

  function changeNavHeight(partial) {
    setAppTheme((prev) => ({
      ...prev,
      theme: {
        ...prev.theme,
        app: {
          ...prev.theme.app,
          nav_h: partial
            ? prev.theme.app.nav_h_partial
            : prev.theme.app.nav_h_full,
        },
      },
    }));
  }

  // set locally saved theme on mount
  useEffect(() => {
    const mimitha_theme_local = localStorage.getItem(MIMITHA_THEME_KEY);
    const mode = mimitha_theme_local
      ? JSON.parse(mimitha_theme_local || "")
      : "";

    if (typeof mode !== "boolean")
      localStorage.setItem(
        MIMITHA_THEME_KEY,
        JSON.stringify(appTheme.lightMode)
      );
    else if (typeof mode === "boolean" && mode !== appTheme.lightMode)
      setAppTheme(
        mode === true
          ? {
              lightMode: true,
              theme: LightTheme,
            }
          : {
              lightMode: false,
              theme: DarkTheme,
            }
      );
  }, []);

  return (
    <ThemeContext.Provider
      value={{
        mode: appTheme.lightMode,
        setTheme,
        changeNavHeight,
      }}
    >
      <ThemeProvider theme={appTheme.theme}>
        <GlobalStyles />
        {children}
      </ThemeProvider>
    </ThemeContext.Provider>
  );
}

export const useThemeContext = () => useContext(ThemeContext);
