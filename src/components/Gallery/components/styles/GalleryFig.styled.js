import styled from "styled-components";

export const GalleryFig = styled.figure`
  position: relative;
  border-radius: 0.5rem;
  overflow: hidden;
  cursor: pointer;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    backface-visibility: hidden;
    transition: all 0.25s ease;
  }

  &.gallery-img--portrate {
    grid-column: span 2;
    grid-row: span 4;
  }

  &.gallery-img--landscape {
    grid-column: span 4;
    grid-row: span 2;
  }

  &.gallery-img--landscapeLarge {
    grid-column: span 6;
    grid-row: span 4;
  }

  :hover {
    img {
      transform: scale(1.15);
    }
  }
`;
