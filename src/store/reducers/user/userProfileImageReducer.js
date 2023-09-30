import { createSlice } from "@reduxjs/toolkit";
import { controlStatus as status } from "store/reducers/helpers";

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
        state.profilePictureStatus = status.loading();
      },
    },

    // REQUEST STATUS SETTERS
    setSuccess(state) {
      state.status = status.success();
    },

    setError(state, { payload }) {
      state.status = status.error(payload.message);
    },
  },
});

export default userProfileImageSlice.reducer;
export const userProfileImageActions = userProfileImageSlice.actions;
