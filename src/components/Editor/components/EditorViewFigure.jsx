import { useEditorContext } from "providers/editor/EditorProvider";
import * as Styled from "./styles/EditorViewFigure.styled";

export default function EditorViewFigure() {
  const {
    viewMedia,
    onVideoEnd,
    isCleanUpProcess,
    pickUpVideoRef,
    placingVideoRef,
  } = useEditorContext();

  return (
    <Styled.EditorViewFigure>
      {viewMedia.type === "IMAGE" ? (
        <img src={viewMedia.src} alt="" />
      ) : (
        <>
          <video
            ref={placingVideoRef}
            src={viewMedia.src}
            autoPlay={true}
            muted={true}
            controls={false}
            playsInline={true}
            className={`placing ${isCleanUpProcess ? "hidden" : ""}`}
            // {...(isCleanUpProcess ? { onEnded: onVideoEnd } : "")}
          />
          <video
            ref={pickUpVideoRef}
            src={viewMedia.secondarySrc}
            autoPlay={false}
            muted={true}
            controls={false}
            playsInline={true}
            className={`pickUp ${isCleanUpProcess ? "" : "hidden"}`}
            {...(isCleanUpProcess ? { onEnded: onVideoEnd } : "")}
          />
        </>
      )}
    </Styled.EditorViewFigure>
  );
}
