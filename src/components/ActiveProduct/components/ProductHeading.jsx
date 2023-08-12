import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useSelector, useDispatch } from "react-redux";

import {
  selectActiveProductHeader,
  selectProductRegistrationId,
} from "store/selectors/activeProductSelectors";
import { PATHS } from "config/routes";
import { editorActions } from "store/reducers/editorReducer";
import { useCurrencyContext } from "providers/CurrencyProvider";
import { useTranslationContext } from "providers/I18nextProvider";

import * as Styled from "./styles/ProductHeading.styled";

export default function ProductHeading({ productId }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { t } = useTranslation();

  const { currentLocale } = useTranslationContext();
  const { currencySymbol, convertPrice } = useCurrencyContext();

  const { title, price, isEditable } = useSelector(selectActiveProductHeader);
  const productRegistrationId = useSelector(selectProductRegistrationId);

  function onEdit() {
    navigate(
      PATHS.edit_product.fullPath({
        productId: productRegistrationId,
      })
    );

    dispatch(editorActions.setActiveConfigId(productId));
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
