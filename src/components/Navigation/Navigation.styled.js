import styled from "styled-components";

export const Navigation = styled.nav`
  position: sticky;
  z-index: 999;
  top: 0;
  width: 100%;
  height: 18rem;
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1rem 3rem;
  background-color: ${({ theme }) => theme.colors.bg};
  border-bottom: 2px solid ${({ theme }) => theme.colors.text};

  .nav-actions {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  .main-nav {
    display: flex;
    align-items: flex-end;
    gap: 4rem;
  }
`;
