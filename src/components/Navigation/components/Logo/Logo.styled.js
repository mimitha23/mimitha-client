import styled, { css } from "styled-components";

export const Logo = styled.figure`
  height: 100%;
  display: flex;
  align-items: center;
  transition: all 0.2s linear;

  ${({ partialNav }) =>
    partialNav
      ? css`
          width: 5rem;

          @media (${({ theme }) => theme.media.mobile}) {
            display: flex;
          }
        `
      : css`
          width: 10rem;

          @media (${({ theme }) => theme.media.tablet_sm}) {
            width: 8rem;
          }

          @media (${({ theme }) => theme.media.mobile}) {
            display: none;
          }
        `};

  .logo-link {
    display: inline-block;
    width: 100%;
    height: 100%;
  }

  .logo-link img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`;
