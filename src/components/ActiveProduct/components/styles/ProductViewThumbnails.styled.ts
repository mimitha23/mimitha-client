import styled from "styled-components";

export const ProductViewThumbnails = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 1.75rem;
  align-self: center;
  max-height: 30vw;
  padding: 2rem;
  overflow: auto;

  &::-webkit-scrollbar {
    display: none;
  }

  @media (${({ theme }) => theme.media.desktop}) {
    order: 2;
    max-height: auto;
    height: 16rem;
    max-width: 100%;
    flex-direction: row;
  }

  .thumbnail-fig {
    max-height: 10rem;
    max-width: 10rem;
    aspect-ratio: 1/1;
    background: ${({ theme }) => theme.colors.white};
    border: 1px solid ${({ theme }) => theme.colors.gray_shade};
    border-radius: 1rem;
    cursor: pointer;
    transition: all 0.2s ease-out;
    padding: 0.5rem;

    img {
      width: 100%;
      height: 100%;
      object-fit: contain;
      object-position: center;
    }

    &.active {
      transform: scale(1.1);
      border: 1px solid ${({ theme }) => theme.colors.blue};
      box-shadow: ${({ theme }) => theme.shadow.bottom_right_md_dark};
    }

    @media (hover: hover) {
      &:hover {
        transform: scale(1.1);
        box-shadow: ${({ theme }) => theme.shadow.bottom_right_md_dark};
      }
    }
  }
`;
