import styled from "styled-components";
import { animateMoveRight } from "styles/helpers";

export const EditorViewContainer = styled.div`
  flex: 1;
  height: 30vw;
  border: 1px solid ${({ theme }) => theme.colors.gray_shade};
  border-radius: 0.5rem;
  ${animateMoveRight({
    duration: ({ theme }) => theme.app.section_animation_duration,
  })}

  .editor-fig {
    width: 100%;
    height: 100%;

    img {
      width: 100%;
      height: 100%;
      object-fit: contain;
    }
  }

  @media (${({ theme }) => theme.media.tablet}) {
    flex: unset;
    height: 45vh;
    width: 100%;
  }
`;
