import { call, put } from "redux-saga/effects";
import { errorController } from "./helpers";

import * as landingAPI from "store/saga/api/landing.api";
import { landingActions } from "store/reducers/landing.reducer";

import { AxiosResponse } from "axios";
import { ProductShortInfoT } from "interface/DB/product.types";

export function* getLanding() {
  try {
    const {
      data,
    }: AxiosResponse<{ popularProducts: Array<ProductShortInfoT> }> =
      yield call(landingAPI.getLanding);

    yield put(landingActions.setLanding(data));
    yield put(landingActions.setSuccess());
  } catch (error: any) {
    yield errorController({
      error,
      location: "getLandingHandler",
      errorSetter: landingActions.setError,
    });
  }
}
