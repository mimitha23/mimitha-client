import { ENV } from "config/env";
import { put } from "redux-saga/effects";
import { ActionCreatorWithPayload } from "@reduxjs/toolkit";
import { AxiosError } from "axios";

interface SetErrorArgsT {
  location: string;
  error: AxiosError | Error;
  errorSetter?: ActionCreatorWithPayload<any>;
  errorSetterArgs?: { [key: string]: string };
}

export default function* errorController({
  error,
  location = "",
  errorSetter,
  errorSetterArgs,
}: SetErrorArgsT) {
  try {
    let message: string = "";

    if (error instanceof AxiosError)
      message = error.response?.data.message || "";
    else if (error instanceof Error) message = error.message;

    if (errorSetter) yield put(errorSetter({ ...errorSetterArgs, message }));

    if (ENV !== "DEV") return;

    console.log({
      hasError: true,
      message,
      error,
      stack: error.stack,
      location: `sagaHandler - ${location}`,
    });
  } catch (error: any) {
    console.log(`Ocurred Error in ErrorController ${error?.message}`);
  }
}
