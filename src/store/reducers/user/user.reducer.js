import { createSlice } from "@reduxjs/toolkit";
// import { controlStatus as status } from "../helpers";
import { jwt } from "utils";

const initialState = {
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
    setUser(state, { payload }) {
      state.user = { ...payload.user, isAuthenticated: true };
      jwt.setJWT(payload.accessToken);
    },

    resetUser(state) {
      state.user = initialState.user;
      jwt.removeJWT();
    },

    setProfilePicture(state, { payload }) {},
  },
});

export default userSlice.reducer;
export const userActions = userSlice.actions;
