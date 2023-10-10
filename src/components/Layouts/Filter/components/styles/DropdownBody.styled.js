import styled from "styled-components";
import { animateMoveBottom } from "styles/helpers/index";

export const DropdownBody = styled.ul`
  position: absolute;
  z-index: 9;
  top: calc(100% + 1rem);
  left: 0;
  right: 0;
  padding: 0.5rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
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
    border-radius: 0.5rem;
    transition: all 0.2s ease;

    &.active {
      background: ${({ theme }) => theme.colors.blue};
      color: ${({ theme }) => theme.colors.white};
    }

    @media (hover: hover) {
      &:not(.active):hover {
        background: ${({ theme }) => theme.colors.text};
        color: ${({ theme }) => theme.colors.bg};
        border-radius: 0.5rem;
      }
    }

    button {
      padding: 0.5rem;
      width: 100%;
      text-align: start;
      text-transform: capitalize;
    }
  }
`;
