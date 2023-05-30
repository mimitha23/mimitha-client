import styled from "styled-components";
import { buttonPrimary } from "styles/helpers";

export const ProductHeadingContainer = styled.div`
  .product-title {
    padding-bottom: 10px;
    font-size: ${({ theme }) => theme.fontSize.xl};
    font-weight: 400;
    color: ${({ theme }) => theme.colors.text};
  }

  .price-and-edit__container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 1rem;
  }

  .edit-link {
    ${buttonPrimary};
    padding: 1rem 4rem;
    text-transform: uppercase;
  }

  .product-price {
    width: fit-content;
    margin: 10px 0 10px 0;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 0.5rem;
    text-transform: capitalize;

    span {
      padding: 0.5rem;
      color: ${({ theme }) => theme.colors.text};
      font-size: ${({ theme }) => theme.fontSize.base};
      font-weight: 500;
      border: 2px solid ${({ theme }) => theme.colors.text};
    }
  }
`;
