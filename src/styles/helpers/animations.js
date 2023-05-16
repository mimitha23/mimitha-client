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
