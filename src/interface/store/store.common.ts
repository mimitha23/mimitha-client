import { Reducer } from "@reduxjs/toolkit";
import { controlStatus } from "store/reducers/helpers";

export interface GeneratePersistedReducerArgsT {
  key: string;
  whitelist?: Array<string>;
  reducer: Reducer;
}

export interface ReduxPersistConfigT {
  key: string;
  version: number;
  storage: any;
  whitelist?: Array<string>;
}

export enum Status {
  IDLE = "IDLE",
  PENDING = "PENDING",
  SUCCESS = "SUCCESS",
  FAIL = "FAIL",
}

export type StatusT = keyof typeof Status;

export interface LoadingStatusT {
  status: StatusT;
  error: boolean;
  loading: boolean;
  message: string;
}

export interface SetStatusArgsT {
  stage: keyof typeof controlStatus;
  message?: string;
  status?: StatusT;
}
