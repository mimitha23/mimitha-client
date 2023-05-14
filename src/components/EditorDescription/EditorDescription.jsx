import * as Styled from "./EditorDescription.Styled";

export default function EditorDescription(props) {
  return (
    <Styled.EditorDescription>
      <h2>პროდუქტის აღწერა</h2>
      <div className="editorDescriptionStyles">
        <span>სტილი</span>
        <div className="editorPlaceholder"></div>
        <div>
          <span>ყოველდღიური / </span>
          <span>სპორტული / </span>
          <span>მსუბუქი</span>
        </div>
      </div>
      <div className="editorDescriptionStyles">
        <span>სეზონი</span>
        <div className="editorPlaceholder"></div>
        <div>
          <span>შემოდგომა / </span>
          <span>საზაფხულო</span>
        </div>
      </div>
      <div className="editorDescriptionStyles">
        <span>მასალა</span>
        <div className="editorPlaceholder"></div>
        <div>
          <span>100% ბამბა</span>
        </div>
      </div>
      <span className="editorSoldCounter">
        გაყიდულია ჯამში <div>167</div> ერთეული
      </span>
    </Styled.EditorDescription>
  );
}
