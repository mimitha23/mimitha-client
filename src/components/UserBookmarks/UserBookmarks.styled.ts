import styled from "styled-components";

export const UserBookmarks = styled.main`
  margin-top: ${({ theme }) => theme.app.nav_h};
  min-height: calc(100vh - 27rem - ${({ theme }) => theme.app.nav_h});
`;
