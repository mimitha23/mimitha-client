import { css } from "styled-components";

export const buttonPrimary = () => css`
  padding: 1rem 7rem;
  font-size: ${({ theme }) => theme.fontSize.lg};
  font-weight: 400;
  /* border-radius: 15rem; */
  border-radius: 0.5rem;
  background: ${({ theme }) => theme.colors.black};
  color: ${({ theme }) => theme.colors.white};
  transition: all 0.2s ease;

  @media (hover: hover) {
    :hover {
      box-shadow: ${({ theme }) => theme.shadow.bottom_right_md_dark};
      color: ${({ theme }) => theme.colors.text};
      background-color: ${({ theme }) => theme.colors.bg};
    }
  }

  @media (${({ theme }) => theme.media.tablet_sm}) {
    padding: 1rem 2rem;
    font-size: ${({ theme }) => theme.fontSize.base};
  }
`;

export const dropdownRectangle = ({
  buttonWidth,
  buttonBorderWidth,
  rectangleHeight,
  rectangleBorderWidth = "2px",
}: {
  buttonWidth: string;
  buttonBorderWidth: string;
  rectangleHeight: string;
  rectangleBorderWidth?: string;
}) => {
  return css`
    position: relative;
    z-index: 2;
    width: calc(${buttonWidth} - ${rectangleHeight} / 2);
    height: ${rectangleHeight};

    &::after {
      content: "";
      position: absolute;
      z-index: 1;
      top: -${buttonBorderWidth};
      right: 0;
      transform: translateX(calc(50% - ${rectangleBorderWidth} * 2));
      height: 0;
      width: 0;
      border-top: calc(${rectangleHeight} + 0.1rem) solid
        ${({ theme }) => theme.colors.text};
      border-left: ${rectangleHeight} solid transparent;
      border-right: ${rectangleHeight} solid transparent;
    }

    &::before {
      content: "";
      position: absolute;
      z-index: 2;
      top: calc(${buttonBorderWidth} / 2);
      right: 0;
      transform: translateX(calc(50% - ${rectangleBorderWidth} * 2));
      height: 0;
      width: 0;
      border-top: calc(${rectangleHeight} - 4 * ${rectangleBorderWidth}) solid
        ${({ theme }) => theme.colors.bg};
      border-left: calc(${rectangleHeight} - 4 * ${rectangleBorderWidth}) solid
        transparent;
      border-right: calc(${rectangleHeight} - 4 * ${rectangleBorderWidth}) solid
        transparent;
      transition: all 0.2s ease;
    }

    &.active-dropdown::before {
      border-top: calc(${rectangleHeight} - 4 * ${rectangleBorderWidth}) solid
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
