import { takeLatest } from "redux-saga/effects";
import { activeProductHandlers } from "../handlers";
import { activeProductActions } from "store/reducers/activeProductReducer";

export default function* activeProductSaga() {
  yield takeLatest(
    activeProductActions.getActiveProduct,
    activeProductHandlers.getActiveProduct
  );
}
