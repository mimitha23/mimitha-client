import styled from "styled-components";

export const UserFavorites = styled.main`
  margin-top: ${({ theme }) => theme.app.nav_h};
  min-height: calc(100vh - 27rem - ${({ theme }) => theme.app.nav_h});

  .user-favorites__list {
    margin-top: 4rem;
    padding: 3rem;
    display: grid;
    gap: 6rem 4rem;
    grid-template-columns: repeat(auto-fit, minmax(32rem, max-content));
    justify-content: space-between;

    @media (${({ theme }) => theme.media.mobile}) {
      grid-template-columns: repeat(auto-fit, minmax(32rem, 1fr));
      padding: 3rem 1rem;
    }
  }

  .user-favorites__empty-msg {
    width: 100%;
    min-height: calc(100vh - 27rem - ${({ theme }) => theme.app.nav_h});
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-size: ${({ theme }) => theme.fontSize.xl};
    font-weight: 700;
    opacity: 0.5;
  }
`;
