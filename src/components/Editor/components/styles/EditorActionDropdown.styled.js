import styled from "styled-components";
import { animateMoveBottom, dropdownRectingle } from "styles/helpers";

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
    ${dropdownRectingle({
      buttonWidth: "50%",
      buttonBorderWidth: "2px",
      rectingleHeight: "6rem",
      rectingleBorderWidth: "2px",
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
      svg {
        height: 3.5rem;
        width: 4rem;
      }

      svg image {
        width: 100%;
        height: 100%;
        object-fit: contain;
      }
    }

    .variant__option-btn.active {
      border-bottom: 2px solid ${({ theme }) => theme.colors.blue};
    }

    @media (hover: hover) {
      transition: all 0.2s ease-out;

      .variant__option-btn.available:not(.active):hover {
        border-bottom: 2px solid ${({ theme }) => theme.colors.green};
      }

      .variant__option-btn.unrecognized:hover {
        border-bottom: 2px solid ${({ theme }) => theme.colors.red};
      }
    }

    @media (hover: none) {
      transition: all 0.2s ease-out;

      .variant__option-btn.available:not(.active) {
        border-bottom: 2px solid ${({ theme }) => theme.colors.green};
      }

      .variant__option-btn.unrecognized {
        border-bottom: 2px solid ${({ theme }) => theme.colors.red};
      }
    }
  }

  @media (${({ theme }) => theme.media.desktop_lg}) {
    .dropdown-trigger__btn {
      ${dropdownRectingle({
        buttonWidth: "98%",
        buttonBorderWidth: "2px",
        rectingleHeight: "4.5rem",
        rectingleBorderWidth: "2px",
      })}
    }
  }

  @media (${({ theme }) => theme.media.mobile}) {
    .dropdown-trigger__btn {
      ${dropdownRectingle({
        buttonWidth: "95%",
        buttonBorderWidth: "2px",
        rectingleHeight: "4.5rem",
        rectingleBorderWidth: "2px",
      })}
    }
  }
`;
