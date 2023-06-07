import styled from "styled-components";

export const GalleryFig = styled.figure`
  width: 100%;
  height: 100%;
  border-radius: 0.5rem;
  overflow: hidden;
  cursor: pointer;

  .gallery-fig__img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
    transition: transform 0.3s ease;
    pointer-events: none;
  }
`;
