import { useEditorContext } from "providers/EditorProvider";

import EditorOptionButton from "./EditorOptionButton";
import EditorDropdownTriggerButton from "./EditorDropdownTriggerButton";
import * as Styled from "./styles/EditorActionDropdown.styled";

export default function EditorActionDropdown({ variant }) {
  const {
    activeDropdown,
    currentLocale,
    activeVariants,
    detectUnrecognizedVariants,
  } = useEditorContext();

  const activeVariant = variant.variants.find((variant) =>
    activeVariants.includes(variant._id)
  );

  const unrecognizedIds = detectUnrecognizedVariants({
    activeVariantId: activeVariant?._id,
    dropdownVariants: variant.variants,
  });

  return (
    <Styled.EditorActionDropdownContainer>
      <EditorDropdownTriggerButton
        variantType={variant.type}
        caption={variant[[`label_${currentLocale}`]]}
      />

      {variant.type === activeDropdown && (
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
