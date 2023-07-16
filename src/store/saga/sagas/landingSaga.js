import { takeLatest } from "redux-saga/effects";
import { landingHandlers } from "../handlers";
import { landingActions } from "store/reducers/landingReducer";

export default function* productsSaga() {
  yield takeLatest(landingActions.getLanding, landingHandlers.getLanding);
}
