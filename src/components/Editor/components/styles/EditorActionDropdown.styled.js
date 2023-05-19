import styled from "styled-components";
import { animateMoveBottom } from "styles/helpers";

const border_w = "6rem";

export const EditorActionDropdownContainer = styled.div`
  width: 100%;

  .dropdown-trigger__btn {
    position: relative;
    z-index: 2;
    width: calc(50% - ${border_w} / 2);
    height: ${border_w};
    text-align: start;
    padding-left: 2rem;
    font-weight: 500;
    text-transform: capitalize;
    border: 1px solid ${({ theme }) => theme.colors.gray_shade};
    background: ${({ theme }) => theme.colors.bg};
    border-radius: 0.5rem;
    transition: all 0.2s ease;

    &::after {
      content: "";
      position: absolute;
      z-index: 1;
      top: -0.1rem;
      right: 0;
      transform: translateX(50%);
      height: 0;
      width: 0;
      border-top: calc(${border_w} + 0.1rem) solid
        ${({ theme }) => theme.colors.text};
      border-left: ${border_w} solid transparent;
      border-right: ${border_w} solid transparent;
    }

    &::before {
      content: "";
      position: absolute;
      z-index: 2;
      top: 0.2rem;
      right: 0;
      transform: translateX(50%);
      height: 0;
      width: 0;
      border-top: 5.2rem solid ${({ theme }) => theme.colors.bg};
      border-left: 5.2rem solid transparent;
      border-right: 5.2rem solid transparent;
      transition: all 0.2s ease;
    }

    &.active-dropdown {
      border-bottom: none;
      border-radius: 0;

      ::before {
        border-top: 5.2rem solid ${({ theme }) => theme.colors.text};
      }
    }
  }

  .dropdown-body {
    width: 100%;
    min-height: 6rem;
    padding: 1rem;
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
    background: ${({ theme }) => theme.colors.white};
    border: 1px solid ${({ theme }) => theme.colors.gray_shade};
    ${animateMoveBottom({})};
  }
`;
