import { Reducer } from "@reduxjs/toolkit";
import { controlStatus } from "store/reducers/helpers";

type GeneratePersistedReducerArgsT = {
  key: string;
  whitelist?: Array<string>;
  reducer: Reducer;
};

type ReduxPersistConfigT = {
  key: string;
  version: number;
  storage: any;
  whitelist?: Array<string>;
};

enum Status {
  IDLE = "IDLE",
  PENDING = "PENDING",
  SUCCESS = "SUCCESS",
  FAIL = "FAIL",
}

type StatusT = keyof typeof Status;

type LoadingStatusT = {
  status: StatusT;
  error: boolean;
  loading: boolean;
  message: string;
};

type SetStatusArgsT = {
  stage: keyof typeof controlStatus;
  message?: string;
  status?: StatusT;
};

export type {
  GeneratePersistedReducerArgsT,
  ReduxPersistConfigT,
  StatusT,
  LoadingStatusT,
  SetStatusArgsT,
};

export { Status };
