import styled from "styled-components";
import { media } from "styles/helpers/media";

export const ShoppingCardContainer = styled.button`
  .cart-link {
    width: 100%;
    height: 100%;
    display: grid;
    grid-template: repeat(2, max-content) / repeat(2, max-content);
    gap: 0.5rem;
  }

  .cart-icon {
    grid-column: 1;
    grid-row: span 2;
    display: flex;
    align-items: flex-end;
    justify-content: center;

    svg {
      font-size: 3.5rem;
    }
  }

  .cart-count__badge {
    grid-column: 2;
    grid-row: 1;
    background: ${({ theme }) => theme.colors.text};
    color: ${({ theme }) => theme.colors.bg};
    border-radius: 100%;
    width: 2rem;
    height: 2rem;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: ${({ theme }) => theme.fontSize.sm};
  }

  .total-price {
    grid-column: 2;
    grid-row: 2;
    font-weight: 600;
  }

  ${media.desktop`
    margin-left:auto;
  `}
`;
