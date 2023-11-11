import {
  ProductColorT,
  ProductSizeT,
  ProductTitleT,
} from "interface/DB/product.types";

type ProductCartStateT = {
  cart: Array<CartProductT>;
};

type CartProductT = {
  _id: string;
  cartId?: string;
  color: ProductColorT;
  size: ProductSizeT;
  price: number;
  title: ProductTitleT;
  thumbnails: Array<string>;
  quantity: number;
};

type RemoveFromCartT = {
  cartId: string;
};

type SetProductQuantityToCartArgsT = {
  cardId: string;
  sizeId: string;
  value: number;
};

export type {
  ProductCartStateT,
  CartProductT,
  RemoveFromCartT,
  SetProductQuantityToCartArgsT,
};
