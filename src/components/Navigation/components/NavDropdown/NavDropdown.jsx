import navDropdownData from "lib/nav-dropdown.json";
import { useSelector } from "react-redux";

import { selectNavStatus } from "store/selectors/navSelectors";

import { Spinner } from "components/Layouts";
import NavDropdownRoutes from "./NavDropdownRoutes";
import NavDropdownProducts from "./NavDropdownProducts";
import * as Styled from "./NavDropdown.styled";

export default function NavDropdown({ activeDropDown }) {
  const status = useSelector(selectNavStatus);

  return (
    <Styled.NavDropdown className="active-modal nav-dropdown--backdrop">
      <div
        className="dropdown-nav__content-box"
        onClick={(e) => e.stopPropagation()}
        onMouseOver={(e) => e.stopPropagation()}
      >
        {!status.loading && (
          <>
            <NavDropdownRoutes />

            <NavDropdownProducts products={navDropdownData.products} />
          </>
        )}

        {status.loading && <Spinner />}
      </div>
    </Styled.NavDropdown>
  );
}
