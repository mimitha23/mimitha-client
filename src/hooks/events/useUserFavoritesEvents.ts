import { useAppDispatch } from "store/hooks";
import { userFavoritesActions } from "store/reducers/user/userFavorites.reducer";

export default function useUserFavoritesEvents() {
  const dispatch = useAppDispatch();

  const cleanUpUserFavoritesList = () =>
    dispatch(userFavoritesActions.cleanUpUserFavoritesList());

  const cleanUpUserFavorites = () =>
    dispatch(userFavoritesActions.cleanUpUserFavorites());

  return { cleanUpUserFavoritesList, cleanUpUserFavorites };
}
