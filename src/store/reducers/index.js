import { combineReducers } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import editorReducer from "./editorSlice";
import filterReducer from "./filterSlice";
import galleryReducer from "./gallerySlice";

const persistedEditorReducer = persistReducer(
  { key: "editor", storage },
  editorReducer
);

const persistedFilterReducer = persistReducer(
  { key: "filter", storage },
  filterReducer
);

const rootReducer = combineReducers({
  editor: persistedEditorReducer,
  filter: persistedFilterReducer,
  gallery: galleryReducer,
});

export default rootReducer;
