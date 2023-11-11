import { LoadingStatusT } from "./store.common";

type AuthStateT = {
  status: LoadingStatusT;
  openPopup: boolean;
  authOnGoingProcess: string;
};

// PARTIALS
enum AUTH_PROCESSES {
  AUTHORIZATION = "authorization",
  REGISTRATION = "registration",
  FORGOT_PASSWORD = "forgot_password",
  CONFIRM_EMAIl = "confirm_email",
  UPDATE_PASSWORD = "update_password",
}

export type { AuthStateT };
export { AUTH_PROCESSES };
