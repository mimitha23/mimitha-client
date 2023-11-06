import styled from "styled-components";

export const BookmarksTriggerButton = styled.button`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 0.75rem;
  border-radius: 0.5rem;
  width: 100%;
  transition: all 0.2s ease;

  @media (hover: hover) {
    &:hover {
      background: ${({ theme }) => theme.colors.blue};
      color: ${({ theme }) => theme.colors.white};
    }
  }

  .user__dropdown-item--icon {
    display: flex;
    align-items: center;
    justify-content: center;

    &.arrow {
      margin-left: auto;
    }
  }
`;
