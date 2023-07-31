import { useDispatch, useSelector } from "react-redux";

import { userFavoritesActions } from "store/reducers/user/userFavoritesReducer";
import { selectAllUserFavorites } from "store/selectors/user/userFavoritesSelector";

export default function useFavoritesQuery() {
  const dispatch = useDispatch();

  const allUserFavorites = useSelector(selectAllUserFavorites);

  function addToFavoritesQuery({ productId }) {
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

  return { addToFavoritesQuery, getAllFavoritesIdsQuery };
}
