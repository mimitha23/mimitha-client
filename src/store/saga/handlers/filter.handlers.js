import { call, put } from "redux-saga/effects";
import { filterActions } from "store/reducers/filter.reducer";
import { filterAPI } from "store/saga/api";
import { errorController } from "store/saga/handlers/helpers";

export function* getProductsFilter({ payload }) {
  try {
    const { data } = yield call(filterAPI.getProductsFilterQuery, payload);
    yield put(filterActions.setProductsFilter(data));
    yield put(filterActions.setSuccess());
  } catch (error) {
    yield errorController({
      error,
      location: "getProductsFilterHandler",
      errorSetter: filterActions.setError,
    });
  }
}
