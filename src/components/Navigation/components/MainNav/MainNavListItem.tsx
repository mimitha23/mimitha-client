import MainNavRouteCaption from "./MainNavRouteCaption";
import * as Styled from "./styles/MainNavListItem.styled";

import { LocationStateT } from "interface/common.types";

interface MainNavListItemT {
  route: string;
  isDirectLink?: boolean;
  linkState?: LocationStateT;
}

const MainNavListItem: React.FC<MainNavListItemT> = ({
  route,
  linkState,
  isDirectLink = false,
}) => {
  return (
    <Styled.MainNavListItem
      data-route={route}
      // {...(width < 1280 && {
      //   onClick: (e) => handleNavDropdownOnClick(e, route),
      // })}
      // className={`categories-nav__list-item ${
      //   route === activeDropDown ? "active-item" : ""
      // }`}
    >
      <MainNavRouteCaption
        route={route}
        linkState={linkState}
        isDirectLink={isDirectLink}
      />
      {/* {route === activeDropDown && <NavDropdown />} */}
    </Styled.MainNavListItem>
  );
};

export default MainNavListItem;
