import styled from "styled-components";

export const EditorViewFigure = styled.figure`
  width: 100%;
  height: 100%;
  position: relative;

  img,
  video {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }

  video {
    position: absolute;
  }

  video.placing {
    z-index: 9;
    visibility: visible;

    &.hidden {
      z-index: 0;
      visibility: hidden;
      pointer-events: none;
    }
  }

  video.pickUp {
    visibility: visible;
    z-index: 9;

    &.hidden {
      visibility: hidden;
      pointer-events: none;
    }
  }
`;
