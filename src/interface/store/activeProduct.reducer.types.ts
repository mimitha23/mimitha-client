import {
  ProductInfoT,
  ProductSizeT,
  ProductColorT,
  ProductShortInfoT,
} from "interface/DB/product.types";
import { LoadingStatusT } from "./store.common";

export type ActiveProductStateT = {
  product: ProductInfoT;
  activeSize: ProductSizeT;
  availableColors: Array<ProductColorT & { productId: string }>;
  relatedProducts: Array<ProductShortInfoT>;
  status: LoadingStatusT;
  relatedProductsStatus: LoadingStatusT;
};
