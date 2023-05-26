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
    top: calc(100% + 2px);
    left: -6rem;
    width: 5rem;
    height: 5rem;
    border-bottom-right-radius: 100%;
    background: rgba(0, 0, 0, 0.5);
    font-size: 1.6rem;
    overflow: hidden;
    transition: all 0.3s linear;
    transition-delay: 0.1s;

    &.active-burger--nav {
      display: block;
      left: 0;
      right: 0;
      bottom: 0;
      border-radius: 0;
      width: 100%;
      height: calc(100vh - ${({ theme }) => theme.app.nav_h});
      backdrop-filter: blur(5px);
      transition: all 0.3s linear;
    }

    .categories-nav__list {
      flex-direction: column;
      align-items: flex-start;
      gap: 0.5rem;
      width: 30rem;
      box-shadow: 10px 0 5px rgba(0, 0, 0, 0.4);
      height: 0;
      overflow: hidden;
      transition: all 0.3s linear;

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

    &.active-burger--nav .categories-nav__list {
      height: 100%;
      overflow: auto;
      transition: all 0.3s linear;
      transition-delay: 0.1s;

      ::-webkit-scrollbar {
        display: none;
      }
    }
  }
`;
