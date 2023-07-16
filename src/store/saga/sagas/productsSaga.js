import { takeLatest } from "redux-saga/effects";
import { productHandlers } from "../handlers";
import { productsActions } from "store/reducers/produtsReducer";

export default function* productsSaga() {
  yield takeLatest(productsActions.getAllProducts, productHandlers.getProducts);
}
