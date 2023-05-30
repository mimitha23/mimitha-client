import styled from "styled-components";
import { animateMoveLeft, animateMoveRight } from "styles/helpers";

export const AllProductsContainer = styled.div`
  padding-top: ${({ theme }) => theme.app.nav_h_full};

  .wrapper-container {
    padding: 0;
  }

  .filter-box__wrapper {
    position: sticky;
    top: ${({ theme }) => theme.app.nav_h};
    transition: all 0.2s linear;
    padding: 3rem;
    width: 100%;
    background: ${({ theme }) => theme.colors.bg};
  }

  .filter-box {
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
    margin-top: 1rem;
    padding: 0 3rem 3rem;
    display: grid;
    gap: 6rem 4rem;
    grid-template-columns: repeat(auto-fit, minmax(28rem, 1fr)); //35
    grid-auto-rows: 45rem;
    ${animateMoveLeft({
      duration: ({ theme }) => theme.app.section_animation_duration,
    })};
  }

  @media (${({ theme }) => theme.media.tablet_sm}) {
    .filter-box {
      animation: none;
    }
  }
`;
