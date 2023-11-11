import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { setStatus, controlStatus as status } from "./helpers";

import { LandingStateT } from "interface/store/landing.reducer.types";
import { ProductShortInfoT } from "interface/DB/product.types";
import { SetStatusArgsT } from "interface/store/store.common";

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
      state.status = status.default();
    },

    // REQUEST STATUS SETTERS
    setLandingStatus(state, { payload }: PayloadAction<SetStatusArgsT>) {
      state.status = setStatus(payload);
    },

    // RESET
    cleanUpLanding(state) {
      state.popularProducts = [];
    },
  },
});

export default landingSlice.reducer;
export const landingActions = landingSlice.actions;
