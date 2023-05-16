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
  }

  .polygonal-btn {
    position: relative;
    width: 3rem;
    height: 3rem;
    background: black;
    clip-path: polygon(
      50% 0%,
      90% 20%,
      100% 60%,
      75% 100%,
      25% 100%,
      0% 60%,
      10% 20%
    );

    &::after {
      content: "";
      position: absolute;
      left: 0.1rem;
      top: 0.1rem;
      width: 2.8rem;
      height: 2.8rem;
      background: cyan;
      clip-path: polygon(
        50% 0%,
        90% 20%,
        100% 60%,
        75% 100%,
        25% 100%,
        0% 60%,
        10% 20%
      );
    }
  }

  .bag-icon {
    line-height: 1;
    font-size: 3.2rem;
    transform: translateY(0.25rem);
  }
`;
