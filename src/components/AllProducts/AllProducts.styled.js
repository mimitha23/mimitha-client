import styled from "styled-components";
import { animateMoveLeft, animateMoveRight } from "styles/helpers";

export const AllProductsContainer = styled.div`
  padding-top: ${({ theme }) => theme.app.nav_h_full};

  .wrapper-container {
    padding-top: 0;
  }

  .filter-box {
    position: sticky;
    top: ${({ theme }) => theme.app.nav_h};
    padding: 4rem 0 2rem;
    background: ${({ theme }) => theme.colors.bg};
    ${animateMoveRight({
      duration: ({ theme }) => theme.app.section_animation_duration,
    })};
  }

  .products-list {
    margin-top: 3rem;
    display: grid;
    gap: 6rem 4rem;
    grid-template-columns: repeat(4, 1fr);
    grid-auto-rows: 58rem;
    ${animateMoveLeft({
      duration: ({ theme }) => theme.app.section_animation_duration,
    })};
  }
`;
