import styled from "styled-components";
import { buttonPrimary } from "styles/helpers";

export const FitViewContainer = styled.div`
  flex: 1;
  min-width: 40rem;
  height: 100%;

  .fit-view__fig-box {
    height: 30vw;
    width: 100%;

    .fit-view__fig {
      overflow: hidden;
      border: 1px solid ${({ theme }) => theme.colors.gray_tint};

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
    margin-top: 3rem;
    display: flex;
    justify-content: space-between;
    gap: 1rem;

    .fit-view__action-btn {
      font-weight: 600;
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
      }
    }
  }
`;
