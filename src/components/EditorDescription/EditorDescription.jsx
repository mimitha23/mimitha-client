import {
  StyledEditorDescription,
  StyledEditorDescriptionStyles,
  StyledEditorPlaceHolder,
  StyledEditorSoldCounter,
} from "./EditorDescription.Styled";

export default function EditorDescription(props) {
  return (
    <StyledEditorDescription>
      <h2>პროდუქტის აღწერა</h2>
      <StyledEditorDescriptionStyles>
        <span>სტილი</span>
        <StyledEditorPlaceHolder></StyledEditorPlaceHolder>
        <div>
          <span>ყოველდღიური / </span>
          <span>სპორტული / </span>
          <span>მსუბუქი</span>
        </div>
      </StyledEditorDescriptionStyles>
      <StyledEditorDescriptionStyles>
        <span>სეზონი</span>
        <StyledEditorPlaceHolder></StyledEditorPlaceHolder>
        <div>
          <span>შემოდგომა / </span>
          <span>საზაფხულო</span>
        </div>
      </StyledEditorDescriptionStyles>
      <StyledEditorDescriptionStyles>
        <span>მასალა</span>
        <StyledEditorPlaceHolder></StyledEditorPlaceHolder>
        <div>
          <span>100% ბამბა</span>
        </div>
      </StyledEditorDescriptionStyles>
      <StyledEditorSoldCounter>
        გაყიდულია ჯამში <div>167</div> ერთეული
      </StyledEditorSoldCounter>
    </StyledEditorDescription>
  );
}
