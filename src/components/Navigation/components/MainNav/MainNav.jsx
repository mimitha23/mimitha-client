import { Link } from "react-router-dom";

import { v4 as uuid } from "uuid";
import { useTranslation } from "react-i18next";
import { MAIN_NAV_ROUTES } from "config/consts";

import * as Styled from "./MainNav.styled";

export default function MainNav({ activeBurgerNav, onBurgerClose }) {
  const { t } = useTranslation();

  return (
    <Styled.MainNavList
      onClick={onBurgerClose}
      className={`${typeof activeBurgerNav === "boolean" ? "burger-nav" : ""} ${
        activeBurgerNav ? "active-burger--nav active-modal" : ""
      }`}
    >
      <ul className="categories-nav__list" onClick={(e) => e.stopPropagation()}>
        {MAIN_NAV_ROUTES.map((route) => (
          <li key={uuid()}>
            <Link to={"/"}>{t(`navigation.main.${route}`)}</Link>
          </li>
        ))}
      </ul>
    </Styled.MainNavList>
  );
}
