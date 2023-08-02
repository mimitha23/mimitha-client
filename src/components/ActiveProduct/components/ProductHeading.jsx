import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { useTranslationContext } from "providers/I18nextProvider";

import { selectActiveProductHeader } from "store/selectors/activeProductSelectors";

import { PATHS } from "config/routes";

import { DollarIcon } from "components/Layouts/Icons";
import * as Styled from "./styles/ProductHeading.styled";

export default function ProductHeading({ productId }) {
  const { currentLocale } = useTranslationContext();
  const { t } = useTranslation();

  const { title, price, isEditable } = useSelector(selectActiveProductHeader);

  return (
    <Styled.ProductHeadingContainer>
      <h1 className="product-title">
        <strong>{title[currentLocale]}</strong>
      </h1>

      <div className="price-and-edit__container">
        <div className="product-price">
          <span>
            {t("crossover.price")}: {price} ₾
          </span>
          <span>
            <DollarIcon />
          </span>
        </div>

        {isEditable && (
          <Link
            to={PATHS.edit_product.fullPath({ productId })}
            className="edit-link"
          >
            {t("crossover.edit")}
          </Link>
        )}
      </div>
    </Styled.ProductHeadingContainer>
  );
}
