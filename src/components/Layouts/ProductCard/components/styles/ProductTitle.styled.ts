import styled from "styled-components";

export const ProductTitle = styled.h2`
  font-weight: 500;
  font-size: ${({ theme }) => theme.fontSize.lg};

  .product-content__title-link {
    display: -webkit-box;
    -webkit-box-orient: vertical;
    overflow: hidden;
    line-clamp: 1;
    -webkit-line-clamp: 1;

    &::first-letter {
      text-transform: capitalize;
    }
  }
`;
