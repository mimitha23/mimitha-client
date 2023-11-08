import { useAppSelector, useAppDispatch } from "store/hooks";

import { selectShoppingCart } from "store/selectors/cart.selectors";
import { shoppingCartActions } from "store/reducers/shoppingCart.reducer";

import { CartProductT } from "interface/store/cart.reducer.types";

export default function useAddToCart() {
  const dispatch = useAppDispatch();

  const cart = useAppSelector(selectShoppingCart);

  const checkIsInCart = (productId: string) =>
    cart.find((product) => product._id === productId);

  function onAddToCart(product: CartProductT) {
    dispatch(
      shoppingCartActions.addToCart({
        _id: product._id!,
        color: product.color,
        size: product.size,
        price: product.price,
        title: product.title,
        thumbnails: product.thumbnails,
        quantity: 1,
      })
    );
  }

  return { onAddToCart, checkIsInCart };
}
