import styled from "styled-components";

export const CircleButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${({ theme }) => theme.colors.black_tr_05};
  width: 3.5rem;
  height: 3.5rem;
  border-radius: 100%;
  color: ${({ theme }) => theme.colors.gray_tint};
  transition: all 0.3s ease-out;
  font-size: 2rem;
`;
