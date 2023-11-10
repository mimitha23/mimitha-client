import styled from "styled-components";

export const ViewModeButton = styled.button`
  position: absolute;
  bottom: 1rem;
  right: 1rem;
  font-size: 2.5rem;
  width: 4.5rem;
  height: 4.5rem;
  background: ${({ theme }) => theme.colors.black_tr_05};
  color: ${({ theme }) => theme.colors.white};
  border-radius: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  &.active {
    color: ${({ theme }) => theme.colors.blue};
  }
`;
