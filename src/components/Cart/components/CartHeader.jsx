import { useTranslation } from "react-i18next";

import * as Styled from "./styles/CartHeader.styled";
import { useNavigate } from "react-router-dom";
import { ShoppingCartIcon } from "components/Layouts/Icons/index";

export default function CartHeader() {
  const { t } = useTranslation();
  const navigate = useNavigate();

  return (
    <Styled.CartHeaderContainer>
      <span className="cart-header__title">
        <span className="cart-header__title-icon">
          <ShoppingCartIcon />
        </span>
        <span>{t("cart.basket")}</span>
      </span>

      <button onClick={() => navigate(-1)} className="cart-header__back-btn">
        {t("crossover.go_back")}
      </button>
    </Styled.CartHeaderContainer>
  );
}
