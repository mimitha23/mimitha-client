import styled from "styled-components";

export const EditorDropdownOptionButton = styled.button`
  position: relative;
  transition: all 0.2s ease-out;

  &.available:not(.active) {
    border-bottom: 2px solid ${({ theme }) => theme.colors.green};
  }

  &.unrecognized {
    border-bottom: 2px solid ${({ theme }) => theme.colors.red};

    svg {
      opacity: 0.4;
    }
  }

  &.active {
    border-bottom: 2px solid ${({ theme }) => theme.colors.blue};
  }

  svg {
    height: 3.5rem;
    width: 4rem;

    image {
      width: 100%;
      height: 100%;
      object-fit: contain;
    }
  }
`;
