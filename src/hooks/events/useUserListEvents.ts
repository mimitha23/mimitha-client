import { useAppDispatch, useAppSelector } from "store/hooks";

import {
  selectCreatingListTitle,
  selectIsCreatingList,
  selectAllUserLists,
} from "store/selectors/user/userLists.selectors";
import { useStartAuth } from "hooks/api/Auth";
import { useIsAuthenticated } from "hooks/auth";
import { userListsActions } from "store/reducers/user/userLists.reducer";

export default function useUserListEvents() {
  const dispatch = useAppDispatch();

  const { startAuth } = useStartAuth();
  const { isAuthenticated } = useIsAuthenticated();

  // Handle List Creation
  const isCreatingList = useAppSelector(selectIsCreatingList);

  const onStartListCreation = () =>
    dispatch(userListsActions.setStartListCreation(true));

  const onCancelListCreation = () =>
    dispatch(userListsActions.setCancelListCreation());

  // Control AddToListPopup State
  function openAddToListPopup({ productId }: { productId: string }) {
    if (!isAuthenticated) return startAuth();
    dispatch(userListsActions.setProductToAddToListId(productId));
  }

  function closeAddToListPopup() {
    dispatch(userListsActions.setProductToAddToListId(""));
    if (isCreatingList) onCancelListCreation();
  }

  // Handle New List Title
  const newListTitle = useAppSelector(selectCreatingListTitle);

  const onSetNewListTitle = (value: string) =>
    dispatch(userListsActions.setListTitle(value));

  // CleanUp
  const cleanUpUserLists = () => dispatch(userListsActions.cleanUpUserLists());

  const cleanUpUserActiveList = () =>
    dispatch(userListsActions.cleanUpUserActiveList());

  // Utils
  const userLists = useAppSelector(selectAllUserLists);

  const checkIsSavedToList = (productId: string) =>
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
    cleanUpUserActiveList,
    // Utils
    checkIsSavedToList,
  };
}
