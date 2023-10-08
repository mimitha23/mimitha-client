import { takeLatest } from "redux-saga/effects";
import { editorHandlers } from "store/saga/handlers";
import { editorActions } from "store/reducers/editor.reducer";

export default function* editorSaga() {
  yield takeLatest(
    editorActions.getProductToEdit,
    editorHandlers.getProductToEdit
  );
}
