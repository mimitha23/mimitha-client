import styled from "styled-components";

export const ProductFooterContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 2rem;
  align-self: flex-end;

  .product-footer__btn {
    display: flex;
    align-items: flex-end;
    gap: 1rem;

    .product-footer__btn-caption {
      text-decoration: underline;
      text-underline-offset: 0.65rem;
      text-transform: capitalize;
      font-size: ${({ theme }) => theme.fontSize.lg};
    }

    .icon {
      line-height: 1;
      font-size: 3.2rem;
      transform: translateY(0.25rem);
    }
  }

  @media (${({ theme }) => theme.media.tablet_sm}) {
    align-self: flex-start;
    align-items: flex-start;

    button > span:first-child {
      order: 2;
    }

    button > span:last-child {
      order: 1;
    }

    .polygonal-btn {
      transform: translateY(0.2rem);
    }
  }
`;
