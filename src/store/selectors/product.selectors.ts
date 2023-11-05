import { createSelector } from "@reduxjs/toolkit";
import { RootStateT } from "store/store";

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

export const selectAllProducts = ({ products }: RootStateT) =>
  products.allProducts;

export const selectProductsSearchResult = ({ products }: RootStateT) =>
  products.searchResults;

export const selectProductsStatus = createSelector(
  selectedProductsStatus,
  (memorized) => memorized
);

export const selectProductsSearchStatus = createSelector(
  selectedProductsSearchStatus,
  (memorized) => memorized
);
