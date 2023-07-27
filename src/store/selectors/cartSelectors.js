import { createSelector } from "@reduxjs/toolkit";

const selectedCartSum = ({ shoppingCart }) => ({
  productsAmount: shoppingCart.cart.reduce(
    (acc, product) => (acc += product.quantity),
    0
  ),
  productsTotalPrice: shoppingCart.cart.reduce(
    (acc, product) => (acc += product.quantity * product.price),
    0
  ),
});

export const selectShoppingCart = ({ shoppingCart }) => shoppingCart.cart;

export const selectCartSum = createSelector(selectedCartSum, (sum) => sum);
