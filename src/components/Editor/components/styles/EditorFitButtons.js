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
`;
