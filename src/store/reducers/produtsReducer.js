import { createSlice } from "@reduxjs/toolkit";
import { controlStatus as status } from "./helpers";

const initialState = {
  allProducts: [],

  searchResults: [],

  status: {
    loading: false,
    error: false,
    message: "",
  },

  searchStatus: {
    loading: false,
    error: false,
    message: "",
  },
};

const productsSlice = createSlice({
  name: "mimitha-all-products",
  initialState,
  reducers: {
    // API
    getAllProducts: {
      prepare(payload) {
        return {
          payload: generateProductsQueryStr(payload),
        };
      },
      reducer(state) {
        state.status = status.loading();
      },
    },

    setProducts: (state, { payload }) => {
      state.allProducts = payload;
    },

    search: {
      prepare(payload) {
        return {
          payload: {
            locale: payload.locale,
            search: payload.search,
          },
        };
      },

      reducer(state) {
        state.searchStatus = status.loading();
      },
    },

    setSearchResults: (state, { payload }) => {
      state.searchResults = payload;
    },

    // REQUEST STATUS SETTERS
    setSuccess(state) {
      state.status = status.success();
    },

    setError(state, { payload }) {
      state.status = status.error();
    },

    setSearchSuccess(state) {
      state.searchStatus = status.success();
    },

    setSearchError(state, { payload }) {
      state.searchStatus = status.error();
    },

    // RESET
    resetProducts(state) {
      state.allProducts = [];
    },

    resetSearchResult(state) {
      state.searchResults = [];
    },
  },
});

export default productsSlice.reducer;
export const productsActions = productsSlice.actions;

function generateProductsQueryStr(payload) {
  let productsQuery = ["isPublic=1"];

  if (payload.category) productsQuery.push(`category=${payload.category}`);
  if (payload.productType.query)
    productsQuery.push(`productType=${payload.productType.query}`);
  if (payload.title.en) productsQuery.push(`title=${payload.title.en}`);
  if (payload.search) productsQuery.push(`title=${payload.search}`);

  return productsQuery.join("&");
}
