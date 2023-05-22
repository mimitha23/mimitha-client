import styled from "styled-components";

export const ProductFitContainer = styled.div`
  padding-top: ${({ theme }) => theme.app.nav_h_full};
  height: calc(100vh - ${({ theme }) => theme.app.nav_h_full} - 8rem);
  display: flex;
  gap: 2rem;
`;
