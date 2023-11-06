import { LoadingStatusT } from "./store.common";

export interface AuthStateT {
  status: LoadingStatusT;
  openPopup: boolean;
  authOnGoingProcess: string;
}

// PARTIALS
export enum AUTH_PROCESSES {
  AUTHORIZATION = "authorization",
  REGISTRATION = "registration",
  FORGOT_PASSWORD = "forgot_password",
  CONFIRM_EMAIl = "confirm_email",
  UPDATE_PASSWORD = "update_password",
}
