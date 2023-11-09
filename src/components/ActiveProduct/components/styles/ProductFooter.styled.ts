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
    position: relative;

    &.active {
      color: ${({ theme }) => theme.colors.blue};
    }

    &-caption {
      text-decoration: underline;
      text-underline-offset: 0.65rem;
      text-transform: capitalize;
      font-size: ${({ theme }) => theme.fontSize.lg};
    }

    &-badge {
      position: absolute;
      top: 0;
      right: 0;
      transform: translate(50%, -30%);
      width: 2rem;
      height: 2rem;
      background: ${({ theme }) => theme.colors.text};
      color: ${({ theme }) => theme.colors.bg};
      border-radius: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: ${({ theme }) => theme.fontSize.sm};
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
