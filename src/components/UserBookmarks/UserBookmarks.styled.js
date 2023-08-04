import styled from "styled-components";

export const UserBookmarks = styled.main`
  margin-top: ${({ theme }) => theme.app.nav_h_full};
  min-height: calc(100vh - 27rem - ${({ theme }) => theme.app.nav_h_full});

  .user-bookmarks__header {
    display: flex;
    gap: 1rem;
    align-items: center;
    padding: 1rem 3rem;
    justify-content: space-between;
    border-bottom: 1px solid ${({ theme }) => theme.colors.gray_shade};

    &-title,
    &__delete-btn {
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

    &-title {
      font-weight: 700;
    }

    &__delete-btn {
      color: ${({ theme }) => theme.colors.red};
    }
  }

  .user-bookmarks__list {
    padding: 3rem;
    display: grid;
    gap: 6rem 4rem;
    grid-template-columns: repeat(auto-fit, minmax(32rem, max-content));
    justify-content: space-between;
  }

  .user-bookmarks__empty-msg {
    width: 100%;
    min-height: calc(100vh - 27rem - ${({ theme }) => theme.app.nav_h_full});
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-size: ${({ theme }) => theme.fontSize.xl};
    font-weight: 700;
    opacity: 0.5;
  }
`;
