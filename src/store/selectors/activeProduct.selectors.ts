import { RootStateT } from "store/store";
import { createSelector } from "@reduxjs/toolkit";

const selectedActiveProductStatus = ({ activeProduct }: RootStateT) => ({
  loading: activeProduct.status.loading,
  error: activeProduct.status.error,
  message: activeProduct.status.message,
});

const selectedRelatedProductsStatus = ({ activeProduct }: RootStateT) => ({
  loading: activeProduct.relatedProductsStatus.loading,
  error: activeProduct.relatedProductsStatus.error,
  message: activeProduct.relatedProductsStatus.message,
});

const selectedActiveProduct = ({ activeProduct }: RootStateT) => ({
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

const selectedActiveProductInfoForShoppingCart = ({
  activeProduct,
}: RootStateT) => ({
  _id: activeProduct.product._id,
  color: activeProduct.product.color,
  price: activeProduct.product.price,
  title: activeProduct.product.title,
  thumbnail: activeProduct.product.assets[0],
  size: activeProduct.activeSize,
});

const selectedProductMannequinAndModel = ({ activeProduct }: RootStateT) => ({
  mannequin: activeProduct.product.mannequin,
  modelVideo: activeProduct.product.modelVideo,
});

// EXPORTS
export const selectActiveProductAssets = ({ activeProduct }: RootStateT) => ({
  assets: activeProduct.product.assets,
  alt: activeProduct.product.title,
});

export const selectActiveProductHeader = ({ activeProduct }: RootStateT) => ({
  price: activeProduct.product.price,
  title: activeProduct.product.title,
  isEditable: activeProduct.product.isEditable,
});

export const selectActiveProductDescription = ({
  activeProduct,
}: RootStateT) => ({
  styles: activeProduct.product.styles,
  seasons: activeProduct.product.seasons,
  textures: activeProduct.product.textures,
  soldOut: activeProduct.product.soldOut,
});

export const selectActiveProductStyler = ({ activeProduct }: RootStateT) => ({
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

export const selectRelatedProducts = ({ activeProduct }: RootStateT) =>
  activeProduct.relatedProducts;

export const selectActiveProductInfoForShoppingCart = createSelector(
  selectedActiveProductInfoForShoppingCart,
  (info) => info
);

export const selectProductRegistrationId = ({ activeProduct }: RootStateT) =>
  activeProduct.product.productId;

export const selectProductMannequinAndModel = createSelector(
  selectedProductMannequinAndModel,
  (memorized) => memorized
);
