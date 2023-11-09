import styled from "styled-components";
import { animateMoveBottom } from "styles/helpers";

export const FitButtons = styled.div`
  ${animateMoveBottom({
    duration: ({ theme }) => theme.app.section_animation_duration,
  })};
`;
