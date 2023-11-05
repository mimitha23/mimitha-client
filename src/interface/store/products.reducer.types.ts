import { LoadingStatusT } from "./store.common";
import { ProductShortInfoT } from "interface/DB/product.types";

export interface ProductsStateT {
  // STATUS
  allProductsStatus: LoadingStatusT;
  searchProductsStatus: LoadingStatusT;

  // DATA
  allProducts: Array<ProductShortInfoT>;
  searchResults: Array<ProductShortInfoT>;
}
