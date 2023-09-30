import styled from "styled-components";
import { animateMoveTop } from "styles/helpers";

export const UserAvatar = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;

  .nav__login-btn {
    font-size: 2.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .user__profile-pic {
    width: 4rem;
    height: 4rem;
    overflow: hidden;
    border-radius: 100%;
    border: 1px solid ${({ theme }) => theme.colors.gray_shade};
    cursor: pointer;

    img {
      width: 100%;
      height: 100%;
      object-fit: contain;
    }
  }

  .user__dropdown {
    position: absolute;
    z-index: 99;
    top: calc(100% + 1rem);
    right: 0;
    width: 30rem;
    background: ${({ theme }) => theme.colors.bg};
    box-shadow: ${({ theme }) => theme.shadow.bottom_right_md_dark};
    padding: 1rem;
    border-radius: 0.5rem;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    ${animateMoveTop};

    @media (${({ theme }) => theme.media.mobile}) {
      width: 35rem;
    }

    .user__dropdown-item {
      display: flex;
      align-items: center;
      border-radius: 0.5rem;
      transition: all 0.2s ease;

      &--btn {
        border-radius: 0.5rem;
        transition: all 0.2s ease;
      }

      &--btn,
      a {
        display: flex;
        align-items: center;
        gap: 0.75rem;
        width: 100%;
        padding: 0.5rem;
      }

      &--btn .user__dropdown-item--icon,
      .user__dropdown-item--icon {
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: ${({ theme }) => theme.fontSize.xl};

        &.heart {
          color: ${({ theme }) => theme.colors.red};
        }

        &.history {
          font-size: 2.2rem;
        }

        &.logout {
          padding-left: 0.35rem;
        }
      }

      @media (hover: hover) {
        &--btn:hover,
        &:hover {
          background: ${({ theme }) => theme.colors.blue};
          color: ${({ theme }) => theme.colors.white};
        }
      }
    }
  }
`;
