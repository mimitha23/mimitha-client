import styled from "styled-components";
import { buttonPrimary } from "styles/helpers";

export const EditorFitButtonsContainer = styled.div`
  margin-bottom: 4rem;
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
    max-height: 30vw;
    padding-top: 3.5rem;

    &--fig {
      width: 100%;
      max-height: calc(30vw - 3.5rem);
      border-radius: 0.5rem;
      overflow: hidden;

      img {
        width: 100%;
        height: 100%;
        object-fit: contain;
      }
    }
  }
`;
