import { LoadingStatusT } from "./store.common";
import { ProductShortInfoT } from "interface/DB/product.types";

export interface UserFavoritesStateT {
  status: LoadingStatusT;
  favoritesIds: Array<{ _id: string }>;
  favorites: Array<ProductShortInfoT>;
}
