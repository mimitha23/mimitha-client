import { call, put } from "redux-saga/effects";
import { errorController } from "./helpers";
import { activeProductAPI } from "../api";
import { activeProductActions } from "store/reducers/activeProductReducer";

export function* getActiveProduct({ payload }) {
  try {
    const { data } = yield call(
      activeProductAPI.getActiveProductQuery,
      payload
    );
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

export function* getRelatedProducts({ payload }) {
  try {
    const { data } = yield call(
      activeProductAPI.getRelatedProductsQuery,
      payload
    );
    yield put(activeProductActions.setRelatedProducts(data));
    yield put(activeProductActions.setRelatedProductsSuccess());
  } catch (error) {
    yield errorController({
      error,
      location: "getRelatedProductsHandler",
      errorSetter: activeProductActions.setRelatedProductsError,
    });
  }
}
