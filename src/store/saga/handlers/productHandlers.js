import { call, put } from "redux-saga/effects";
import { errorController } from "./helpers";
import { productsAPI } from "../api";
import { productsActions } from "store/reducers/produtsReducer";

export function* getProducts({ payload }) {
  try {
    const { data } = yield call(productsAPI.getAllProductsQuery, payload);
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

export function* searchProducts({ payload }) {
  try {
    const { data } = yield call(productsAPI.searchProductsQuery, payload);
    yield put(productsActions.setSearchResults(data));
    yield put(productsActions.setSearchSuccess());
  } catch (error) {
    yield errorController({
      error,
      location: "searchProductsHandler",
      errorSetter: productsActions.setError,
    });
  }
}
