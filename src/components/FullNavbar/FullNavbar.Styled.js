import styled from "styled-components";

export const StyledFullNavbar = styled.nav`
  width: 100%;
  height: 180px;
  margin: 10px 0 10px 0;
  
  position: relative;
  border-top: 2px solid ${({ theme }) => theme.colors.text};
`