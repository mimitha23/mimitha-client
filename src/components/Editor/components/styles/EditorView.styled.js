import styled from "styled-components";
import { animateMoveRight } from "styles/helpers";

export const EditorViewContainer = styled.div`
  flex: 1;
  height: 30vw;
  border: 1px solid ${({ theme }) => theme.colors.gray_shade};
  border-radius: 0.5rem;
  position: relative;
  ${animateMoveRight({
    duration: ({ theme }) => theme.app.section_animation_duration,
  })}

  .editor-fig {
    width: 100%;
    height: 100%;

    img,
    video {
      width: 100%;
      height: 100%;
      object-fit: contain;
    }
  }

  .editor__view-mode--btn {
    position: absolute;
    bottom: 1rem;
    right: 1rem;
    font-size: 2.5rem;
    width: 4.5rem;
    height: 4.5rem;
    background: ${({ theme }) => theme.colors.black_tr_05};
    color: ${({ theme }) => theme.colors.white};
    border-radius: 100%;
    display: flex;
    align-items: center;
    justify-content: center;

    &.active {
      color: ${({ theme }) => theme.colors.blue};
    }
  }

  @media (${({ theme }) => theme.media.tablet}) {
    flex: unset;
    height: 45vh;
    width: 100%;
  }
`;
