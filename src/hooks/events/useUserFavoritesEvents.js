import { useDispatch } from "react-redux";
import { userFavoritesActions } from "store/reducers/user/userFavorites.reducer";

export default function useUserFavoritesEvents() {
  const dispatch = useDispatch();

  const cleanUpUserFavoritesList = () =>
    dispatch(userFavoritesActions.cleanUpUserFavoritesList());

  const cleanUpUserFavorites = () =>
    dispatch(userFavoritesActions.cleanUpUserFavorites());

  return { cleanUpUserFavoritesList, cleanUpUserFavorites };
}
