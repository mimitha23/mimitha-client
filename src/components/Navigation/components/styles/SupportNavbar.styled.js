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

export const SupportNavbarContainer = styled.div`
  align-self: flex-end;
  margin-bottom: auto;
  width: max-content;
  display: flex;
  align-items: center;
  gap: 3rem;
  color: ${({ theme }) => theme.colors.text};
  height: 0;
  transform: translateY(-200%) scale(0.5);
  opacity: 0;

  ${({ partialNav }) =>
    partialNav
      ? css`
          position: absolute;
          animation: ${animateHideSupportNav} 0.2s linear forwards;
        `
      : css`
          animation: ${animateShowSupportNav} 0.2s linear forwards;
        `};

  .darkMode--switch {
    button {
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }

  .language-switch {
    display: flex;
    align-items: center;

    .language-switch__btn {
      padding: 0.5rem 1rem;
      cursor: pointer;

      :not(:last-child) {
        border-right: 2px solid ${({ theme }) => theme.colors.text};
      }
    }
  }

  .support-nav__social-networks {
    display: flex;
    gap: 1rem;
    align-items: center;
    font-size: ${({ theme }) => theme.fontSize.xl};
  }
`;
