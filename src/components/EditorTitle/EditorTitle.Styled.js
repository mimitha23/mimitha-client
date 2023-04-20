import styled from "styled-components";

export const StyledEditorTitle = styled.div`
 h1 {
  padding-bottom: 10px;

  font-size: 1.35rem;
  font-weight: 400;
  color: ${({ theme }) => theme.colors.text};
 }
`

export const StyledPrice = styled.div`
  width: fit-content;
  display: flex;
  justify-content: flex-start;
  align-items: center;

  div {
    padding: 5px;
    color: ${({ theme }) => theme.colors.text};
    font-size: .85rem;
    font-weight: 500;

    border: 2px solid ${({ theme }) => theme.colors.text};
    
    :first-child {
      margin-right: 2px;
    }
  }
`