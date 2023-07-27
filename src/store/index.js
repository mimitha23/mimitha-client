import { configureStore } from "@reduxjs/toolkit";
import { persistStore } from "redux-persist";
import rootReducer from "./reducers/root";

import createSagaMiddleWare from "redux-saga";
import initSagas from "./saga/initSagas";

const sagaMiddleware = createSagaMiddleWare();
const middlewares = [sagaMiddleware];

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }).concat(middlewares),
});

initSagas(sagaMiddleware);

export const persistore = persistStore(store);
