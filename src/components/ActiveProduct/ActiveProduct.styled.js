import styled from "styled-components";
import {
  animateMoveRight,
  animateMoveLeft,
  animateMoveBottom,
} from "styles/helpers";

export const ActiveProductContainer = styled.div`
  padding-top: ${({ theme }) => theme.app.nav_h_full};
  min-height: 100vh;

  [data-user-track-path] {
    position: sticky;
    top: ${({ theme }) => theme.app.nav_h};
    padding: 1rem 3.5rem;
    z-index: 99;
    background: ${({ theme }) => theme.colors.bg};
    transition: all 0.2s;
  }

  div.active-product__fit-buttons--box {
    ${animateMoveBottom({
      duration: ({ theme }) => theme.app.section_animation_duration,
    })};
  }

  .product-main {
    display: flex;
    align-items: flex-start;
    gap: 4rem;
    padding-bottom: 6rem;
    border-bottom: 2px solid ${({ theme }) => theme.colors.text};

    &__product-view {
      flex: 1;
      ${animateMoveRight({
        duration: ({ theme }) => theme.app.section_animation_duration,
      })};
    }

    &__product-info {
      flex: 1;
      max-width: 50%;
      display: flex;
      flex-direction: column;
      gap: 2rem;
      ${animateMoveLeft({
        duration: ({ theme }) => theme.app.section_animation_duration,
      })};
    }

    @media (${({ theme }) => theme.media.desktop}) {
      flex-direction: column;

      &__product-view {
        width: 100%;
      }

      &__product-info {
        max-width: 100%;
        width: 100%;
      }
    }
  }
`;
