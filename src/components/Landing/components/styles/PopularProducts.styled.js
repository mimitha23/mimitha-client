import styled from "styled-components";

export const PopularProducts = styled.div`
  margin: 8rem 0 4rem;
  width: 100%;

  .popular-products__header {
    padding: 2rem 5rem;
    width: max-content;
    font-size: ${({ theme }) => theme.fontSize.xxl};
    color: ${({ theme }) => theme.colors.bg};
    background-color: ${({ theme }) => theme.colors.text};
    display: flex;
    align-items: center;
    border-radius: 0.5rem;

    p {
      width: 100%;
      text-align: center;
    }
  }

  .popular-products__container {
    margin: 4rem 0;
    display: grid;
    gap: 5rem;
    grid-template-columns: repeat(auto-fit, minmax(28rem, max-content));
    grid-auto-rows: 36rem;
    justify-content: space-between;
    align-items: center;
  }

  @media (${({ theme }) => theme.media.desktop}) {
    .popular-products__container {
      [data-product-card]:not(
          :nth-child(1),
          :nth-child(2),
          :nth-child(3),
          :nth-child(4)
        ) {
        display: none;
      }
    }
  }

  @media (${({ theme }) => theme.media.tablet}) {
    .popular-products__header {
      padding: 2.5rem 1.5rem;
    }

    .popular-products__container {
      margin-top: 4rem;
    }
  }

  @media (${({ theme }) => theme.media.tablet_sm}) {
    .popular-products__container {
      justify-content: center;
      gap: 5rem;
    }
  }

  @media (${({ theme }) => theme.media.mobile}) {
    .popular-products__container {
      grid-template-columns: repeat(auto-fit, minmax(28rem, 1fr));
    }
  }
`;
