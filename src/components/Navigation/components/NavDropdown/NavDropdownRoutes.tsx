import { Link, useLocation } from "react-router-dom";
import { useAppSelector } from "store/hooks";

import { selectNavDropdown } from "store/selectors/nav.selectors";

import { useTranslationContext } from "providers/globals/I18nextProvider";
import { useLocationState } from "hooks/utils/index";

import * as Styled from "./NavDropdown.styled";

const NavDropdownRoutes = () => {
  const { state } = useLocation();

  const { currentLocale } = useTranslationContext();

  const { setLocationState, locationStateDefaults } = useLocationState();

  const dropdown = useAppSelector(selectNavDropdown);

  return (
    <div className="dropdown-nav__routes-container">
      {dropdown.blocks.map((block) => (
        <Styled.NavDropdownBlock
          key={block._id}
          routesLength={
            block.routes?.[0] ? block.routes.length + 7 : block.routes.length
          }
        >
          {block.title && (
            <span className="dropdown-nav__routes-head">
              {block.title[currentLocale]}
            </span>
          )}

          <ul className="dropdown-nav__routes-list">
            {block.routes.map((route) => (
              <li
                key={route._id}
                className={`dropdown-nav__routes-list--item ${
                  state?.productType?.query === route.query ? "active" : ""
                }`}
              >
                <Link
                  to="/products"
                  state={setLocationState({
                    category: dropdown.category,
                    productType: route,
                    title: locationStateDefaults.title,
                  })}
                >
                  {route[currentLocale]}
                </Link>
              </li>
            ))}
          </ul>
        </Styled.NavDropdownBlock>
      ))}
    </div>
  );
};

export default NavDropdownRoutes;
