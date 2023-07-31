import { takeLatest } from "redux-saga/effects";
import { userFavoritesActions } from "store/reducers/user/userFavoritesReducer";
import { userFavoritesHandlers } from "store/saga/handlers/user";

export default function* userFavoritesSaga() {
  yield takeLatest(
    userFavoritesActions.addToFavorites,
    userFavoritesHandlers.addToFavorites
  );

  yield takeLatest(
    userFavoritesActions.removeFromFavorites,
    userFavoritesHandlers.removeFromFavorites
  );

  yield takeLatest(
    userFavoritesActions.getAllFavorites,
    userFavoritesHandlers.getAllFavorites
  );

  yield takeLatest(
    userFavoritesActions.getAllFavoritesIds,
    userFavoritesHandlers.getAllFavoritesIds
  );
}
