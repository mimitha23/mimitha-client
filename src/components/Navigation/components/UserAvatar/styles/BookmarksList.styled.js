import styled from "styled-components";
import { animateMoveBottom } from "styles/helpers";

export const BookmarksList = styled.li`
  .trigger-btn {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    padding: 0.75rem;
    border-radius: 0.5rem;
    width: 100%;
    transition: all 0.2s ease;

    &:hover {
      background: ${({ theme }) => theme.colors.blue};
      color: ${({ theme }) => theme.colors.white};
    }

    .user__dropdown-item--icon {
      display: flex;
      align-items: center;
      justify-content: center;

      &.arrow {
        margin-left: auto;
      }
    }
  }

  .empty-list {
    display: block;
    font-size: ${({ theme }) => theme.fontSize.sm};
    text-align: center;
    text-wrap: balance;
    opacity: 0.5;
    font-weight: bold;
    margin-top: 0.5rem;
  }

  .bookmarks__list {
    padding: 0.5rem 0.5rem 0.5rem 3rem;
    display: flex;
    flex-direction: column;
    gap: 0.25rem;
    ${animateMoveBottom};

    li a {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      cursor: pointer;
      transition: all 0.2s ease;
      padding: 0.5rem;
      border-radius: 0.5rem;

      &.active {
        color: ${({ theme }) => theme.colors.blue};
      }

      &:not(.active):hover {
        background: ${({ theme }) => theme.colors.blue};
        color: ${({ theme }) => theme.colors.white};
      }

      .icon {
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: ${({ theme }) => theme.fontSize.lg};
      }
    }
  }
`;
