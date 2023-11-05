import styled from "styled-components";

export const MainNavListItem = styled.li`
  height: 100%;
  border-right: 2px solid ${({ theme }) => theme.colors.text};
  position: relative;

  .caption-box {
    width: 100%;
    height: 100%;
    padding: 0 2rem 0 2rem;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    transition: all 0.2s ease-in;

    &.active {
      color: ${({ theme }) => theme.colors.blue};
    }

    &__icon {
      display: none;
    }

    @media (hover: hover) {
      :hover {
        background: ${({ theme }) => theme.colors.text};
        color: ${({ theme }) => theme.colors.bg};
      }
    }
  }

  &.active-item .categories-nav__list-item--caption-box {
    background-color: ${({ theme }) => theme.colors.text};
    color: ${({ theme }) => theme.colors.bg};
  }

  :first-child {
    border-left: 2px solid ${({ theme }) => theme.colors.text};
  }

  :last-child {
    border: 2px solid ${({ theme }) => theme.colors.text};
    border-left: none;
  }

  @media (${({ theme }) => theme.media.desktop}) {
    height: auto;
    width: 100%;
    border: none;

    .caption-box {
      height: max-content;
      padding: 2rem;
      justify-content: flex-start;
      display: flex;
      align-items: center;
      justify-content: space-between;

      &__icon {
        display: block;
        line-height: 1;
      }

      &__icon svg {
        font-size: 2.5rem;
      }
    }

    :first-child,
    :last-child {
      border: none;
    }
  }
`;
