import styled from "styled-components";
import { animateMoveTop } from "styles/helpers";

export const AddToListPopup = styled.div`
  position: fixed;
  z-index: 99;
  inset: 0;
  /* background: ${({ theme }) => theme.colors.black_tr_02}; */
  display: flex;
  justify-content: center;
  align-items: center;

  .user-lists__popup {
    background: ${({ theme }) => theme.colors.white};
    padding: 1rem;
    padding-bottom: 2.5rem;
    box-shadow: ${({ theme }) => theme.shadow.radial_lg_dark};
    width: 34rem;
    border-radius: 0.5rem;
    ${animateMoveTop};
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    gap: 0.5rem;
  }

  .close-btn {
    align-self: flex-end;
    font-size: 2rem;
  }

  .user-lists__popup .user-lists__list {
    display: flex;
    flex-direction: column;
    gap: 0.75rem;

    li {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      cursor: pointer;
      padding: 0.5rem;
      border-radius: 0.5rem;

      @media (hover: hover) {
        &:not(.active):hover {
          background: ${({ theme }) => theme.colors.blue};
          color: ${({ theme }) => theme.colors.white};
        }
      }

      &.active {
        color: ${({ theme }) => theme.colors.blue};
      }
    }

    li span {
      display: flex;
      align-items: center;
      justify-content: center;

      &:last-child {
        margin-left: auto;
      }
    }

    li span:last-child {
      visibility: hidden;
    }

    @media (hover: hover) {
      li:hover {
        span:last-child {
          visibility: visible;
        }
      }
    }

    @media (hover: none) {
      li {
        span:last-child {
          visibility: visible;
        }
      }
    }
  }

  .create-list__btn {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    gap: 0.75rem;
    color: ${({ theme }) => theme.colors.blue};
    margin-top: 2rem;

    span {
      display: flex;
      align-items: center;
    }

    span svg {
      font-size: 2rem;
    }
  }

  .create-list__field {
    &-box {
      display: flex;
      align-items: center;
      padding: 0.5rem;
      gap: 0.5rem;

      input {
        border-bottom: 1px solid ${({ theme }) => theme.colors.gray_shade};
        outline: none;
        width: 100%;
        font-size: ${({ theme }) => theme.fontSize.md};

        &::placeholder {
          opacity: 0.5;
          font-style: italic;
        }
      }
    }

    &-actions {
      display: flex;
      align-items: center;
      justify-content: flex-end;
      gap: 2rem;
      font-size: ${({ theme }) => theme.fontSize.md};

      .cancel {
        color: ${({ theme }) => theme.colors.red};
      }

      .create {
        color: ${({ theme }) => theme.colors.blue};
      }
    }
  }
`;
