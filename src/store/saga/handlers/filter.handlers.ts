import { call, put } from "redux-saga/effects";
import { errorController } from "store/saga/handlers/helpers";

import * as filterAPI from "store/saga/api/filter.api";
import { filterActions } from "store/reducers/filter.reducer";

import {
  GetProductFilterArgsT,
  ProductsFilterResponseT,
} from "interface/DB/productsFilter.types";
import { AxiosResponse } from "axios";
import { PayloadAction } from "@reduxjs/toolkit";

export function* getProductsFilter({
  payload,
}: PayloadAction<GetProductFilterArgsT>) {
  try {
    const { data }: AxiosResponse<ProductsFilterResponseT> = yield call(
      filterAPI.getProductsFilterQuery,
      payload
    );

    yield put(filterActions.setProductsFilter(data));
    yield put(filterActions.setSuccess());
  } catch (error: any) {
    yield errorController({
      error,
      location: "getProductsFilterHandler",
      errorSetter: filterActions.setError,
    });
  }
}
