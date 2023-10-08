import { useDispatch, useSelector } from "react-redux";

import { userListsActions } from "store/reducers/user/userLists.reducer";
import { selectAllUserLists } from "store/selectors/user/userLists.selectors";

export default function useAddToListQuery() {
  const dispatch = useDispatch();

  const allUserLists = useSelector(selectAllUserLists);

  // Queries
  const createListQuery = ({ title, productId }) =>
    dispatch(userListsActions.createList({ title, productId }));

  function addToListQuery({ productId, listId }) {
    const listIndex = allUserLists.findIndex(
      (list) => list._id === listId && list.products.includes(productId)
    );

    if (listIndex >= 0)
      dispatch(userListsActions.removeFromList({ productId, listId }));
    else dispatch(userListsActions.addToList({ productId, listId }));
  }

  const getAllListsQuery = () => dispatch(userListsActions.getAllList());

  const getListQuery = (listId) =>
    dispatch(userListsActions.getAllFromList({ listId }));

  const deleteListQuery = (listId) =>
    dispatch(userListsActions.deleteList({ listId }));

  return {
    addToListQuery,
    getAllListsQuery,
    createListQuery,
    getListQuery,
    deleteListQuery,
  };
}
