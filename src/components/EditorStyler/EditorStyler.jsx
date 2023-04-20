import {
  StyledEditorStyler,
  StyledEditorLeftPanel,
  StyledEditorColorsChanger,
  StyledEditorStyleChanger,
  StyledEditorSizeChanger,
  StyledEditorRightPanel,
  StyledEditorSuggestionBTN,
} from "./EditorStyler.Styled";

export default function EditorStyler(props) {
  return (
    <StyledEditorStyler>
      <StyledEditorLeftPanel>
        <div>
          <h2>ფერების არჩევანი</h2>
          <StyledEditorColorsChanger>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </StyledEditorColorsChanger>
        </div>
        <div>
          <h2>სტილის არჩევანი</h2>
          <StyledEditorStyleChanger>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </StyledEditorStyleChanger>
        </div>
        <div>
          <h2>ზომების არჩევანი</h2>
          <StyledEditorSizeChanger>
            <div>XXS</div>
            <div>XS</div>
            <div>S</div>
            <div>M</div>
            <div>L</div>
            <div>XL</div>
            <div>XXL</div>
          </StyledEditorSizeChanger>
        </div>
      </StyledEditorLeftPanel>
      <StyledEditorRightPanel>
        <StyledEditorSuggestionBTN>რას უხდება ?</StyledEditorSuggestionBTN>
        <div>
          <p>როგორ შევარჩიოთ ზომა ? </p>
          <p>მიუთითეთ თქვენი ზომები</p>
        </div>
      </StyledEditorRightPanel>
    </StyledEditorStyler>
  );
}
