import styled from "styled-components";
import { animateMoveLeft, animateMoveRight, media } from "styles/helpers";

export const AllProductsContainer = styled.div`
  padding-top: ${({ theme }) => theme.app.nav_h_full};

  .wrapper-container {
    padding-top: 0;
  }

  .filter-box__wrapper {
    position: sticky;
    top: ${({ theme }) => theme.app.nav_h};
    padding: 4rem 0 2rem;
    width: 100%;
    background: ${({ theme }) => theme.colors.bg};
  }

  .filter-box {
    width: calc(100% - 4rem);
    background: ${({ theme }) => theme.colors.bg};
    ${animateMoveRight({
      duration: ({ theme }) => theme.app.section_animation_duration,
    })};

    [data-filter-container] {
      column-gap: 4rem;
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(16rem, 1fr));
      grid-template-rows: auto;

      [data-filter-dropdown],
      [data-filter-dropdown] > * {
        width: 100%;
      }
    }
  }

  .products-list {
    margin-top: 3rem;
    display: grid;
    gap: 6rem 4rem;
    grid-template-columns: repeat(auto-fit, minmax(35rem, 1fr));
    grid-auto-rows: 58rem;
    ${animateMoveLeft({
      duration: ({ theme }) => theme.app.section_animation_duration,
    })};
  }

  ${media.tablet`
      .products-list{
        grid-template-columns: repeat(auto-fit, minmax(30rem, 1fr));
      }
  `}
`;
