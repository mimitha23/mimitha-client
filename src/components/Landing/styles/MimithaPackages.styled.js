import styled, { css } from "styled-components";
import { media } from "styles/helpers/media";

export const MimithaPackagesContainer = styled.div`
  padding: 8rem 0 4rem;

  .packages-wrapper {
    width: 100%;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(2, 30rem);
    justify-content: space-between;
    gap: 15rem 20rem;
    position: relative;
  }

  .packages-logo {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 20rem;
    height: 10rem;

    figure {
      width: 100%;
      height: 100%;

      img {
        width: 100%;
        height: 100%;
        object-fit: contain;
      }
    }
  }

  ${media.tablet`
    .packages-wrapper{
      grid-template-rows:4;
      grid-auto-rows:30rem;
      grid-template-columns:repeat(1,1fr);
      column-gap:0;
      row-gap:8rem;
    }

    .packages-logo{
      display:none;
    }
  `}
`;

export const PackageBox = styled.div`
  position: relative;
  width: 100%;
  background-repeat: no-repeat;
  background-size: cover;
  border: 2px solid ${({ theme }) => theme.colors.text};
  border-radius: 0.3rem;
  overflow: hidden;

  ${({ position }) =>
    position === "bottom-right"
      ? css`
          background-image: url("/assets/images/new-collection.jpg");

          p {
            right: 0;
            bottom: 0;
            text-align: end;
          }
        `
      : position === "bottom-left"
      ? css`
          background-image: url("/assets/images/choose-your-style.jpg");

          p {
            left: 0;
            bottom: 0;
          }
        `
      : position === "top-right"
      ? css`
          background-image: url("/assets/images/on-what.jpg");

          p {
            right: 0;
            top: 0;
            text-align: right;
          }
        `
      : position === "top-left"
      ? css`
          background-image: url("/assets/images/more-then-design.jpg");

          p {
            left: 0;
            top: 0;
          }
        `
      : ""}

  a {
    display: inline-block;
    width: 100%;
    height: 100%;
  }

  p {
    position: absolute;
    width: 40rem;
    padding: 0.5rem;
    height: max-content;
    font-size: 1.75rem;
    font-weight: 400;
    color: ${({ theme }) => theme.colors.bg};
    background-color: ${({ theme }) => theme.colors.text};

    small {
      font-size: 0.8rem;
    }
  }
`;
