import { useEditorContext } from "providers/editor/EditorProvider";
import * as UI from "./";

export default function EditorDropdown({ variant }) {
  const editor = useEditorContext();

  return (
    <div style={{ width: "100%" }}>
      <UI.EditorDropdownTriggerButton
        variantType={variant.type}
        caption={variant[[`label_${editor.currentLocale}`]]}
      />

      {variant.type === editor.activeDropdown && (
        <UI.EditorDropdownOptionsList editor={editor} variant={variant} />
      )}
    </div>
  );
}
