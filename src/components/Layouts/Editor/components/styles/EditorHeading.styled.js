import styled from "styled-components";

export const EditorHeadingContainer = styled.div`
  margin: 20px 20px 0 0;

  h1 {
    padding-bottom: 10px;

    font-size: 1.35rem;
    font-weight: 400;
    color: ${({ theme }) => theme.colors.text};
  }

  .price {
    width: fit-content;
    margin: 10px 0 10px 0;
    display: flex;
    justify-content: flex-start;
    align-items: center;

    div {
      padding: 5px;
      color: ${({ theme }) => theme.colors.text};
      font-size: 0.85rem;
      font-weight: 500;

      border: 2px solid ${({ theme }) => theme.colors.text};

      :first-child {
        margin-right: 2px;
      }
    }
  }
`;
