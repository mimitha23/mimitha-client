import styled from "styled-components";
import { dropdownRectangle } from "styles/helpers/index";

export const DropdownTriggerButton = styled.button`
  padding-left: 1rem;
  background: ${({ theme }) => theme.colors.bg};
  border: 1px solid ${({ theme }) => theme.colors.gray_shade};
  border-radius: 0.5rem;
  text-transform: capitalize;

  ${dropdownRectangle({
    buttonWidth: "22rem",
    buttonBorderWidth: "1px",
    rectangleHeight: "3.6rem",
    rectangleBorderWidth: "1px",
  })};

  &.active {
    border-color: ${({ theme }) => theme.colors.blue};

    &::after {
      border-top-color: ${({ theme }) => theme.colors.blue};
    }

    &::before {
      border-top-color: ${({ theme }) => theme.colors.blue};
    }
  }

  span {
    display: -webkit-box;
    -webkit-box-orient: vertical;
    line-clamp: 1;
    -webkit-line-clamp: 1;
    overflow: hidden;
    text-align: start;
  }
`;
