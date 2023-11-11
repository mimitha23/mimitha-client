import { UserT } from "interface/DB/user.types";

type UserStateT = {
  user: UserT & {
    isAuthenticated: boolean;
  };
};

export type { UserStateT };
