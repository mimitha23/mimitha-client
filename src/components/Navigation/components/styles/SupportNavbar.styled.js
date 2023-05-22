import styled, { css, keyframes } from "styled-components";

const animateHideSupportNav = keyframes`
  0%{
    transform: translateY(0) scale(1);
    opacity: 1;
  } 100%{
    transform: translateY(-200%) scale(0.5);
    opacity: 0;
  }
`;

const animateShowSupportNav = keyframes`
  0%{
    transform: translateY(-200%) scale(0.5);
    opacity: 0;
  } 100%{
    transform: translateY(0) scale(1);
    opacity: 1;
  }
`;

export const SupportNavbarContainer = styled.div`
  align-self: flex-end;
  width: max-content;
  height: 4rem;
  display: flex;
  gap: 3rem;
  align-items: center;
  color: ${({ theme }) => theme.colors.text};

  ${({ partialNav }) =>
    partialNav
      ? css`
          animation: ${animateHideSupportNav} 0.2s forwards;
        `
      : css`
          animation: ${animateShowSupportNav} 0.2s forwards;
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
