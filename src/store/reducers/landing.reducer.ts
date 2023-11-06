import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { controlStatus as status } from "./helpers";

import { LandingStateT } from "interface/store/landing.reducer.types";
import { ProductShortInfoT } from "interface/DB/product.types";

const initialState: LandingStateT = {
  status: status.default(),

  popularProducts: [],
};

const landingSlice = createSlice({
  name: "mimitha-landing",
  initialState,
  reducers: {
    getLanding(state) {
      state.status = status.loading();
    },

    setLanding: (
      state,
      { payload }: PayloadAction<{ popularProducts: Array<ProductShortInfoT> }>
    ) => {
      state.popularProducts = payload.popularProducts;
    },

    // REQUEST STATUS SETTERS
    setSuccess(state) {
      state.status = status.default();
    },

    setError(state, { payload }: PayloadAction<{ message: string }>) {
      state.status = status.error(payload.message);
    },

    // RESET
    resetLanding(state) {
      state.popularProducts = [];
    },
  },
});

export default landingSlice.reducer;
export const landingActions = landingSlice.actions;
