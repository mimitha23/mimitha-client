import styled from "styled-components";

export const SearchBarResults = styled.div`
  position: absolute;
  top: calc(100% + 2px);
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: calc(100vh - ${({ theme }) => theme.app.nav_h});

  @media (${({ theme }) => theme.media.mobile}) {
    height: 100vh;

    &.active_bar {
      top: 5rem;
      height: calc(100vh - 5rem);

      .search-bar__result-box__content {
        height: 100%;
      }
    }
  }

  .search-bar__result-box__content {
    height: 100%;
    display: flex;
    flex-direction: column;
    background: ${({ theme }) => theme.colors.black_tr_05};
    backdrop-filter: blur(5px);

    @media (${({ theme }) => theme.media.mobile}) {
      backdrop-filter: none;
    }
  }
`;
