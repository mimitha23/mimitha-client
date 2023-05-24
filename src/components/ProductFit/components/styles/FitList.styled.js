import styled from "styled-components";
import { animateMoveBottom, animateMoveTop, media } from "styles/helpers";

export const FitListContainer = styled.div`
  flex: 2;
  height: 100%;
  display: grid;
  grid-template: repeat(1, max-content 1fr) / repeat() 1, 1fr;
  row-gap: 2.5rem;

  .fit-list__filter-box {
    width: calc(100% - 4rem);
    ${animateMoveBottom({
      duration: ({ theme }) => theme.app.section_animation_duration,
    })};

    [data-filter-container] {
      column-gap: 4rem;
      display: grid;
      grid-template: repeat(2, max-content) / repeat(3, 1fr);

      [data-filter-dropdown],
      [data-filter-dropdown] > * {
        width: 100%;
      }
    }
  }

  .fit-list__products {
    display: grid;
    grid-template-columns: repeat(4, minmax(20rem, 1fr));
    grid-auto-rows: 30rem;
    gap: 2rem;
    padding: 0.5rem;
    height: 100%;
    max-height: 100%;
    overflow: auto;
    ${animateMoveTop({
      duration: ({ theme }) => theme.app.section_animation_duration,
    })};

    &::-webkit-scrollbar {
      display: none;
    }
  }

  ${media.desktopLarge`
    .fit-list__products {
      grid-template-columns: repeat(auto-fit, minmax(22rem, 1fr));
      grid-auto-rows: 25rem;
    }
  `}

  ${media.mobileLarge`
   .fit-list__filter-box{
      [data-filter-container] {
        grid-template: repeat(3, max-content) / repeat(2, 1fr);
      }
    }
  `}

  ${media.mobile`
   .fit-list__filter-box{
      [data-filter-container] {
        grid-template-rows:auto;
        grid-template-columns: repeat(1, 1fr);
      }
    }
  `}
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
