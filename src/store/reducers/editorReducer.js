import { createSlice, nanoid } from "@reduxjs/toolkit";
import { controlStatus as status } from "./helpers";

const initialState = {
  availableProducts: [],

  activeConfigId: "",

  activeConfig: null,

  variants: null,

  status: {
    loading: false,
    error: false,
    message: "",
  },
};

const editorSlice = createSlice({
  name: "mimita-editor",
  initialState,
  reducers: {
    setActiveConfigId(state, { payload }) {
      state.activeConfigId = payload;
    },

    getProductToEdit: {
      prepare: (payload) => {
        return {
          payload: {
            registeredProductId: payload.registeredProductId,
          },
        };
      },

      reducer: (state) => {
        state.status = status.loading();
      },
    },

    setProductToEdit(state, { payload }) {
      const variants = {};

      payload.allVariants
        .map((variant) => variant._id)
        .forEach((key) => {
          const variant = payload.allVariants.find((v) => v._id === key);
          variants[key.split(" ").join("_")] = {
            type: key,
            _id: nanoid(),
            variants: variant.variants,
          };
        });

      state.variants = variants;
      state.availableProducts = payload.docs;
      state.activeConfig = payload.docs.find(
        (product) => product._id === state.activeConfigId
      );
    },

    setError(state, { payload }) {
      state.status = status.error(payload.message);
    },

    setSuccess(state) {
      state.status = status.success();
    },
  },
});

export default editorSlice.reducer;
export const editorActions = editorSlice.actions;
