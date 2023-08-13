import { useEditorContext } from "providers/EditorProvider";

export default function EditorDropdownTriggerButton({ variantType, caption }) {
  const { setActiveDropdown, activeDropdown } = useEditorContext();

  return (
    <button
      onClick={() =>
        setActiveDropdown(variantType === activeDropdown ? "" : variantType)
      }
      className={`dropdown-trigger__btn ${
        variantType === activeDropdown ? "active-dropdown" : ""
      }`}
    >
      <span>{caption}</span>
      {/* {activeVariant && (
        <span>
          &nbsp;&mdash;&nbsp;{activeVariant[`description_${currentLocale}`]}
        </span>
      )} */}
    </button>
  );
}
