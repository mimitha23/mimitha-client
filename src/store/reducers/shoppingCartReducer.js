import { createSlice, nanoid } from "@reduxjs/toolkit";
// import { controlStatus as status } from "./helpers";
import { MAX_CART_ITEM_QUANTITY_PER_PRODUCT } from "config/consts";

const initialState = {
  cart: [],
};

const shoppingCartSlice = createSlice({
  name: "mimitha-shopping-card",
  initialState,
  reducers: {
    addToCart(state, { payload }) {
      const isInCartIndex = state.cart.findIndex(
        (item) =>
          item.productId === payload.productId &&
          item.size._id === payload.size._id
      );

      const possibleProductQuantity = state.cart[isInCartIndex]?.quantity + 1;

      if (
        isInCartIndex >= 0 &&
        possibleProductQuantity <= MAX_CART_ITEM_QUANTITY_PER_PRODUCT
      ) {
        state.cart[isInCartIndex].quantity = possibleProductQuantity;
      } else if (isInCartIndex < 0)
        state.cart.push({
          ...payload,
          _id: nanoid(),
        });
    },

    removeFromCart(state, { payload: itemId }) {
      state.cart = state.cart.filter((product) => product._id !== itemId);
    },

    setProductQuantity(state, { payload: { productId, sizeId, value } }) {
      const itemIndex = state.cart.findIndex(
        (item) => item.productId === productId && item.size._id === sizeId
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

    resetCart(state) {
      state.cart = [];
    },
  },
});

export default shoppingCartSlice.reducer;
export const shoppingCartActions = shoppingCartSlice.actions;
