import styled from "styled-components";

export const UserOrderHistory = styled.main`
  padding-top: ${({ theme }) => theme.app.nav_h};
  min-height: calc(100vh - ${({ theme }) => theme.app.nav_h});
`;
