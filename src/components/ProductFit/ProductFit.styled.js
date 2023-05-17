import styled from "styled-components";

export const ProductFitContainer = styled.div`
  padding: 4rem 3rem 5rem 3rem;
  display: flex;
  gap: 2rem;
  height: calc(100vh - ${({ theme }) => theme.app.nav_h});
`;
