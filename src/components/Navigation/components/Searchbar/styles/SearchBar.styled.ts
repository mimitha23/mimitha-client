import styled from "styled-components";

export const SearchBar = styled.div`
  width: 25rem;
  border-bottom: 2px solid ${({ theme }) => theme.colors.text};
  color: ${({ theme }) => theme.colors.text};
  margin-left: auto;
  background: ${({ theme }) => theme.colors.bg};

  &.active_bar {
    height: 5rem;

    .search-bar__wrapper {
      height: 5rem;
    }
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

    &.active_bar {
      position: fixed;
      z-index: 99;
      top: 0;
      left: 0;
      right: 0;
      width: 100%;
    }
  }
`;

export const SearchWarning = styled.div`
  position: absolute;
  z-index: 1;
  top: calc(100% + 1rem);
  border-radius: 0.5rem;
  padding: 1rem;
  text-align: center;
  text-wrap: balance;
  font-size: ${({ theme }) => theme.fontSize.md};
  background: ${({ theme }) => theme.colors.bg};
  box-shadow: ${({ theme }) => theme.shadow.bottom_right_md_dark};

  &:after {
    content: "";
    box-shadow: -6px -6px 9px -2px rgba(0, 0, 0, 0.2);
    position: absolute;
    width: 3rem;
    height: 3rem;
    background: inherit;
    transform: rotate(45deg) translateX(-50%);
    z-index: -9;
    top: 0;
    left: 50%;
  }
`;
