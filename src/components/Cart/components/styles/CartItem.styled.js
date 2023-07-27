import styled from "styled-components";

export const CartItem = styled.div`
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
    position: relative;
    cursor: pointer;

    &--layover {
      position: absolute;
      inset: 0;
      bottom: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      background: ${({ theme }) => theme.colors.black_tr_05};
      color: ${({ theme }) => theme.colors.white};
      transition: all 0.3s ease;

      a {
        transition: all 0.15s ease-out;
        opacity: 0;
        pointer-events: none;
        text-align: center;
      }
    }

    &:hover .cart-item__fig--layover {
      bottom: 0;

      a {
        pointer-events: all;
        opacity: 1;
        transition-delay: 0.3s;
      }
    }
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
        text-transform: capitalize;
      }

      &--content {
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 0.5rem;
      }

      &__title-box {
        text-align: center;

        div span {
          font-size: ${({ theme }) => theme.fontSize.md};

          &::first-letter {
            text-transform: capitalize;
          }
        }
      }

      &__size-box {
        div span {
          text-transform: uppercase;
        }
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
        transition: opacity 0.2s ease;

        &:disabled {
          opacity: 0.5;
          cursor: none;
        }
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
    transition: all 0.15s ease;

    &:hover {
      color: ${({ theme }) => theme.colors.blue};
      transform: scale(1.25);
    }
  }

  @media (${({ theme }) => theme.media.tablet}) {
    flex-direction: column;
    justify-content: flex-start;
    padding-right: 1rem;

    .cart-item__fig {
      width: 100%;
      height: 40rem;
      display: flex;
      justify-content: center;

      img {
        height: 100%;
        object-fit: contain;
      }
    }

    .cart-item__details {
      width: 100%;
      height: max-content;
      border: none;
      display: grid;
      grid-template: repeat(5, max-content) / repeat(2, 1fr);

      &-box {
        width: 100%;
        border: none !important;
        flex-direction: row;
        align-items: center;
        grid-column: span 2;

        &__title-box {
          grid-row: 1;
          flex-direction: column;
          align-items: flex-start;
        }

        &__amount-box {
          grid-row: 5;
        }

        &__size-box {
          grid-row: 2;
        }

        &--head {
          border: none;
          text-align: start;
        }

        &--content {
          justify-content: flex-start;
        }
      }
    }
  }

  @media (${({ theme }) => theme.media.tablet_sm}) {
    .cart-item__fig {
      height: 25rem;
    }
  }
`;
