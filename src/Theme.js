import { createContext, useState } from "react";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "styles/GlobalStyles";
import { DarkTheme, LightTheme } from "styles/Theme";

export const ThemeContext = createContext({
  mode: true,
  setTheme: (mode) => {},
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
  }

  return (
    <ThemeContext.Provider value={{ mode: appTheme.lightMode, setTheme }}>
      <ThemeProvider theme={appTheme.theme}>
        <GlobalStyles />
        {children}
      </ThemeProvider>
    </ThemeContext.Provider>
  );
}
