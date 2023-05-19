import { createGlobalStyle } from "styled-components";

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
`;
