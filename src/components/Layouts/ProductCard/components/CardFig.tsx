import { useState } from "react";
import { Link } from "react-router-dom";

import { DYNAMIC_PATHS } from "config/paths";
import { useLocationState } from "hooks/utils";
import { useTranslationContext } from "providers/globals/I18nextProvider";

import * as UI from "./index";
import * as Styled from "./styles/CardFig.styled";

import { LocationStateT } from "interface/common.types";
import { ProductTitleT } from "interface/DB/product.types";

interface CardFigT {
  alt: ProductTitleT;
  productId: string;
  showAddToList: boolean;
  thumbnails: Array<string>;
  linkState: Omit<LocationStateT, "sale" | "search">;
}

const CardFig: React.FC<CardFigT> = (props) => {
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
        className="card-fig__link"
        state={setLocationState({ ...props.linkState })}
        to={DYNAMIC_PATHS.active_product_page(props.productId)}
      >
        <img
          loading="lazy"
          alt={props.alt[currentLocale]}
          src={props.thumbnails?.[thumbnailIndex]}
        />

        <UI.SaveToListButtons
          productId={props.productId}
          showAddToList={props.showAddToList}
        />
      </Link>
    </Styled.CardFig>
  );
};

export default CardFig;
