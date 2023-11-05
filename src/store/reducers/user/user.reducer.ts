import { createSlice, PayloadAction } from "@reduxjs/toolkit";
// import { controlStatus as status } from "../helpers";
import { jwt } from "utils";
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
    setUser(state, { payload }: PayloadAction<any>) {
      state.user = { ...payload.user, isAuthenticated: true };
      jwt.setJWT(payload.accessToken);
    },

    resetUser(state) {
      state.user = initialState.user;
      jwt.removeJWT();
    },

    setProfilePicture(state) {},
  },
});

export default userSlice.reducer;
export const userActions = userSlice.actions;
