import {
  FullNavbar,
  EditorTitle,
  EditorDescription,
  EditorStyler,
} from "../../components";

export default function Editor(props) {
  return (
    <>
      <FullNavbar themeChanger={props.themeChanger} />
      <EditorTitle />
      <EditorDescription />
      <EditorStyler />
    </>
  );
}
