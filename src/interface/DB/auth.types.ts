import { UserT } from "./user.types";

type GoogleLoginArgsT = {
  email: string;
  username: string;
  profilePicture: string;
};

type AuthResponseT = {
  accessToken: string;
  user: UserT;
};

type SetAuthenticatedUserT = {
  accessToken: string;
};

export type { GoogleLoginArgsT, AuthResponseT, SetAuthenticatedUserT };
