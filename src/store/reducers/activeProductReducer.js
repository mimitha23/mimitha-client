import { createSlice } from "@reduxjs/toolkit";

const initialState = {};

const activeProductsSlice = createSlice({
  name: "mimitha-products",
  initialState,
  reducers: {
    setProducts: (state, { payload }) => {
      // state = action.payload;
    },
  },
});

export default activeProductsSlice.reducer;
export const activeProductActions = activeProductsSlice.actions;
