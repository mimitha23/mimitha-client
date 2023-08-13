import { useEditorContext } from "providers/EditorProvider";

import EditorDropdownTriggerButton from "./EditorDropdownTriggerButton";
import * as Styled from "./styles/EditorActionDropdown.styled";

export default function EditorActionDropdown({ variant }) {
  const {
    activeDropdown,
    currentLocale,
    activeVariants,
    onChangeConfig,
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
          {variant.variants.map((variant, i) => (
            <button
              key={variant._id}
              className={`variant__option-btn ${
                activeVariant?._id === variant._id ? "active" : ""
              } ${
                unrecognizedIds.includes(variant._id)
                  ? "unrecognized"
                  : "available"
              }`}
              title={variant[`description_${currentLocale}`]}
              onClick={() =>
                onChangeConfig({
                  currentVariantId: activeVariant?._id,
                  newVariantId: variant._id,
                })
              }
            >
              <figure>
                <svg>
                  <image xlinkHref={variant.icon} alt={variant.description} />
                </svg>
              </figure>
            </button>
          ))}
        </div>
      )}
    </Styled.EditorActionDropdownContainer>
  );
}
