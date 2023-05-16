import styled from "styled-components";

export const ActiveProductContainer = styled.div`
  min-height: calc(100vh - ${({ theme }) => theme.app.nav_h});
  border-bottom: 2px solid ${({ theme }) => theme.colors.text};
  padding: 4rem 3rem 5rem 3rem;

  .product-main {
    display: flex;
    align-items: flex-start;
    gap: 4rem;
  }

  .product-info {
    flex: 1;
    padding: 0 40px 0 40px;
    display: flex;
    flex-direction: column;
    gap: 20px;
  }
`;
