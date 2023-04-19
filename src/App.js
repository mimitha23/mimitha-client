import React from "react";
// import { ThemeProvider } from "styled-components";
import { LandingPage } from "./pages/index.js"
import GlobalStyles from './styles/GlobalStyles';

export default function App(props) {
  return (
    <div className="mainDiv">
      <GlobalStyles />
      <LandingPage />
    </div>
  )
}

