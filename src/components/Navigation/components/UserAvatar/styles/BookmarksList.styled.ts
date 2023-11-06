import styled from "styled-components";
import { animateMoveBottom } from "styles/helpers";

export const BookmarksList = styled.ul`
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

    @media (hover: hover) {
      &:not(.active):hover {
        background: ${({ theme }) => theme.colors.blue};
        color: ${({ theme }) => theme.colors.white};
      }
    }

    .icon {
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: ${({ theme }) => theme.fontSize.lg};
    }
  }
`;
