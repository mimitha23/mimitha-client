import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";

import {
  selectActiveProductHeader,
  selectProductRegistrationId,
} from "store/selectors/activeProductSelectors";
import { PATHS } from "config/routes";
import { useCurrencyContext } from "providers/CurrencyProvider";
import { useTranslationContext } from "providers/I18nextProvider";

import * as Styled from "./styles/ProductHeading.styled";

export default function ProductHeading() {
  const { t } = useTranslation();

  const { currencySymbol, convertPrice } = useCurrencyContext();
  const { currentLocale } = useTranslationContext();

  const { title, price, isEditable } = useSelector(selectActiveProductHeader);
  const productRegistrationId = useSelector(selectProductRegistrationId);

  return (
    <Styled.ProductHeadingContainer>
      <h1 className="product-title">
        <strong>{title[currentLocale]}</strong>
      </h1>

      <div className="price-and-edit__container">
        <div className="product-price">
          <span>
            {t("crossover.price")}: {convertPrice(price)} {currencySymbol}
          </span>
        </div>

        {isEditable && (
          <Link
            to={PATHS.edit_product.fullPath({
              productId: productRegistrationId,
            })}
            className="edit-link"
          >
            {t("crossover.edit")}
          </Link>
        )}
      </div>
    </Styled.ProductHeadingContainer>
  );
}
