import { ArrowLeftIcon, ArrowRightIcon } from "components/Layouts/Icons";
import styled, { css } from "styled-components";

const SliderButtonEl = styled.button<{ direction: "left" | "right" }>`
  position: absolute;
  z-index: 9;
  top: 50%;
  width: 5rem;
  height: 5rem;
  font-size: 4rem;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(0, 0, 0, 0.6);
  backdrop-filter: blur(4px);
  box-shadow: ${({ theme }) =>
    theme.mode === "light"
      ? theme.shadow.radial_sm_dark
      : theme.shadow.radial_sm_light};
  color: ${({ theme }) => theme.colors.white};
  border-radius: 100%;

  ${({ direction }) =>
    direction === "left"
      ? css`
          left: 0.5rem;
          transform: translate(0, -50%);

          svg {
            transform: translateX(-0.25rem);
          }
        `
      : direction === "right"
      ? css`
          right: 0.5rem;
          transform: translate(0, -50%);

          svg {
            transform: translateX(0.25rem);
          }
        `
      : ""}
`;

interface SliderButtonT {
  direction: "left" | "right";
  onClick?: (e: React.MouseEvent) => void;
}

const SliderButton: React.FC<SliderButtonT> = ({ onClick, direction }) => {
  return (
    <SliderButtonEl onClick={onClick} direction={direction}>
      {direction === "left" ? (
        <ArrowLeftIcon />
      ) : direction === "right" ? (
        <ArrowRightIcon />
      ) : (
        ""
      )}
    </SliderButtonEl>
  );
};

export default SliderButton;
