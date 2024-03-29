import { takeLatest } from "redux-saga/effects";
import { userOrdersActions } from "store/reducers/user/userOrders.reducer";
import { userOrdersHandlers } from "store/saga/handlers/user";

export default function* userProfileImageSaga() {
  yield takeLatest(
    userOrdersActions.getOrderHistory,
    userOrdersHandlers.getOrderHistory
  );
}
