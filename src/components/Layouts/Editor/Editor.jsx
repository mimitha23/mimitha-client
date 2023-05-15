import {
  EditorTitle,
  EditorDescription,
  EditorStyler,
  EditorShippingInfo,
} from "./components";
import * as Styled from "./EditorContainer.styled";

export default function Editor() {
  return (
    <Styled.EditorContainer>
      <div className="editor-view">
        <figure className="editor-fig">
          <img src="/assets/images/hoodie_front.jpg" alt="hoodie" />
        </figure>
        <figure className="editor-fig">
          <img src="/assets/images/hoodie_back.jpg" alt="hoodie" />
        </figure>
      </div>
      <div className="editor-actions">
        <EditorTitle />
        <EditorDescription />
        <EditorStyler />
        <EditorShippingInfo />
      </div>
    </Styled.EditorContainer>
  );
}
