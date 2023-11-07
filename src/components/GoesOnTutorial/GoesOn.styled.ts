import styled from "styled-components";
import { buttonPrimary } from "styles/helpers";

export const GoesOn = styled.main`
  padding: 6rem 1rem;
  padding-top: calc(${({ theme }) => theme.app.nav_h} + 2rem);
  min-height: 100vh;
  display: flex;

  .generator,
  .generator_result {
    flex: 1;
  }

  .generator {
    display: flex;
    flex-direction: column;

    &__body-part {
      display: flex;
      align-items: center;
      gap: 4rem;

      &__fig-box {
        width: 30rem;
        display: flex;
        justify-content: center;

        .generator__body-part__fig {
          overflow: hidden;

          img {
            width: 100%;
            height: 100%;
            object-fit: contain;
          }
        }
      }

      &--edit,
      &--block {
        font-size: 2.5rem;
      }

      &--details {
        &__box-label {
          font-weight: 500;
        }
      }
    }

    &-hat .generator__body-part__fig-box .generator__body-part__fig {
      height: 12rem;
    }

    &-top .generator__body-part__fig-box .generator__body-part__fig {
      height: 18rem;
    }

    &-trousers .generator__body-part__fig-box .generator__body-part__fig {
      height: 22rem;
    }

    &-shoes .generator__body-part__fig-box .generator__body-part__fig {
      height: 12rem;
    }

    .generate-btn {
      ${buttonPrimary};
      align-self: center;
      margin-top: 4rem;
      width: 100%;
      padding: 2rem 0;
      text-transform: uppercase;
    }
  }

  .generator_result {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    padding: 0 2rem;

    &-fig--container {
      height: 30vw;
      border-radius: 0.5rem;
      border: 1px solid ${({ theme }) => theme.colors.gray_shade};

      .generator_result-fig {
        width: 100%;
        height: 100%;
        overflow: hidden;

        img {
          width: 100%;
          height: 100%;
          object-fit: contain;
        }
      }
    }

    &-product--info {
      &__box {
        display: flex;
        align-items: center;
        gap: 1rem;

        span:first-child {
          text-transform: capitalize;
          font-weight: 500;
        }
      }
    }

    &-actions {
      align-self: flex-end;
      display: flex;
      gap: 2rem;
      margin-top: auto;

      &--btn {
        ${buttonPrimary};
        text-transform: capitalize;
      }
    }
  }
`;
