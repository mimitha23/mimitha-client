import { takeLatest } from "redux-saga/effects";
import { navActions } from "store/reducers/nav.reducer";
import { navHandlers } from "../handlers";

export default function* navSaga() {
  yield takeLatest(navActions.getNav, navHandlers.getNav);
}
