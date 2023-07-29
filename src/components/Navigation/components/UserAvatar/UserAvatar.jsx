import { useIsAuthenticated } from "hooks/auth";

import LoginButton from "./LoginButton";
import * as Styled from "./UserAvatar.styled";

export default function UserAvatar() {
  const { isAuthenticated } = useIsAuthenticated();

  return (
    <Styled.UserAvatar>
      <LoginButton isAuthenticated={isAuthenticated} />
    </Styled.UserAvatar>
  );
}
