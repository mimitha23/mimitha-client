import {
  ProductColorT,
  ProductSizeT,
  ProductTitleT,
} from "interface/DB/product.types";

export interface ProductCartStateT {
  cart: Array<CartProductT>;
}

export interface CartProductT {
  _id: string;
  cartId?: string;
  color: ProductColorT;
  size: ProductSizeT;
  price: number;
  title: ProductTitleT;
  thumbnails: Array<string>;
  quantity: number;
}

export interface RemoveFromCartT {
  cartId: string;
}

export interface SetProductQuantityToCartArgsT {
  cardId: string;
  sizeId: string;
  value: number;
}
