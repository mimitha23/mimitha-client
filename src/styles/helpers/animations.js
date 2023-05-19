import { css } from "styled-components";

export const animateMoveBottom = ({ diff = "-2rem", duration = "0.2s" }) => css`
  animation: moveBottom ${duration} ease forwards;

  @keyframes moveBottom {
    0% {
      transform: translateY(${diff});
      opacity: 0;
    }
    100% {
      transform: translateY(0);
      opacity: 1;
    }
  }
`;

export const animateMoveTop = ({ diff = "2rem", duration = "0.2s" }) => css`
  animation: moveTop ${duration} ease forwards;

  @keyframes moveTop {
    0% {
      transform: translateY(${diff});
      opacity: 0;
    }
    100% {
      transform: translateY(0);
      opacity: 1;
    }
  }
`;

export const animateMoveRight = ({ diff = "-2rem", duration = "0.2s" }) => css`
  animation: moveRight ${duration} ease forwards;

  @keyframes moveRight {
    0% {
      transform: translateX(${diff});
      opacity: 0;
    }
    100% {
      transform: translateX(0);
      opacity: 1;
    }
  }
`;

export const animateMoveLeft = ({ diff = "2rem", duration = "0.2s" }) => css`
  animation: moveLeft ${duration} ease forwards;

  @keyframes moveLeft {
    0% {
      transform: translateX(${diff});
      opacity: 0;
    }
    100% {
      transform: translateX(0);
      opacity: 1;
    }
  }
`;

export const animatePopUpAndScale = ({ duration = "0.4s" }) => css`
  animation: popUpAndScale ${duration} ease forwards;

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
