import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { setStatus, controlStatus as status } from "./helpers";

import {
  ProductColorT,
  ProductShortInfoT,
  GetActiveProductArgsT,
  GetRelatedProductsArgsT,
  GetActiveProductResponseT,
} from "interface/DB/product.types";
import { SetStatusArgsT } from "interface/store/store.common";
import { ActiveProductStateT } from "interface/store/activeProduct.reducer.types";

const initialState: ActiveProductStateT = {
  activeProductStatus: status.default(),

  relatedProductsStatus: status.default(),

  product: {
    _id: "",
    productId: "",
    mannequin: "",
    modelVideo: "",
    price: NaN,
    rating: NaN,
    inStock: NaN,
    soldOut: NaN,
    sale: false,
    isEditable: false,
    size: [],
    styles: [],
    assets: [],
    seasons: [],
    warnings: [],
    textures: [],
    title: { ka: "", en: "" },
    description: { ka: "", en: "" },
    color: { _id: "", ka: "", en: "", hex: "" },
    gender: { _id: "", ka: "", en: "", query: "" },
    productType: { _id: "", ka: "", en: "", query: "" },
  },

  activeSize: { _id: "", amount: NaN, size: "" },

  availableColors: [],

  relatedProducts: [],
};

const activeProductsSlice = createSlice({
  name: "mimitha-products",
  initialState,
  reducers: {
    setSize(state, { payload: { sizeId } }: PayloadAction<{ sizeId: string }>) {
      const activeSize = state.product!.size.find(
        (size) => size._id === sizeId
      );

      if (!activeSize) return;

      state.activeSize = activeSize;
    },

    // API

    // 1.0
    getActiveProduct: {
      prepare(payload: GetActiveProductArgsT) {
        return { payload };
      },

      reducer(state) {
        state.activeProductStatus = status.loading();
      },
    },

    setActiveProduct: (
      state,
      { payload }: PayloadAction<GetActiveProductResponseT>
    ) => {
      state.product = {
        ...payload,
        productId: payload.product._id,
        productType: payload.product.productType,
        gender: payload.product.gender,
        isEditable: payload.product.isEditable,
        styles: payload.product.styles,
        seasons: payload.product.seasons,
        textures: payload.product.textures,
        warnings: payload.product.warnings,
      };

      type ReducerAccT = {
        [key: string]: ProductColorT & { productId: string };
      };

      type ReducerItemT = { _id: string; color: ProductColorT };

      state.availableColors = Object.values(
        [
          { _id: payload._id, color: payload.color },
          ...payload.product.developedProducts,
        ].reduce((acc: ReducerAccT, item: ReducerItemT) => {
          acc[item.color._id] = {
            ...item.color,
            productId: item._id,
          };

          return acc;
        }, {})
      );

      state.activeSize = payload.size[0];

      state.activeProductStatus = status.default();
    },

    // 2.0
    getRelatedProducts: {
      prepare(payload: GetRelatedProductsArgsT) {
        return { payload };
      },

      reducer(state) {
        state.relatedProductsStatus = status.loading();
      },
    },

    setRelatedProducts: (
      state,
      { payload }: PayloadAction<Array<ProductShortInfoT>>
    ) => {
      state.relatedProducts = payload;
      state.relatedProductsStatus = status.default();
    },

    // REQUEST STATUS SETTERS
    setActiveProductStatus(state, { payload }: PayloadAction<SetStatusArgsT>) {
      state.activeProductStatus = setStatus(payload);
    },

    setRelatedProductsStatus(
      state,
      { payload }: PayloadAction<SetStatusArgsT>
    ) {
      state.relatedProductsStatus = setStatus(payload);
    },

    // RESET
    cleanUpActiveProduct(state) {
      state.activeSize = initialState.activeSize;
      state.product = initialState.product;
      state.availableColors = initialState.availableColors;
    },

    cleanUpRelatedProducts(state) {
      state.relatedProducts = [];
    },
  },
});

export default activeProductsSlice.reducer;
export const activeProductActions = activeProductsSlice.actions;
