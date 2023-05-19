import { combineReducers } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import editorReducer from "./editorSlice";

const persistedEditorReducer = persistReducer(
  { key: "editor", storage },
  editorReducer
);

const rootReducer = combineReducers({
  editorReducer: persistedEditorReducer,
});

export default rootReducer;
