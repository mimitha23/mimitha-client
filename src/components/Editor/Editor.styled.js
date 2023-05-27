import styled from "styled-components";

export const EditorContainer = styled.div`
  padding-top: ${({ theme }) => theme.app.nav_h_full};

  .editor-main {
    display: flex;
    align-items: flex-start;
    gap: 2rem;

    @media (${({ theme }) => theme.media.tablet}) {
      flex-direction: column;
    }
  }
`;
