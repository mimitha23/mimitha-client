import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

import { PATHS } from "config/paths";
import { useLogoutQuery } from "hooks/api/Auth";

import Bookmarks from "./Bookmarks";
import UserDropdownDetails from "./UserDropdownDetails";
import * as Styled from "./styles/AvatarDropdown.styled";
import { HeartIcon, HistoryIcon, LogoutIcon } from "components/Layouts/Icons";

import { UserT } from "interface/DB/user.types";

interface AvatarDropdownT {
  user: UserT;
  setShowUserDropdown: React.Dispatch<React.SetStateAction<boolean>>;
}

const AvatarDropdown: React.FC<AvatarDropdownT> = ({
  user,
  setShowUserDropdown,
}) => {
  const { t } = useTranslation();

  const { logout } = useLogoutQuery();

  return (
    <Styled.AvatarDropdown>
      <UserDropdownDetails
        user={user}
        setShowUserDropdown={setShowUserDropdown}
      />

      <Styled.AvatarDropdownItem>
        <Link to={PATHS.favorites_page}>
          <span className="user__dropdown-item--icon heart">
            <HeartIcon />
          </span>
          {t("favorites.favorites")}
        </Link>
      </Styled.AvatarDropdownItem>

      <Bookmarks />

      <Styled.AvatarDropdownItem>
        <Link to={PATHS.order_history_page}>
          <span className="user__dropdown-item--icon history">
            <HistoryIcon />
          </span>
          {t("cart.orders_history")}
        </Link>
      </Styled.AvatarDropdownItem>

      <Styled.LogoutButton onClick={logout}>
        <span className="user__dropdown-item--icon logout">
          <LogoutIcon />
        </span>
        {t("auth.logout")}
      </Styled.LogoutButton>
    </Styled.AvatarDropdown>
  );
};

export default AvatarDropdown;
