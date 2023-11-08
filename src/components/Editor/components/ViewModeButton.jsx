import { useEditorContext } from "providers/editor/EditorProvider";

import { VideoIcon } from "components/Layouts/Icons";
import * as Styled from "./styles/ViewModeButton.styled";

export default function ViewModeButton() {
  const { viewMode, onChangeViewMode } = useEditorContext();

  return (
    <Styled.ViewModeButton
      onClick={onChangeViewMode}
      className={viewMode === "VIDEO" ? "active" : ""}
    >
      <VideoIcon />
    </Styled.ViewModeButton>
  );
}
