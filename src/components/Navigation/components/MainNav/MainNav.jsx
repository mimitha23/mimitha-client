import { v4 as uuid } from "uuid";

import { MAIN_NAV_ROUTES } from "config/consts";
import useWindowDimention from "hooks/domBase/useWindowDimention";

import NavDropdown from "../NavDropdown/NavDropdown";
import MainNavRouteCaption from "./MainNavRouteCaption";
import * as Styled from "./MainNav.styled";

export default function MainNav({
  activeBurgerNav,
  onBurgerClose,
  activeDropDown,
  setActiveDropDown,
}) {
  const { width } = useWindowDimention();

  const handleNavDropdownOnClick = (e, route) => {
    setActiveDropDown((prev) => (prev === route ? "" : route));

    const listEl = document.querySelector(".categories-nav__list");
    listEl.scrollTop = 0;
  };

  return (
    <Styled.MainNavList
      onClick={onBurgerClose}
      className={`${
        typeof activeBurgerNav === "boolean" ? "burger-nav" : "main-nav--list"
      } ${activeBurgerNav ? "active-burger--nav active-modal" : ""}`}
    >
      <ul className="categories-nav__list" onClick={(e) => e.stopPropagation()}>
        {MAIN_NAV_ROUTES.map((route) => (
          <li
            key={uuid()}
            data-route={route}
            {...(width < 1280 && {
              onClick: (e) => handleNavDropdownOnClick(e, route),
            })}
            className={`categories-nav__list-item ${
              route === activeDropDown ? "active-item" : ""
            }`}
          >
            <MainNavRouteCaption route={route} />
            {route === activeDropDown && (
              <NavDropdown activeDropDown={activeDropDown} />
            )}
          </li>
        ))}
      </ul>
    </Styled.MainNavList>
  );
}
