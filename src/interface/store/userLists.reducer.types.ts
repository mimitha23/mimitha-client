import { LoadingStatusT } from "./store.common";
import { UserListShortT, UserListT } from "interface/DB/userLists.types";

export interface UserListsStateT {
  status: LoadingStatusT;
  allLists: Array<UserListShortT>;
  list: UserListT;
  productToAddToListId: string;
  isCreatingList: boolean;
  creatingListTitle: string;
}
