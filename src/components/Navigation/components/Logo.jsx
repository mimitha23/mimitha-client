import { Link } from "react-router-dom";
import styled, { css } from "styled-components";

const LogoContainer = styled.figure`
  ${({ partialNav }) =>
    partialNav
      ? css`
          height: 5rem;
          align-self: flex-start;
        `
      : css`
          height: 15rem;
        `};

  transition: all 0.2s ease;

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
        <img src="/assets/images/image-not-uploaded.png" alt="mimitha" />
      </Link>
    </LogoContainer>
  );
}

export default Logo;
