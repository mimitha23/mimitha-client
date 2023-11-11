import { RootStateT } from "store/store";
import { createSelector } from "@reduxjs/toolkit";
import { CartProductT } from "interface/store/cart.reducer.types";

// MEMORISED SELECTORS
const selectedCartSum = ({ shoppingCart }: RootStateT) => ({
  productsAmount: shoppingCart.cart.reduce(
    (acc: number, product: CartProductT) => (acc += product.quantity),
    0
  ),
  productsTotalPrice: shoppingCart.cart.reduce(
    (acc: number, product: CartProductT) =>
      (acc += product.quantity * product.price),
    0
  ),
});

// SELECTORS
const selectShoppingCart = ({
  shoppingCart,
}: RootStateT): Array<CartProductT> => shoppingCart.cart;

const selectCartSum = createSelector(selectedCartSum, (sum) => sum);

export { selectShoppingCart, selectCartSum };
