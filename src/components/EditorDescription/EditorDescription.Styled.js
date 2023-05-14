import styled from "styled-components";

export const StyledEditorDescription = styled.div`
  letter-spacing: 0.5px;
  h2 {
    color: ${({ theme }) => theme.colors.text};
    font-size: 1.25rem;
    font-weight: 500;
  }
`;

export const StyledEditorDescriptionStyles = styled.div`
  display: flex;
  align-items: flex-end;
  margin-bottom: 3px;

  color: ${({ theme }) => theme.colors.text};
  font-size: 1.1rem;
  font-weight: 500;

  div {
    span {
      cursor: pointer;
    }
  }
`;

export const StyledEditorPlaceHolder = styled.div`
  width: 90px;
  margin: 5px;

  border: 1px solid ${({ theme }) => theme.colors.text};
`;

export const StyledEditorSoldCounter = styled.span`
  color: ${({ theme }) => theme.colors.text};
  font-weight: 500;

  div {
    display: inline-flex;
    justify-content: center;
    align-items: center;
    width: 60px;

    color: ${({ theme }) => theme.colors.bg};
    background-color: ${({ theme }) => theme.colors.text};
  }
`;
