import { createSlice, nanoid } from "@reduxjs/toolkit";
import { controlStatus as status } from "./helpers";

const initialState = {
  availableProducts: [],

  activeConfigId: "",

  editor_change_by_mode: "IMAGE",

  activeConfig: {
    _id: "",
    isPublic: false,
    variants: [],
    assets: [],
    mannequin: "",
    modelVideo: "",
    placingVideo: "",
    pickUpVideo: "",
  },

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

    changeConfig(state, { payload: { currentVariantId, newVariantId } }) {
      const { availableProduct } = checkConfigAvailability({
        newVariantId,
        currentVariantId,
        activeConfig: state.activeConfig,
        availableProducts: state.availableProducts,
      });

      if (availableProduct) {
        state.activeConfig = availableProduct;
        state.activeConfigId = availableProduct._id;
      }
    },

    changeMode(state, { payload }) {
      state.editor_change_by_mode = payload;
    },

    // API
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
        .map((variant) => variant.type)
        .forEach((type) => {
          const variant = payload.allVariants.find((v) => v.type === type);
          variants[type.split(" ").join("_")] = {
            _id: nanoid(),
            type,
            label_ka: variant.label_ka,
            label_en: variant.label_en,
            variants: variant.variants,
          };
        });

      state.variants = variants;
      state.availableProducts = payload.docs;
      state.activeConfig =
        payload.docs.find((product) => product._id === state.activeConfigId) ||
        initialState.activeConfig;
    },

    // REQUEST STATUS SETTERS
    setError(state, { payload }) {
      state.status = status.error(payload.message);
    },

    setSuccess(state) {
      state.status = status.success();
    },

    // RESET
    resetEditor(state) {
      state.activeConfig = initialState.activeConfig;
      state.activeConfigId = initialState.activeConfigId;
      state.availableProducts = initialState.availableProducts;
      state.variants = initialState.variants;
    },
  },
});

export default editorSlice.reducer;
export const editorActions = editorSlice.actions;

export function checkConfigAvailability({
  activeConfig,
  currentVariantId,
  newVariantId,
  availableProducts,
}) {
  const filterActiveConfigIds = () =>
    activeConfig.variants.filter((variant) => variant !== currentVariantId);

  const newVariationIds = activeConfig.variants.includes(newVariantId)
    ? [...filterActiveConfigIds()]
    : [...filterActiveConfigIds(), newVariantId];

  const availableProduct = availableProducts.find(
    (product) =>
      product.variants.every((variant) => newVariationIds.includes(variant)) &&
      newVariationIds.every((variant) => product.variants.includes(variant))
  );

  return { availableProduct };
}
