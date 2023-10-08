import { useState } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useTranslation } from "react-i18next";

import { useIsAuthenticated } from "hooks/auth";
import { useLogoutQuery } from "hooks/api/Auth";
import { selectUser } from "store/selectors/user/user.selectors";

import { PATHS } from "config/routes";
import { useClickOutside } from "hooks/domBase";

import LoginButton from "./LoginButton";
import BookmarksList from "./BookmarksList";
import UserDropdownDetails from "./UserDropdownDetails";
import { HeartIcon, HistoryIcon, LogoutIcon } from "components/Layouts/Icons";
import * as Styled from "./styles/UserAvatar.styled";

export default function UserAvatar() {
  const { t } = useTranslation();

  const { isAuthenticated } = useIsAuthenticated();

  const user = useSelector(selectUser);

  const [showUserDropdown, setShowUserDropdown] = useState(false);
  const container_ref = useClickOutside(showUserDropdown, () => {
    setShowUserDropdown(false);
  });

  const { logout } = useLogoutQuery();

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

      {isAuthenticated && showUserDropdown && (
        <ul className="user__dropdown">
          <UserDropdownDetails
            user={user}
            setShowUserDropdown={setShowUserDropdown}
          />

          <li className="user__dropdown-item">
            <Link to={PATHS.favorites.fullPath}>
              <span className="user__dropdown-item--icon heart">
                <HeartIcon />
              </span>
              {t("favorites.favorites")}
            </Link>
          </li>

          <BookmarksList />

          <li className="user__dropdown-item">
            <Link to={PATHS.order_history.fullPath}>
              <span className="user__dropdown-item--icon history">
                <HistoryIcon />
              </span>
              {t("cart.orders_history")}
            </Link>
          </li>

          <button className="user__dropdown-item--btn" onClick={logout}>
            <span className="user__dropdown-item--icon logout">
              <LogoutIcon />
            </span>
            {t("auth.logout")}
          </button>
        </ul>
      )}
    </Styled.UserAvatar>
  );
}
