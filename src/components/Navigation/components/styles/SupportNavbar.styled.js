import styled from "styled-components";

export const SupportNavbarContainer = styled.div`
  align-self: flex-end;
  width: max-content;
  height: 4rem;
  display: flex;
  gap: 3rem;
  align-items: center;
  color: ${({ theme }) => theme.colors.text};

  .support-nav__list {
    height: 100%;
    display: flex;
    align-items: center;
    font-size: ${({ theme }) => theme.fontSize.sm};

    li {
      height: 100%;
      width: max-content;
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 0 2rem 0 2rem;
      border-right: 2px solid ${({ theme }) => theme.colors.text};
      font-weight: 500;
      cursor: pointer;

      :first-child {
        border-left: 2px solid ${({ theme }) => theme.colors.text};
      }
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
