import styled from "styled-components";

export const ProductHeadingContainer = styled.div`
  margin: 20px 20px 0 0;

  .product-title {
    padding-bottom: 10px;
    font-size: ${({ theme }) => theme.fontSize.lg};
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
    padding: 1rem 7rem;
    font-size: ${({ theme }) => theme.fontSize.lg};
    font-weight: 500;
    text-transform: uppercase;
    border-radius: 15rem;
    background: ${({ theme }) => theme.colors.text};
    color: ${({ theme }) => theme.colors.bg};
    transition: all 0.2s ease;

    :hover {
      box-shadow: ${({ theme }) => theme.shadow.bottom_right_md};
    }
  }

  .product-price {
    width: fit-content;
    margin: 10px 0 10px 0;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 0.5rem;

    span {
      padding: 0.5rem;
      color: ${({ theme }) => theme.colors.text};
      font-size: ${({ theme }) => theme.fontSize.sm};
      font-weight: 500;
      border: 2px solid ${({ theme }) => theme.colors.text};
    }
  }
`;
