import { v4 as uuid } from "uuid";

import { MAIN_NAV_ROUTES, MAIN_NAV_DROPDOWN_ROUTES } from "config/consts";
import { useNavigationDropdown } from "hooks/layoutBase/index";

import NavDropdown from "../NavDropdown/NavDropdown";
import MainNavRouteCaption from "./MainNavRouteCaption";
import * as Styled from "./MainNav.styled";

export default function MainNav({ onBurgerClose, activeBurgerNav }) {
  const {
    width,
    handleNavDropdownOnMouseOver,
    handleNavDropdownOnMouseLeave,
    handleNavDropdownOnClick,
    activeDropDown,
  } = useNavigationDropdown({ activeBurgerNav });

  return (
    <Styled.MainNavList
      onClick={onBurgerClose}
      className={`${typeof activeBurgerNav === "boolean" ? "burger-nav" : ""} ${
        activeBurgerNav ? "active-burger--nav active-modal" : ""
      }`}
    >
      <ul
        className="categories-nav__list"
        onClick={(e) => e.stopPropagation()}
        {...(width > 1280 && {
          onMouseOver: handleNavDropdownOnMouseOver,
          onMouseLeave: handleNavDropdownOnMouseLeave,
        })}
      >
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
            {MAIN_NAV_DROPDOWN_ROUTES.includes(route) ? (
              <>
                <MainNavRouteCaption route={route} />
                {route === activeDropDown && <NavDropdown />}
              </>
            ) : (
              <MainNavRouteCaption route={route} />
            )}
          </li>
        ))}
      </ul>
    </Styled.MainNavList>
  );
}
