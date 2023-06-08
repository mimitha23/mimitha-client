import styled from "styled-components";

export const Gallery = styled.main`
  padding: 0 1rem 2rem 1rem;
  padding-top: calc(${({ theme }) => theme.app.nav_h_full} + 2rem);
  min-height: calc(100vh - ${({ theme }) => theme.app.nav_h_full});
`;
