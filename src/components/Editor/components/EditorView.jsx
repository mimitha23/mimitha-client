import * as UI from "./";
import * as Styled from "./styles/EditorView.styled";

export default function EditorView() {
  return (
    <Styled.EditorViewContainer>
      <UI.EditorViewFigure />

      <UI.ViewModeButton />
    </Styled.EditorViewContainer>
  );
}
