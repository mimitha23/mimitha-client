import { css } from "styled-components";

export const media = {
  desktopLarge: (rules) => css`
    @media (max-width: 105em) {
      ${css(rules)}
    }
  `,

  desktop: (rules) => css`
    @media (max-width: 80em) {
      ${css(rules)}
    }
  `,

  tablet: (rules) => css`
    @media (max-width: 60em) {
      ${css(rules)}
    }
  `,

  mobileLarge: (rules) => css`
    @media (max-width: 42.5em) {
      ${css(rules)}
    }
  `,

  mobile: (rules) => css`
    @media (max-width: 30em) {
      ${css(rules)}
    }
  `,
};
