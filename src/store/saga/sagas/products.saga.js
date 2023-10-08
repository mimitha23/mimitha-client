import { takeLatest } from "redux-saga/effects";
import { productHandlers } from "../handlers";
import { productsActions } from "store/reducers/produts.reducer";

export default function* productsSaga() {
  yield takeLatest(productsActions.getAllProducts, productHandlers.getProducts);
  yield takeLatest(productsActions.search, productHandlers.searchProducts);
}
