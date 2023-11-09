import { MutableRefObject } from "react";
import * as Styled from "./styles/ProductViewThumbnails.styled";

interface ProductViewThumbnailsT {
  alt: string;
  sliderIndex: number;
  assets: Array<string>;
  sliderRef: MutableRefObject<null | HTMLUListElement>;
  setSliderIndex: React.Dispatch<React.SetStateAction<number>>;
}

const ProductViewThumbnails: React.FC<ProductViewThumbnailsT> = (props) => {
  return (
    <Styled.ProductViewThumbnails ref={props.sliderRef}>
      {props.assets.map((asset, assetIndex) => (
        <figure
          key={asset}
          onClick={() => props.setSliderIndex(assetIndex)}
          className={`thumbnail-fig slider-fig--${assetIndex} ${
            assetIndex === props.sliderIndex ? "active" : ""
          }`}
        >
          <img src={asset} alt={props.alt} />
        </figure>
      ))}
    </Styled.ProductViewThumbnails>
  );
};

export default ProductViewThumbnails;
