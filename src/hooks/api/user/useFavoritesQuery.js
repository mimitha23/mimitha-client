import { useDispatch, useSelector } from "react-redux";

import { useStartAuth } from "../Auth";
import { useIsAuthenticated } from "hooks/auth";
import { userFavoritesActions } from "store/reducers/user/userFavoritesReducer";
import { selectAllUserFavoritesIds } from "store/selectors/user/userFavoritesSelector";

export default function useFavoritesQuery() {
  const dispatch = useDispatch();

  const { startAuth } = useStartAuth();
  const { isAuthenticated } = useIsAuthenticated();

  const allUserFavorites = useSelector(selectAllUserFavoritesIds);

  function cleanUpUserFavorites() {
    dispatch(userFavoritesActions.resetUserFavorites());
  }

  function addToFavoritesQuery({ productId }) {
    if (!isAuthenticated) return startAuth();

    const isSavedToFavorites = allUserFavorites.some(
      (product) => product._id === productId
    );

    isSavedToFavorites
      ? dispatch(userFavoritesActions.removeFromFavorites({ productId }))
      : dispatch(userFavoritesActions.addToFavorites({ productId }));
  }

  function getAllFavoritesIdsQuery() {
    dispatch(userFavoritesActions.getAllFavoritesIds());
  }

  function getAllFavoritesQuery() {
    dispatch(userFavoritesActions.getAllFavorites());
  }

  return {
    addToFavoritesQuery,
    getAllFavoritesIdsQuery,
    cleanUpUserFavorites,
    getAllFavoritesQuery,
  };
}
