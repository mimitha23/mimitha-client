import React from "react";
import { useState } from "react";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "./styles/theme"
import { LandingPage, Editor } from "./pages/index.js"
import GlobalStyles from './styles/GlobalStyles';


export default function App(props) {
  const [theme, setTheme] = useState("light")
  const isDarkTheme = theme === "dark";

  const toggleTheme = () => setTheme(isDarkTheme ? "light" : "dark")
  console.log(lightTheme, darkTheme);
  return (
    <>
      <ThemeProvider theme={isDarkTheme ? darkTheme : lightTheme}>
        <GlobalStyles />
        <LandingPage themeChanger={toggleTheme} />
        {/* <Editor /> */}
      </ThemeProvider>
    </>
  )
}

