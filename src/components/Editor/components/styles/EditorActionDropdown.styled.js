import styled from "styled-components";
import { animateMoveBottom, dropdownRectangle } from "styles/helpers";

export const EditorActionDropdownContainer = styled.div`
  width: 100%;

  .dropdown-trigger__btn {
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
  }

  .dropdown-body {
    width: 100%;
    min-height: 6.5rem;
    padding: 1rem;
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
    background: ${({ theme }) => theme.colors.white};
    border: 1px solid ${({ theme }) => theme.colors.gray_shade};
    ${animateMoveBottom};

    .variant__option-btn {
      position: relative;
      transition: all 0.2s ease-out;

      &.available:not(.active) {
        border-bottom: 2px solid ${({ theme }) => theme.colors.green};
      }

      &.unrecognized {
        border-bottom: 2px solid ${({ theme }) => theme.colors.red};

        svg {
          opacity: 0.4;
        }
      }

      &.active {
        border-bottom: 2px solid ${({ theme }) => theme.colors.blue};
      }

      svg {
        height: 3.5rem;
        width: 4rem;

        image {
          width: 100%;
          height: 100%;
          object-fit: contain;
        }
      }
    }

    .variant__option-btn .unrecognized__message {
      position: absolute;
      z-index: 99;
      bottom: calc(100% + 1.3rem);
      background: ${({ theme }) => theme.colors.bg};
      padding: 1rem 1rem 1.2rem 1rem;
      width: 20rem;
      border-radius: 0.5rem;
      text-align: start;
      font-size: ${({ theme }) => theme.fontSize.md};
      box-shadow: ${({ theme }) => theme.shadow.radial_sm_dark};

      &::after {
        content: "";
        position: absolute;
        bottom: 0;
        width: 1.25rem;
        height: 1.25rem;
        transform: translateY(calc(50% - 1px)) rotate(45deg);
        background: ${({ theme }) => theme.colors.bg};
        box-shadow: ${({ theme }) => theme.shadow.radial_sm_dark};
      }

      &::before {
        content: "";
        position: absolute;
        z-index: 1;
        bottom: 0;
        width: 3rem;
        height: 1.2rem;
        background: ${({ theme }) => theme.colors.bg};
      }

      &.left {
        left: 0;

        &::after {
          left: 1rem;
        }

        &::before {
          left: 0rem;
          border-bottom-left-radius: 0.5rem;
        }
      }

      &.right {
        right: 0;

        &::after {
          right: 1rem;
        }

        &::before {
          border-bottom-right-radius: 0.5rem;
          right: 0.3rem;
        }
      }
    }
  }

  @media (${({ theme }) => theme.media.desktop_lg}) {
    .dropdown-trigger__btn {
      ${dropdownRectangle({
        buttonWidth: "98%",
        buttonBorderWidth: "2px",
        rectangleHeight: "4.5rem",
        rectangleBorderWidth: "2px",
      })}
    }
  }

  @media (${({ theme }) => theme.media.mobile}) {
    .dropdown-trigger__btn {
      ${dropdownRectangle({
        buttonWidth: "95%",
        buttonBorderWidth: "2px",
        rectangleHeight: "4.5rem",
        rectangleBorderWidth: "2px",
      })}
    }
  }
`;
