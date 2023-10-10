import { Link } from "react-router-dom";

import { PATHS } from "config/routes";
import { useTranslationContext } from "providers/I18nextProvider";

import * as Styled from "./styles/ProductTitle.styled";

export default function ProductTitle({ title, productId, linkState }) {
  const { currentLocale } = useTranslationContext();

  return (
    <Styled.ProductTitle className="product-title" title={title[currentLocale]}>
      <Link
        to={PATHS.active_product.fullPath({ productId })}
        className="product-content__title-link"
        state={{ ...linkState }}
      >
        {title[currentLocale]}
      </Link>
    </Styled.ProductTitle>
  );
}
