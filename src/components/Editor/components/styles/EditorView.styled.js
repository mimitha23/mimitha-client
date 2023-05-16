import styled from "styled-components";

export const EditorViewContainer = styled.div`
  flex: 1;
  height: 30vw;
  border: 1px solid ${({ theme }) => theme.colors.gray_shade};
  border-radius: 0%.5rem;

  .editor-fig {
    width: 100%;
    height: 100%;

    img {
      width: 100%;
      height: 100%;
      object-fit: contain;
    }
  }
`;
