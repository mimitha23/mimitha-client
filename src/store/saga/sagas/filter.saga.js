import { takeLatest } from "redux-saga/effects";
import { filterActions } from "store/reducers/filter.reducer";
import { filterHandlers } from "store/saga/handlers";

export default function* filterSaga() {
  yield takeLatest(
    filterActions.getProductsFilter,
    filterHandlers.getProductsFilter
  );
}
