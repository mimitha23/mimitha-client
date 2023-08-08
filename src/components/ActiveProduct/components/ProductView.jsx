import { useState, useRef, useEffect } from "react";
import { useSelector } from "react-redux";

import { useFavoritesQuery } from "hooks/api/user";
import { useTranslationContext } from "providers/I18nextProvider";
import { selectActiveProductAssets } from "store/selectors/activeProductSelectors";
import { selectAllUserFavoritesIds } from "store/selectors/user/userFavoritesSelector";

import controlSliderScrollBehavior from "./functions/controlSliderScrollBehavior";

import { CircleButton } from "components/Layouts";
import { ArrowLeftIcon, ArrowRightIcon } from "components/Layouts/Icons";
import { HeartIcon } from "components/Layouts/Icons";
import * as Styled from "./styles/ProductView.styled";

export default function ProductView({ productId }) {
  const { currentLocale } = useTranslationContext();
  const { assets, alt } = useSelector(selectActiveProductAssets);

  const { addToFavoritesQuery } = useFavoritesQuery();

  const allUserFavorites = useSelector(selectAllUserFavoritesIds);
  const isSavedToFavorites = allUserFavorites.some(
    (product) => product._id === productId
  );

  const [sliderIndex, setSliderIndex] = useState(0);
  const [sliderIndexLastSnapShot, setSliderIndexLastSnapShot] = useState(0);

  function onHandleSlide(index) {
    if (index < 0) {
      setSliderIndex(assets.length - 1);
      setSliderIndexLastSnapShot(assets.length);
    } else if (index > assets.length - 1) {
      setSliderIndex(0);
      setSliderIndexLastSnapShot(0);
    } else {
      setSliderIndex(index);
      setSliderIndexLastSnapShot(sliderIndex);
    }
  }

  const slider_list_ref = useRef(null);

  useEffect(() => {
    if (!slider_list_ref.current) return;

    controlSliderScrollBehavior({
      sliderIndex,
      sliderIndexLastSnapShot,
      sliderContainer: slider_list_ref.current,
      itemsQuantity: assets.length,
    });
  }, [sliderIndex, sliderIndexLastSnapShot]);

  return (
    <Styled.ProductView className="editor-view">
      <ul className="slider_list" ref={slider_list_ref}>
        {assets.map((asset, assetIndex) => (
          <figure
            className={`slider-fig--${assetIndex} ${
              assetIndex === sliderIndex ? "active" : ""
            }`}
            key={asset}
            onClick={() => setSliderIndex(assetIndex)}
          >
            <img src={asset} alt={alt[currentLocale]} />
          </figure>
        ))}
      </ul>

      <figure className="product-fig">
        <img
          src={assets[sliderIndex]}
          alt={alt[currentLocale]}
          loading="lazy"
        />

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
      </figure>
    </Styled.ProductView>
  );
}
