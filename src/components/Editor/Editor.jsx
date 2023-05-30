import { useFitProduct } from "hooks/layoutBase";

import { EditorFitButtons, ContainerFull } from "components/Layouts";
import { EditorView, EditorActions } from "./components";
import * as Styled from "./Editor.styled";

export default function Editor() {
  const { handleFitMannequin, handleFitModel, activeFit } = useFitProduct();

  return (
    <ContainerFull>
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
    </ContainerFull>
  );
}
