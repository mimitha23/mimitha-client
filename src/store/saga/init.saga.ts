import * as sagas from "./sagas";
import { SagaMiddleware } from "redux-saga";

const initSagas = (sagaMiddleware: SagaMiddleware) =>
  Object.values(sagas).forEach((saga) => sagaMiddleware.run(saga));

export default initSagas;
