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
