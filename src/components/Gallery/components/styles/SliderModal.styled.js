import styled from "styled-components";

export const SliderModal = styled.div`
  width: 50vw;
  height: 40vw;
  margin-top: 1rem;
  padding: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  position: relative;
  border-radius: 0.5rem;
  background: ${({ theme }) => theme.gradients.backdrop_gradient};

  .gallery-modal__fig {
    width: 100%;
    height: 100%;
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
  }

  .gallery-modal__img {
    border-radius: 0.5rem;
    max-height: 100%;
    max-width: 100%;
    object-fit: contain;
    position: absolute;
    pointer-events: none;

    &-inactive {
      opacity: 0;
      /* transform: scale(0.85); */
      /* transition: all 0.4s ease; */
    }

    &-active {
      opacity: 1;
      /* transform: scale(1); */
      transition: opacity 0.6s ease;
      /*
      transition-delay: 0.2s; */
    }
  }

  .gallery-modal__slider-btn--box {
    position: absolute;
    left: 0;
    right: 0;
    top: 50%;
    transform: translateY(-50%);
    padding: 0 1rem;
    display: flex;
    justify-content: space-between;

    &__btn {
      font-size: 3rem;
      background: rgba(215, 215, 215, 0.5);
      display: flex;
      justify-content: center;
      align-items: center;
      width: 5rem;
      height: 5rem;
      border-radius: 50%;
    }
  }
`;
