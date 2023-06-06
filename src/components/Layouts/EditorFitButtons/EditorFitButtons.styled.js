import styled from "styled-components";
import { buttonPrimary } from "styles/helpers";

export const EditorFitButtonsContainer = styled.div`
  margin-bottom: 4rem;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 4rem;

  .fit-btn {
    ${buttonPrimary};
    text-transform: capitalize;
  }

  .fit-product__modal-box {
    min-width: 5rem;
    min-height: 5rem;
    max-width: 50rem;
    max-height: 90vh;
    padding-top: 1rem;

    &--fig {
      width: 100%;
      max-height: calc(90vh - 3.5rem);
      border-radius: 0.5rem;
      overflow: hidden;

      img {
        width: 100%;
        height: 100%;
        object-fit: contain;
      }
    }
  }

  @media (${({ theme }) => theme.media.tablet_sm}) {
    .fit-product__modal-box {
      max-width: 48rem;
    }
  }

  @media (${({ theme }) => theme.media.mobile}) {
    justify-content: space-between;
    gap: 1rem;

    .fit-product__modal-box {
      max-width: calc(100vw - 2rem);
    }
  }
`;
