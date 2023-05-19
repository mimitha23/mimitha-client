import styled from "styled-components";

export const PopularProducts = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: flex-end;

  margin-top: 4rem;
  padding: 4rem 0;
  border-top: 2px solid ${({ theme }) => theme.colors.text};
  border-bottom: 2px solid ${({ theme }) => theme.colors.text};
`;
