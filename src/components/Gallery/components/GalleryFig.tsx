import * as Styled from "./styles/GalleryFig.styled";

interface GalleryFigT {
  img: string;
  onOpenImage: (imgSrc: string) => void;
}

const GalleryFig: React.FC<GalleryFigT> = ({ img, onOpenImage }) => {
  const handleOpenImage = () => onOpenImage(img);

  return (
    <Styled.GalleryFig className="gallery-fig" onClick={handleOpenImage}>
      <img src={img} alt={img} loading="lazy" className="gallery-fig__img" />
    </Styled.GalleryFig>
  );
};

export default GalleryFig;
