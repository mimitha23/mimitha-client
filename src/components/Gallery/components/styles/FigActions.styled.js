import styled from "styled-components";

export const FigActions = styled.div`
  position: absolute;
  z-index: 1;
  top: 1rem;
  right: 1rem;
  display: flex;
  align-items: center;
  gap: 2rem;

  .gallery-fig__actions-btn {
    background: ${({ theme }) => theme.colors.gray_shade};
    width: 3rem;
    height: 3rem;
    border-radius: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    opacity: 0.4;
    transition: opacity 0.3s ease;

    &:hover {
      opacity: 1;
    }
  }
`;
