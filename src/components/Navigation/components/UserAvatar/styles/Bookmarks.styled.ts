import styled from "styled-components";

export const Bookmarks = styled.li`
  .empty-list {
    display: block;
    font-size: ${({ theme }) => theme.fontSize.sm};
    text-align: center;
    text-wrap: balance;
    opacity: 0.5;
    font-weight: bold;
    margin-top: 0.5rem;
  }
`;
