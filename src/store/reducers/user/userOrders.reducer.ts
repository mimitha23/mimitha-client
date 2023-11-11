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

const userOrdersSlice = createSlice({
  name: "mimita-user-orders",
  initialState,
  reducers: {
    getOrderHistory: {
      prepare(payload) {
        return {
          payload: "",
        };
      },

      reducer(state) {},
    },

    setOrderHistory(state, { payload }) {},

    // REQUEST STATUS SETTERS
    setOrdersStatus(state, { payload }: PayloadAction<SetStatusArgsT>) {
      state.status = setStatus(payload);
    },
  },
});

export default userOrdersSlice.reducer;
export const userOrdersActions = userOrdersSlice.actions;
