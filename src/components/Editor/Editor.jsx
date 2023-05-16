import * as Styled from "./Editor.styled";
import { EditorView, EditorActions } from "./components";
import { EditorFitButtons } from "components/Layouts";

function Editor() {
  return (
    <Styled.EditorContainer>
      <EditorFitButtons />

      <div className="editor-main">
        <EditorView />
        <EditorActions />
      </div>
    </Styled.EditorContainer>
  );
}

export default Editor;
