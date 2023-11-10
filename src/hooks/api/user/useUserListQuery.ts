import { useAppDispatch, useAppSelector } from "store/hooks";

import { userListsActions } from "store/reducers/user/userLists.reducer";
import { selectAllUserLists } from "store/selectors/user/userLists.selectors";

import { CreateListArgsT, AddToListArgsT } from "interface/DB/userLists.types";

export default function useAddToListQuery() {
  const dispatch = useAppDispatch();

  const allUserLists = useAppSelector(selectAllUserLists);

  // Queries
  const createListQuery = ({ title, productId }: CreateListArgsT) =>
    dispatch(userListsActions.createList({ title, productId }));

  function addToListQuery({ productId, listId }: AddToListArgsT) {
    const listIndex = allUserLists.findIndex(
      (list) => list._id === listId && list.products.includes(productId)
    );

    if (listIndex >= 0)
      dispatch(userListsActions.removeFromList({ productId, listId }));
    else dispatch(userListsActions.addToList({ productId, listId }));
  }

  const getAllListsQuery = () => dispatch(userListsActions.getAllList());

  const getListQuery = (listId: string) =>
    dispatch(userListsActions.getAllFromList({ listId }));

  const deleteListQuery = (listId: string) =>
    dispatch(userListsActions.deleteList({ listId }));

  return {
    getListQuery,
    addToListQuery,
    createListQuery,
    getAllListsQuery,
    deleteListQuery,
  };
}
