import { createSlice, PayloadAction } from "@reduxjs/toolkit";
// import { controlStatus as status } from "../helpers";

import { UserT } from "interface/DB/user.types";
import { UserStateT } from "interface/store/user.reducer.types";

const initialState: UserStateT = {
  user: {
    isAuthenticated: false,
    _id: "",
    email: "",
    username: "",
    profilePicture: "",
  },
};

const userSlice = createSlice({
  name: "mimitha-user",
  initialState,
  reducers: {
    setUser(state, { payload }: PayloadAction<UserT>) {
      state.user = { ...payload, isAuthenticated: true };
    },

    cleanUpUser(state) {
      state.user = initialState.user;
    },

    setProfilePicture() {},
  },
});

export default userSlice.reducer;
export const userActions = userSlice.actions;
