import { useEffect, useState } from "react";
import styled, { css } from "styled-components";

import { useGoesOnTutorialContext } from "providers/GoesOnTutorialContext";
import { MuteIcon, UnmuteIcon } from "components/Layouts/Icons";

const ExplainContainer = styled.div`
  position: absolute;
  background: royalblue;
  color: #fff;
  padding: 1rem;
  border-radius: 0.5rem;
  font-size: ${({ theme }) => theme.fontSize.base};
  display: flex;
  flex-direction: column;
  min-width: 28rem;
  text-align: start;

  ${({ position, theme }) =>
    position === "bottom"
      ? css`
          top: calc(100% + 0.5rem);
          left: calc(50% - 1rem);
          box-shadow: ${theme.shadow.bottom_right_md_dark};
        `
      : position === "top"
      ? css`
          top: calc(-100% - 5rem);
          left: calc(50% - 1rem);
          box-shadow: ${theme.shadow.top_left_md_dark};
        `
      : position === "top-left"
      ? css`
          top: calc(-100% - 5rem);
          right: 25%;
          box-shadow: ${theme.shadow.top_left_md_dark};
        `
      : ""}

  &:after {
    content: "";
    position: absolute;
    width: 1.5rem;
    height: 1.5rem;
    background: royalblue;
    transform: rotate(45deg);

    ${({ position }) =>
      position === "bottom"
        ? css`
            top: -0.7rem;
            left: 0.5rem;
          `
        : position === "top"
        ? css`
            bottom: -0.7rem;
            left: 0.5rem;
          `
        : position === "top-left"
        ? css`
            bottom: -0.7rem;
            right: 0.5rem;
          `
        : ""}
  }

  .btn-box {
    align-self: flex-end;
    display: flex;
    gap: 2rem;
    margin-top: 2rem;

    button {
      text-transform: capitalize;
    }
  }

  .mute-btn {
    position: absolute;
    top: 0.5rem;
    right: 0.5rem;
  }
`;

export default function Explain({
  description,
  position,
  step,
  showPrev = true,
}) {
  const { nextStep, previousStep } = useGoesOnTutorialContext();
  const [mute, setMute] = useState(false);
  const [audio, setAudio] = useState(
    new Audio("/assets/audio/shinamanakena.mp3")
  );

  useEffect(() => {
    audio.type = "audio/mp3";
    audio.play();

    return () => {
      audio.pause();
      audio.currentTime = 0;
    };
  }, [audio]);

  useEffect(() => {
    audio.muted = mute ? true : false;
  }, [mute, audio]);

  return (
    <ExplainContainer position={position}>
      <button className="mute-btn" onClick={() => setMute((prev) => !prev)}>
        {mute ? <MuteIcon /> : <UnmuteIcon />}
      </button>

      <p>{description}</p>

      <div className="btn-box">
        {showPrev && (
          <button onClick={() => previousStep(step)}>go back</button>
        )}

        <button onClick={() => nextStep(step)}>okey</button>
      </div>
    </ExplainContainer>
  );
}
