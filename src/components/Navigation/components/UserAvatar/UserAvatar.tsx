import { useState } from "react";
import { useAppSelector } from "store/hooks";

import { useIsAuthenticated } from "hooks/auth";
import { useClickOutside } from "hooks/domBase";
import { selectUser } from "store/selectors/user/user.selectors";

import LoginButton from "./LoginButton";
import AvatarDropdown from "./AvatarDropdown";
import UserProfilePicture from "./UserProfilePicture";
import * as Styled from "./styles/UserAvatar.styled";

const UserAvatar: React.FC = () => {
  const { isAuthenticated } = useIsAuthenticated();

  const [showUserDropdown, setShowUserDropdown] = useState(false);
  const containerRef = useClickOutside<HTMLDivElement>(showUserDropdown, () => {
    setShowUserDropdown(false);
  });

  const user = useAppSelector(selectUser);

  return (
    <Styled.UserAvatar ref={containerRef}>
      {!isAuthenticated && <LoginButton />}

      {isAuthenticated && (
        <UserProfilePicture
          username={user.username}
          profilePicture={user.profilePicture}
          setShowUserDropdown={setShowUserDropdown}
        />
      )}

      {isAuthenticated && showUserDropdown && (
        <AvatarDropdown user={user} setShowUserDropdown={setShowUserDropdown} />
      )}
    </Styled.UserAvatar>
  );
};

export default UserAvatar;
