import * as Styled from "./styles/GalleryFig.styled";

export default function GalleryFig({ img }) {
  return (
    <Styled.GalleryFig className="gallery-fig">
      <img src={img} alt={img} loading="lazy" className="gallery-fig__img" />
    </Styled.GalleryFig>
  );
}
