import { createSelector } from "@reduxjs/toolkit";

const selectedProductStatus = ({ products }) => ({
  loading: products.status.loading,
  error: products.status.error,
  message: products.status.message,
});

const selectedProductsSearchStatus = ({ products }) => ({
  loading: products.searchStatus.loading,
  error: products.searchStatus.error,
  message: products.searchStatus.message,
});

export const selectAllProducts = ({ products }) => products.allProducts;

export const selectProductsSearchResult = ({ products }) =>
  products.searchResults;

export const selectProductStatus = createSelector(
  selectedProductStatus,
  (memorized) => memorized
);

export const selectProductsSearchStatus = createSelector(
  selectedProductsSearchStatus,
  (memorized) => memorized
);
