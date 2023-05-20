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

export const dropdownRectingle = ({
  buttonWidth,
  buttonBorderWidth,
  rectingleHeight,
  rectingleBorderWidth = "2px",
}) => {
  return css`
    position: relative;
    z-index: 2;
    width: calc(${buttonWidth} - ${rectingleHeight} / 2);
    height: ${rectingleHeight};

    &::after {
      content: "";
      position: absolute;
      z-index: 1;
      top: -${buttonBorderWidth};
      right: 0;
      transform: translateX(calc(50% - ${rectingleBorderWidth} * 2));
      height: 0;
      width: 0;
      border-top: calc(${rectingleHeight} + 0.1rem) solid
        ${({ theme }) => theme.colors.text};
      border-left: ${rectingleHeight} solid transparent;
      border-right: ${rectingleHeight} solid transparent;
    }

    &::before {
      content: "";
      position: absolute;
      z-index: 2;
      top: calc(${buttonBorderWidth} / 2);
      right: 0;
      transform: translateX(calc(50% - ${rectingleBorderWidth} * 2));
      height: 0;
      width: 0;
      border-top: calc(${rectingleHeight} - 4 * ${rectingleBorderWidth}) solid
        ${({ theme }) => theme.colors.bg};
      border-left: calc(${rectingleHeight} - 4 * ${rectingleBorderWidth}) solid
        transparent;
      border-right: calc(${rectingleHeight} - 4 * ${rectingleBorderWidth}) solid
        transparent;
      transition: all 0.2s ease;
    }

    &.active-dropdown::before {
      border-top: calc(${rectingleHeight} - 4 * ${rectingleBorderWidth}) solid
        ${({ theme }) => theme.colors.text};
    }
  `;
};

export const scrollBar = ({
  width = "1rem",
  marginBlockTop = "0",
  marginBlockBottom = "0",
}) => css`
  &::-webkit-scrollbar {
    width: ${width};
  }

  &::-webkit-scrollbar-track {
    background: ${({ theme }) => theme.colors.gray_shade};
    border-radius: 1rem;
    margin-block-start: ${marginBlockTop};
    margin-block-end: ${marginBlockBottom};
  }

  &::-webkit-scrollbar-thumb {
    background: ${({ theme }) => theme.colors.text};
    border-radius: 1rem;
  }
`;
