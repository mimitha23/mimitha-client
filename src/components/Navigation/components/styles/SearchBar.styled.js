import styled from "styled-components";

export const SearchBar = styled.div`
  width: 25rem;
  height: 5rem;
  border-bottom: 2px solid ${({ theme }) => theme.colors.text};
  color: ${({ theme }) => theme.colors.text};
  margin-left: auto;
  background: ${({ theme }) => theme.colors.bg};

  &.active_bar .search-bar__inp-field .search__close-btn {
    display: block;
  }

  @media (${({ theme }) => theme.media.desktop}) {
    margin-left: unset;
  }

  @media (${({ theme }) => theme.media.tablet_sm}) {
    width: 100%;
  }

  @media (${({ theme }) => theme.media.mobile}) {
    width: max-content;
    border: none;
    height: max-content;

    .search-bar__inp-field {
      .search-icon {
        font-size: ${({ theme }) => theme.fontSize.h3};
      }

      .search--input {
        display: none;
      }
    }

    &.active_bar {
      position: fixed;
      z-index: 99;
      top: 0;
      left: 0;
      right: 0;
      width: 100%;
    }

    &.active_bar .search-bar__inp-field {
      height: 5rem;
      padding: 0 1rem;

      .search--input {
        display: block;
      }
    }

    &.active_bar .search-bar__result-box {
      top: 5rem;
      height: calc(100vh - 5rem);

      &__content {
        height: 100%;
      }
    }
  }
`;

export const SearchBarField = styled.div`
  height: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 1rem;

  .search-icon {
    font-size: ${({ theme }) => theme.fontSize.xxl};
    line-height: 1;
  }

  .search--input {
    width: 100%;
    height: 100%;
    border: 0;
    text-align: center;
    font-weight: 500;
    background: inherit;
    color: inherit;

    :focus {
      outline: none;
    }

    ::placeholder {
      color: ${({ theme }) => theme.colors.text};
      font-weight: normal;
      letter-spacing: 0.8px;
      text-align: center;
    }
  }

  .search__close-btn {
    display: none;
  }
`;

export const SearchBarResults = styled.div`
  position: absolute;
  top: calc(100% + 2px);
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: calc(100vh - ${({ theme }) => theme.app.nav_h});
  background: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(5px);

  .search-bar__result-box__content {
    height: 100%;
    display: flex;
    flex-direction: column;
    background: ${({ theme }) => theme.colors.bg};
  }

  .search-bar__result-box__content-head {
    position: absolute;
    height: 4rem;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    box-shadow: 0 0.8rem 0.5rem rgba(0, 0, 0, 0.2);
  }

  .search-bar__result-box__content-list {
    width: 100%;
    margin-top: 5rem;
    max-height: 100%;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(35rem, max-content));
    grid-auto-rows: 45rem;
    gap: 4rem;
    padding: 2rem 1rem;
    overflow: auto;
    box-shadow: 0 1rem 0.5rem rgba(0, 0, 0, 0.5);
    transition: height 0.3s ease;

    ::-webkit-scrollbar {
      display: none;
    }

    @media (${({ theme }) => theme.media.tablet_sm}) {
      justify-content: center;
    }
  }
`;
