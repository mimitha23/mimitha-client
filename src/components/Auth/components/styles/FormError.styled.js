import styled from "styled-components";

export const FormError = styled.blockquote`
  text-align: center;
  text-wrap: balance;
  font-size: ${({ theme }) => theme.fontSize.sm};
  color: ${({ theme }) => theme.colors.red};
`;
