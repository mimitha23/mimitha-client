import { useAppSelector } from "store/hooks";

import { useFavoritesQuery } from "hooks/api/user";
import { selectAllUserFavoritesIds } from "store/selectors/user/userFavorites.selector";

import {
  HeartIcon,
  ArrowLeftIcon,
  ArrowRightIcon,
} from "components/Layouts/Icons";
import { CircleButton } from "components/Layouts";
import * as Styled from "./styles/ProductViewFigure.styled";

interface ProductViewFigureT {
  alt: string;
  productId: string;
  activeSlide: string;
  assetsLength: number;
  sliderIndex: number;
  setSliderIndex: React.Dispatch<React.SetStateAction<number>>;
  setSliderIndexLastSnapShot: React.Dispatch<React.SetStateAction<number>>;
}

const ProductViewFigure: React.FC<ProductViewFigureT> = (props) => {
  const allUserFavorites = useAppSelector(selectAllUserFavoritesIds);

  const isSavedToFavorites = allUserFavorites.some(
    (product) => product._id === props.productId
  );

  function onHandleSlide(index: number) {
    if (index < 0) {
      props.setSliderIndex(props.assetsLength - 1);
      props.setSliderIndexLastSnapShot(props.assetsLength);
    } else if (index > props.assetsLength - 1) {
      props.setSliderIndex(0);
      props.setSliderIndexLastSnapShot(0);
    } else {
      props.setSliderIndex(index);
      props.setSliderIndexLastSnapShot(props.sliderIndex);
    }
  }

  const { addToFavoritesQuery } = useFavoritesQuery();

  return (
    <Styled.ProductViewFigure>
      <img src={props.activeSlide} alt={props.alt} loading="lazy" />

      <button
        className="slider_btn left"
        onClick={() => onHandleSlide(props.sliderIndex - 1)}
      >
        <ArrowLeftIcon />
      </button>

      <button
        className="slider_btn right"
        onClick={() => onHandleSlide(props.sliderIndex + 1)}
      >
        <ArrowRightIcon />
      </button>

      <CircleButton
        className={isSavedToFavorites ? "is-saved-to-favorites" : ""}
        onClick={() => addToFavoritesQuery({ productId: props.productId })}
      >
        <HeartIcon />
      </CircleButton>
    </Styled.ProductViewFigure>
  );
};

export default ProductViewFigure;
