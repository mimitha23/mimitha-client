import styled from "styled-components";
import { buttonPrimary, animateMoveLeft, animateMoveTop } from "styles/helpers";

export const EditorActionsContainer = styled.div`
  flex: 1;
  height: 100%;

  .editor-actions__list {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    ${animateMoveLeft({
      duration: ({ theme }) => theme.app.section_animation_duration,
    })};
  }

  .finish-btn {
    position: absolute;
    right: 4rem;
    bottom: 3rem;
    ${buttonPrimary};
    ${animateMoveTop({
      duration: ({ theme }) => theme.app.section_animation_duration,
    })}
  }
`;
