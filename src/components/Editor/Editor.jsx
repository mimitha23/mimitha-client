import { useSelector } from "react-redux";

import {
  selectEditorStatus,
  selectActiveConfig,
} from "store/selectors/editor.selectors";
import { useFitProduct } from "hooks/layoutBase";

import * as UI from "./components";
import { FitButtons, Spinner, ContainerFull } from "components/Layouts";
import * as Styled from "./Editor.styled";

export default function Editor() {
  const { handleFitMannequin, handleFitModel, activeFit } = useFitProduct();

  const status = useSelector(selectEditorStatus);
  const activeConfig = useSelector(selectActiveConfig);

  return (
    <Styled.EditorContainer>
      <ContainerFull>
        <FitButtons
          activeFit={activeFit}
          onModel={() => handleFitModel({ src: activeConfig.modelVideo })}
          onMannequin={() =>
            handleFitMannequin({ src: activeConfig.mannequin })
          }
        />

        {!status.loading && activeConfig && (
          <div className="editor-main">
            <UI.EditorView />

            <UI.EditorActions productId={activeConfig._id} />
          </div>
        )}

        {status.loading && <Spinner />}
      </ContainerFull>
    </Styled.EditorContainer>
  );
}
