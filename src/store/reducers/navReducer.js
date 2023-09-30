import { createSlice } from "@reduxjs/toolkit";
import { controlStatus as status } from "./helpers";

const initialState = {
  navDropdown: {
    _id: "",
    category: "",
    blocks: [],
  },

  status: {
    loading: false,
    error: false,
    message: "",
  },
};

const navSlice = createSlice({
  name: "mimitha-nav",
  initialState,
  reducers: {
    getNav: {
      prepare(payload) {
        return { payload };
      },
      reducer(state) {
        state.status = status.loading();
      },
    },

    setNav(state, { payload }) {
      state.navDropdown = payload[0];
    },

    // REQUEST STATUS SETTERS
    setSuccess(state) {
      state.status = status.success();
    },

    setError(state, { payload }) {
      state.status = status.error(payload.message);
    },

    // RESET
    resetNavDropdown(state) {
      state.navDropdown = initialState.navDropdown;
    },
  },
});

export default navSlice.reducer;
export const navActions = navSlice.actions;
