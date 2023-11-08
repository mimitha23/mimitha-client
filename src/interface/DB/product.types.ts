import { LocationStateT } from "interface/common.types";

export interface ProductShortInfoT {
  _id: string;
  color: ProductColorT;
  price: number;
  product: ProductShortInfoRootProductT;
  size: Array<ProductSizeT>;
  soldOut: number;
  thumbnails: Array<string>;
  title: ProductTitleT;
}

// PARTIALS
interface NestedFieldsCommonT {
  _id: string;
  ka: string;
  en: string;
  query: string;
}

export interface ProductColorT extends Omit<NestedFieldsCommonT, "query"> {
  hex: string;
}

export interface ProductSizeT {
  _id: string;
  size: string;
  amount: number;
}

export type ProductTitleT = Omit<NestedFieldsCommonT, "query" | "_id">;

export interface ProductShortInfoRootProductT {
  _id: string;
  isEditable: boolean;
  productType: ProductShortInfoRootProductTypeT;
  category: ProductShortInfoRootProductCategoryT;
}

export type ProductShortInfoRootProductCategoryT = NestedFieldsCommonT;

export type ProductShortInfoRootProductTypeT = NestedFieldsCommonT;

// API
export interface SearchProductsArgsT {
  search: string;
  locale: string;
}

export interface GetAllProductsArgsT extends LocationStateT {
  filter?: string;
}
