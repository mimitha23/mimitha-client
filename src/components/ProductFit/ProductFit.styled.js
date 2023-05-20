import styled from "styled-components";

export const ProductFitContainer = styled.div`
  display: flex;
  gap: 2rem;
  height: calc(100vh - ${({ theme }) => theme.app.nav_h} - 8rem);
`;
