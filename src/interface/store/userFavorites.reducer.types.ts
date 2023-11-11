import { LoadingStatusT } from "./store.common";
import { ProductShortInfoT } from "interface/DB/product.types";

type UserFavoritesStateT = {
  status: LoadingStatusT;
  favoritesIds: Array<{ _id: string }>;
  favorites: Array<ProductShortInfoT>;
};

export type { UserFavoritesStateT };
