import { createSlice } from "@reduxjs/toolkit";

const initialState = {};

const userSlice = createSlice({
  name: "mimitha-user",
  initialState,
  reducers: {
    setUser(state, { payload }) {},

    resetUser(state) {
      state.user = initialState.user;
    },
  },
});

export default userSlice.reducer;
export const userActions = userSlice.actions;
