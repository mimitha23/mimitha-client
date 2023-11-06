import { ProductShortInfoT } from "interface/DB/product.types";

export interface AddToFavoritesArgsT {
  productId: string;
}

export interface RemoveFromFavoritesArgsT {
  productId: string;
}

export interface GetAllFavoritesIdsArgsT {
  query: string;
}

export type GetAllFavoritesIdsResponseT = Array<{ _id: string }>;

export type GetAllFavoritesResponseT = Array<ProductShortInfoT>;
