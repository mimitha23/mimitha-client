import styled from "styled-components";

export const Navigation = styled.nav`
  position: fixed;
  z-index: 99;
  top: 0;
  width: 100%;
  height: ${({ theme }) => theme.app.nav_h};
  display: flex;
  align-items: center;
  gap: 3rem;
  padding: 0 3rem;
  background-color: ${({ theme }) => theme.colors.bg};
  border-bottom: 2px solid ${({ theme }) => theme.colors.text};
  transition: height 0.2s linear;
`;

export const NavActionsBox = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media (${({ theme }) => theme.media.mobile}) {
    gap: 1rem;
  }
`;

export const MainNavBox = styled.div`
  width: 100%;
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  gap: 4rem;
  margin-top: auto;

  @media (${({ theme }) => theme.media.tablet_sm}) {
    padding: 0 1rem;
    gap: 2rem;

    .main_nav--right {
      gap: 2rem;
      justify-content: flex-end;
    }
  }
`;

export const MainNavBoxActions = styled.div`
  display: flex;
  align-items: center;
  gap: 4rem;
  padding-bottom: 1.5rem;

  @media (${({ theme }) => theme.media.desktop}) {
    width: 100%;
  }

  @media (${({ theme }) => theme.media.tablet_sm}) {
    gap: 2rem;
    justify-content: flex-end;
  }
`;
