import styled from "styled-components";

export const ProductCard = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  font-weight: 500;
  border: 1px solid ${({ theme }) => theme.colors.text};
  border-radius: 0.8rem;
  box-shadow: ${({ theme }) => theme.shadow.radial_sm_dark};
  padding: 1rem 1rem 1rem;
`;
