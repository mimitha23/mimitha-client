import { call, put } from "redux-saga/effects";
import { errorController } from "store/saga/handlers/helpers";

import * as activeProductAPI from "store/saga/api/activeProduct.api";
import { activeProductActions } from "store/reducers/activeProduct.reducer";

import {
  ProductShortInfoT,
  GetActiveProductResponseT,
  GetActiveProductArgsT,
  GetRelatedProductsArgsT,
} from "interface/DB/product.types";
import { AxiosResponse } from "axios";
import { PayloadAction } from "@reduxjs/toolkit";

export function* getActiveProduct({
  payload,
}: PayloadAction<GetActiveProductArgsT>) {
  try {
    const { data }: AxiosResponse<GetActiveProductResponseT> = yield call(
      activeProductAPI.getActiveProductQuery,
      payload
    );

    yield put(activeProductActions.setActiveProduct(data));
  } catch (error: any) {
    yield errorController({
      error,
      location: "getActiveProductHandler",
      errorSetter: activeProductActions.setActiveProductStatus,
      errorSetterArgs: { stage: "error" },
    });
  }
}

export function* getRelatedProducts({
  payload,
}: PayloadAction<GetRelatedProductsArgsT>) {
  try {
    const { data }: AxiosResponse<Array<ProductShortInfoT>> = yield call(
      activeProductAPI.getRelatedProductsQuery,
      payload
    );

    yield put(activeProductActions.setRelatedProducts(data));
  } catch (error: any) {
    yield errorController({
      error,
      location: "getRelatedProductsHandler",
      errorSetter: activeProductActions.setRelatedProductsStatus,
      errorSetterArgs: { stage: "error" },
    });
  }
}
