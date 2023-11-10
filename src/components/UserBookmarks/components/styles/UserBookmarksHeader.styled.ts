import styled from "styled-components";

export const UserBookmarksHeader = styled.header`
  display: flex;
  gap: 1rem;
  align-items: center;
  padding: 1rem 3rem;
  justify-content: space-between;
  border-bottom: 1px solid ${({ theme }) => theme.colors.gray_shade};

  @media (${({ theme }) => theme.media.mobile}) {
    padding: 1rem;
  }

  .bookmarks-header__title,
  .bookmarks-header__delete-btn {
    display: flex;
    align-items: center;
    gap: 1rem;

    span {
      display: flex;
      align-items: center;
      justify-content: center;
    }

    span svg {
      font-size: 2.4rem;
    }
  }

  .bookmarks-header__title {
    font-weight: 700;
  }

  .bookmarks-header__delete-btn {
    color: ${({ theme }) => theme.colors.red};
  }
`;
