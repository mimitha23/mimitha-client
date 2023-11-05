import { useDispatch } from "react-redux";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

import { PATHS } from "config/paths";
import { useCurrencyContext } from "providers/CurrencyProvider";
import { useTranslationContext } from "providers/I18nextProvider";
import { shoppingCartActions } from "store/reducers/shoppingCart.reducer";

import CartItemDetailsBoxContainer from "./CartItemDetailsBoxContainer";
import CartItemDetailsControlProductAmount from "./CartItemDetailsControlProductAmount";
import { CloseXIcon, EyeShowIcon } from "components/Layouts/Icons/index";
import * as Styled from "./styles/CartItem.styled";

export default function CartItem({ product }) {
  const dispatch = useDispatch();

  const { t } = useTranslation();
  const { currencySymbol, convertPrice } = useCurrencyContext();
  const { currentLocale } = useTranslationContext();

  function onProductQuantity(value) {
    dispatch(
      shoppingCartActions.setProductQuantity({
        value,
        productId: product.productId,
        sizeId: product.size._id,
      })
    );
  }

  function onRemoveProduct() {
    dispatch(shoppingCartActions.removeFromCart(product._id));
  }

  return (
    <Styled.CartItem>
      <figure className="cart-item__fig">
        <img src={product.thumbnail} alt={product.title[currentLocale]} />
        <div className="cart-item__fig--layover">
          <Link
            to={PATHS.active_product.fullPath({ productId: product.productId })}
          >
            <span className="text">{t("cart.view_product")}</span>
            <span className="icon">
              <EyeShowIcon />
            </span>
          </Link>
        </div>
      </figure>

      <div className="cart-item__details">
        <CartItemDetailsBoxContainer
          title={t("crossover.title")}
          className="cart-item__details-box__title-box"
        >
          <span>{product.title[currentLocale]}</span>
        </CartItemDetailsBoxContainer>

        <CartItemDetailsBoxContainer
          title={t("crossover.amount")}
          className="cart-item__details-box__amount-box"
        >
          <CartItemDetailsControlProductAmount
            productAmount={product.quantity}
            onProductQuantity={onProductQuantity}
          />
        </CartItemDetailsBoxContainer>

        <CartItemDetailsBoxContainer title={t("crossover.price")}>
          <span>
            <strong>
              {convertPrice(product.price)} {currencySymbol}
            </strong>
          </span>
        </CartItemDetailsBoxContainer>

        <CartItemDetailsBoxContainer title={t("crossover.total_price")}>
          <span>
            <strong>
              {convertPrice(product.price) * product.quantity} {currencySymbol}
            </strong>
          </span>
        </CartItemDetailsBoxContainer>

        <CartItemDetailsBoxContainer
          title={t("crossover.size")}
          className="cart-item__details-box__size-box"
        >
          <span className="cart-item__details-box--content__size">
            {product.size.size}
          </span>
        </CartItemDetailsBoxContainer>
      </div>

      <button className="cart-item__remove-btn" onClick={onRemoveProduct}>
        <CloseXIcon />
      </button>
    </Styled.CartItem>
  );
}
