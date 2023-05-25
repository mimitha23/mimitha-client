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

  @media (${({ theme }) => theme.breakPoints.desktop}) {
    /* display:none; */
    position: absolute;
    top: calc(100% + 2px);
    left: 0;
    right: 0;
    bottom: 0;
    width: 100%;
    background: rgba(0, 0, 0, 0.5);
    height: calc(100vh - ${({ theme }) => theme.app.nav_h});
    font-size: 1.6rem;
    backdrop-filter: blur(5px);

    .categories-nav__list {
      flex-direction: column;
      align-items: flex-start;
      gap: 0.5rem;
      width: 30rem;
      box-shadow: 10px 0 5px rgba(0, 0, 0, 0.4);

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
  }
`;
