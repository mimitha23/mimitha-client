import styled from "styled-components";
import { buttonPrimary } from "styles/helpers/components";

export const CardContent = styled.div`
  width: 100%;
  height: 100%;
  /* height: 22rem; */
  max-height: 26rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  padding: 0.5rem;

  .product-title {
    font-weight: 500;
    font-size: ${({ theme }) => theme.fontSize.lg};

    .product-content__title-link {
      display: -webkit-box;
      -webkit-box-orient: vertical;
      overflow: hidden;
      line-clamp: 1;
      -webkit-line-clamp: 1;
    }
  }

  .product-card__price-currency--box {
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

    .valute-switch__box {
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
  }

  .product__sold-out {
    display: flex;
    justify-content: space-between;
    margin-bottom: 1rem;
  }

  .add-to-cart__btn {
    ${buttonPrimary};
    padding: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 4.5rem;
    gap: 1.5rem;
    text-transform: capitalize;
    margin-top: auto;
    border-radius: 0.5rem;
    box-shadow: ${({ theme }) => theme.shadow.bottom_right_md_dark};

    svg {
      width: 2.5rem;
      height: 2.5rem;
    }
  }

  .product-content__devider {
    margin: 0.5rem 0;
    width: 100%;
    height: 2px;
    background: ${({ theme }) => theme.colors.text};
  }

  .product-edit__and__fit-box {
    display: flex;
    align-items: center;
    column-gap: 1rem;
    max-width: 100%;

    .edit-btn {
      ${buttonPrimary};
      padding: 0;
      display: flex;
      align-items: center;
      justify-content: center;
      height: 4.5rem;
      width: 100%;
      text-transform: uppercase;
      box-shadow: ${({ theme }) => theme.shadow.bottom_right_md_dark};

      a {
        display: inline-block;
        padding: 0.5rem 0.5rem;
      }
    }
  }
`;
