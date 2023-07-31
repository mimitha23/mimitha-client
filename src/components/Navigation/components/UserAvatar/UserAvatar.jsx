import { useState } from "react";
import { useSelector } from "react-redux";

import { selectUser } from "store/selectors/user/userSelectors";
import { useIsAuthenticated } from "hooks/auth";

import { useClickOutside } from "hooks/domBase";

import LoginButton from "./LoginButton";
import BookmarksList from "./BookmarksList";
import UserDropdownDetails from "./UserDropdownDetails";
import { HeartIcon, HistoryIcon, LogoutIcon } from "components/Layouts/Icons";
import * as Styled from "./styles/UserAvatar.styled";

export default function UserAvatar() {
  const { isAuthenticated } = useIsAuthenticated();

  const user = useSelector(selectUser);

  const [showUserDropdown, setShowUserDropdown] = useState(false);
  const container_ref = useClickOutside(showUserDropdown, () => {
    setShowUserDropdown(false);
  });

  return (
    <Styled.UserAvatar ref={container_ref}>
      {!isAuthenticated && <LoginButton isAuthenticated={isAuthenticated} />}
      {isAuthenticated && (
        <figure
          className="user__profile-pic"
          onClick={() => setShowUserDropdown((prev) => !prev)}
        >
          <img src={user.profilePicture} alt={user.username} />
        </figure>
      )}

      {showUserDropdown && (
        <ul className="user__dropdown">
          <UserDropdownDetails
            user={user}
            setShowUserDropdown={setShowUserDropdown}
          />

          <li className="user__dropdown-item">
            <span className="user__dropdown-item--icon heart">
              <HeartIcon />
            </span>
            რჩეულები
          </li>

          <BookmarksList />

          <li className="user__dropdown-item">
            <span className="user__dropdown-item--icon history">
              <HistoryIcon />
            </span>
            შეკვეთების ისტორია
          </li>

          <li className="user__dropdown-item">
            <span className="user__dropdown-item--icon logout">
              <LogoutIcon />
            </span>
            გასვლა
          </li>
        </ul>
      )}
    </Styled.UserAvatar>
  );
}
