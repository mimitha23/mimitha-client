import { useEditorContext } from "providers/editor/EditorProvider";
import * as Styled from "./styles/EditorDropdownTriggerButton.styled";

export default function EditorDropdownTriggerButton({ variantType, caption }) {
  const { setActiveDropdown, activeDropdown } = useEditorContext();

  return (
    <Styled.EditorDropdownTriggerButton
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
    </Styled.EditorDropdownTriggerButton>
  );
}
