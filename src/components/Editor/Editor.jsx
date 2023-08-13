import { useSelector } from "react-redux";

import {
  selectEditorStatus,
  selectActiveConfig,
} from "store/selectors/editorSelectors";

// import { useFitProduct } from "hooks/layoutBase";

import {
  //  EditorFitButtons,
  Spinner,
  ContainerFull,
} from "components/Layouts";
import { EditorView, EditorActions } from "./components";
import * as Styled from "./Editor.styled";

export default function Editor() {
  // const { handleFitMannequin, handleFitModel, activeFit } = useFitProduct();

  const status = useSelector(selectEditorStatus);
  const activeConfig = useSelector(selectActiveConfig);

  return (
    <Styled.EditorContainer>
      <ContainerFull>
        {/* <EditorFitButtons
          activeFit={activeFit}
          onModel={handleFitModel}
          onMannequin={handleFitMannequin}
        /> */}

        {!status.loading && activeConfig && (
          <div className="editor-main">
            <EditorView media={activeConfig.assets} />
            <EditorActions productId={activeConfig._id} />
          </div>
        )}

        {status.loading && <Spinner />}
      </ContainerFull>
    </Styled.EditorContainer>
  );
}
