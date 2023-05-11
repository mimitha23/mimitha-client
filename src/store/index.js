import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./reducers";

import createSagaMiddleWare from "redux-saga";
import initSagas from "./saga/initSagas";

const sagaMiddleware = createSagaMiddleWare();
const middlewares = [sagaMiddleware];

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }).concat(middlewares),
});

initSagas(sagaMiddleware);

export default store;
