import styled from "styled-components";
import { animateMoveTop } from "styles/helpers/animations";

export const NavDropdown = styled.nav`
  position: fixed;
  z-index: -1;
  /* top: calc(${({ theme }) => theme.app.nav_h} - 1.5rem); */
  top: ${({ theme }) => theme.app.nav_h};
  left: 0;
  right: 0;
  bottom: 0;
  background: ${({ theme }) => theme.gradients.backdrop_gradient};
  /* ${animateMoveTop}; */

  .dropdown-nav__content-box {
    display: grid;
    grid-template-columns: repeat(1, 1fr max-content);
    gap: 1rem;
    padding: 3rem;
    padding-bottom: 6rem;
    max-height: calc(100vh - ${({ theme }) => theme.app.nav_h} - 6rem);
    overflow: auto;
    background: ${({ theme }) => theme.colors.bg};
    box-shadow: 0 1rem 1rem rgba(0, 0, 0, 1);

    ::-webkit-scrollbar {
      display: none;
    }
  }

  .dropdown-nav__routes-container {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(24rem, max-content));
    grid-auto-rows: 2rem;
    grid-auto-flow: dense;
    align-content: start;
    align-items: start;
    column-gap: 5rem;
  }

  .dropdown-nav__products-container {
    display: flex;
    flex-direction: column;

    &--fig {
      max-width: 22rem;
      aspect-ratio: 1/1;
      overflow: hidden;

      img {
        width: 100%;
        height: 100%;
        object-fit: contain;
      }
    }
  }

  @media (${({ theme }) => theme.media.desktop}) {
    position: relative;
    z-index: auto;
    top: 0;

    .dropdown-nav__content-box {
      grid-template-columns: repeat(1, 1fr);
      padding: 1rem 1rem 1rem 3rem;
      box-shadow: none;
      overflow: visible;
      max-height: 100%;
      gap: 0;
    }

    .dropdown-nav__routes-container {
      gap: 2.5rem;
      grid-auto-rows: max-content;
      grid-auto-flow: unset;
    }

    .dropdown-nav__products-container {
      display: none;
    }
  }
`;

export const NavDropdownBlock = styled.div`
  height: max-content;
  grid-row: span ${({ routesLength }) => routesLength};

  @media (${({ theme }) => theme.media.desktop}) {
    grid-row: auto;
  }

  .dropdown-nav__routes-head {
    font-size: ${({ theme }) => theme.fontSize.lg};
    font-weight: 500;
    display: inline-block;
    margin-bottom: 1rem;
    margin-top: 3rem;
  }

  .dropdown-nav__routes-list {
    display: flex;
    flex-direction: column;
    gap: 0.25rem;
    font-size: ${({ theme }) => theme.fontSize.sm};
  }

  .dropdown-nav__routes-list--item {
    a {
      display: inline-block;
      padding-inline-start: 0;
      padding: 0.5rem;
      width: 100%;
      height: 100%;
      text-align: start;
      position: relative;
      transition: all 0.2s ease;
      border-radius: 0.5rem;
      text-transform: capitalize;
      font-size: ${({ theme }) => theme.fontSize.base};
      font-weight: 400;

      &:before {
        content: "-";
        margin-right: 2rem;
      }

      :hover {
        background: ${({ theme }) => theme.colors.text};
        color: ${({ theme }) => theme.colors.bg};
      }
    }
  }
`;
