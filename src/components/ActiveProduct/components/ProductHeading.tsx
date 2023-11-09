import { useTranslation } from "react-i18next";
import { useAppSelector } from "store/hooks";

import {
  selectActiveProductHeader,
  selectProductRegistrationId,
} from "store/selectors/activeProduct.selectors";
import { useOnStartEdit } from "hooks/events";
import { useCurrencyContext } from "providers/globals/CurrencyProvider";
import { useTranslationContext } from "providers/globals/I18nextProvider";

import * as Styled from "./styles/ProductHeading.styled";

interface ProductHeadingT {
  productId: string;
}

const ProductHeading: React.FC<ProductHeadingT> = ({ productId }) => {
  const { t } = useTranslation();

  const { currentLocale } = useTranslationContext();
  const { currencySymbol, convertPrice } = useCurrencyContext();

  const productRegistrationId = useAppSelector(selectProductRegistrationId);

  const { title, price, isEditable } = useAppSelector(
    selectActiveProductHeader
  );

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
};

export default ProductHeading;
