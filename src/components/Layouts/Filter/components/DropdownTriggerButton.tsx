import * as Styled from "./styles/DropdownTriggerButton.styled";

import { ActiveFilterDropdownT } from "interface/store/filter.reducer.types";

interface DropdownTriggerButtonT {
  label: string;
  isActive: boolean;
  activeButtonTittle: string;
  dropdownType: ActiveFilterDropdownT;
  activateFilter: (filterType: ActiveFilterDropdownT) => void;
}

const DropdownTriggerButton: React.FC<DropdownTriggerButtonT> = ({
  label,
  isActive,
  dropdownType,
  activateFilter,
  activeButtonTittle,
}) => {
  const title = activeButtonTittle || label;

  const onActivateFilter = () => activateFilter(dropdownType);

  return (
    <Styled.DropdownTriggerButton
      onClick={onActivateFilter}
      className={isActive ? "active-dropdown" : ""}
    >
      <span title={title}>{title}</span>
    </Styled.DropdownTriggerButton>
  );
};

export default DropdownTriggerButton;
