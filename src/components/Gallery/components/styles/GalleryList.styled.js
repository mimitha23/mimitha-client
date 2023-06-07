import styled from "styled-components";

export const GalleryList = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(10rem, 1fr));
  grid-auto-rows: 10rem;
  grid-auto-flow: dense;
  gap: 0.5rem;

  .gallery-list__item {
    position: relative;
    transition: all 0.3s ease;

    &:hover {
      .gallery-fig__img {
        transform: scale(1.2);
      }
    }

    &::after {
      content: "";
      position: absolute;
      z-index: -1;
      width: 100%;
      height: 100%;
      left: 0;
      top: 0;
      background: ${({ theme }) => theme.colors.gray_shade}
        url(/assets/mimitha-logo-small.png);
      background-repeat: no-repeat;
      background-position: center;
    }
  }

  .gallery-list__item.gallery-img--portrate {
    grid-column: span 2;
    grid-row: span 4;
  }

  .gallery-list__item.gallery-img--landscape {
    grid-column: span 4;
    grid-row: span 2;
  }

  .gallery-list__item.gallery-img--landscapeLarge {
    grid-column: span 4;
    grid-row: span 2;
  }
`;
