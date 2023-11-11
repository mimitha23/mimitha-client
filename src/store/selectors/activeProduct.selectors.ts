import { RootStateT } from "store/store";
import { createSelector } from "@reduxjs/toolkit";

// MEMORISED SELECTORS
const selectedActiveProductStatus = ({ activeProduct }: RootStateT) => ({
  status: activeProduct.activeProductStatus.status,
  loading: activeProduct.activeProductStatus.loading,
  error: activeProduct.activeProductStatus.error,
  message: activeProduct.activeProductStatus.message,
});

const selectedRelatedProductsStatus = ({ activeProduct }: RootStateT) => ({
  status: activeProduct.relatedProductsStatus.status,
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
const selectActiveProductStatus = createSelector(
  selectedActiveProductStatus,
  (memorised) => memorised
);

const selectActiveProduct = createSelector(
  selectedActiveProduct,
  (memorised) => memorised
);

const selectActiveProductAssets = ({ activeProduct }: RootStateT) => ({
  assets: activeProduct.product.assets,
  alt: activeProduct.product.title,
});

const selectActiveProductHeader = ({ activeProduct }: RootStateT) => ({
  price: activeProduct.product.price,
  title: activeProduct.product.title,
  isEditable: activeProduct.product.isEditable,
});

const selectActiveProductDescription = ({ activeProduct }: RootStateT) => ({
  styles: activeProduct.product.styles,
  seasons: activeProduct.product.seasons,
  textures: activeProduct.product.textures,
  soldOut: activeProduct.product.soldOut,
});

const selectActiveProductStyler = ({ activeProduct }: RootStateT) => ({
  availableColors: activeProduct.availableColors,
  size: activeProduct.product.size,
  activeSize: activeProduct.activeSize,
  color: activeProduct.product.color,
});

const selectProductMannequinAndModel = createSelector(
  selectedProductMannequinAndModel,
  (memorized) => memorized
);

// RELATES PRODUCTS
const selectRelatedProductsStatus = createSelector(
  selectedRelatedProductsStatus,
  (memorised) => memorised
);

const selectRelatedProducts = ({ activeProduct }: RootStateT) =>
  activeProduct.relatedProducts;

const selectActiveProductInfoForShoppingCart = createSelector(
  selectedActiveProductInfoForShoppingCart,
  (info) => info
);

const selectProductRegistrationId = ({ activeProduct }: RootStateT) =>
  activeProduct.product.productId;

export {
  selectActiveProductStatus,
  selectActiveProduct,
  selectActiveProductAssets,
  selectActiveProductHeader,
  selectActiveProductDescription,
  selectActiveProductStyler,
  selectRelatedProductsStatus,
  selectRelatedProducts,
  selectActiveProductInfoForShoppingCart,
  selectProductRegistrationId,
  selectProductMannequinAndModel,
};
