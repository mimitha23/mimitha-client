import styled from "styled-components";

export const FigActions = styled.div`
  position: absolute;
  top: 1rem;
  right: 1rem;
  display: flex;
  align-items: center;
  gap: 2rem;

  button {
    background: ${({ theme }) => theme.colors.gray_shade};
    width: 3rem;
    height: 3rem;
    border-radius: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    opacity: 0.4;
    transition: opacity 0.2s ease;

    :hover {
      opacity: 1;
    }
  }
`;
