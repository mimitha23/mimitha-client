import { combineReducers } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import editorReducer from "./editorReducer";
import filterReducer from "./filterReducer";
import galleryReducer from "./galleryReducer";
import activeProductReducer from "./activeProductReducer";
import produtsReducer from "./produtsReducer";
import landingReducer from "./landingReducer";
import navReducer from "./navReducer";
import shoppingCartReducer from "./shoppingCartReducer";
import authReducer from "./authReducer";
import userReducer from "./userReducer";

const persistedEditorReducer = persistReducer(
  { key: "mimitha_editor", storage },
  editorReducer
);

const persistedFilterReducer = persistReducer(
  { key: "mimitha_filter", storage },
  filterReducer
);

const persistedCartReducer = persistReducer(
  { key: "mimitha_cart", storage },
  shoppingCartReducer
);

const rootReducer = combineReducers({
  editor: persistedEditorReducer,
  filter: persistedFilterReducer,
  gallery: galleryReducer,
  activeProduct: activeProductReducer,
  products: produtsReducer,
  landing: landingReducer,
  nav: navReducer,
  shoppingCart: persistedCartReducer,
  auth: authReducer,
  user: userReducer,
});

export default rootReducer;
