import { createSlice } from "@reduxjs/toolkit";
import { controlStatus as status } from "./helpers";

const initialState = {
  product: {
    _id: "",
    title: {
      ka: "",
      en: "",
    },
    color: {
      ka: "",
      en: "",
      hex: "",
      _id: "",
    },
    description: {
      ka: "",
      en: "",
    },
    price: "",
    sale: "",
    size: [],
    inStock: "",
    soldOut: "",
    rating: "",
    assets: [],
    mannequin: "",
    modelVideo: "",
    productId: "",
    productType: {
      ka: "",
      en: "",
      query: "",
      _id: "",
    },
    gender: {
      ka: "",
      en: "",
      query: "",
    },
    isEditable: "",
    styles: [],
    seasons: [],
    textures: [],
    warnings: [],
  },

  activeSize: {
    size: "",
    amount: "",
    _id: "",
  },

  availableColors: [],

  relatedProducts: [],

  status: {
    loading: false,
    error: false,
    message: "",
  },

  relatedProductsStatus: {
    loading: false,
    error: false,
    message: "",
  },
};

const activeProductsSlice = createSlice({
  name: "mimitha-products",
  initialState,
  reducers: {
    setSize(state, { payload: sizeId }) {
      const activeSize = state.product.size.find((size) => size._id === sizeId);

      if (!activeSize) return;

      state.activeSize = activeSize;
    },

    // API
    getActiveProduct: {
      prepare(payload) {
        return {
          payload: {
            productId: payload,
          },
        };
      },

      reducer(state) {
        state.status = status.loading();
      },
    },

    setActiveProduct: (state, { payload }) => {
      state.product = {
        _id: payload._id,
        title: payload.title,
        color: payload.color,
        description: payload.description,
        price: payload.price,
        sale: payload.sale,
        size: payload.size,
        inStock: payload.inStock,
        soldOut: payload.soldOut,
        rating: payload.rating,
        assets: payload.assets,
        mannequin: payload.mannequin,
        modelVideo: payload.modelVideo,
        productId: payload.product._id,
        productType: payload.product.productType,
        gender: payload.product.gender,
        isEditable: payload.product.isEditable,
        styles: payload.product.styles,
        seasons: payload.product.seasons,
        textures: payload.product.textures,
        warnings: payload.product.warnings,
      };

      state.availableColors = Object.values(
        [
          { color: payload.color, _id: payload._id },
          ...payload.product.developedProducts,
        ].reduce((acc, item) => {
          acc[item.color._id] = {
            ...item.color,
            productId: item._id,
          };
          return acc;
        }, {})
      );

      state.activeSize = payload.size[0];
    },

    getRelatedProducts: {
      prepare(payload) {
        return {
          payload: {
            productId: payload,
          },
        };
      },

      reducer(state) {
        state.relatedProductsStatus = status.loading();
      },
    },

    setRelatedProducts: (state, { payload }) => {
      state.relatedProducts = payload;
    },

    // REQUEST STATUS SETTERS
    setSuccess(state) {
      state.status = status.success();
    },

    setError(state, { payload }) {
      state.status = status.error(payload.message);
    },

    setRelatedProductsSuccess(state) {
      state.relatedProductsStatus = status.success();
    },

    setRelatedProductsError(state, { payload }) {
      state.relatedProductsStatus = status.error(payload.message);
    },

    // RESET
    resetActiveProduct(state) {
      state.activeSize = initialState.activeSize;
      state.product = initialState.product;
      state.availableColors = initialState.availableColors;
    },

    resetRelatedProducts(state) {
      state.relatedProducts = [];
    },
  },
});

export default activeProductsSlice.reducer;
export const activeProductActions = activeProductsSlice.actions;
