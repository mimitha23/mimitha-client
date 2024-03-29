import { call, put } from "redux-saga/effects";
import { userFavoritesAPI } from "store/saga/api/user";
import { userFavoritesActions } from "store/reducers/user/userFavorites.reducer";
import { errorController } from "store/saga/handlers/helpers";

export function* addToFavorites({ payload }) {
  try {
    yield call(userFavoritesAPI.addToFavoritesQuery, payload);
    yield put(userFavoritesActions.setAddToFavorites(payload));
  } catch (error) {
    yield errorController({
      error,
      location: "addToFavoritesHandler",
    });
  }
}

export function* removeFromFavorites({ payload }) {
  try {
    yield call(userFavoritesAPI.removeFromFavoritesQuery, payload);
    yield put(userFavoritesActions.setRemoveFromFavorites(payload));
  } catch (error) {
    yield errorController({
      error,
      location: "removeFromFavoritesHandler",
    });
  }
}

export function* getAllFavorites() {
  try {
    const { data } = yield call(userFavoritesAPI.getAllFavoritesQuery);
    yield put(userFavoritesActions.setAllFavorites(data));
    yield put(userFavoritesActions.setSuccess());
  } catch (error) {
    yield errorController({
      error,
      location: "getAllFavoritesHandler",
      errorSetter: userFavoritesActions.setError,
    });
  }
}

export function* getAllFavoritesIds({ payload }) {
  try {
    const { data } = yield call(userFavoritesAPI.getAllFavoritesQuery, payload);
    yield put(userFavoritesActions.setAllFavoritesIds(data));
  } catch (error) {
    yield errorController({
      error,
      location: "getAllFavoritesIdsHandler",
    });
  }
}
