import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { controlStatus as status } from "./helpers";

import { SetStatusArgsT } from "interface/store/store.common";
import { ProductsStateT } from "interface/store/products.reducer.types";
import { SearchProductsArgsT } from "interface/DB/product.types";

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
    // API //

    // 1.0
    getAllProducts: {
      prepare(payload) {
        return {
          payload: generateProductsQueryStr(payload),
        };
      },

      reducer(state) {
        state.allProductsStatus = status.loading();
      },
    },

    setProducts: (state, { payload }) => {
      state.allProducts = payload;
    },

    setAllProductsStatus(state, { payload }: PayloadAction<SetStatusArgsT>) {
      state.allProductsStatus =
        payload.stage === "success"
          ? status.success(payload.status || "SUCCESS")
          : payload.stage === "error"
          ? status.error(payload.message || "")
          : status[payload.stage]();
    },

    cleanUpAllProducts(state) {
      state.allProducts = [];
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

    setSearchResults: (state, { payload }) => {
      state.searchResults = payload;
    },

    setSearchStatus(state, { payload }: PayloadAction<SetStatusArgsT>) {
      state.searchProductsStatus =
        payload.stage === "success"
          ? status.success(payload.status || "SUCCESS")
          : payload.stage === "error"
          ? status.error(payload.message || "")
          : status[payload.stage]();
    },

    cleanUpSearchResult(state) {
      state.searchResults = [];
    },
  },
});

export default productsSlice.reducer;
export const productsActions = productsSlice.actions;

function generateProductsQueryStr(payload: any) {
  let productsQuery = ["isPublic=1"];

  // filter by router-state
  if (payload.sale) productsQuery.push(`sale=${payload.sale}`);
  if (payload.category) productsQuery.push(`category=${payload.category}`);
  if (payload.productType.query)
    productsQuery.push(`productType=${payload.productType.query}`);
  if (payload.title.en) productsQuery.push(`title=${payload.title.en}`);
  if (payload.search) productsQuery.push(`title=${payload.search}`);

  // filter by products filter
  if (!payload.filter) return productsQuery.join("&");

  if (payload.filter.activeGender[0])
    productsQuery.push(
      `gender=${payload.filter.activeGender
        .map((type: any) => type.query)
        .join(",")}`
    );
  if (payload.filter.activeProductTypes[0])
    productsQuery.push(
      `productType=${payload.filter.activeProductTypes
        .map((type: any) => type.query)
        .join(",")}`
    );
  if (payload.filter.activeSeasons[0])
    productsQuery.push(
      `seasons=${payload.filter.activeSeasons
        .map((season: any) => season.query)
        .join(",")}`
    );
  if (payload.filter.activeSort[0])
    productsQuery.push(
      `sort=${payload.filter.activeSort
        .flatMap((sortQuery: any) => sortQuery.query.split(","))
        .join(",")}`
    );
  if (payload.filter.activeStyles[0])
    productsQuery.push(
      `styles=${payload.filter.activeStyles
        .map((style: any) => style.query)
        .join(",")}`
    );
  if (payload.filter.activeTextures[0])
    productsQuery.push(
      `textures=${payload.filter.activeTextures
        .map((texture: any) => texture.en)
        .join(",")}`
    );

  return productsQuery.join("&");
}
