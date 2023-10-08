import { useSelector } from "react-redux";
import { useTranslation } from "react-i18next";

import {
  useUserListEvents,
  // useAddToCart
} from "hooks/events";
import { selectActiveProductInfoForShoppingCart } from "store/selectors/activeProduct.selectors";

import {
  // BagIcon,
  BookmarkAddIcon,
} from "components/Layouts/Icons";
import * as Styled from "./styles/ProductFooter.styled";

function ProductFooter() {
  const { t } = useTranslation();

  const product = useSelector(selectActiveProductInfoForShoppingCart);

  // const { onAddToCart, checkIsInCart } = useAddToCart();
  const { openAddToListPopup, checkIsSavedToList } = useUserListEvents();

  // const isInCartProduct = checkIsInCart(product._id);
  const isSavedToList = checkIsSavedToList(product._id);

  return (
    <Styled.ProductFooterContainer>
      <button
        className={`product-footer__btn ${isSavedToList ? "active" : ""}`}
        onClick={() => openAddToListPopup({ productId: product._id })}
      >
        <span className="product-footer__btn-caption">
          {t("crossover.save_design")}
        </span>
        <span className="icon">
          <BookmarkAddIcon />
        </span>
      </button>

      {/* <button
        className={`product-footer__btn ${isInCartProduct ? "active" : ""}`}
        onClick={() => onAddToCart(product)}
      >
        <span className="product-footer__btn-caption">
          {t("crossover.add_to_card")}
        </span>
        <span className="icon">
          <BagIcon />
        </span>
        {isInCartProduct && (
          <span className="product-footer__btn-badge">
            {isInCartProduct.quantity}
          </span>
        )}
      </button> */}
    </Styled.ProductFooterContainer>
  );
}

export default ProductFooter;
