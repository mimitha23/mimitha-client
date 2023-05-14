import styled from "styled-components";

export const Navigation = styled.nav`
  width: 100%;
  height: 180px;

  position: fixed;
  top: 0;
  z-index: 999;
  background-color: ${({ theme }) => theme.colors.bg};
  border-bottom: 2px solid ${({ theme }) => theme.colors.text};

  .navbarLogo {
    position: absolute;
    left: 10px;
    bottom: 5px;
    width: 270px;
    height: 150px;
  }
`;
