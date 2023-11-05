import styled from "styled-components";

export const OTPField = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 0.5rem;

  .otp-inp {
    border: 1px solid ${({ theme }) => theme.colors.gray_shade};
    width: 4rem !important;
    height: 4rem !important;
    outline: none;
    text-align: center;
    border-radius: 0.5rem;

    &::-webkit-inner-spin-button {
      display: none;
    }

    &::placeholder {
      font-weight: bold;
      font-size: ${({ theme }) => theme.fontSize.lg};
      transform: translateY(0.5rem);
    }

    &:focus {
      border: 1px solid ${({ theme }) => theme.colors.blue};
    }
  }
`;
