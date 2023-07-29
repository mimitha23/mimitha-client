import styled, { keyframes } from "styled-components";

const animate_auth_popup = keyframes`
  0%{
    opacity: 0;
    transform: scale(1);
  } 100% {
    opacity: 1;
    transform: scale(50);
  }
`;

const animate_auth_form = keyframes`
  0%{
    opacity: 0;
    transform: translateY(2rem);
  } 100% {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const AuthPopup = styled.div`
  position: fixed;
  z-index: 1000;
  background: transparent;
  inset: 0;
  display: flex;
  justify-content: center;
  align-items: center;

  .animate-layover {
    width: 10rem;
    height: 10rem;
    border-radius: 100%;
    background: ${({ theme }) => theme.gradients.backdrop_gradient};
    animation: ${animate_auth_popup} 0.3s ease forwards;
  }

  .auth-popup__form {
    background: ${({ theme }) => theme.colors.white};
    padding: 6rem 2rem 4rem 2rem;
    border-radius: 1rem;
    width: min(40rem, 100%);
    display: flex;
    flex-direction: column;
    gap: 2.5rem;
    box-shadow: ${({ theme }) => theme.shadow.radial_lg_dark};
    position: relative;
    opacity: 0;
    animation: ${animate_auth_form} 0.2s 0.2s ease-out forwards;
    transition: all 0.3s ease;
    overflow: hidden;

    &.reg {
      max-height: 68rem;
    }

    &.auth {
      max-height: 48rem;
    }

    .auth-popup__close-btn {
      position: absolute;
      top: 1rem;
      right: 1rem;
      font-size: 2.4rem;
      transition: all 0.2s ease;

      &:hover {
        color: ${({ theme }) => theme.colors.blue};
      }
    }

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
          outline: none;
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

        &::placeholder {
          font-style: italic;
          opacity: 0.6;
          font-size: ${({ theme }) => theme.fontSize.sm};
        }
      }

      &--message {
        text-align: center;
        text-wrap: balance;
        font-size: ${({ theme }) => theme.fontSize.sm};
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
      transition: all 0.3s ease-out;

      &:hover {
        filter: brightness(110%);
      }
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

    [data-spinner] {
      position: absolute;
      inset: 0;
      width: auto;
      height: auto;
      background: ${({ theme }) => theme.colors.black_tr_02};
    }
  }
`;
