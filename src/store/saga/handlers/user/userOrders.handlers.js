import { call, put } from "redux-saga/effects";
import { userOrdersAPI } from "store/saga/api/user";
import { userOrdersActions } from "store/reducers/user/userOrders.reducer";
import { errorController } from "store/saga/handlers/helpers";

export function* getOrderHistory() {
  try {
    const { data } = yield call(userOrdersAPI.getOrderHistoryQuery);
    yield put(userOrdersActions.setOrderHistory(data));
    yield put(userOrdersActions.setSuccess());
  } catch (error) {
    yield errorController({
      error,
      location: "getOrderHistoryHandler",
      errorSetter: userOrdersActions.setError,
    });
  }
}
