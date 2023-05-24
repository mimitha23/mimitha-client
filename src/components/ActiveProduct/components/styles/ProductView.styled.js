import styled from "styled-components";
import { media } from "styles/helpers/media";

export const ProductView = styled.div`
  width: 100%;
  height: 30vw;
  display: flex;
  gap: 0.5rem;
  background: ${({ theme }) => theme.colors.bg};
  border: 1px solid ${({ theme }) => theme.colors.gray_shade};

  ${media.tablet`
    height: 38vw;
  `}

  ${media.mobile`
    height: 35vh;
  `}

  .editor-fig {
    flex: 1;
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .editor-fig img {
    width: 100%;
    height: 100%;
    object-fit: contain;
    object-position: center;
  }
`;
