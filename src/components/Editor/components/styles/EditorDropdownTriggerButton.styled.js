import styled from "styled-components";
import { dropdownRectangle } from "styles/helpers";

export const EditorDropdownTriggerButton = styled.button`
  text-align: start;
  padding-left: 2rem;
  font-weight: 500;
  text-transform: capitalize;
  border: 1px solid ${({ theme }) => theme.colors.gray_shade};
  border-right: none;
  background: ${({ theme }) => theme.colors.bg};
  border-radius: 0.5rem;
  transition: all 0.2s ease;
  ${dropdownRectangle({
    buttonWidth: "50%",
    buttonBorderWidth: "2px",
    rectangleHeight: "6rem",
    rectangleBorderWidth: "2px",
  })}

  &.active-dropdown {
    border-bottom: none;
    border-radius: 0;
  }

  @media (${({ theme }) => theme.media.desktop_lg}) {
    ${dropdownRectangle({
      buttonWidth: "98%",
      buttonBorderWidth: "2px",
      rectangleHeight: "4.5rem",
      rectangleBorderWidth: "2px",
    })}
  }

  @media (${({ theme }) => theme.media.mobile}) {
    ${dropdownRectangle({
      buttonWidth: "95%",
      buttonBorderWidth: "2px",
      rectangleHeight: "4.5rem",
      rectangleBorderWidth: "2px",
    })}
  }
`;
