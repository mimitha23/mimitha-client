import { ProductShortInfoT } from "./product.types";

type UserListT = {
  _id: string;
  title: string;
  user: string;
  products: Array<ProductShortInfoT>;
};

type UserListShortT = Omit<UserListT, "products"> & {
  products: Array<string>;
};

type CreateListArgsT = {
  title: string;
  productId: string;
};

type DeleteListArgsT = {
  listId: string;
};

type AddToListArgsT = {
  listId: string;
  productId: string;
};

type GetAllFromListArgsT = {
  listId: string;
};

export type {
  UserListT,
  UserListShortT,
  CreateListArgsT,
  DeleteListArgsT,
  AddToListArgsT,
  GetAllFromListArgsT,
};
