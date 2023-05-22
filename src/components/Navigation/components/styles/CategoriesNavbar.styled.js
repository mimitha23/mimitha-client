import styled from "styled-components";

export const CategoriesNavbar = styled.nav`
  width: min(100%, 84rem);
  height: 4.5rem;
  color: ${({ theme }) => theme.colors.text};

  .categoriesNavbar--list {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    font-size: ${({ theme }) => theme.fontSize.sm};
    font-weight: 500;

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
        transition: 0.2s ease-in;

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
`;
