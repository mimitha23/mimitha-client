import styled from "styled-components";
import { animateMoveBottom, animateMoveTop } from "styles/helpers";

export const FitListContainer = styled.div`
  flex: 2;

  .fit-list__filter-box {
    padding-bottom: 2.5rem;
    ${animateMoveBottom({
      duration: ({ theme }) => theme.app.section_animation_duration,
    })};

    [data-filter-container] {
      column-gap: 4rem;
    }
  }

  .fit-list__products {
    display: grid;
    grid-template-columns: repeat(4, minmax(20rem, 1fr));
    grid-auto-rows: 30rem;
    gap: 2rem;
    padding: 0.5rem;
    max-height: calc(100vh - ${({ theme }) => theme.app.nav_h} - 4rem - 10rem);
    overflow: auto;
    ${animateMoveTop({
      duration: ({ theme }) => theme.app.section_animation_duration,
    })};

    &::-webkit-scrollbar {
      display: none;
    }
  }
`;

export const FitListCardContainer = styled.div`
  cursor: pointer;
  border-radius: 0.3rem;
  background: ${({ theme }) => theme.colors.bg};
  box-shadow: ${({ theme }) =>
    theme.mode === "light"
      ? theme.shadow.radial_sm_dark
      : theme.shadow.radial_sm_light};

  .fit-list--card__fig {
    overflow: hidden;

    &,
    & img {
      width: 100%;
      height: 100%;
    }

    img {
      object-fit: contain;
    }
  }
`;
