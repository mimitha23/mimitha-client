import { takeLatest } from "redux-saga/effects";
import { activeProductHandlers } from "../handlers";
import { activeProductActions } from "store/reducers/activeProduct.reducer";

export default function* activeProductSaga() {
  yield takeLatest(
    activeProductActions.getActiveProduct,
    activeProductHandlers.getActiveProduct
  );
  yield takeLatest(
    activeProductActions.getRelatedProducts,
    activeProductHandlers.getRelatedProducts
  );
}
