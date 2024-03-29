import styled, { css, keyframes } from "styled-components";

const animateShowSupportNav = keyframes`
  to{
    transform: translateY(0) scale(1);
    opacity: 1;
    height: 4rem;
  } 
`;

const animateHideSupportNav = keyframes` 
  to {
    transform: translateY(-200%) scale(0.5);
    opacity: 0;
  }
`;

export const SupportNav = styled.div`
  align-self: flex-end;
  padding-top: 1rem;
  margin-bottom: auto;
  width: max-content;
  display: flex;
  align-items: center;
  gap: 3rem;
  color: ${({ theme }) => theme.colors.text};
  height: 0;
  transform: translateY(-200%) scale(0.5);
  opacity: 0;

  @media (${({ theme }) => theme.media.mobile}) {
    margin-bottom: unset;
  }

  ${({ partialNav }) =>
    partialNav
      ? css`
          position: absolute;
          animation: ${animateHideSupportNav} 0.2s linear forwards;
        `
      : css`
          animation: ${animateShowSupportNav} 0.2s linear forwards;

          @media (${({ theme }) => theme.media.mobile}) {
            justify-content: space-between;
            width: 100%;
          }
        `};
`;

export const ThemeSwitch = styled.div`
  button {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;
