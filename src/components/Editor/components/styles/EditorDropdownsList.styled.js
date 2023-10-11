import styled from "styled-components";
import { animateMoveLeft } from "styles/helpers";

export const EditorDropdownsList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  ${animateMoveLeft({
    duration: ({ theme }) => theme.app.section_animation_duration,
  })};
`;
