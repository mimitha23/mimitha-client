import styled, { css } from "styled-components";
import { animateMoveTop } from "styles/helpers";

export const AvatarDropdown = styled.ul`
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
`;

const dropdownItemHover = css`
  @media (hover: hover) {
    &:hover {
      background: ${({ theme }) => theme.colors.blue};
      color: ${({ theme }) => theme.colors.white};
    }
  }
`;

export const AvatarDropdownItem = styled.li`
  display: flex;
  align-items: center;
  border-radius: 0.5rem;
  transition: all 0.2s ease;

  a {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    width: 100%;
    padding: 0.5rem;
  }

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
  }

  ${dropdownItemHover}
`;

export const LogoutButton = styled.button`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  width: 100%;
  padding: 0.5rem;
  border-radius: 0.5rem;
  transition: all 0.2s ease;

  span {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: ${({ theme }) => theme.fontSize.xl};
    padding-left: 0.35rem;
  }

  ${dropdownItemHover}
`;
