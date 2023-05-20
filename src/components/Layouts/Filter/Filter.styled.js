import styled from "styled-components";
import { dropdownRectingle, animateMoveBottom } from "styles/helpers";

export const FilterContainer = styled.div`
  display: flex;
  align-items: center;
  column-gap: 6rem;
  row-gap: 2rem;
  flex-wrap: wrap;
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
      rectingleHeight: "3rem",
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
