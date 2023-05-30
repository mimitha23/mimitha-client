import styled from "styled-components";

export const CartHeaderContainer = styled.header`
  border-bottom: 1px solid ${({ theme }) => theme.colors.text};
  padding-bottom: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;

  .cart-header__back-btn {
    text-decoration: underline;
    text-transform: capitalize;
  }

  .cart-header__title {
    font-weight: 600;
    font-size: ${({ theme }) => theme.fontSize.h3};
    display: flex;
    align-items: flex-end;
    gap: 1rem;
    text-transform: capitalize;

    &-icon {
      line-height: 1;
      font-size: 3.5rem;
      transform: translateY(0.25rem);
    }
  }
`;
