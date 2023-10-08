import { useDispatch, useSelector } from "react-redux";

import {
  selectCreatingListTitle,
  selectIsCreatingList,
  selectAllUserLists,
} from "store/selectors/user/userLists.selectors";
import { useStartAuth } from "hooks/api/Auth";
import { useIsAuthenticated } from "hooks/auth";
import { userListsActions } from "store/reducers/user/userLists.reducer";

export default function useUserListEvents() {
  const dispatch = useDispatch();

  const { startAuth } = useStartAuth();
  const { isAuthenticated } = useIsAuthenticated();

  // Handle List Creation
  const isCreatingList = useSelector(selectIsCreatingList);

  const onStartListCreation = () =>
    dispatch(userListsActions.setStartListCreation(true));

  const onCancelListCreation = () =>
    dispatch(userListsActions.setCancelListCreation());

  // Control AddToListPopup State
  function openAddToListPopup({ productId }) {
    if (!isAuthenticated) return startAuth();
    dispatch(userListsActions.setProductToAddToListId(productId));
  }

  function closeAddToListPopup({ productId }) {
    dispatch(userListsActions.setProductToAddToListId(""));
    if (isCreatingList) onCancelListCreation();
  }

  // Handle New List Title
  const newListTitle = useSelector(selectCreatingListTitle);

  const onSetNewListTitle = (value) =>
    dispatch(userListsActions.setListTitle(value));

  // CleanUp
  const cleanUpUserLists = () => dispatch(userListsActions.resetUserLists());

  // Utils
  const userLists = useSelector(selectAllUserLists);

  const checkIsSavedToList = (productId) =>
    userLists.find((list) => list.products.includes(productId));

  return {
    // Handle List Creation
    isCreatingList,
    onStartListCreation,
    onCancelListCreation,
    // Control AddToListPopup State
    openAddToListPopup,
    closeAddToListPopup,
    // Handle New List Title
    onSetNewListTitle,
    newListTitle,
    // CleanUp
    cleanUpUserLists,
    // Utils
    checkIsSavedToList,
  };
}
