import { css } from "styled-components";

export const animateMoveBottom = ({ diff = "-4rem", duration = "0.2s" }) => css`
  animation: ${duration} forwards ease moveBottom;

  @keyframes moveBottom {
    0% {
      transform: translateY(${diff});
    }
    100% {
      transform: translateY(0);
    }
  }
`;

export const animatePopUpAndScale = ({ duration = "0.4s" }) => css`
  animation: ${duration} forwards ease popUpAndScale;

  @keyframes popUpAndScale {
    0% {
      opacity: 0;
      transform: scale(0.5);
    }
    60% {
      opacity: 1;
      transform: scale(1.25);
    }
    100% {
      transform: scale(1);
    }
  }
`;
