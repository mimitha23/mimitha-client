import styled from "styled-components";

export const ProductDescription = styled.div`
  letter-spacing: 0.5px;

  .product-description__title {
    color: ${({ theme }) => theme.colors.text};
    font-size: ${({ theme }) => theme.fontSize.lg};
    font-weight: 500;
    text-transform: capitalize;
  }

  .product-description__sold {
    color: ${({ theme }) => theme.colors.text};
    font-weight: 500;

    span:first-child {
      display: inline-block;
      :first-letter {
        text-transform: uppercase;
      }
    }

    span:last-child {
      display: inline-flex;
      justify-content: center;
      align-items: center;
      width: 6rem;
      color: ${({ theme }) => theme.colors.bg};
      background-color: ${({ theme }) => theme.colors.text};
    }
  }
`;
