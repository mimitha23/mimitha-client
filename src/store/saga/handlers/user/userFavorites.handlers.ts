import { call, put } from "redux-saga/effects";
import { userFavoritesAPI } from "store/saga/api/user";
import { userFavoritesActions } from "store/reducers/user/userFavorites.reducer";
import { errorController } from "store/saga/handlers/helpers";

import {
  AddToFavoritesArgsT,
  RemoveFromFavoritesArgsT,
  GetAllFavoritesIdsArgsT,
  GetAllFavoritesResponseT,
  GetAllFavoritesIdsResponseT,
} from "interface/DB/userFavorites.types";
import { AxiosResponse } from "axios";
import { PayloadAction } from "@reduxjs/toolkit";

export function* addToFavorites({
  payload,
}: PayloadAction<AddToFavoritesArgsT>) {
  try {
    yield call(userFavoritesAPI.addToFavoritesQuery, payload);
    yield put(userFavoritesActions.setAddToFavorites(payload));
  } catch (error: any) {
    yield errorController({
      error,
      location: "addToFavoritesHandler",
    });
  }
}

export function* removeFromFavorites({
  payload,
}: PayloadAction<RemoveFromFavoritesArgsT>) {
  try {
    yield call(userFavoritesAPI.removeFromFavoritesQuery, payload);
    yield put(userFavoritesActions.setRemoveFromFavorites(payload));
  } catch (error: any) {
    yield errorController({
      error,
      location: "removeFromFavoritesHandler",
    });
  }
}

export function* getAllFavorites() {
  try {
    const { data }: AxiosResponse<GetAllFavoritesResponseT> = yield call(
      userFavoritesAPI.getAllFavoritesQuery
    );

    yield put(userFavoritesActions.setAllFavorites(data));
  } catch (error: any) {
    yield errorController({
      error,
      location: "getAllFavoritesHandler",
      errorSetter: userFavoritesActions.setFavoritesStatus,
      errorSetterArgs: { stage: "error" },
    });
  }
}

export function* getAllFavoritesIds({
  payload,
}: PayloadAction<GetAllFavoritesIdsArgsT>) {
  try {
    const { data }: AxiosResponse<GetAllFavoritesIdsResponseT> = yield call(
      userFavoritesAPI.getAllFavoritesIdsQuery,
      payload
    );

    yield put(userFavoritesActions.setAllFavoritesIds(data));
  } catch (error: any) {
    yield errorController({
      error,
      location: "getAllFavoritesIdsHandler",
    });
  }
}
