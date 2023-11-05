import { Link } from "react-router-dom";
import { PATHS } from "config/paths";

import * as Styled from "./Logo.styled";

interface LogoT {
  partialNav: boolean;
}

const Logo: React.FC<LogoT> = ({ partialNav }) => {
  return (
    <Styled.Logo partialNav={partialNav}>
      <Link to={PATHS.home_page} className="logo-link">
        <img src="/assets/mimitha-logo-small.png" alt="mimita" />
      </Link>
    </Styled.Logo>
  );
};

export default Logo;
