import { createSlice } from "@reduxjs/toolkit";
import { controlStatus as status } from "store/reducers/helpers";

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
    setSuccess(state) {
      state.status = status.success();
    },

    setError(state, { payload }) {
      state.status = status.error(payload.message);
    },
  },
});

export default userOrdersSlice.reducer;
export const userOrdersActions = userOrdersSlice.actions;
