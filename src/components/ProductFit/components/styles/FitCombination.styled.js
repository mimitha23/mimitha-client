import styled from "styled-components";
import {
  buttonPrimary,
  animateMoveRight,
  animatePopUpAndScale,
  scrollBar,
} from "styles/helpers";

export const FitCombinationContainer = styled.div`
  flex: 1;
  min-width: 55rem;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: 3rem;
  overflow: hidden;

  .fit-view__figs-box--wrapper {
    border: 1px solid ${({ theme }) => theme.colors.text};
    border-radius: 0.3rem;
    padding-right: 0.5rem;
    height: 100%;
    max-height: 30vw;
    ${animateMoveRight({
      duration: ({ theme }) => theme.app.section_animation_duration,
    })};
  }

  .fit-view__figs-box {
    height: 100%;
    overflow: auto;
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    gap: 2rem;
    padding: 1.5rem;
    ${scrollBar({ marginBlockTop: "0.5rem", marginBlockBottom: "0.5rem" })}
  }

  .fit-view__fig-box {
    width: 15rem;
    height: 15rem;
    cursor: pointer;
    position: relative;

    :hover {
      .fit-view__fig-box__remove-btn--box {
        display: block;
      }

      .fit-view__fig {
        border-color: royalblue;
      }
    }

    .fit-view__fig-box__remove-btn--box {
      display: none;
      position: absolute;
      top: -0.5rem;
      right: -0.5rem;
      width: 2.5rem;
      height: 2.5rem;
      border-radius: 100%;
      border: 1px solid ${({ theme }) => theme.colors.gray_shade};
      overflow: hidden;
      color: red;
      background: ${({ theme }) => theme.colors.bg};

      button {
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
      }
    }

    .fit-view__fig {
      overflow: hidden;
      border: 1px solid ${({ theme }) => theme.colors.gray_tint};
      border-radius: 0.3rem;

      &,
      & img {
        width: 100%;
        height: 100%;
      }

      img {
        object-fit: contain;
      }
    }
  }

  .fit-view__actions-box {
    display: flex;
    justify-content: space-between;
    gap: 1rem;
    ${animatePopUpAndScale({
      duration: ({ theme }) => theme.app.section_animation_duration,
    })};

    .fit-view__action-btn {
      ${buttonPrimary};
      display: flex;
      align-items: center;
      gap: 1rem;
      padding: 1.5rem 3rem;

      &--back span:has(svg) {
        transform: translateY(0.25rem);
      }

      span {
        line-height: 1;
        display: flex;
        align-items: center;
        text-transform: capitalize;
      }
    }
  }

  @media (${({ theme }) => theme.media.desktop}) {
    .fit-view__figs-box {
      max-height: 50vh;
    }
  }

  @media (${({ theme }) => theme.media.tablet_sm}) {
    min-width: 100%;

    .fit-view__actions-box .fit-view__action-btn {
      padding: 1.5rem 3rem;
    }
  }

  @media (${({ theme }) => theme.media.mobile}) {
    .fit-view__actions-box {
      flex-direction: column;

      .fit-view__action-btn {
        justify-content: center;
      }
    }
  }
`;
