import styled from "styled-components";
import {
  dropdownRectingle,
  animateMoveBottom,
  buttonPrimary,
} from "styles/helpers";

export const FilterContainer = styled.div`
  width: 100%;

  .filter-dropdowns__wrapper {
    display: flex;
    align-items: center;
    column-gap: 6rem;
    row-gap: 2rem;
    flex-wrap: wrap;
    width: calc(100% - 4rem);
  }

  .filter__expand-box {
    display: none;
    font-size: ${({ theme }) => theme.fontSize.lg};

    .toggle-filter__btn {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 1rem;
      text-transform: capitalize;
      transition: all 0.2s ease;

      span:last-child {
        line-height: 1;
        font-size: 2.5rem;

        svg {
          transform: translateY(0.25rem);
        }
      }

      &.hide-btn {
        text-decoration: underline;
      }

      &.show-btn {
        ${buttonPrimary};
      }
    }
  }

  @media (${({ theme }) => theme.media.tablet_sm}) {
    .filter__expand-box {
      display: flex;
    }

    .filter-dropdowns__wrapper {
      display: none !important;
    }

    &.visible_filter .filter-dropdowns__wrapper {
      display: flex !important;
    }

    &.visible_filter .filter__expand-box {
      padding-bottom: 2rem;
    }
  }
`;

export const DropdownContainer = styled.div`
  position: relative;

  .filter-dropdown__trigger-btn {
    text-align: start;
    padding-left: 1rem;
    background: ${({ theme }) => theme.colors.bg};
    border: 1px solid ${({ theme }) => theme.colors.gray_shade};
    border-radius: 0.5rem;

    ${dropdownRectingle({
      buttonWidth: "22rem",
      buttonBorderWidth: "1px",
      rectingleHeight: "3.6rem",
      rectingleBorderWidth: "1px",
    })}
  }

  .filter-dropdown__body {
    position: absolute;
    z-index: 9;
    top: calc(100% + 1rem);
    left: 0;
    right: 0;
    padding: 0.5rem;
    border-radius: 0.5rem;
    box-shadow: ${({ theme }) => theme.shadow.radial_sm_dark};
    background: ${({ theme }) => theme.colors.bg};
    min-height: 4rem;
    max-height: 30rem;
    overflow: auto;
    ${animateMoveBottom({ diff: "-2rem" })};

    ::-webkit-scrollbar {
      display: none;
    }

    .filter-dropdown__list-item {
      button {
        padding: 0.5rem;
        width: 100%;
        text-align: start;
        transition: all 0.2s ease;
        border-radius: 0.5rem;
      }

      button:hover {
        background: ${({ theme }) => theme.colors.text};
        color: ${({ theme }) => theme.colors.bg};
      }
    }
  }
`;
