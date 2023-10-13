import styled from "styled-components";

export const FormInputField = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  position: relative;

  @media (${({ theme }) => theme.media.tablet_sm}) {
    width: ${({ theme }) => theme.app.form_field_w_tablet};
  }

  .form-field__label {
    font-size: ${({ theme }) => theme.fontSize.md};
    font-weight: 600;
    margin-left: 0.5rem;
    position: absolute;
    background: ${({ theme }) => theme.colors.bg};
    padding: 0 0.45rem;
    transform: translate(0.25rem, -60%);
  }

  .form-field__input-box {
    border: 1px solid ${({ theme }) => theme.colors.gray_shade};
    display: flex;
    align-items: center;
    padding-right: 1rem;
    border-radius: 0.5rem;
  }

  .form-field__input {
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
`;
