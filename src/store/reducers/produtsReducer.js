import { createSlice } from "@reduxjs/toolkit";
import { controllStatus as status } from "./helpers";

const initialState = {
  status: {
    loading: false,
    error: false,
    message: "",
  },
};

const productsSlice = createSlice({
  name: "mimitha-all-products",
  initialState,
  reducers: {
    getAllProducts: {
      reducer(state) {
        state.status = status.loading();
      },
    },

    setProducts: (state, { payload }) => {
      console.log({ payload });
      // state = action.payload;
    },

    // REQUEST STATUS SETTERS
    setSuccess(state) {
      state.status = status.success();
    },

    setError(state, { payload }) {
      state.status = status.error();
    },
  },
});

export default productsSlice.reducer;
export const productsActions = productsSlice.actions;
