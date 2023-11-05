import styled from "styled-components";

export const SwitchProcessField = styled.div`
  color: ${({ theme }) => theme.colors.blue};
  font-size: ${({ theme }) => theme.fontSize.md};
  text-align: center;
  text-wrap: balance;

  &.confirm-email {
    margin-bottom: 1rem;
  }

  span {
    display: inline-block;
    font-size: ${({ theme }) => theme.fontSize.sm};
  }

  button {
    text-decoration: underline;
    cursor: pointer;
  }
`;
