import { useEditorContext } from "providers/editor/EditorProvider";

import { VideoIcon } from "components/Layouts/Icons";
import * as Styled from "./styles/ViewModeButton.styled";

const ViewModeButton: React.FC = () => {
  const { viewMode, onChangeViewMode } = useEditorContext();

  return (
    <Styled.ViewModeButton
      onClick={onChangeViewMode}
      className={viewMode === "VIDEO" ? "active" : ""}
    >
      <VideoIcon />
    </Styled.ViewModeButton>
  );
};

export default ViewModeButton;
