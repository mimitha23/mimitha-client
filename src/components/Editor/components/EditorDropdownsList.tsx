import { useEditorContext } from "providers/editor/EditorProvider";

import * as UI from ".";
import * as Styled from "./styles/EditorDropdownsList.styled";

const EditorDropdownsList: React.FC = () => {
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
};

export default EditorDropdownsList;
