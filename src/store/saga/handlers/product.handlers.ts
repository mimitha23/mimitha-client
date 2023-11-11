import { call, put } from "redux-saga/effects";
import { errorController } from "./helpers";

import * as productsAPI from "store/saga/api/products.api";
import { productsActions } from "store/reducers/products.reducer";

import {
  ProductShortInfoT,
  SearchProductsArgsT,
} from "interface/DB/product.types";
import { AxiosResponse } from "axios";
import { PayloadAction } from "@reduxjs/toolkit";

export function* getProducts({ payload }: PayloadAction<any>) {
  try {
    const { data }: AxiosResponse<Array<ProductShortInfoT>> = yield call(
      productsAPI.getAllProductsQuery,
      payload
    );

    yield put(productsActions.setProducts(data));
  } catch (error: any) {
    yield errorController({
      error,
      location: "getProductsHandler",
      errorSetter: productsActions.setAllProductsStatus,
      errorSetterArgs: { stage: "error" },
    });
  }
}

export function* searchProducts({
  payload,
}: PayloadAction<SearchProductsArgsT>) {
  try {
    const { data }: AxiosResponse<Array<ProductShortInfoT>> = yield call(
      productsAPI.searchProductsQuery,
      payload
    );

    yield put(productsActions.setSearchResults(data));
  } catch (error: any) {
    yield errorController({
      error,
      location: "searchProductsHandler",
      errorSetter: productsActions.setSearchStatus,
      errorSetterArgs: { stage: "error" },
    });
  }
}
