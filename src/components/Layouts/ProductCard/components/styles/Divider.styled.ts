import styled from "styled-components";

export const Divider = styled.hr`
  margin: 0.5rem 0;
  width: 100%;
  height: 2px;
  background: ${({ theme }) => theme.colors.text};
  margin-top: auto;
`;
