import { call, put } from "redux-saga/effects";
import { errorController } from "./helpers";
import { navActions } from "store/reducers/nav.reducer";
import { navAPI } from "../api";

export function* getNav({ payload }) {
  try {
    const { data } = yield call(navAPI.getNav, payload);
    yield put(navActions.setNav(data));
    yield put(navActions.setSuccess());
  } catch (error) {
    errorController({
      error,
      location: "getNavHandler",
      errorSetter: navActions.setError,
    });
  }
}
