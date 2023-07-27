import styled from "styled-components";

export const AuthPopup = styled.div`
  position: fixed;
  z-index: 1000;
  background: ${({ theme }) => theme.gradients.backdrop_gradient};
  inset: 0;
  display: flex;
  justify-content: center;
  align-items: center;

  .auth-popup__form {
    background: ${({ theme }) => theme.colors.white};
    padding: 5rem 2rem;
    border-radius: 1rem;
    width: min(40rem, 100%);
    display: flex;
    flex-direction: column;
    gap: 2.5rem;
    box-shadow: ${({ theme }) => theme.shadow.radial_lg_dark};

    &-field {
      display: flex;
      flex-direction: column;
      gap: 0.5rem;
      position: relative;

      &--label {
        font-size: ${({ theme }) => theme.fontSize.md};
        font-weight: 600;
        margin-left: 0.5rem;
        position: absolute;
        background: ${({ theme }) => theme.colors.bg};
        padding: 0 0.45rem;
        transform: translate(0.25rem, -60%);
      }

      &--input---box {
        border: 1px solid ${({ theme }) => theme.colors.gray_shade};
        display: flex;
        align-items: center;
        padding-right: 1rem;
        border-radius: 0.5rem;

        button {
          font-size: 2.2rem;
          transform: translateY(0.25rem);
        }
      }

      &--input {
        -webkit-appearance: none;
        appearance: none;
        width: 100%;
        height: 4rem;
        padding: 0.5rem 1rem;
        outline: none;
        background-color: ${({ theme }) => theme.colors.white};
        border-radius: inherit;

        &:-webkit-autofill {
          -webkit-box-shadow: 0 0 0 30px white inset !important;
        }
      }

      &--message {
        text-align: center;
        font-size: ${({ theme }) => theme.fontSize.md};
        color: ${({ theme }) => theme.colors.red};
      }
    }

    .login__register__box {
      display: flex;
      flex-direction: column;
      gap: 0.5rem;

      .registration-suggestion {
        color: ${({ theme }) => theme.colors.blue};
        font-size: ${({ theme }) => theme.fontSize.md};
        text-align: center;

        button {
          text-decoration: underline;
          cursor: pointer;
        }
      }
    }

    .login-btn {
      background: ${({ theme }) => theme.colors.blue};
      color: ${({ theme }) => theme.colors.white};
      height: 4rem;
      border-radius: 0.5rem;
    }

    .google-login--btn {
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 1rem;

      span:last-child {
        transform: translateY(0.2rem);
      }
    }

    .auth-popup__form-devider {
      display: flex;
      align-items: center;
      gap: 0.75rem;

      hr {
        width: 100%;
        height: 1px;
      }

      span {
        transform: translateY(-20%);
      }
    }
  }
`;
