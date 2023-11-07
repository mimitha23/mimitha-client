import { useEffect, useState } from "react";

import { useGoesOnTutorialContext } from "providers/GoesOnTutorialContext";
import { MuteIcon, UnmuteIcon } from "components/Layouts/Icons";
import * as Styled from "./styles/Explain.styled";

import { GoesOnTutorialStepT } from "providers/GoesOnTutorialContext";

interface ExplainT {
  description: string;
  position: string;
  step: GoesOnTutorialStepT;
  showPrev?: boolean;
}

const Explain: React.FC<ExplainT> = ({
  step,
  position,
  description,
  showPrev = true,
}) => {
  const { nextStep, previousStep } = useGoesOnTutorialContext();

  const [mute, setMute] = useState(false);
  const [audio, setAudio] = useState<HTMLAudioElement | null>(
    new Audio("/assets/audio/shinamanakena.mp3")
  );

  useEffect(() => {
    if (!audio) return;

    audio.setAttribute("type", "audio/mp3");
    audio.play();

    return () => {
      audio.pause();
      audio.currentTime = 0;
    };
  }, [audio]);

  useEffect(() => {
    if (!audio) return;

    audio.muted = mute ? true : false;
  }, [mute, audio]);

  return (
    <Styled.Explain position={position}>
      <button className="mute-btn" onClick={() => setMute((prev) => !prev)}>
        {mute ? <MuteIcon /> : <UnmuteIcon />}
      </button>

      <p>{description}</p>

      <div className="btn-box">
        {showPrev && (
          <button onClick={() => previousStep(step)}>go back</button>
        )}

        <button onClick={() => nextStep(step)}>okay</button>
      </div>
    </Styled.Explain>
  );
};

export default Explain;
