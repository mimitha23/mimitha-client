import { v4 as uuid } from "uuid";
import { useLocationState } from "hooks/utils";
// import { useNavigationDropdown } from "hooks/layoutBase/index";

import { MAIN_NAV_DROPDOWN_ROUTES } from "config/consts";

// import NavDropdown from "../NavDropdown/NavDropdown";
import MainNavListItem from "./MainNavListItem";
import MainNavRouteCaption from "./MainNavRouteCaption";
import * as Styled from "./styles/MainNavList.styled";

export default function MainNavList({ activeBurgerNav }) {
  // const {
  //   width,
  //   handleNavDropdownOnMouseOver,
  //   handleNavDropdownOnMouseLeave,
  //   handleNavDropdownOnClick,
  //   activeDropDown,
  // } = useNavigationDropdown({ activeBurgerNav });

  const {
    setLocationState,
    getLocationStateDefaults,
    // state
  } = useLocationState();

  const locationStateDefaults = getLocationStateDefaults();

  return (
    <Styled.MainNavList
      className={`${typeof activeBurgerNav === "boolean" ? "burger-nav" : ""} ${
        activeBurgerNav ? "active-burger--nav active-modal" : ""
      }`}
      onClick={(e) => e.stopPropagation()}
      // {...(width > 1280 && {
      //   onMouseOver: handleNavDropdownOnMouseOver,
      //   onMouseLeave: handleNavDropdownOnMouseLeave,
      // })}
    >
      {MAIN_NAV_DROPDOWN_ROUTES.map((route) => (
        <MainNavListItem key={uuid()} route={route} />
      ))}

      <MainNavListItem
        route="sale"
        isDirectLink={true}
        linkState={setLocationState({
          title: locationStateDefaults.title,
          productType: locationStateDefaults.productType,
          category: locationStateDefaults.category,
          sale: "1",
        })}
      >
        <MainNavRouteCaption />
      </MainNavListItem>
    </Styled.MainNavList>
  );
}
