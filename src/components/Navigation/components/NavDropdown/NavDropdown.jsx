import navDropdownData from "lib/nav-dropdown.json";
import NavDropdownRoutes from "./NavDropdownRoutes";
import NavDropdownProducts from "./NavDropdownProducts";
import * as Styled from "./NavDropdown.styled";

export default function NavDropdown({ activeDropDown }) {
  return (
    <Styled.NavDropdown className="active-modal nav-dropdown--backdrop">
      <div
        className="dropdown-nav__content-box"
        onClick={(e) => e.stopPropagation()}
        onMouseOver={(e) => e.stopPropagation()}
      >
        <NavDropdownRoutes
          nav={navDropdownData.nav}
          activeDropDown={activeDropDown}
        />

        <NavDropdownProducts products={navDropdownData.products} />
      </div>
    </Styled.NavDropdown>
  );
}
