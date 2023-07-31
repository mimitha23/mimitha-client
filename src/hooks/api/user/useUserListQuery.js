import { useDispatch, useSelector } from "react-redux";
import { selectAllUserLists } from "store/selectors/user/userListsSelectors";
import { userListsActions } from "store/reducers/user/userListsReducer";

export default function useAddToListQuery() {
  const dispatch = useDispatch();

  const allUserLists = useSelector(selectAllUserLists);

  function openAddToListPopup({ productId }) {
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

  return {
    openAddToListPopup,
    onStartListCreation,
    onCancelListCreation,
    onSetNewListTitle,
    addToListQuery,
    getAllListsQuery,
    createListQuery,
  };
}
