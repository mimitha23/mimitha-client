import { useAppDispatch, useAppSelector } from "store/hooks";

import { useStartAuth } from "hooks/api/Auth";
import { useIsAuthenticated } from "hooks/auth";
import { userFavoritesActions } from "store/reducers/user/userFavorites.reducer";
import { selectAllUserFavoritesIds } from "store/selectors/user/userFavorites.selector";

import { AddToFavoritesArgsT } from "interface/DB/userFavorites.types";

export default function useFavoritesQuery() {
  const dispatch = useAppDispatch();

  const { startAuth } = useStartAuth();
  const { isAuthenticated } = useIsAuthenticated();

  const allUserFavorites = useAppSelector(selectAllUserFavoritesIds);

  function addToFavoritesQuery({ productId }: AddToFavoritesArgsT) {
    if (!isAuthenticated) return startAuth();

    const isSavedToFavorites = allUserFavorites.some(
      (product) => product._id === productId
    );

    isSavedToFavorites
      ? dispatch(userFavoritesActions.removeFromFavorites({ productId }))
      : dispatch(userFavoritesActions.addToFavorites({ productId }));
  }

  const cleanUpUserFavorites = () =>
    dispatch(userFavoritesActions.cleanUpUserFavorites());

  const getAllFavoritesIdsQuery = () =>
    dispatch(userFavoritesActions.getAllFavoritesIds());

  const getAllFavoritesQuery = () =>
    dispatch(userFavoritesActions.getAllFavorites());

  return {
    addToFavoritesQuery,
    getAllFavoritesQuery,
    cleanUpUserFavorites,
    getAllFavoritesIdsQuery,
  };
}
