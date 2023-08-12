/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import {
  selectEditorStatus,
  selectActiveConfig,
} from "store/selectors/editorSelectors";
import { editorActions } from "store/reducers/editorReducer";

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
  const dispatch = useDispatch();

  const status = useSelector(selectEditorStatus);
  const activeConfig = useSelector(selectActiveConfig);

  const { productId: registeredProductId } = useParams();

  useEffect(() => {
    dispatch(editorActions.getProductToEdit({ registeredProductId }));
  }, []);

  return (
    <Styled.EditorContainer>
      <ContainerFull>
        {/* <EditorFitButtons
          activeFit={activeFit}
          onModel={handleFitModel}
          onMannequin={handleFitMannequin}
        /> */}

        {!status.loading && (
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
