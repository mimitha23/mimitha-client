import styled from "styled-components";
import { media } from "styles/helpers/media";

export const PopularProducts = styled.div`
  margin: 8rem 0 4rem;
  width: 100%;

  .popular-products__header {
    padding: 3.5rem 1.5rem;
    width: max-content;
    font-size: ${({ theme }) => theme.fontSize.xxl};
    color: ${({ theme }) => theme.colors.bg};
    background-color: ${({ theme }) => theme.colors.text};
    display: flex;
    align-items: center;
    border-radius: 0.25rem;

    p {
      width: 100%;
      text-align: center;
    }
  }

  .popular-products__container {
    margin: 8rem 0 4rem;
    display: grid;
    gap: 10rem;
    grid-template-columns: repeat(auto-fit, minmax(34rem, max-content));
    grid-auto-rows: 45rem;
    justify-content: space-between;
    align-items: center;
  }

  ${media.desktop`
    .popular-products__container{
      /* grid-template-columns: repeat(auto-fit, minmax(3rem, max-content)); */

      [data-product-card]:not(
        :nth-child(1),
        :nth-child(2),
        :nth-child(3),
        :nth-child(4)){
        display:none;
      }
    }
  `}

  ${media.tablet`
    .popular-products__header{
      padding: 2.5rem 1.5rem;
    }

    .popular-products__container{
      margin-top:4rem;
    }
  `}

  ${media.mobileLarge`
    .popular-products__container{
      justify-content:center;
      gap:5rem;
    }
  `}
`;
