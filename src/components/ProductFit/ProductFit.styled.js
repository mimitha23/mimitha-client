import styled from "styled-components";
import { media } from "styles/helpers/media";

export const ProductFitContainer = styled.div`
  padding-top: ${({ theme }) => theme.app.nav_h_full};
  height: 100vh;

  [data-container-full] {
    min-height: unset;
    height: 100%;
    display: flex;
    gap: 2rem;
  }

  ${media.desktop`
    [data-container-full]{
      flex-direction:column;
    }
  `}
`;
