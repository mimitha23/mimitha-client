import { v4 as uuid } from "uuid";
import { Link } from "react-router-dom";
import { useTranslationContext } from "I18nextProvider";

import * as Styled from "./NavDropdown.styled";

export default function NavDropdownRoutes({ routesLength, nav }) {
  const { currentLocale } = useTranslationContext();

  return (
    <div className="dropdown-nav__routes-container">
      {nav.map((block) => (
        <Styled.NavDropdownBlock
          key={uuid()}
          routesLength={
            Object.values(block.title)?.[0]
              ? block.routes.length + 7
              : block.routes.length
          }
        >
          {Object.values(block.title)?.[0] && (
            <span className="dropdown-nav__routes-head">
              {block.title[currentLocale]}
            </span>
          )}
          <ul className="dropdown-nav__routes-list">
            {block.routes.map((route) => (
              <li key={uuid()} className="dropdown-nav__routes-list--item">
                <Link to="">{route.label[currentLocale]}</Link>
              </li>
            ))}
          </ul>
        </Styled.NavDropdownBlock>
      ))}
    </div>
  );
}
