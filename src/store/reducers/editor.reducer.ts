import { createSlice, nanoid, PayloadAction } from "@reduxjs/toolkit";
import { controlStatus as status } from "./helpers";

import {
  EditorModeT,
  EditorStateT,
  EditorVariantsT,
  ChangeEditorConfigArgsT,
} from "interface/store/editor.reducer.types";
import {
  EditorProductT,
  GetProductToEditArgsT,
  GetProductToEditResponseT,
} from "interface/DB/editor.types";

const initialState: EditorStateT = {
  status: status.default(),

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

  variants: {},
};

const editorSlice = createSlice({
  name: "mimita-editor",
  initialState,
  reducers: {
    setActiveConfigId(
      state,
      { payload: { configId } }: PayloadAction<{ configId: string }>
    ) {
      state.activeConfigId = configId;
    },

    changeConfig(
      state,
      {
        payload: { currentVariantId, newVariantId },
      }: PayloadAction<ChangeEditorConfigArgsT>
    ) {
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

    changeMode(
      state,
      { payload: { mode } }: PayloadAction<{ mode: EditorModeT }>
    ) {
      state.editor_change_by_mode = mode;
    },

    // API
    getProductToEdit: {
      prepare: (payload: GetProductToEditArgsT) => {
        return { payload };
      },

      reducer: (state) => {
        state.status = status.loading();
      },
    },

    setProductToEdit(
      state,
      { payload }: PayloadAction<GetProductToEditResponseT>
    ) {
      const variants: EditorVariantsT = {};

      payload.allVariants
        .map((variant) => variant.type)
        .forEach((type) => {
          const variant = payload.allVariants.find(
            (variant) => variant.type === type
          );

          if (variant) {
            const candidateKey = variant.type.split(" ").join("_");

            variants[candidateKey] = {
              _id: nanoid(),
              type: candidateKey,
              label_ka: variant.label_ka,
              label_en: variant.label_en,
              variants: variant.variants,
            };
          }
        });

      state.variants = variants;

      state.availableProducts = payload.docs;

      state.activeConfig =
        payload.docs.find((product) => product._id === state.activeConfigId) ||
        initialState.activeConfig;
    },

    // REQUEST STATUS SETTERS
    setError(state, { payload }: PayloadAction<{ message: string }>) {
      state.status = status.error(payload.message);
    },

    setSuccess(state) {
      state.status = status.default();
    },

    // RESET
    cleanUpEditor(state) {
      state.activeConfig = initialState.activeConfig;
      state.activeConfigId = initialState.activeConfigId;
      state.availableProducts = initialState.availableProducts;
      state.variants = initialState.variants;
    },
  },
});

export default editorSlice.reducer;
export const editorActions = editorSlice.actions;

type CheckConfigAvailabilityArgsT = {
  newVariantId: string;
  currentVariantId: string;
  activeConfig: EditorProductT;
  availableProducts: Array<EditorProductT>;
};

export function checkConfigAvailability({
  activeConfig,
  currentVariantId,
  newVariantId,
  availableProducts,
}: CheckConfigAvailabilityArgsT) {
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
