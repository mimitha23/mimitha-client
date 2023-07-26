import styled from "styled-components";

export const ProductCard = styled.div`
  height: 100%;
  width: 100%;
  padding: 1rem;
  padding-bottom: 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  font-weight: 500;
  border-radius: 0.8rem;
  box-shadow: ${({ theme }) => theme.shadow.radial_sm_dark};
  background: ${({ theme }) => theme.colors.white};
  color: ${({ theme }) => theme.colors.black};
`;
