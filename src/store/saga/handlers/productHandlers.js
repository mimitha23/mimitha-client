import { call, put } from "redux-saga/effects";
import { errorController } from "./helpers";
import { productsAPI } from "../api";
import { productsActions } from "store/reducers/produtsReducer";

export function* getProducts() {
  try {
    const { data } = yield call(productsAPI.getAllProducts);
    yield put(productsActions.setProducts(data));
    yield put(productsActions.setSuccess());
  } catch (error) {
    yield errorController({
      error,
      location: "getProductsHandler",
      errorSetter: productsActions.setError,
    });
  }
}
