import { call, put } from "redux-saga/effects";
import { errorController } from "./helpers";
import { landingAPI } from "../api";
import { landingActions } from "store/reducers/landingReducer";

export function* getLanding() {
  try {
    const { data } = yield call(landingAPI.getLanding);
    yield put(landingActions.setLanding(data));
    yield put(landingActions.setSuccess());
  } catch (error) {
    yield errorController({
      error,
      location: "getLandingHandler",
      errorSetter: landingActions.setError,
    });
  }
}
