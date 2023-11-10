import { useEditorContext } from "providers/editor/EditorProvider";

import * as UI from ".";
import * as Styled from "./styles/EditorDropdownOptionsList.styled";

import { StateVariantsT } from "interface/store/editor.reducer.types";

interface EditorDropdownOptionsListT {
  variant: StateVariantsT;
}

const EditorDropdownOptionsList: React.FC<EditorDropdownOptionsListT> = ({
  variant,
}) => {
  const editor = useEditorContext();

  const activeVariant = variant.variants.find((variant) =>
    editor.activeVariants.includes(variant._id)
  );

  const unrecognizedIds = editor.detectUnrecognizedVariants({
    activeVariantId: activeVariant?._id || "",
    dropdownVariants: variant.variants,
  });

  return (
    <Styled.EditorDropdownOptionsList>
      {variant.variants.map((variant) => (
        <UI.EditorDropdownOptionButton
          key={variant._id}
          variant={variant}
          activeVariant={activeVariant}
          unrecognizedIds={unrecognizedIds}
        />
      ))}
    </Styled.EditorDropdownOptionsList>
  );
};

export default EditorDropdownOptionsList;
