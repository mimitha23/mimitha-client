import { createSelector } from "@reduxjs/toolkit";

const selectedActiveProductStatus = ({ activeProduct }) => ({
  loading: activeProduct.status.loading,
  error: activeProduct.status.error,
  message: activeProduct.status.message,
});

const selectedRelatedProductsStatus = ({ activeProduct }) => ({
  loading: activeProduct.relatedProductsStatus.loading,
  error: activeProduct.relatedProductsStatus.error,
  message: activeProduct.relatedProductsStatus.message,
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

const selectedActiveProductInfoForShoppingCart = ({ activeProduct }) => ({
  _id: activeProduct.product._id,
  color: activeProduct.product.color,
  price: activeProduct.product.price,
  title: activeProduct.product.title,
  thumbnail: activeProduct.product.assets[0],
  size: activeProduct.activeSize,
});

// EXPORTS
export const selectActiveProductAssets = ({ activeProduct }) => ({
  assets: activeProduct.product.assets,
  alt: activeProduct.product.title,
});

export const selectActiveProductHeader = ({ activeProduct }) => ({
  price: activeProduct.product.price,
  title: activeProduct.product.title,
  isEditable: activeProduct.product.isEditable,
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

export const selectRelatedProductsStatus = createSelector(
  selectedRelatedProductsStatus,
  (memorised) => memorised
);

export const selectRelatedProducts = ({ activeProduct }) =>
  activeProduct.relatedProducts;

export const selectActiveProductInfoForShoppingCart = createSelector(
  selectedActiveProductInfoForShoppingCart,
  (info) => info
);

export const selectProductRegistrationId = ({ activeProduct }) =>
  activeProduct.product.productId;
