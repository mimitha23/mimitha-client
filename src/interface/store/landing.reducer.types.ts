import { LoadingStatusT } from "./store.common";
import { ProductShortInfoT } from "interface/DB/product.types";

export interface LandingStateT {
  status: LoadingStatusT;
  popularProducts: Array<ProductShortInfoT>;
}
