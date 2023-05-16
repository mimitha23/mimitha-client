import styled from "styled-components";

export const ActiveProductContainer = styled.div`
  /* margin-top: ${({ theme }) => theme.app.nav_h}; */
  min-height: calc(100vh - ${({ theme }) => theme.app.nav_h});
  display: flex;
  gap: 4rem;
  border-bottom: 2px solid ${({ theme }) => theme.colors.text};

  .product-info {
    flex: 1;
    padding: 0 40px 0 40px;
    display: flex;
    flex-direction: column;
    gap: 20px;
  }
`;
