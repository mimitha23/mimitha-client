import { useEditorContext } from "providers/EditorProvider";

import EditorOptionButton from "./EditorOptionButton";
import EditorDropdownTriggerButton from "./EditorDropdownTriggerButton";
import * as Styled from "./styles/EditorActionDropdown.styled";

export default function EditorActionDropdown({ variant }) {
  const editor = useEditorContext();

  const activeVariant = variant.variants.find((variant) =>
    editor.activeVariants.includes(variant._id)
  );

  const unrecognizedIds = editor.detectUnrecognizedVariants({
    activeVariantId: activeVariant?._id,
    dropdownVariants: variant.variants,
  });

  return (
    <Styled.EditorActionDropdownContainer>
      <EditorDropdownTriggerButton
        variantType={variant.type}
        caption={variant[[`label_${editor.currentLocale}`]]}
      />

      {variant.type === editor.activeDropdown && (
        <div className="dropdown-body">
          {variant.variants.map((variant) => (
            <EditorOptionButton
              key={variant._id}
              variant={variant}
              activeVariant={activeVariant}
              unrecognizedIds={unrecognizedIds}
            />
          ))}
        </div>
      )}
    </Styled.EditorActionDropdownContainer>
  );
}
