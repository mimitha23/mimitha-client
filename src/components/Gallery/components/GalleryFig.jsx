import * as Styled from "./styles/GalleryFig.styled";

export default function GalleryFig({ children, img }) {
  return (
    <Styled.GalleryFig className="gallery-fig">
      <img src={img} alt={img} />
      {children}
    </Styled.GalleryFig>
  );
}
