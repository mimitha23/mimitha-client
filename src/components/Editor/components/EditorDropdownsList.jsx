import { useEditorContext } from "providers/EditorProvider";
import * as UI from ".";
import * as Styled from "./styles/EditorDropdownsList.styled";

export default function EditorDropdownsList() {
  const { editorVariants } = useEditorContext();

  return (
    <Styled.EditorDropdownsList>
      {editorVariants &&
        Object.keys(editorVariants)
          .sort()
          .map((key) => (
            <UI.EditorDropdown
              key={editorVariants[key]._id}
              variant={editorVariants[key]}
            />
          ))}
    </Styled.EditorDropdownsList>
  );
}
