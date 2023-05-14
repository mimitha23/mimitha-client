import {
  Navigation,
  EditorTitle,
  EditorDescription,
  EditorStyler,
  EditorShippingInfo,
} from "components";
import * as Styled from "./Editor.Styled";

export default function Editor() {
  return (
    <>
      <Navigation />
      <Styled.Editor>
        <img
          className="editorImg"
          src="./images/image-not-uploaded.png"
          alt=""
        />
        <img
          className="editorImg"
          src="./images/image-not-uploaded.png"
          alt=""
        />
        <div className="editorPanel">
          <EditorTitle />
          <EditorDescription />
          <EditorStyler />
          <EditorShippingInfo />
        </div>
      </Styled.Editor>
    </>
  );
}
