import { call, put } from "redux-saga/effects";
import { errorController } from "./helpers";

import * as navAPI from "store/saga/api/nav.api";
import { navActions } from "store/reducers/nav.reducer";

import { AxiosResponse } from "axios";
import { PayloadAction } from "@reduxjs/toolkit";

import { GetNavArgsT, NavDropdownT } from "interface/DB/nav.types";

export function* getNav({ payload }: PayloadAction<GetNavArgsT>) {
  try {
    const { data }: AxiosResponse<NavDropdownT> = yield call(
      navAPI.getNav,
      payload
    );

    yield put(navActions.setNav(data));
    yield put(navActions.setSuccess());
  } catch (error: any) {
    yield errorController({
      error,
      location: "getNavHandler",
      errorSetter: navActions.setError,
    });
  }
}
