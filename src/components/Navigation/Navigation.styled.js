import styled from "styled-components";
import { media } from "styles/helpers/media";

export const Navigation = styled.nav`
  position: fixed;
  z-index: 99;
  top: 0;
  width: 100%;
  height: ${({ theme }) => theme.app.nav_h};
  display: flex;
  align-items: center;
  gap: 3rem;
  padding: 1rem 3rem;
  background-color: ${({ theme }) => theme.colors.bg};
  border-bottom: 2px solid ${({ theme }) => theme.colors.text};
  transition: height 0.2s linear;

  .burger-btn {
    font-size: 3rem;
    display: none;
  }

  .nav-actions {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  .main-nav {
    width: 100%;
    display: flex;
    align-items: flex-end;
    gap: 4rem;
    margin-top: auto;
  }

  ${media.desktop`
    .burger-btn{
      display: block;
    }
  `}
`;
