import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { controlStatus as status } from "./helpers";

import { NavStateT } from "interface/store/nav.reducer.types";
import { NavDropdownT, GetNavArgsT } from "interface/DB/nav.types";

const initialState: NavStateT = {
  status: status.default(),

  navDropdown: {
    _id: "",
    category: "",
    blocks: [],
  },
};

const navSlice = createSlice({
  name: "mimitha-nav",
  initialState,
  reducers: {
    getNav: {
      prepare(payload: GetNavArgsT) {
        return { payload };
      },

      reducer(state) {
        state.status = status.loading();
      },
    },

    setNav(state, { payload }: PayloadAction<NavDropdownT>) {
      state.navDropdown = payload;
    },

    // REQUEST STATUS SETTERS
    setSuccess(state) {
      state.status = status.default();
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
