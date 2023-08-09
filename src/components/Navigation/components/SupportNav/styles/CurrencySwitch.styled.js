import styled from "styled-components";
import { animateMoveBottom } from "styles/helpers";

export const CurrencySwitch = styled.div`
  position: relative;

  .currency-trigger {
    border: 1px solid ${({ theme }) => theme.colors.gray_shade};
    padding: 0.5rem;
    border-radius: 0.5rem;
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }

  .currency-dropdown {
    position: absolute;
    left: 0;
    right: 0;
    border: 1px solid ${({ theme }) => theme.colors.gray_shade};
    border-radius: 0.5rem;
    padding: 0.5rem;
    top: calc(100% + 0.5rem);
    background: ${({ theme }) => theme.colors.bg};
    display: flex;
    flex-direction: column;
    gap: 0.25rem;
    ${animateMoveBottom};

    li {
      cursor: pointer;

      &.active {
        color: ${({ theme }) => theme.colors.blue};
      }

      @media (hover: hover) {
        &:hover {
          color: ${({ theme }) => theme.colors.blue};
        }
      }
    }
  }
`;
