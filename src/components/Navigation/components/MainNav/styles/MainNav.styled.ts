import styled from "styled-components";

export const MainNavContainer = styled.nav`
  width: min(100%, 84rem);
  height: 100%;
  color: ${({ theme }) => theme.colors.text};
  font-size: ${({ theme }) => theme.fontSize.sm};

  @media (${({ theme }) => theme.media.desktop}) {
    position: absolute;
    top: calc(100% + 0.2rem);
    right: 0;
    bottom: 0;
    left: 0;
    width: 100%;
    height: calc(100vh - ${({ theme }) => theme.app.nav_h});
    font-size: ${({ theme }) => theme.fontSize.base};
    overflow: hidden;
    visibility: hidden;
    pointer-events: none;
    transition: all 0.3s linear;

    &::after {
      content: "";
      position: absolute;
      z-index: -1;
      left: -5rem;
      top: -5rem;
      width: 5rem;
      height: 5rem;
      border-radius: 100%;
      background: ${({ theme }) => theme.gradients.backdrop_gradient};
      background-size: cover;
      background-repeat: no-repeat;
      opacity: 0;
      transition: all 0.3s linear;
    }

    &.active-burger--nav {
      backdrop-filter: blur(5px);
      z-index: auto;
      visibility: visible;
      pointer-events: all;

      ::after {
        transform: scale(100);
        opacity: 1;
      }
    }
  }
`;
