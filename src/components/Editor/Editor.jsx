// import { useFitProduct } from "hooks/layoutBase";
import { useParams } from "react-router-dom";

import {
  //  EditorFitButtons,
  ContainerFull,
} from "components/Layouts";
import { EditorView, EditorActions } from "./components";
import * as Styled from "./Editor.styled";

export default function Editor() {
  // const { handleFitMannequin, handleFitModel, activeFit } = useFitProduct();

  const { productId } = useParams();

  return (
    <Styled.EditorContainer>
      <ContainerFull>
        {/* <EditorFitButtons
          activeFit={activeFit}
          onModel={handleFitModel}
          onMannequin={handleFitMannequin}
        /> */}

        <div className="editor-main">
          <EditorView />
          <EditorActions productId={productId} />
        </div>
      </ContainerFull>
    </Styled.EditorContainer>
  );
}
