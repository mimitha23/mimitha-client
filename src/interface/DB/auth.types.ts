import { UserT } from "./user.types";

export interface GoogleLoginArgsT {
  email: string;
  username: string;
  profilePicture: string;
}

export interface AuthResponseT {
  accessToken: string;
  user: UserT;
}

export interface SetAuthenticatedUserT {
  accessToken: string;
}
