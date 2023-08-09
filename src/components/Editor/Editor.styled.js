import styled from "styled-components";

export const EditorContainer = styled.div`
  padding-top: ${({ theme }) => theme.app.nav_h};
  min-height: 100%;

  [data-container-full] {
    display: flex;
    width: 100%;
  }

  .editor-main {
    width: 100%;
    min-height: 100%;
    align-self: stretch;
    display: flex;
    align-items: flex-start;
    gap: 2rem;

    @media (${({ theme }) => theme.media.tablet}) {
      flex-direction: column;
    }
  }
`;
