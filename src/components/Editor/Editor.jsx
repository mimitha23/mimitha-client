/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import { selectEditorStatus } from "store/selectors/editorSelectors";
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

  const { productId } = useParams();

  useEffect(() => {
    dispatch(
      editorActions.getProductToEdit({ registeredProductId: productId })
    );
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
            <EditorView />
            <EditorActions productId={productId} />
          </div>
        )}

        {status.loading && <Spinner />}
      </ContainerFull>
    </Styled.EditorContainer>
  );
}
