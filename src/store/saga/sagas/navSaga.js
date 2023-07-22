import { takeLatest } from "redux-saga/effects";
import { navActions } from "store/reducers/navReducer";
import { navHandlers } from "../handlers";

export default function* navSaga() {
  yield takeLatest(navActions.getNav, navHandlers.getNav);
}
