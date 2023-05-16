import * as Styled from "./Editor.styled";
import { EditorView, EditorActions, EditorFitButtons } from "./components";

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
