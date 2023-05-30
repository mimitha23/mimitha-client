import styled from "styled-components";

export const ProductFit = styled.div`
  padding-top: ${({ theme }) => theme.app.nav_h_full};
  height: 100vh;

  [data-container-full] {
    min-height: unset;
    height: 100%;
    display: flex;
    gap: 2rem;
  }

  @media (${({ theme }) => theme.media.desktop}) {
    [data-container-full] {
      flex-direction: column;
      height: auto;
    }
  }
`;
