import styled, { keyframes } from "styled-components";

const animate_auth_form = keyframes`
  0%{
    opacity: 0;
    transform: translateY(2rem);
  } 100% {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const FormContainer = styled.form`
  background: ${({ theme }) => theme.colors.white};
  padding: 6rem 2rem 4rem 2rem;
  border-radius: 1rem;
  width: min(42rem, 100%);
  display: flex;
  flex-direction: column;
  gap: 2.5rem;
  box-shadow: ${({ theme }) => theme.shadow.radial_lg_dark};
  position: relative;
  opacity: 0;
  animation: ${animate_auth_form} 0.2s 0.2s ease-out forwards;
  transition: all 0.3s ease;
  overflow: hidden;

  .auth-popup__back-btn,
  .auth-popup__close-btn {
    position: absolute;
    top: 1rem;
    right: 1rem;
    font-size: 2.4rem;
    transition: all 0.2s ease;

    @media (hover: hover) {
      &:hover {
        color: ${({ theme }) => theme.colors.blue};
      }
    }
  }

  .auth-popup__back-btn {
    left: 1rem;
    right: auto;
    display: flex;
    align-items: center;
    gap: 1rem;

    span {
      display: flex;
      align-items: center;
      font-size: ${({ theme }) => theme.fontSize.base};
      color: ${({ theme }) => theme.colors.blue};
      text-decoration: underline;
    }
  }

  @media (${({ theme }) => theme.media.tablet_sm}) {
    width: 100%;
    height: 100%;
    border-radius: 0;
    justify-content: center;
    align-items: center;
    opacity: 1;
    animation: none;
  }
`;
