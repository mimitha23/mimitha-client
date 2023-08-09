import styled from "styled-components";
import { animateMoveBottom } from "styles/helpers/animations";

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

  .search-bar__result-box__content-head {
    position: absolute;
    height: 4rem;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 2rem;
    width: 100%;
    background: ${({ theme }) => theme.colors.bg};
    box-shadow: 0 0.8rem 0.5rem ${({ theme }) => theme.colors.black_tr_02};
    ${animateMoveBottom};

    a {
      color: royalblue;

      @media (hover: hover) {
        :hover {
          text-decoration: underline;
        }
      }

      @media (hover: none) {
        text-decoration: underline;
      }
    }
  }

  .search-bar__result-box__content-list {
    width: 100%;
    margin-top: 4rem;
    max-height: 100%;
    min-height: 10rem;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(32rem, max-content));
    /* grid-auto-rows: 40rem; */
    gap: 4rem;
    justify-content: center;
    padding: 3rem 1rem;
    overflow: auto;
    background: ${({ theme }) => theme.colors.bg};
    box-shadow: 0 1rem 0.5rem ${({ theme }) => theme.colors.black_tr_05};
    transition: height 0.3s ease;
    position: relative;

    ::-webkit-scrollbar {
      display: none;
    }

    [data-spinner] {
      position: absolute;
    }

    @media (${({ theme }) => theme.media.tablet_sm}) {
      justify-content: center;
    }

    @media (${({ theme }) => theme.media.mobile}) {
      grid-template-columns: repeat(auto-fill, minmax(32rem, 1fr));
    }
  }
`;
