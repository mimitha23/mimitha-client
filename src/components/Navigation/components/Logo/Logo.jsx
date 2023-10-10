import { Link } from "react-router-dom";
import { PATHS } from "config/routes";

import * as Styled from "./Logo.styled";

export default function Logo({ partialNav }) {
  return (
    <Styled.Logo partialNav={partialNav}>
      <Link to={PATHS.home.fullPath} className="logo-link">
        <img src="/assets/mimitha-logo-small.png" alt="mimita" />
      </Link>
    </Styled.Logo>
  );
}
