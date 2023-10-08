import { useState } from "react";
import { Link } from "react-router-dom";

import { PATHS } from "config/routes";
import { useLocationState } from "hooks/utils";
import { useTranslationContext } from "providers/I18nextProvider";

import SaveToListButtons from "./SaveToListButtons";
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
        to={PATHS.active_product.fullPath({ productId })}
        state={setLocationState({ ...linkState })}
        className="card-fig__link"
      >
        <img
          src={assets?.[thumbnailIndex]}
          alt={alt[currentLocale]}
          loading="lazy"
        />

        <SaveToListButtons
          productId={productId}
          showAddToList={showAddToList}
        />
      </Link>
    </Styled.CardFig>
  );
}
