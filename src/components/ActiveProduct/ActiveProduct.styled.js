import styled from "styled-components";
import {
  animateMoveRight,
  animateMoveLeft,
  animateMoveBottom,
} from "styles/helpers";

export const ActiveProductContainer = styled.div`
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
      })}
    }
  }
`;
