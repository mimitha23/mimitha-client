import styled from "styled-components";

export const UserFavorites = styled.main`
  margin-top: ${({ theme }) => theme.app.nav_h_full};
  min-height: calc(100vh - 27rem - ${({ theme }) => theme.app.nav_h_full});

  .user-favorites__list {
    margin-top: 4rem;
    padding: 3rem;
    display: grid;
    gap: 6rem 4rem;
    grid-template-columns: repeat(auto-fit, minmax(32rem, max-content));
    justify-content: space-between;
  }

  .user-favorites__empty-msg {
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
