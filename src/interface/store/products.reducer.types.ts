import { LoadingStatusT } from "./store.common";
import { ProductShortInfoT } from "interface/DB/product.types";

type ProductsStateT = {
  // STATUS
  allProductsStatus: LoadingStatusT;
  searchProductsStatus: LoadingStatusT;

  // DATA
  allProducts: Array<ProductShortInfoT>;
  searchResults: Array<ProductShortInfoT>;
};

export type { ProductsStateT };
