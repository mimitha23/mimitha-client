import styled from "styled-components";

export const Editor = styled.div`
  width: 100vw;
  height: 80vh;
  margin-top: 200px;
  display: flex;
  align-items: center;

  /* border-top: 2px solid ${({ theme }) => theme.colors.text}; */
  border-bottom: 2px solid ${({ theme }) => theme.colors.text};

  .editorImg {
    width: 30vw;
    height: 50vh;
    margin: 0 20px 0 20px;
  }

  .editorPanel {
    width: 40vw;
    height: 80vh;

    padding: 20px 40px 0 40px;

    display: flex;
    flex-direction: column;

    gap: 20px;

    .no_margin {
      margin-top: -20px;
    }
  }
`;
