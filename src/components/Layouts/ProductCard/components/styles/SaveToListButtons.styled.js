import styled from "styled-components";

export const SaveToListButtons = styled.div`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  right: 1rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;

  button.is-saved-to-list {
    color: ${({ theme }) => theme.colors.blue};
    background: ${({ theme }) => theme.colors.black_tr_02};
  }

  button.is-saved-to-favorites {
    color: ${({ theme }) => theme.colors.red};
    background: ${({ theme }) => theme.colors.black_tr_02};
  }
`;
