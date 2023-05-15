import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  *,*::after,*::before {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    user-select: none;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    -webkit-touch-callout: none;
  }

  html{
    font-size:62.5%;
  }

  body {
    margin: 0;
    font-size: 1.6rem;
    background-color: ${({ theme }) => theme.colors.bg};
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
      "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  ul{
    list-style-type: none;
  }

  button{
    background:none;
    cursor: pointer;
  }

  a{
    text-decoration:none;
  }

  img {
    max-width: 100%;
  }

  input,
  button{
    border:none;
  }

  a,button{
    color:inherit;
    font-size:inherit;
  }


`;
