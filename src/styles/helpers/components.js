import { css } from "styled-components";

export const buttonPrimary = () => css`
  padding: 1rem 7rem;
  font-size: ${({ theme }) => theme.fontSize.lg};
  font-weight: 500;
  border-radius: 15rem;
  background: ${({ theme }) => theme.colors.text};
  color: ${({ theme }) => theme.colors.bg};
  transition: all 0.2s ease;

  :hover {
    box-shadow: ${({ theme }) =>
      theme.mode === "light"
        ? theme.shadow.bottom_right_md_dark
        : theme.shadow.bottom_right_md_light};
    color: ${({ theme }) => theme.colors.text};
    background-color: ${({ theme }) => theme.colors.bg};
  }
`;
