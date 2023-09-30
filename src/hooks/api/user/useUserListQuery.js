import { useDispatch, useSelector } from "react-redux";

import { useStartAuth } from "../Auth";
import { useIsAuthenticated } from "hooks/auth";
import { selectAllUserLists } from "store/selectors/user/userListsSelectors";
import { userListsActions } from "store/reducers/user/userListsReducer";

export default function useAddToListQuery() {
  const dispatch = useDispatch();

  const { startAuth } = useStartAuth();
  const { isAuthenticated } = useIsAuthenticated();

  const allUserLists = useSelector(selectAllUserLists);

  function openAddToListPopup({ productId }) {
    if (!isAuthenticated) return startAuth();

    dispatch(userListsActions.setProductToAddToListId(productId));
  }

  function onStartListCreation() {
    dispatch(userListsActions.setStartListCreation(true));
  }

  function onCancelListCreation() {
    dispatch(userListsActions.setCancelListCreation());
  }

  function onSetNewListTitle(value) {
    dispatch(userListsActions.setListTitle(value));
  }

  function cleanUpUserLists() {
    dispatch(userListsActions.resetUserLists());
  }

  // Queries
  function createListQuery({ title, productId }) {
    dispatch(userListsActions.createList({ title, productId }));
  }

  function addToListQuery({ productId, listId }) {
    const listIndex = allUserLists.findIndex(
      (list) => list._id === listId && list.products.includes(productId)
    );

    if (listIndex >= 0)
      dispatch(userListsActions.removeFromList({ productId, listId }));
    else dispatch(userListsActions.addToList({ productId, listId }));
  }

  function getAllListsQuery() {
    dispatch(userListsActions.getAllList());
  }

  function getListQuery(listId) {
    dispatch(userListsActions.getAllFromList({ listId }));
  }

  function deleteListQuery(listId) {
    dispatch(userListsActions.deleteList({ listId }));
  }

  return {
    openAddToListPopup,
    onStartListCreation,
    onCancelListCreation,
    onSetNewListTitle,
    cleanUpUserLists,
    addToListQuery,
    getAllListsQuery,
    createListQuery,
    getListQuery,
    deleteListQuery,
  };
}
