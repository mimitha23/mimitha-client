import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { setStatus, controlStatus as status } from "store/reducers/helpers";

import { SetStatusArgsT } from "interface/store/store.common";

const initialState = {
  status: {
    loading: false,
    error: false,
    message: "",
  },
};

const userProfileImageSlice = createSlice({
  name: "mimita-user-profile-image",
  initialState,
  reducers: {
    changeProfileImage: {
      prepare(payload) {
        return {
          payload: "",
        };
      },

      reducer(state) {
        state.status = status.loading();
      },
    },

    // REQUEST STATUS SETTERS
    setProfileImageStatus(state, { payload }: PayloadAction<SetStatusArgsT>) {
      state.status = setStatus(payload);
    },
  },
});

export default userProfileImageSlice.reducer;
export const userProfileImageActions = userProfileImageSlice.actions;
