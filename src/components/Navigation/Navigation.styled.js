import styled, { css } from "styled-components";

export const Navigation = styled.nav`
  position: fixed;
  z-index: 999;
  top: 0;
  width: 100%;
  height: ${({ theme }) => theme.app.nav_h};
  overflow: hidden;
  display: flex;
  align-items: center;
  gap: 3rem;
  padding: 1rem 3rem;
  background-color: ${({ theme }) => theme.colors.bg};
  border-bottom: 2px solid ${({ theme }) => theme.colors.text};
  transition: height 0.2s ease;

  .nav-actions {
    position: relative;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  .main-nav {
    position: absolute;
    width: 100%;
    display: flex;
    align-items: flex-end;
    gap: 4rem;
    transition: position 0.2s ease;

    ${({ partialNav }) =>
      partialNav
        ? ""
        : css`
            bottom: 1rem;
          `};
  }
`;
