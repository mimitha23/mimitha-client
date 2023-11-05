import styled from "styled-components";

export const MainNavList = styled.ul`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  font-weight: 500;
  background: ${({ theme }) => theme.colors.bg};
  text-transform: uppercase;
  padding-bottom: 1rem;

  @media (${({ theme }) => theme.media.desktop}) {
    flex-direction: column;
    align-items: flex-start;
    gap: 0.5rem;
    width: 36rem;
    height: 0;
    overflow: hidden;
    opacity: 0;
    visibility: hidden;
    pointer-events: none;
    box-shadow: 1rem 0 0.5rem ${({ theme }) => theme.colors.black_tr_05};

    &.burger-nav {
      transition: all 0.2s linear;
    }

    &.active-burger--nav {
      height: 100%;
      overflow: auto;
      visibility: visible;
      opacity: 1;
      pointer-events: all;
      transition: all 0.2s linear;
      transition-delay: 0.1s;

      ::-webkit-scrollbar {
        display: none;
      }
    }
  }
`;
