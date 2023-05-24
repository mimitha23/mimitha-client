import styled from "styled-components";
import { buttonPrimary, media } from "styles/helpers";

export const CartFooterContainer = styled.footer`
  margin-top: auto;
  border-top: 1px solid ${({ theme }) => theme.colors.text};
  padding-top: 1rem;
  display: flex;
  flex-direction: column;
  gap: 3rem;

  .footer__actions-box,
  .footer__summary-box {
    display: flex;
    justify-content: space-between;
    gap: 1rem;
    padding: 0 4rem;
  }

  .footer__actions-box {
    padding: 0;
  }

  .delivery-price {
    font-weight: 500;
  }

  .cart-footer__btn {
    ${buttonPrimary};
  }

  ${media.tablet`
    .footer__summary-box{
      flex-direction:column;
      padding:0;
    }
  `}
`;
