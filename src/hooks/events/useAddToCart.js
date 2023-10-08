import { useDispatch, useSelector } from "react-redux";

import { selectShoppingCart } from "store/selectors/cart.selectors";
import { shoppingCartActions } from "store/reducers/shoppingCart.reducer";

export default function useAddToCart() {
  const dispatch = useDispatch();

  const cart = useSelector(selectShoppingCart);

  const checkIsInCart = (productId) =>
    cart.find((item) => item.productId === productId);

  function onAddToCart(product) {
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

  return { onAddToCart, checkIsInCart };
}
