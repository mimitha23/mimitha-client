import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";

import {
  selectActiveProductHeader,
  selectProductRegistrationId,
} from "store/selectors/activeProduct.selectors";
import { useCurrencyContext } from "providers/CurrencyProvider";
import { useTranslationContext } from "providers/I18nextProvider";
import { useOnStartEdit } from "hooks/events";

import * as Styled from "./styles/ProductHeading.styled";

export default function ProductHeading({ productId }) {
  const { t } = useTranslation();

  const { currentLocale } = useTranslationContext();
  const { currencySymbol, convertPrice } = useCurrencyContext();

  const { title, price, isEditable } = useSelector(selectActiveProductHeader);
  const productRegistrationId = useSelector(selectProductRegistrationId);

  const onStartEdit = useOnStartEdit();

  function onEdit() {
    if (!productId) return;
    onStartEdit({ productId, productRegistrationId });
  }

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
          <button onClick={onEdit} className="edit-link">
            {t("crossover.edit")}
          </button>
        )}
      </div>
    </Styled.ProductHeadingContainer>
  );
}
