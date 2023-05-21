import styled from "styled-components";

export const ProductCard = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  font-weight: 500;

  .product-fig {
    width: 100%;
    height: 100%;
    border: 1px solid ${({ theme }) => theme.colors.text};
    border-radius: 0.25rem;
    overflow: hidden;

    a {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 100%;
      height: 100%;

      img {
        width: 100%;
        height: 100%;
        object-fit: contain;
      }
    }
  }

  .product-content {
    width: 100%;
    height: 18rem;
    display: grid;
    grid-template: repeat(4, max-contnet) / repeat(2, 1fr);
    align-items: center;
    justify-content: space-between;
    column-gap: 0.5rem;
    padding: 0.5rem;
  }

  .product-title {
    grid-row: 1;
    grid-column: 1/-1;
    font-weight: 500;
  }

  .product-price {
    grid-row: 2;
    grid-column: 1;
    align-self: self-end;
    padding-bottom: 0.5rem;
    font-size: 1.75rem;

    span {
      font-weight: 700;
      font-size: 2rem;
    }
  }

  .add-to-cart__btn {
    justify-self: end;
    grid-row: 2;
    grid-column: 2;
    width: max-content;
    text-align: center;
    display: flex;
    align-items: flex-end;
    gap: 0.5rem;
    padding-bottom: 0.5rem;
    border-bottom: 1px solid ${({ theme }) => theme.colors.text};

    svg {
      width: 30px;
      height: 30px;
    }
  }

  .product-content__devider {
    align-self: self-start;
    grid-row: 3;
    grid-column: span 2;
    margin-top: 0.5rem;
    width: 100%;
    height: 2px;
    background: ${({ theme }) => theme.colors.text};
  }

  .valute-switch__box {
    align-self: self-end;
    grid-row: 4;
    grid-column: 1;
    display: flex;
    align-items: center;
    gap: 1rem;

    svg {
      width: 2.5rem;
      height: 2.5rem;
      padding: 0.25rem;
      border: 1px solid ${({ theme }) => theme.colors.text};
      border-radius: 0.25rem;
    }
  }

  .product__edit-and--fit__box {
    grid-row: 4;
    grid-column: 2;
    justify-self: end;
    align-self: self-end;
    display: flex;
    align-items: center;
    gap: 1.5rem;
  }

  .edit-btn {
    width: max-content;
    border: 2px solid ${({ theme }) => theme.colors.text};
    border-radius: 0.25rem;

    a {
      display: inline-block;
      padding: 0.5rem 0.75rem;
    }
  }
`;
