import { Link } from "react-router-dom";

import { PATHS } from "config/routes";
import { useTranslationContext } from "providers/I18nextProvider";
import { useLocationState } from "hooks/utils";

import * as Styled from "./styles/CardFig.styled";

export default function CardFig({ productId, img, alt, linkState }) {
  const { setLocationState } = useLocationState();
  const { currentLocale } = useTranslationContext();

  return (
    <Styled.CardFig className="product-fig">
      <Link
        to={PATHS.active_product.fullPath({ productId })}
        state={setLocationState({ ...linkState })}
        className="card-fig__link"
      >
        <img src={img} alt={alt[currentLocale]} loading="lazy" />
      </Link>
    </Styled.CardFig>
  );
}
