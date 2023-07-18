import { createSlice } from "@reduxjs/toolkit";
import { controlStatus as status } from "./helpers";

const initialState = {
  popularProducts: [],

  status: {
    loading: false,
    error: false,
    message: "",
  },
};

const landingSlice = createSlice({
  name: "mimitha-landing",
  initialState,
  reducers: {
    getLanding: {
      reducer(state) {
        state.status = status.loading();
      },
    },

    setLanding: (state, { payload }) => {
      state.popularProducts = payload.popularProducts;
    },

    // REQUEST STATUS SETTERS
    setSuccess(state) {
      state.status = status.success();
    },

    setError(state, { payload }) {
      state.status = status.error();
    },

    // RESET
    resetLanding(state) {
      state.popularProducts = [];
    },
  },
});

export default landingSlice.reducer;
export const landingActions = landingSlice.actions;
