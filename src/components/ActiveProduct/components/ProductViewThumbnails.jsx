import * as Styled from "./styles/ProductViewThumbnails.styled";

export default function ProductViewThumbnails({
  alt,
  assets,
  sliderRef,
  sliderIndex,
  setSliderIndex,
}) {
  return (
    <Styled.ProductViewThumbnails ref={sliderRef}>
      {assets.map((asset, assetIndex) => (
        <figure
          className={`thumbnail-fig slider-fig--${assetIndex} ${
            assetIndex === sliderIndex ? "active" : ""
          }`}
          key={asset}
          onClick={() => setSliderIndex(assetIndex)}
        >
          <img src={asset} alt={alt} />
        </figure>
      ))}
    </Styled.ProductViewThumbnails>
  );
}
