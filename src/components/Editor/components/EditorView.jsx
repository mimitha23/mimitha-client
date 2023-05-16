import * as Styled from "./styles/EditorView.styled";

function EditorView(props) {
  return (
    <Styled.EditorViewContainer>
      <figure className="editor-fig">
        <img src="/assets/products/hood-belly-pocket-black.webp" alt="" />
      </figure>
    </Styled.EditorViewContainer>
  );
}

export default EditorView;
