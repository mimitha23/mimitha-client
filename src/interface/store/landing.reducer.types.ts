import { LoadingStatusT } from "./store.common";
import { ProductShortInfoT } from "interface/DB/product.types";

type LandingStateT = {
  status: LoadingStatusT;
  popularProducts: Array<ProductShortInfoT>;
};

export type { LandingStateT };
