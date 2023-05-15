import {
  EditorHeading,
  EditorDescription,
  EditorStyler,
  EditorShippingInfo,
  EditorView,
} from "./components";
import * as Styled from "./EditorContainer.styled";

export default function Editor() {
  return (
    <Styled.EditorContainer>
      <EditorView />
      <div className="editor-actions">
        <EditorHeading />
        <EditorDescription />
        <EditorStyler />
        <EditorShippingInfo />
      </div>
    </Styled.EditorContainer>
  );
}
