import styled from "styled-components";
import { animateMoveLeft } from "styles/helpers";

export const AllProductsContainer = styled.main`
  padding-top: ${({ theme }) => theme.app.nav_h};
  min-height: 100vh;

  .wrapper-container {
    padding: 0;
  }

  .all-products__header {
    width: 100%;
    position: sticky;
    z-index: 9;
    top: ${({ theme }) => theme.app.nav_h};
    display: flex;
    flex-direction: column;
    gap: 2rem;
    padding: 1rem 3rem 2rem 3rem;
    background: ${({ theme }) => theme.colors.bg};
    box-shadow: 0 1rem 1rem rgba(0, 0, 0, 0.3);
    transition: all 0.2s linear;

    @media (${({ theme }) => theme.media.mobile}) {
      padding: 1rem;
    }

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
    margin-top: 4rem;
    padding: 0 3rem 3rem;
    display: grid;
    gap: 6rem 4rem;
    grid-template-columns: repeat(auto-fit, minmax(32rem, max-content));
    justify-content: space-between;
    ${animateMoveLeft({
      duration: ({ theme }) => theme.app.section_animation_duration,
    })};

    @media (${({ theme }) => theme.media.mobile}) {
      grid-template-columns: repeat(auto-fit, minmax(32rem, 1fr));
      padding: 0 1rem 2rem;
    }
  }

  @media (${({ theme }) => theme.media.tablet_sm}) {
    .filter-box {
      animation: none;
    }
  }
`;
