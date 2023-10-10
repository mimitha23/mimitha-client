import MainNavRouteCaption from "./MainNavRouteCaption";
import * as Styled from "./styles/MainNavListItem.styled";

export default function MainNavListItem({ route }) {
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
      <MainNavRouteCaption route={route} />
      {/* {route === activeDropDown && <NavDropdown />} */}
    </Styled.MainNavListItem>
  );
}
