import * as Styled from "./styles/EditorFitButtons";

function EditorFitButtons(props) {
  return (
    <Styled.EditorFitButtonsContainer>
      <button className="fit-btn">fit mannequin</button>
      <button className="fit-btn">fit model</button>
    </Styled.EditorFitButtonsContainer>
  );
}

export default EditorFitButtons;
