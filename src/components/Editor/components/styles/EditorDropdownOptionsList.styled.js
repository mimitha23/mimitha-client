import styled from "styled-components";
import { animateMoveBottom } from "styles/helpers";

export const EditorDropdownOptionsList = styled.div`
  width: 100%;
  min-height: 6.5rem;
  padding: 1rem;
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  background: ${({ theme }) => theme.colors.white};
  border: 1px solid ${({ theme }) => theme.colors.gray_shade};
  ${animateMoveBottom};
`;
