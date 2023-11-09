import styled from "styled-components";

export const ProductViewFigure = styled.figure`
  flex: 1;
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  background: ${({ theme }) => theme.colors.white};
  border: 1px solid ${({ theme }) => theme.colors.gray_shade};
  border-radius: 1rem;
  box-shadow: ${({ theme }) => theme.shadow.bottom_right_md_dark};

  @media (${({ theme }) => theme.media.desktop}) {
    order: 1;
    height: calc(100% - 16rem);
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
    object-position: center;
  }

  button {
    position: absolute;
    bottom: 1rem;
    right: 1rem;

    &.is-saved-to-favorites {
      color: ${({ theme }) => theme.colors.red};
      background: ${({ theme }) => theme.colors.black_tr_02};
    }
  }

  .slider_btn {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    font-size: 3rem;
    background: ${({ theme }) => theme.colors.black_tr_05};
    color: ${({ theme }) => theme.colors.white};
    width: 6rem;
    height: 6rem;
    border-radius: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

    &.left {
      left: 1.5rem;

      svg {
        transform: translateX(-0.25rem);
      }
    }

    &.right {
      right: 1.5rem;

      svg {
        transform: translateX(0.25rem);
      }
    }
  }
`;
