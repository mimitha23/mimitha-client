import { v4 as uuid } from "uuid";

import { MAIN_NAV_DROPDOWN_ROUTES } from "config/consts";
import { useLocationState } from "hooks/utils";
// import { useNavigationDropdown } from "hooks/layoutBase/index";

// import NavDropdown from "../NavDropdown/NavDropdown";
import MainNavRouteCaption from "./MainNavRouteCaption";
import * as Styled from "./MainNav.styled";

export default function MainNav({ onBurgerClose, activeBurgerNav }) {
  // const {
  //   width,
  //   handleNavDropdownOnMouseOver,
  //   handleNavDropdownOnMouseLeave,
  //   handleNavDropdownOnClick,
  //   activeDropDown,
  // } = useNavigationDropdown({ activeBurgerNav });

  const { setLocationState, getLocationStateDefaults, state } =
    useLocationState();

  const locationStateDefaults = getLocationStateDefaults();

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
        // {...(width > 1280 && {
        //   onMouseOver: handleNavDropdownOnMouseOver,
        //   onMouseLeave: handleNavDropdownOnMouseLeave,
        // })}
      >
        {MAIN_NAV_DROPDOWN_ROUTES.map((route) => (
          <li
            key={uuid()}
            data-route={route}
            // {...(width < 1280 && {
            //   onClick: (e) => handleNavDropdownOnClick(e, route),
            // })}
            className={`categories-nav__list-item`}
            // className={`categories-nav__list-item ${
            //   route === activeDropDown ? "active-item" : ""
            // }`}
          >
            <MainNavRouteCaption route={route} />
            {/* {route === activeDropDown && <NavDropdown />} */}
          </li>
        ))}

        <li
          data-route="sale"
          className={`categories-nav__list-item ${
            state?.sale ? "active-item" : ""
          }`}
        >
          <MainNavRouteCaption
            route="sale"
            isDirectLink={true}
            linkState={setLocationState({
              title: locationStateDefaults.title,
              productType: locationStateDefaults.productType,
              category: locationStateDefaults.category,
              sale: "1",
            })}
          />
        </li>
      </ul>
    </Styled.MainNavList>
  );
}
