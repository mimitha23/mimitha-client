import { useFitProduct } from "hooks/layoutBase";

import { EditorView, EditorActions } from "./components";
import { EditorFitButtons } from "components/Layouts";
import * as Styled from "./Editor.styled";

function Editor() {
  const { handleFitMannequin, handleFitModel, activeFit } = useFitProduct();

  return (
    <Styled.EditorContainer>
      <EditorFitButtons
        activeFit={activeFit}
        onModel={handleFitModel}
        onMannequin={handleFitMannequin}
      />

      <div className="editor-main">
        <EditorView />
        <EditorActions />
      </div>
    </Styled.EditorContainer>
  );
}

export default Editor;
