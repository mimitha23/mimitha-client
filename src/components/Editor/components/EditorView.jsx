import * as Styled from "./styles/EditorView.styled";

export default function EditorView({ media }) {
  return (
    <Styled.EditorViewContainer>
      <figure className="editor-fig">
        <img src={media[0]} alt="" />
      </figure>
    </Styled.EditorViewContainer>
  );
}
