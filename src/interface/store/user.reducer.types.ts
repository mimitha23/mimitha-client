import { UserT } from "interface/DB/user.types";

export interface UserStateT {
  user: UserT & {
    isAuthenticated: boolean;
  };
}
