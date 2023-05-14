import styled from "styled-components";

export const StyledCategoriesNavbar = styled.nav`
  width: 840px;
  height: 60px;

  position: absolute;
  bottom: 5px;
  left: 308px;
  color: ${({ theme }) => theme.colors.text};
`;

export const CategoriesNavbarList = styled.ul`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  list-style-type: none;

  li {
    width: 100%;
    height: 80%;

    display: flex;
    justify-content: center;
    align-items: center;

    padding: 0px 20px 0px 20px;
    border-right: 2px solid ${({ theme }) => theme.colors.text};
    font-size: 0.75rem;
    font-weight: 500;
    cursor: pointer;

    :nth-child(1) {
      border-left: 2px solid ${({ theme }) => theme.colors.text};
    }

    :nth-child(6) {
      border: 0;
    }

    :nth-child(7) {
      border: 1.75px solid ${({ theme }) => theme.colors.text};
    }

    :hover {
      background-color: ${({ theme }) => theme.colors.text};
      color: ${({ theme }) => theme.colors.bg};
      transition: 0.3s ease-in;
    }
  }
`;
