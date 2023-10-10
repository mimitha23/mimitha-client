import { useSelector } from "react-redux";

import { useFavoritesQuery } from "hooks/api/user";
import { selectAllUserFavoritesIds } from "store/selectors/user/userFavorites.selector";

import {
  HeartIcon,
  ArrowLeftIcon,
  ArrowRightIcon,
} from "components/Layouts/Icons";
import { CircleButton } from "components/Layouts";
import * as Styled from "./styles/ProductViewFigure.styled";

export default function ProductViewFigure({
  alt,
  productId,
  activeSlide,
  assetsLength,
  sliderIndex,
  setSliderIndex,
  setSliderIndexLastSnapShot,
}) {
  const allUserFavorites = useSelector(selectAllUserFavoritesIds);
  const isSavedToFavorites = allUserFavorites.some(
    (product) => product._id === productId
  );

  function onHandleSlide(index) {
    if (index < 0) {
      setSliderIndex(assetsLength - 1);
      setSliderIndexLastSnapShot(assetsLength);
    } else if (index > assetsLength - 1) {
      setSliderIndex(0);
      setSliderIndexLastSnapShot(0);
    } else {
      setSliderIndex(index);
      setSliderIndexLastSnapShot(sliderIndex);
    }
  }

  const { addToFavoritesQuery } = useFavoritesQuery();

  return (
    <Styled.ProductViewFigure>
      <img src={activeSlide} alt={alt} loading="lazy" />

      <button
        className="slider_btn left"
        onClick={() => onHandleSlide(sliderIndex - 1)}
      >
        <ArrowLeftIcon />
      </button>

      <button
        className="slider_btn right"
        onClick={() => onHandleSlide(sliderIndex + 1)}
      >
        <ArrowRightIcon />
      </button>

      <CircleButton
        className={isSavedToFavorites ? "is-saved-to-favorites" : ""}
        onClick={() => addToFavoritesQuery({ productId })}
      >
        <HeartIcon />
      </CircleButton>
    </Styled.ProductViewFigure>
  );
}
