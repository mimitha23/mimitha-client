import { LocationStateT } from "interface/common.types";

type ProductInfoT = {
  _id: string;
  title: ProductTitleT;
  color: ProductColorT;
  description: { ka: string; en: string };
  price: number;
  sale: boolean;
  size: Array<ProductSizeT>;
  inStock: number;
  soldOut: number;
  rating: number;
  assets: Array<string>;
  mannequin: string;
  modelVideo: string;
  productId: string;
  productType: ProductTypeT;
  gender: GenderT;
  isEditable: boolean;
  styles: Array<ProductStyleT>;
  seasons: Array<ProductSeasonT>;
  textures: Array<ProductTextureT>;
  warnings: Array<ProductWarningT>;
};

type ProductShortInfoT = {
  _id: string;
  color: ProductColorT;
  price: number;
  product: ProductShortInfoRootProductT;
  size: Array<ProductSizeT>;
  soldOut: number;
  thumbnails: Array<string>;
  title: ProductTitleT;
};

// PARTIALS
type NestedFieldsCommonT = {
  _id: string;
  ka: string;
  en: string;
  query: string;
};

type GenderT = NestedFieldsCommonT;

type ProductStyleT = NestedFieldsCommonT;

type ProductSeasonT = NestedFieldsCommonT;

type ProductCategoryT = NestedFieldsCommonT;

type ProductTypeT = NestedFieldsCommonT;

type ProductTitleT = { ka: string; en: string };

type ProductWarningT = Omit<NestedFieldsCommonT, "query">;

type ProductTextureT = Omit<NestedFieldsCommonT, "query"> & {
  percentage: number;
};

type ProductColorT = Omit<NestedFieldsCommonT, "query"> & {
  hex: string;
};

type ProductSizeT = {
  _id: string;
  size: string;
  amount: number;
};

type ProductShortInfoRootProductT = {
  _id: string;
  isEditable: boolean;
  productType: ProductTypeT;
  category: ProductCategoryT;
};

// API
type SearchProductsArgsT = {
  search: string;
  locale: string;
};

type GetAllProductsArgsT = LocationStateT & {
  filter?: string;
};

type GetActiveProductArgsT = {
  productId: string;
};

type GetRelatedProductsArgsT = {
  productId: string;
};

type GetActiveProductResponseT = Omit<
  ProductInfoT,
  | "productId"
  | "productType"
  | "gender"
  | "isEditable"
  | "styles"
  | "seasons"
  | "textures"
  | "warning"
> & {
  product: {
    _id: string;
    productType: ProductTypeT;
    gender: GenderT;
    isEditable: boolean;
    styles: Array<ProductStyleT>;
    seasons: Array<ProductSeasonT>;
    textures: Array<ProductTextureT>;
    warnings: Array<ProductWarningT>;
    developedProducts: Array<{
      _id: string;
      color: ProductColorT;
    }>;
  };
};

export type {
  ProductInfoT,
  ProductShortInfoT,
  // PARTIALS
  ProductTitleT,
  ProductColorT,
  ProductSizeT,
  // AI
  SearchProductsArgsT,
  GetActiveProductArgsT,
  GetAllProductsArgsT,
  GetRelatedProductsArgsT,
  GetActiveProductResponseT,
};
