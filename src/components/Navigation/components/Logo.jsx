import { Link } from "react-router-dom";
import styled, { css } from "styled-components";

const LogoContainer = styled.figure`
  height: 100%;
  transition: all 0.2s linear;

  ${({ partialNav }) =>
    partialNav
      ? css`
          width: 5rem;
        `
      : css`
          width: 10rem;
        `};

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

function Logo({ partialNav }) {
  return (
    <LogoContainer partialNav={partialNav}>
      <Link to="/">
        <img src="/assets/mimitha-logo-small.png" alt="mimitha" />
      </Link>
    </LogoContainer>
  );
}

export default Logo;
