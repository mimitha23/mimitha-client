import { createSelector } from "@reduxjs/toolkit";

const selectedProductStatus = ({ products }) => ({
  loading: products.status.loading,
  error: products.status.error,
  message: products.status.message,
});

export const selectAllProducts = ({ products }) => products.allProducts;

export const selectProductStatus = createSelector(
  selectedProductStatus,
  (memorised) => memorised
);
