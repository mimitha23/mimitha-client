import {
  FullNavbar,
  EditorTitle,
  EditorDescription,
  EditorStyler,
  EditorShippingInfo,
} from "../../components";
import {
  StyledEditor,
  StyledEditorImg,
  StyledEditorPanel,
} from "./Editor.Styled";

export default function Editor(props) {
  return (
    <>
      <FullNavbar themeChanger={props.themeChanger} />
      <StyledEditor>
        <StyledEditorImg src="./images/image-not-uploaded.png" alt="" />
        <StyledEditorImg src="./images/image-not-uploaded.png" alt="" />
        <StyledEditorPanel>
          <EditorTitle />
          <EditorDescription />
          <EditorStyler />
          <EditorShippingInfo />
        </StyledEditorPanel>
      </StyledEditor>
    </>
  );
}
