import { createSelector } from "@reduxjs/toolkit";

const selectedActiveProductStatus = ({ activeProduct }) => ({
  loading: activeProduct.status.loading,
  error: activeProduct.status.error,
  message: activeProduct.status.message,
});

const selectedActiveProduct = ({ activeProduct }) => ({
  _id: activeProduct.product._id,
  description: activeProduct.product.description,
  sale: activeProduct.product.sale,
  inStock: activeProduct.product.inStock,
  rating: activeProduct.product.rating,
  productId: activeProduct.product.productId,
  productType: activeProduct.product.productType,
  gender: activeProduct.product.gender,
  isEditable: activeProduct.product.isEditable,
  warnings: activeProduct.product.warnings,
});

export const selectActiveProductAssets = ({ activeProduct }) => ({
  assets: activeProduct.product.assets,
  alt: activeProduct.product.title,
});

export const selectActiveProductHeader = ({ activeProduct }) => ({
  price: activeProduct.product.price,
  title: activeProduct.product.title,
});

export const selectActiveProductDescription = ({ activeProduct }) => ({
  styles: activeProduct.product.styles,
  seasons: activeProduct.product.seasons,
  textures: activeProduct.product.textures,
  soldOut: activeProduct.product.soldOut,
});

export const selectActiveProductStyler = ({ activeProduct }) => ({
  availableColors: activeProduct.availableColors,
  size: activeProduct.product.size,
  activeSize: activeProduct.activeSize,
  color: activeProduct.product.color,
});

export const selectActiveProduct = createSelector(
  selectedActiveProduct,
  (memorised) => memorised
);

export const selectActiveProductStatus = createSelector(
  selectedActiveProductStatus,
  (memorised) => memorised
);
