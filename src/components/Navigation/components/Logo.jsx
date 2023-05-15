import { Link } from "react-router-dom";
import styled from "styled-components";

const LogoContainer = styled.figure`
  width: 27rem;
  height: 15rem;

  a {
    display: inline-block;
    width: 100%;
    height: 100%;
  }

  a img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`;

function Logo() {
  return (
    <LogoContainer>
      <Link to="/">
        <img src="/assets/images/image-not-uploaded.png" alt="mimitha" />
      </Link>
    </LogoContainer>
  );
}

export default Logo;
