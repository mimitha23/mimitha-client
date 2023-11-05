import { useState } from "react";
import { Link } from "react-router-dom";

import { DYNAMIC_PATHS } from "config/paths";
import { useLocationState } from "hooks/utils";
import { useTranslationContext } from "providers/I18nextProvider";

import * as UI from "./index";
import * as Styled from "./styles/CardFig.styled";

export default function CardFig({
  productId,
  assets,
  alt,
  linkState,
  showAddToList,
}) {
  const { setLocationState } = useLocationState();
  const { currentLocale } = useTranslationContext();

  const [thumbnailIndex, setThumbnailIndex] = useState(0);

  return (
    <Styled.CardFig
      className="product-fig"
      onMouseEnter={() => setThumbnailIndex(1)}
      onMouseLeave={() => setThumbnailIndex(0)}
    >
      <Link
        to={DYNAMIC_PATHS.active_product_page(productId)}
        state={setLocationState({ ...linkState })}
        className="card-fig__link"
      >
        <img
          src={assets?.[thumbnailIndex]}
          alt={alt[currentLocale]}
          loading="lazy"
        />

        <UI.SaveToListButtons
          productId={productId}
          showAddToList={showAddToList}
        />
      </Link>
    </Styled.CardFig>
  );
}
