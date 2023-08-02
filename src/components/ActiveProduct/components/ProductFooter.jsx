import { useDispatch, useSelector } from "react-redux";
import { useTranslation } from "react-i18next";

import useAddToListQuery from "hooks/api/user/useUserListQuery";
import { shoppingCartActions } from "store/reducers/shoppingCartReducer";
import { selectAllUserLists } from "store/selectors/user/userListsSelectors";
import { selectShoppingCart } from "store/selectors/cartSelectors";
import { selectActiveProductInfoForShoppingCart } from "store/selectors/activeProductSelectors";

import { BagIcon, BookmarkAddIcon } from "components/Layouts/Icons";
import * as Styled from "./styles/ProductFooter.styled";

function ProductFooter() {
  const dispatch = useDispatch();
  const { t } = useTranslation();

  const product = useSelector(selectActiveProductInfoForShoppingCart);
  const userLists = useSelector(selectAllUserLists);
  const cart = useSelector(selectShoppingCart);

  const { openAddToListPopup } = useAddToListQuery();

  function onAddToCart() {
    dispatch(
      shoppingCartActions.addToCart({
        productId: product._id,
        color: product.color,
        size: product.size,
        price: product.price,
        title: product.title,
        thumbnail: product.thumbnail,
        quantity: 1,
      })
    );
  }

  const isSavedToList = userLists.find((list) =>
    list.products.includes(product._id)
  );

  const isIntoCart = cart.find((item) => item.productId === product._id);

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

      <button
        className={`product-footer__btn ${isIntoCart ? "active" : ""}`}
        onClick={onAddToCart}
      >
        <span className="product-footer__btn-caption">
          {t("crossover.add_to_card")}
        </span>
        <span className="icon">
          <BagIcon />
        </span>
        {isIntoCart && (
          <span className="product-footer__btn-badge">
            {isIntoCart.quantity}
          </span>
        )}
      </button>
    </Styled.ProductFooterContainer>
  );
}

export default ProductFooter;
