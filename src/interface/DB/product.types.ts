import { LocationStateT } from "interface/common.types";

export type ProductInfoT = {
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

export type ProductShortInfoT = {
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
interface NestedFieldsCommonT {
  _id: string;
  ka: string;
  en: string;
  query: string;
}

type GenderT = NestedFieldsCommonT;

type ProductStyleT = NestedFieldsCommonT;

type ProductSeasonT = NestedFieldsCommonT;

export type ProductCategoryT = NestedFieldsCommonT;

export type ProductTypeT = NestedFieldsCommonT;

export type ProductTitleT = { ka: string; en: string };

type ProductWarningT = Omit<NestedFieldsCommonT, "query">;

type ProductTextureT = Omit<NestedFieldsCommonT, "query"> & {
  percentage: number;
};

export type ProductColorT = Omit<NestedFieldsCommonT, "query"> & {
  hex: string;
};

export type ProductSizeT = {
  _id: string;
  size: string;
  amount: number;
};

export type ProductShortInfoRootProductT = {
  _id: string;
  isEditable: boolean;
  productType: ProductTypeT;
  category: ProductCategoryT;
};

// API
export type SearchProductsArgsT = {
  search: string;
  locale: string;
};

export type GetAllProductsArgsT = LocationStateT & {
  filter?: string;
};

export type GetActiveProductArgsT = {
  productId: string;
};

export type GetRelatedProductsArgsT = {
  productId: string;
};

export type GetActiveProductResponseT = Omit<
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
