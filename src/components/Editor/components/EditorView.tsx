import * as UI from ".";
import * as Styled from "./styles/EditorView.styled";

const EditorView: React.FC = () => {
  return (
    <Styled.EditorViewContainer>
      <UI.EditorViewFigure />

      <UI.ViewModeButton />
    </Styled.EditorViewContainer>
  );
};

export default EditorView;
