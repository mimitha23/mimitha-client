import styled from "styled-components";

export const SaveToListButtons = styled.div`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  right: 1rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  font-size: 2rem;

  button {
    display: flex;
    align-items: center;
    justify-content: center;
    background: ${({ theme }) => theme.colors.black_tr_05};
    width: 3.5rem;
    height: 3.5rem;
    border-radius: 100%;
    color: ${({ theme }) => theme.colors.gray_tint};
    transition: all 0.3s ease-out;

    &.is-saved-to-list {
      color: ${({ theme }) => theme.colors.blue};
      background: ${({ theme }) => theme.colors.black_tr_02};
    }

    &.is-saved-to-favorites {
      color: ${({ theme }) => theme.colors.red};
      background: ${({ theme }) => theme.colors.black_tr_02};
    }
  }
`;
