import styled from "styled-components";

export const CartItemContainer = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 1rem;
  border: 1px solid ${({ theme }) => theme.colors.text};
  padding: 1rem;
  padding-right: 3rem;
  border-radius: 0.5rem;
  position: relative;

  .cart-item__fig {
    width: 12rem;
    height: 12rem;
    overflow: hidden;
    border-radius: 0.5rem;
  }

  .cart-item__details {
    height: 100%;
    width: 100%;
    padding: 0 1rem;
    border-left: 1px solid ${({ theme }) => theme.colors.text};
    display: flex;
    align-items: flex-start;
    gap: 1rem;
    justify-content: space-between;

    &-box {
      width: 100%;
      height: 100%;
      padding: 0 1rem 0 0;
      display: flex;
      flex-direction: column;
      overflow: hidden;

      &:not(:last-child) {
        border-right: 1px solid ${({ theme }) => theme.colors.gray_shade};
      }

      &--head {
        width: 100%;
        display: inline-block;
        text-align: center;
        font-weight: 500;
        padding-bottom: 0.5rem;
        border-bottom: 1px solid ${({ theme }) => theme.colors.gray_shade};
      }

      &--content {
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 0.5rem;
      }
    }

    .cart-item__details-box--content__size {
      width: max-content;
      padding: 0.5rem 1rem;
      border-radius: 0.25rem;
      background: ${({ theme }) => theme.colors.gray_tint};
      border: 1px solid ${({ theme }) => theme.colors.black};
    }

    .cart-item__details-box--content__product-amount--box {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 1.5rem;

      button {
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 2rem;
      }

      input {
        width: 4rem;
        height: 3rem;
        border: 1px solid ${({ theme }) => theme.colors.text};
        border-radius: 0.4rem;
        text-align: center;

        &::-webkit-inner-spin-button {
          display: none;
        }
      }
    }
  }

  .cart-item__remove-btn {
    position: absolute;
    top: 1rem;
    right: 1rem;
    font-size: 2rem;
  }
`;
