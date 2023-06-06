import styled, { keyframes } from "styled-components";

const rotateClock = keyframes`
  from{
    transform: rotate(0);
  } to {
    transform: rotate(360deg);
  }
`;

export const Spinner = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  .spinner-box {
    display: block;
    width: 6rem;
    height: 6rem;
    border-radius: 100%;
    border: 0.5rem solid ${({ theme }) => theme.colors.gray_shade};
    background: url(/assets/mimitha-logo-small.png);
    background-size: contain;
    background-position: center;
    background-repeat: no-repeat;
    position: relative;

    &::after {
      content: "";
      position: absolute;
      z-index: 1;
      top: -0.5rem;
      left: -0.5rem;
      right: 0;
      bottom: 0;
      width: 6rem;
      height: 6rem;
      border-radius: inherit;
      background: transparent;
      border: 5px solid transparent;
      border-bottom-color: ${({ theme }) => theme.colors.black};
      animation: ${rotateClock} 1s ease-in-out infinite;
    }
  }
`;
