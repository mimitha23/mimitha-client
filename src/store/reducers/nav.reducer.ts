import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { setStatus, controlStatus as status } from "./helpers";

import { NavStateT } from "interface/store/nav.reducer.types";
import { NavDropdownT, GetNavArgsT } from "interface/DB/nav.types";
import { SetStatusArgsT } from "interface/store/store.common";

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
      state.status = status.default();
    },

    // REQUEST STATUS SETTERS
    setNavStatus(state, { payload }: PayloadAction<SetStatusArgsT>) {
      state.status = setStatus(payload);
    },

    // RESET
    cleanUpNavDropdown(state) {
      state.navDropdown = initialState.navDropdown;
    },
  },
});

export default navSlice.reducer;
export const navActions = navSlice.actions;
