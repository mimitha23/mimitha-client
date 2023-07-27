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

      const { createdAt, expiresIn } = addExpirationDateOnProduct();

      if (
        isInCartIndex >= 0 &&
        state.cart[isInCartIndex].quantity + 1 <=
          state.cart[isInCartIndex].size.amount
      ) {
        state.cart[isInCartIndex].quantity += 1;
        state.cart[isInCartIndex].createdAt = createdAt;
        state.cart[isInCartIndex].expiresIn = expiresIn;
      } else if (isInCartIndex < 0)
        state.cart.push({ ...payload, _id: nanoid(), createdAt, expiresIn });
    },

    removeFromCart(state, { payload: itemId }) {
      state.cart = state.cart.filter((product) => product._id !== itemId);
    },

    setProductQuantity(state, { payload: { productId, sizeId, value } }) {
      const itemIndex = state.cart.findIndex(
        (item) => item.productId === productId && item.size._id === sizeId
      );

      if (itemIndex < 0) return;

      const { createdAt, expiresIn } = addExpirationDateOnProduct();

      const possibleProductQuantity = state.cart[itemIndex].quantity + value;

      if (
        possibleProductQuantity >= 1 &&
        possibleProductQuantity <= state.cart[itemIndex].size.amount &&
        possibleProductQuantity <= MAX_CART_ITEM_QUANTITY_PER_PRODUCT
      ) {
        state.cart[itemIndex].quantity += value;
        state.cart[itemIndex].createdAt = createdAt;
        state.cart[itemIndex].expiresIn = expiresIn;
      }
    },

    resetCart(state) {
      state.cart = [];
    },

    checkCartProductsExpiration(state) {
      state.cart = state.cart.filter((item) => Date.now() < item.expiresIn);
    },
  },

  extraReducers: (builder) => {
    builder.addMatcher(
      (action) => action.type.startsWith("mimitha-shopping-card"),
      (state) => {
        state.cart = state.cart.filter((item) => Date.now() < item.expiresIn);
      }
    );
  },
});

export default shoppingCartSlice.reducer;
export const shoppingCartActions = shoppingCartSlice.actions;

function addExpirationDateOnProduct() {
  const currDate = Date.now();

  return {
    createdAt: currDate,
    expiresIn: 1000 * 60 * 60 * 3 + currDate,
  };
}
