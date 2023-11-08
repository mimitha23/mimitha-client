import { useDispatch } from "react-redux";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

import { DYNAMIC_PATHS } from "config/paths";
import { useCurrencyContext } from "providers/globals/CurrencyProvider";
import { useTranslationContext } from "providers/globals/I18nextProvider";
import { shoppingCartActions } from "store/reducers/shoppingCart.reducer";

import { CloseXIcon, EyeShowIcon } from "components/Layouts/Icons/index";
import CartItemDetailsBoxContainer from "./CartItemDetailsBoxContainer";
import CartItemDetailsControlProductAmount from "./CartItemDetailsControlProductAmount";
import * as Styled from "./styles/CartItem.styled";

import { CartProductT } from "interface/store/cart.reducer.types";

interface CartItemT {
  product: CartProductT;
}

const CartItem: React.FC<CartItemT> = ({ product }) => {
  const dispatch = useDispatch();

  const { t } = useTranslation();
  const { currencySymbol, convertPrice } = useCurrencyContext();
  const { currentLocale } = useTranslationContext();

  function onProductQuantity(value: number) {
    dispatch(
      shoppingCartActions.setProductQuantity({
        value,
        cardId: product.cartId!,
        sizeId: product.size._id,
      })
    );
  }

  function onRemoveProduct() {
    dispatch(shoppingCartActions.removeFromCart({ cartId: product.cartId! }));
  }

  return (
    <Styled.CartItem>
      <figure className="cart-item__fig">
        <img src={product.thumbnails[0]} alt={product.title[currentLocale]} />
        <div className="cart-item__fig--layover">
          <Link to={DYNAMIC_PATHS.active_product_page(product._id)}>
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
              {+convertPrice(product.price) * product.quantity} {currencySymbol}
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
};

export default CartItem;
