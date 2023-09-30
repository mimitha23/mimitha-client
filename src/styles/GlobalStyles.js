import { createGlobalStyle } from "styled-components";
import { scrollBar } from "./helpers";

export const GlobalStyles = createGlobalStyle`
  *,
  *::after,
  *::before {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    user-select: none;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    -webkit-touch-callout: none;
  }

  html {
    font-size:62.5%;
    scroll-behavior: smooth;

    @media (${({ theme }) => theme.media.tablet_sm}){
      font-size:56.25%;
    }
  }

  html body {
    margin: 0;
    font-size: ${({ theme }) => theme.fontSize.base};
    color: ${({ theme }) => theme.colors.text};
    background-color: ${({ theme }) => theme.colors.bg};
    overflow-x: hidden;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
      "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    ${scrollBar({ width: "1.25rem" })};
  }

  html body:has(.active-modal){
    overflow: hidden;
  }
  
  html body:not(:has(.active-modal)){
    overflow: scroll;
    overflow-x: hidden;
  }

  ul {
    list-style-type: none;
  }

  button {
    background:none;
    cursor: pointer;
  }

  a {
    text-decoration:none;
  }

  img {
    max-width: 100%;
  }

  input,
  button{
    border:none;
  }

  a,
  button {
    color:inherit;
    font-size:inherit;
  }

  html body a:focus,
  html body a:active,
  html body a:hover,
  html body a:visited,
  html body input:focus,
  html body input:active,
  html body input:hover,
  html body input:visited,
  html body textarea:focus,
  html body textarea:active,
  html body textarea:hover,
  html body textarea:visited,
  html body button:focus,
  html body button:active,
  html body button:hover,
  html body button:visited {
    outline: none !important;
    -webkit-tap-highlight-color: transparent;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
    -webkit-tap-highlight-color: transparent;
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
  }
`;
