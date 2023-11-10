import { useAppSelector } from "store/hooks";

import { useFitProduct } from "hooks/layoutBase";
import * as editorSelectors from "store/selectors/editor.selectors";

import * as UI from "./components";
import { FitButtons, Spinner, ContainerFull } from "components/Layouts";
import * as Styled from "./Editor.styled";

const Editor: React.FC = () => {
  const { handleFitMannequin, handleFitModel, activeFit } = useFitProduct();

  const status = useAppSelector(editorSelectors.selectEditorStatus);
  const activeConfig = useAppSelector(editorSelectors.selectActiveConfig);

  const onModel = () => handleFitModel({ src: activeConfig.modelVideo });
  const onMannequin = () => handleFitMannequin({ src: activeConfig.mannequin });

  return (
    <Styled.EditorContainer>
      <ContainerFull>
        <FitButtons
          onModel={onModel}
          activeFit={activeFit}
          onMannequin={onMannequin}
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
};

export default Editor;
