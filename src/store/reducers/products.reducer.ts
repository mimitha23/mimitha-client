import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { controlStatus as status, setStatus } from "./helpers";

import {
  ProductShortInfoT,
  SearchProductsArgsT,
  GetAllProductsArgsT,
} from "interface/DB/product.types";
import { SetStatusArgsT } from "interface/store/store.common";
import { ProductsStateT } from "interface/store/products.reducer.types";

const initialState: ProductsStateT = {
  allProductsStatus: status.default(),

  searchProductsStatus: status.default(),

  allProducts: [],

  searchResults: [],
};

const productsSlice = createSlice({
  name: "mimitha-all-products",
  initialState,
  reducers: {
    // 1.0
    getAllProducts: {
      prepare(payload: GetAllProductsArgsT) {
        return {
          payload: generateProductsQueryStr(payload),
        };
      },

      reducer(state) {
        state.allProductsStatus = status.loading();
      },
    },

    setProducts: (
      state,
      { payload }: PayloadAction<Array<ProductShortInfoT>>
    ) => {
      state.allProducts = payload;
      state.allProductsStatus = status.default();
    },

    setAllProductsStatus(state, { payload }: PayloadAction<SetStatusArgsT>) {
      state.allProductsStatus = setStatus(payload);
    },

    cleanUpAllProducts(state) {
      state.allProducts = initialState.allProducts;
    },

    // 2.0
    search: {
      prepare(payload: SearchProductsArgsT) {
        return { payload };
      },

      reducer(state) {
        state.searchProductsStatus = status.loading();
      },
    },

    setSearchResults: (
      state,
      { payload }: PayloadAction<Array<ProductShortInfoT>>
    ) => {
      state.searchResults = payload;
      state.searchProductsStatus = status.default();
    },

    setSearchStatus(state, { payload }: PayloadAction<SetStatusArgsT>) {
      state.searchProductsStatus = setStatus(payload);
    },

    cleanUpSearchResult(state) {
      state.searchResults = initialState.searchResults;
    },
  },
});

export default productsSlice.reducer;
export const productsActions = productsSlice.actions;

function generateProductsQueryStr(payload: GetAllProductsArgsT) {
  let productsQuery = ["isPublic=1"];

  // filter by router-state
  if (payload.filter) productsQuery.push(payload.filter);
  if (payload.sale) productsQuery.push(`sale=${payload.sale}`);
  if (payload.category) productsQuery.push(`category=${payload.category}`);
  if (payload.productType.query)
    productsQuery.push(`productType=${payload.productType.query}`);
  if (payload.title.en) productsQuery.push(`title=${payload.title.en}`);
  if (payload.search) productsQuery.push(`title=${payload.search}`);

  return productsQuery.join("&");
}
