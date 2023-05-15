import styled from "styled-components";

export const EditorShippingInfo = styled.div`
  display: flex;
  justify-content: space-between;
  color: ${({ theme }) => theme.colors.text};
  font-weight: 500;

  div {
    p {
      font-size: 1.1rem;

      div {
        width: 20px;
        display: inline-flex;
        border-bottom: 2px solid ${({ theme }) => theme.colors.text};
      }
    }
  }
`;
