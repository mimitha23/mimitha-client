import styled from "styled-components";
import { media } from "styles/helpers/media";

export const EditorContainer = styled.div`
  padding-top: ${({ theme }) => theme.app.nav_h_full};

  .editor-main {
    display: flex;
    align-items: flex-start;
    gap: 2rem;

    ${media.tablet`
      flex-direction:column;
    `}
  }
`;
