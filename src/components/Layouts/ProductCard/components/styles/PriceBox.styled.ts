import styled from "styled-components";

export const PriceBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  .product-price {
    padding-bottom: 0.5rem;
    font-size: 1.75rem;
    text-transform: capitalize;
    font-size: ${({ theme }) => theme.fontSize.base};

    span {
      font-weight: 700;
      font-size: ${({ theme }) => theme.fontSize.base};
    }
  }
`;
