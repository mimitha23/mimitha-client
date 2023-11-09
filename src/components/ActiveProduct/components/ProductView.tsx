/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useRef, useEffect } from "react";
import { useAppSelector } from "store/hooks";

import { useTranslationContext } from "providers/globals/I18nextProvider";
import { selectActiveProductAssets } from "store/selectors/activeProduct.selectors";
import controlSliderScrollBehavior from "./functions/controlSliderScrollBehavior";

import * as UI from "./index";
import * as Styled from "./styles/ProductView.styled";

interface ProductViewT {
  productId: string;
}

const ProductView: React.FC<ProductViewT> = ({ productId }) => {
  const { currentLocale } = useTranslationContext();

  const { assets, alt } = useAppSelector(selectActiveProductAssets);

  const [sliderIndex, setSliderIndex] = useState(0);
  const [sliderIndexLastSnapShot, setSliderIndexLastSnapShot] = useState(0);

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
    <Styled.ProductView>
      <UI.ProductViewThumbnails
        alt={alt[currentLocale]}
        assets={assets}
        sliderRef={slider_list_ref}
        sliderIndex={sliderIndex}
        setSliderIndex={setSliderIndex}
      />

      <UI.ProductViewFigure
        alt={alt[currentLocale]}
        productId={productId}
        activeSlide={assets[sliderIndex]}
        assetsLength={assets.length}
        sliderIndex={sliderIndex}
        setSliderIndex={setSliderIndex}
        setSliderIndexLastSnapShot={setSliderIndexLastSnapShot}
      />
    </Styled.ProductView>
  );
};

export default ProductView;
