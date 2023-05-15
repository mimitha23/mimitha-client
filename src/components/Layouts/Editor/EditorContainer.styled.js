import styled from "styled-components";

export const EditorContainer = styled.div`
  margin-top: ${({ theme }) => theme.app.nav_h};
  min-height: calc(100vh - ${({ theme }) => theme.app.nav_h});
  display: flex;
  gap: 4rem;
  border-bottom: 2px solid ${({ theme }) => theme.colors.text};

  .editor-view {
    flex: 1;
    display: flex;
    gap: 0.5rem;

    .editor-fig {
      flex: 1;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
    }

    .editor-fig img {
      width: 100%;
      aspect-ratio: 1/1;
      object-position: center;
    }
  }

  .editor-actions {
    flex: 1;
    padding: 0 40px 0 40px;
    display: flex;
    flex-direction: column;
    gap: 20px;

    .no_margin {
      margin-top: -20px;
    }
  }
`;
