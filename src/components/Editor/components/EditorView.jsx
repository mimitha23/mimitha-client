import { useEditorContext } from "providers/EditorProvider";

import * as Styled from "./styles/EditorView.styled";
import { VideoIcon } from "components/Layouts/Icons";

export default function EditorView() {
  const {
    viewMode,
    onChangeViewMode,
    viewMedia,
    onVideoEnd,
    isCleanUpProcess,
  } = useEditorContext();

  return (
    <Styled.EditorViewContainer>
      <figure className="editor-fig">
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
      </figure>

      <button
        onClick={onChangeViewMode}
        className={`editor__view-mode--btn ${
          viewMode === "VIDEO" ? "active" : ""
        }`}
      >
        <VideoIcon />
      </button>
    </Styled.EditorViewContainer>
  );
}
