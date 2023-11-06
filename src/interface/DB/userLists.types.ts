import { ProductShortInfoT } from "./product.types";

export interface UserListT {
  _id: string;
  title: string;
  user: string;
  products: Array<ProductShortInfoT>;
}

export interface UserListShortT extends Omit<UserListT, "products"> {
  products: Array<string>;
}

export interface CreateListArgsT {
  title: string;
  productId: string;
}

export interface DeleteListArgsT {
  listId: string;
}

export interface AddToListArgsT {
  listId: string;
  productId: string;
}

export interface GetAllFromListArgsT {
  listId: string;
}
