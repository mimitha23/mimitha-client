import { useDispatch, useSelector } from "react-redux";
import { useTranslation } from "react-i18next";

import { selectActiveProductInfoForShoppingCart } from "store/selectors/activeProductSelectors";
import { shoppingCartActions } from "store/reducers/shoppingCartReducer";

import { BagIcon, BookmarkAddIcon } from "components/Layouts/Icons";
import * as Styled from "./styles/ProductFooter.styled";

function ProductFooter() {
  const dispatch = useDispatch();

  const { t } = useTranslation();

  const product = useSelector(selectActiveProductInfoForShoppingCart);

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

  return (
    <Styled.ProductFooterContainer>
      <button className="product-footer__btn">
        <span className="product-footer__btn-caption">
          {t("crossover.save_design")}
        </span>
        <span className="icon">
          <BookmarkAddIcon />
        </span>
      </button>

      <button className="product-footer__btn" onClick={onAddToCart}>
        <span className="product-footer__btn-caption">
          {t("crossover.add_to_card")}
        </span>
        <span className="icon">
          <BagIcon />
        </span>
      </button>
    </Styled.ProductFooterContainer>
  );
}

export default ProductFooter;
