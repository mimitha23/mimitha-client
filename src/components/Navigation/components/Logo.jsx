import { Link } from "react-router-dom";

import * as Styled from "./styles/Logo.styled";

export default function Logo({ partialNav }) {
  return (
    <Styled.Logo partialNav={partialNav}>
      <Link to="/">
        <img src="/assets/mimitha-logo-small.png" alt="mimitha" />
      </Link>
    </Styled.Logo>
  );
}
