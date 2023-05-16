import styled from "styled-components";
import { buttonPrimary } from "styles/helpers";

export const EditorActionsContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  height: 100%;

  .finish-btn {
    position: absolute;
    right: 4rem;
    bottom: 3rem;
    ${buttonPrimary};
  }
`;
