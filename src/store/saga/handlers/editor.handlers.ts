import { call, put } from "redux-saga/effects";
import { errorController } from "./helpers";

import * as editorAPI from "store/saga/api/editor.api";
import { editorActions } from "store/reducers/editor.reducer";

import {
  GetProductToEditArgsT,
  GetProductToEditResponseT,
} from "interface/DB/editor.types";
import { AxiosResponse } from "axios";
import { PayloadAction } from "@reduxjs/toolkit";

export function* getProductToEdit({
  payload,
}: PayloadAction<GetProductToEditArgsT>) {
  try {
    const { data }: AxiosResponse<GetProductToEditResponseT> = yield call(
      editorAPI.getProductToEdit,
      payload
    );

    yield put(editorActions.setProductToEdit(data));
  } catch (error: any) {
    yield errorController({
      error,
      location: "getProductToEditHandler",
      errorSetter: editorActions.setEditorStatus,
      errorSetterArgs: { stage: "error" },
    });
  }
}
