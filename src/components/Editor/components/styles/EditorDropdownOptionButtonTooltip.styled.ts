import styled from "styled-components";

export const EditorDropdownOptionButtonTooltip = styled.p`
  position: absolute;
  z-index: 99;
  bottom: calc(100% + 1.3rem);
  background: ${({ theme }) => theme.colors.bg};
  padding: 1rem 1rem 1.2rem 1rem;
  width: 20rem;
  border-radius: 0.5rem;
  text-align: start;
  font-size: ${({ theme }) => theme.fontSize.md};
  box-shadow: ${({ theme }) => theme.shadow.radial_sm_dark};

  &::after {
    content: "";
    position: absolute;
    bottom: 0;
    width: 1.25rem;
    height: 1.25rem;
    transform: translateY(calc(50% - 1px)) rotate(45deg);
    background: ${({ theme }) => theme.colors.bg};
    box-shadow: ${({ theme }) => theme.shadow.radial_sm_dark};
  }

  &::before {
    content: "";
    position: absolute;
    z-index: 1;
    bottom: 0;
    width: 3rem;
    height: 1.2rem;
    background: ${({ theme }) => theme.colors.bg};
  }

  &.left {
    left: 0;

    &::after {
      left: 1rem;
    }

    &::before {
      left: 0rem;
      border-bottom-left-radius: 0.5rem;
    }
  }

  &.right {
    right: 0;

    &::after {
      right: 1rem;
    }

    &::before {
      border-bottom-right-radius: 0.5rem;
      right: 0.3rem;
    }
  }
`;
