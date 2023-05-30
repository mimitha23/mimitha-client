import styled from "styled-components";
import { buttonPrimary } from "styles/helpers/components";

export const CardContent = styled.div`
  width: 100%;
  max-height: 18rem;
  display: grid;
  grid-template: repeat(5, max-contnet) / repeat(2, 1fr);
  align-items: center;
  justify-content: space-between;
  column-gap: 0.5rem;
  padding: 0.5rem;

  .product-title {
    grid-row: 1;
    grid-column: span 2;
    font-weight: 500;
    font-size: ${({ theme }) => theme.fontSize.lg};
  }

  .product-price {
    grid-row: 2;
    grid-column: 1;
    align-self: self-end;
    padding-bottom: 0.5rem;
    font-size: 1.75rem;
    text-transform: capitalize;
    font-size: ${({ theme }) => theme.fontSize.base};

    span {
      font-weight: 700;
      font-size: ${({ theme }) => theme.fontSize.base};
    }
  }

  .add-to-cart__btn {
    grid-row: 3;
    grid-column: span 2;
    ${buttonPrimary};
    padding: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 4rem;
    gap: 1.5rem;
    text-transform: capitalize;
    margin-top: 1rem;

    svg {
      width: 2.5rem;
      height: 2.5rem;
    }

    :hover {
      background-color: ${({ theme }) => theme.colors.text};
      color: ${({ theme }) => theme.colors.bg};
      box-shadow: none;
    }
  }

  .product-content__devider {
    align-self: self-start;
    grid-row: 4;
    grid-column: span 2;
    margin-top: 0.5rem;
    width: 100%;
    height: 2px;
    background: ${({ theme }) => theme.colors.text};
  }

  .valute-switch__box {
    align-self: self-end;
    justify-self: end;
    display: flex;
    align-items: center;
    gap: 1rem;
    grid-row: 2;
    grid-column: 2;

    svg {
      width: 2.5rem;
      height: 2.5rem;
      padding: 0.25rem;
      border: 1px solid ${({ theme }) => theme.colors.text};
      border-radius: 0.25rem;
    }
  }

  .product-edit__and__fit-box {
    grid-row: 5;
    grid-column: span 2;
    justify-content: space-between;
    align-self: self-end;
    display: flex;
    align-items: center;
    column-gap: 1rem;
    padding-top: 0.5rem;
    max-width: 100%;
    overflow: hidden;
  }

  .edit-btn {
    ${buttonPrimary};
    padding: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 4rem;
    width: 100%;
    text-transform: uppercase;

    :hover {
      background-color: ${({ theme }) => theme.colors.text};
      color: ${({ theme }) => theme.colors.bg};
      box-shadow: none;
    }

    a {
      display: inline-block;
      padding: 0.5rem 0.5rem;
    }
  }
`;
