import { useEditorContext } from "providers/EditorProvider";
import * as Styled from "./styles/EditorViewFigure.styled";

export default function EditorViewFigure() {
  const { viewMedia, onVideoEnd, isCleanUpProcess } = useEditorContext();

  return (
    <Styled.EditorViewFigure>
      {viewMedia.type === "IMAGE" ? (
        <img src={viewMedia.src} alt="" />
      ) : (
        <video
          src={viewMedia.src}
          autoPlay={true}
          muted={true}
          controls={false}
          playsInline={true}
          {...(isCleanUpProcess ? { onEnded: onVideoEnd } : "")}
        />
      )}
    </Styled.EditorViewFigure>
  );
}
