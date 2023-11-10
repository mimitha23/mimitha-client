import { useEditorContext } from "providers/editor/EditorProvider";

import * as UI from ".";

import { StateVariantsT } from "interface/store/editor.reducer.types";

interface EditorDropdownT {
  variant: StateVariantsT;
}

const EditorDropdown: React.FC<EditorDropdownT> = ({ variant }) => {
  const editor = useEditorContext();

  return (
    <div style={{ width: "100%" }}>
      <UI.EditorDropdownTriggerButton
        variantType={variant.type}
        caption={
          editor.currentLocale === "ka" ? variant.label_ka : variant.label_en
        }
      />

      {variant.type === editor.activeDropdown && (
        <UI.EditorDropdownOptionsList variant={variant} />
      )}
    </div>
  );
};

export default EditorDropdown;
