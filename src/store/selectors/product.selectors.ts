import { createSelector } from "@reduxjs/toolkit";
import { RootStateT } from "store/store";

// MEMORISED SELECTORS
const selectedProductsStatus = ({ products }: RootStateT) => ({
  status: products.allProductsStatus.status,
  loading: products.allProductsStatus.loading,
  error: products.allProductsStatus.error,
  message: products.allProductsStatus.message,
});

const selectedProductsSearchStatus = ({ products }: RootStateT) => ({
  status: products.searchProductsStatus.status,
  loading: products.searchProductsStatus.loading,
  error: products.searchProductsStatus.error,
  message: products.searchProductsStatus.message,
});

// SELECTORS
const selectAllProducts = ({ products }: RootStateT) => products.allProducts;

const selectProductsSearchResult = ({ products }: RootStateT) =>
  products.searchResults;

const selectProductsStatus = createSelector(
  selectedProductsStatus,
  (memorized) => memorized
);

const selectProductsSearchStatus = createSelector(
  selectedProductsSearchStatus,
  (memorized) => memorized
);

export {
  selectProductsStatus,
  selectAllProducts,
  selectProductsSearchStatus,
  selectProductsSearchResult,
};
