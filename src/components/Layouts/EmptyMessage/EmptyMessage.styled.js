import styled from "styled-components";

export const EmptyMessage = styled.p`
  width: 100%;
  min-height: calc(100vh - 27rem - ${({ theme }) => theme.app.nav_h});
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: ${({ theme }) => theme.fontSize.xl};
  font-weight: 700;
  opacity: 0.5;
`;
