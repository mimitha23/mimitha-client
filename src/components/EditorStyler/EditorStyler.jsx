import * as Styled from "./EditorStyler.Styled";

export default function EditorStyler(props) {
  return (
    <Styled.EditorStyler>
      <div className="editorLeftPanel">
        <div>
          <h2>ფერების არჩევანი</h2>
          <div className="editorColorsChanger">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
        <div>
          <h2>სტილის არჩევანი</h2>
          <div className="editorStyleChanger">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
        <div>
          <h2>ზომების არჩევანი</h2>
          <div className="editorSizeChanger">
            <div>XXS</div>
            <div>XS</div>
            <div>S</div>
            <div>M</div>
            <div>L</div>
            <div>XL</div>
            <div>XXL</div>
          </div>
        </div>
      </div>
      <div className="editorRightPanel">
        <div className="editorSuggestionBTN">რას უხდება ?</div>
        <div>
          <p>როგორ შევარჩიოთ ზომა ? </p>
          <p>მიუთითეთ თქვენი ზომები</p>
        </div>
      </div>
    </Styled.EditorStyler>
  );
}
