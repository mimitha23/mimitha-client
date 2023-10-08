import { call, put } from "redux-saga/effects";
import { errorController } from "./helpers";
import { editorAPI } from "../api";
import { editorActions } from "store/reducers/editor.reducer";

export function* getProductToEdit({ payload }) {
  try {
    const { data } = yield call(editorAPI.getProductToEdit, payload);
    yield put(editorActions.setProductToEdit(data));
    yield put(editorActions.setSuccess());
  } catch (error) {
    yield errorController({
      error,
      location: "getProductToEditHandler",
      errorSetter: editorActions.setError,
    });
  }
}
