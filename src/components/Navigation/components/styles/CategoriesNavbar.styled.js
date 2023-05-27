import styled from "styled-components";

export const CategoriesNavbar = styled.nav`
  width: min(100%, 84rem);
  height: 100%;
  color: ${({ theme }) => theme.colors.text};
  font-size: ${({ theme }) => theme.fontSize.sm};

  .categories-nav__list {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    font-weight: 500;
    background: ${({ theme }) => theme.colors.bg};

    li {
      height: 100%;
      border-right: 2px solid ${({ theme }) => theme.colors.text};

      a {
        width: 100%;
        height: 100%;
        padding: 0 2rem 0 2rem;
        display: flex;
        justify-content: center;
        align-items: center;
        transition: all 0.2s ease-in;

        :hover {
          background-color: ${({ theme }) => theme.colors.text};
          color: ${({ theme }) => theme.colors.bg};
        }
      }

      :first-child {
        border-left: 2px solid ${({ theme }) => theme.colors.text};
      }

      :last-child {
        border: 2px solid ${({ theme }) => theme.colors.text};
        border-left: none;
      }
    }
  }

  @media (${({ theme }) => theme.media.desktop}) {
    position: absolute;
    top: calc(100% + 0.2rem);
    right: 0;
    bottom: 0;
    left: 0;
    width: 100%;
    height: calc(100vh - ${({ theme }) => theme.app.nav_h});
    font-size: ${({ theme }) => theme.fontSize.base};
    overflow: hidden;
    visibility: hidden;
    pointer-events: none;
    transition: all 0.3s linear;

    &::after {
      content: "";
      position: absolute;
      z-index: -1;
      left: -5rem;
      top: -5rem;
      width: 5rem;
      height: 5rem;
      border-radius: 100%;
      background: ${({ theme }) => theme.gradients.backdrop_gradient};
      background-size: cover;
      background-repeat: no-repeat;
      opacity: 0;
      transition: all 0.3s linear;
    }

    &.active-burger--nav {
      backdrop-filter: blur(5px);
      z-index: auto;
      visibility: visible;
      pointer-events: all;

      ::after {
        transform: scale(100);
        opacity: 1;
      }
    }

    .categories-nav__list {
      flex-direction: column;
      align-items: flex-start;
      gap: 0.5rem;
      width: 30rem;
      height: 0;
      overflow: hidden;
      opacity: 0;
      visibility: hidden;
      pointer-events: none;
      box-shadow: 1rem 0 0.5rem ${({ theme }) => theme.colors.black_tr_05};

      li,
      li:first-child,
      li:last-child {
        border: none;
      }

      li {
        height: auto;
        width: 100%;

        a {
          padding: 2rem;
          justify-content: flex-start;
        }
      }
    }

    &.burger-nav .categories-nav__list {
      transition: all 0.2s linear;
    }

    &.active-burger--nav .categories-nav__list {
      height: 100%;
      overflow: auto;
      visibility: visible;
      opacity: 1;
      pointer-events: all;
      transition: all 0.2s linear;
      transition-delay: 0.1s;

      ::-webkit-scrollbar {
        display: none;
      }
    }
  }
`;
