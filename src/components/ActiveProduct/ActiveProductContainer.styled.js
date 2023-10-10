import styled from "styled-components";

export const ActiveProductContainer = styled.div`
  padding-top: ${({ theme }) => theme.app.nav_h};
  min-height: 100vh;

  [data-user-track-path] {
    position: sticky;
    top: ${({ theme }) => theme.app.nav_h};
    padding: 1rem 3.5rem;
    z-index: 12;
    background: ${({ theme }) => theme.colors.bg};
    transition: all 0.2s;

    @media (${({ theme }) => theme.media.mobile}) {
      padding: 1rem;
    }
  }

  .product-main {
    display: flex;
    align-items: flex-start;
    gap: 4rem;
    padding-bottom: 6rem;
    /* border-bottom: 2px solid ${({ theme }) => theme.colors.text}; */

    @media (${({ theme }) => theme.media.desktop}) {
      flex-direction: column;
    }
  }

  @media (${({ theme }) => theme.media.mobile}) {
    [data-container-full] {
      padding-top: 2rem;
    }
  }
`;
