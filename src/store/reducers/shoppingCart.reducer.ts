import { createSlice, nanoid, PayloadAction } from "@reduxjs/toolkit";
// import { controlStatus as status } from "./helpers";
import { MAX_CART_ITEM_QUANTITY_PER_PRODUCT } from "config/consts";

import {
  ProductCartStateT,
  CartProductT,
  RemoveFromCartT,
  SetProductQuantityToCartArgsT,
} from "interface/store/cart.reducer.types";

const initialState: ProductCartStateT = {
  cart: [],
};

const shoppingCartSlice = createSlice({
  name: "mimitha-shopping-card",
  initialState,
  reducers: {
    addToCart(state, { payload }: PayloadAction<CartProductT>) {
      const isInCartIndex = state.cart.findIndex(
        (item) => item._id === payload._id && item.size._id === payload.size._id
      );

      const possibleProductQuantity = state.cart[isInCartIndex]?.quantity + 1;

      if (
        isInCartIndex >= 0 &&
        possibleProductQuantity <= MAX_CART_ITEM_QUANTITY_PER_PRODUCT
      )
        state.cart[isInCartIndex].quantity = possibleProductQuantity;
      else if (isInCartIndex < 0)
        state.cart.push({
          ...payload,
          cartId: nanoid(),
        });
    },

    removeFromCart(
      state,
      { payload: { cartId } }: PayloadAction<RemoveFromCartT>
    ) {
      state.cart = state.cart.filter((product) => product.cartId !== cartId);
    },

    setProductQuantity(
      state,
      {
        payload: { cardId, sizeId, value },
      }: PayloadAction<SetProductQuantityToCartArgsT>
    ) {
      const itemIndex = state.cart.findIndex(
        (item) => item.cartId === cardId && item.size._id === sizeId
      );

      if (itemIndex < 0) return;

      const possibleProductQuantity = state.cart[itemIndex].quantity + value;

      if (
        possibleProductQuantity >= 1 &&
        possibleProductQuantity <= MAX_CART_ITEM_QUANTITY_PER_PRODUCT
      ) {
        state.cart[itemIndex].quantity += value;
      }
    },

    cleanUpCart(state) {
      state.cart = initialState.cart;
    },
  },
});

export default shoppingCartSlice.reducer;
export const shoppingCartActions = shoppingCartSlice.actions;
