import { ProductShortInfoT } from "interface/DB/product.types";

type AddToFavoritesArgsT = {
  productId: string;
};

type RemoveFromFavoritesArgsT = {
  productId: string;
};

type GetAllFavoritesIdsArgsT = {
  query: string;
};

type GetAllFavoritesIdsResponseT = Array<{ _id: string }>;

type GetAllFavoritesResponseT = Array<ProductShortInfoT>;

export type {
  AddToFavoritesArgsT,
  GetAllFavoritesIdsArgsT,
  RemoveFromFavoritesArgsT,
  GetAllFavoritesResponseT,
  GetAllFavoritesIdsResponseT,
};
