import { call, put } from "redux-saga/effects";
import { errorController } from "store/saga/handlers/helpers";

import * as userOrdersAPI from "store/saga/api/user/userOrders.api";
import { userOrdersActions } from "store/reducers/user/userOrders.reducer";

import { AxiosResponse } from "axios";

export function* getOrderHistory() {
  try {
    const { data }: AxiosResponse<any> = yield call(
      userOrdersAPI.getOrderHistoryQuery
    );

    yield put(userOrdersActions.setOrderHistory(data));
    yield put(userOrdersActions.setSuccess());
  } catch (error: any) {
    yield errorController({
      error,
      location: "getOrderHistoryHandler",
      errorSetter: userOrdersActions.setError,
    });
  }
}
