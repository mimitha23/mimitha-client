import { call, put } from "redux-saga/effects";
import { errorController } from "./helpers";
import { activeProductAPI } from "../api";
import { activeProductActions } from "store/reducers/activeProductReducer";

export function* getActiveProduct({ payload }) {
  try {
    const { data } = yield call(activeProductAPI.getActiveProduct, payload);
    yield put(activeProductActions.setActiveProduct(data));
    yield put(activeProductActions.setSuccess());
  } catch (error) {
    yield errorController({
      error,
      location: "getActiveProductHandler",
      errorSetter: activeProductActions.setError,
    });
  }
}
