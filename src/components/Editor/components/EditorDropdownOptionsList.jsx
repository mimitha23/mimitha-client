import * as UI from "./";
import * as Styled from "./styles/EditorDropdownOptionsList.styled";

export default function EditorDropdownOptionsList({ editor, variant }) {
  const activeVariant = variant.variants.find((variant) =>
    editor.activeVariants.includes(variant._id)
  );

  const unrecognizedIds = editor.detectUnrecognizedVariants({
    activeVariantId: activeVariant?._id,
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
}
