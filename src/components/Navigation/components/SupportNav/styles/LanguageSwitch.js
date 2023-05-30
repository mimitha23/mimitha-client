import styled from "styled-components";

export const LanguageSwitch = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;

  .language-switch__btn {
    padding: 0.5rem 1rem;
    cursor: pointer;
  }

  .language-switch__btn.active_locale {
    background: ${({ theme }) => theme.colors.text};
    color: ${({ theme }) => theme.colors.bg};
    border-radius: 0.5rem;
  }

  .language-switch__devider {
    width: 2px;
    height: 2.5rem;
    background: ${({ theme }) => theme.colors.text};
  }
`;
