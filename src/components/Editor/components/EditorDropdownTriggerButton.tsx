import { useEditorContext } from "providers/editor/EditorProvider";
import * as Styled from "./styles/EditorDropdownTriggerButton.styled";

interface EditorDropdownTriggerButtonT {
  caption: string;
  variantType: string;
}

const EditorDropdownTriggerButton: React.FC<EditorDropdownTriggerButtonT> = ({
  caption,
  variantType,
}) => {
  const { setActiveDropdown, activeDropdown } = useEditorContext();

  const onDropdown = () =>
    setActiveDropdown(variantType === activeDropdown ? "" : variantType);

  return (
    <Styled.EditorDropdownTriggerButton
      onClick={onDropdown}
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
};

export default EditorDropdownTriggerButton;
