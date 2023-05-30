import { useTranslation } from "react-i18next";

import * as Styled from "./styles/CartFooter.styled";

export default function CartFooter({ onBuy }) {
  const { t } = useTranslation();

  return (
    <Styled.CartFooterContainer>
      <div className="footer__summary-box">
        <span className="delivery-price">
          {t("crossover.products_total_amount")} &mdash; 5
        </span>
        <span className="delivery-price">
          {t("crossover.products_total_price")} &mdash; 400₾
        </span>
        <span className="delivery-price">
          {t("crossover.delivery_price")} &mdash; 5₾
        </span>
      </div>
      <div className="footer__actions-box">
        <button className="cart-footer__btn">
          {t("crossover.clean_basket")}
        </button>
        <button className="cart-footer__btn" onClick={onBuy}>
          {t("crossover.buy")}
        </button>
      </div>
    </Styled.CartFooterContainer>
  );
}
