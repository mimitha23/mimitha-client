import * as Styled from "./EditorFitButtons.styled";

function EditorFitButtons() {
  return (
    <Styled.EditorFitButtonsContainer>
      <button className="fit-btn">მოარგეთ მანეკენს</button>
      <button className="fit-btn">მოარგეთ მოდელს</button>
    </Styled.EditorFitButtonsContainer>
  );
}

export default EditorFitButtons;
