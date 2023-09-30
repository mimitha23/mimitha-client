import { Link } from "react-router-dom";
import { PATHS } from "config/routes";

import * as Styled from "./styles/Logo.styled";

export default function Logo({ partialNav }) {
  return (
    <Styled.Logo partialNav={partialNav}>
      <Link to={PATHS.home.fullPath}>
        <img src="./assets/mimitha-logo-small.png" alt="mimita" />
      </Link>
    </Styled.Logo>
  );
}
