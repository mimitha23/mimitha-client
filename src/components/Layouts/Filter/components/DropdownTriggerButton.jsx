import { useTranslationContext } from "providers/I18nextProvider";
import * as Styled from "./styles/DropdownTriggerButton.styled";

export default function DropdownTriggerButton({
  label,
  isActive,
  activeList,
  dropdownType,
  activateFilter,
}) {
  const { currentLocale } = useTranslationContext();

  return (
    <Styled.DropdownTriggerButton
      onClick={() => activateFilter({ filterType: dropdownType })}
      className={isActive ? "active-dropdown" : ""}
    >
      <span
        title={
          activeList[0]
            ? activeList[activeList.length - 1][currentLocale]
            : label
        }
      >
        {activeList[0]
          ? activeList[activeList.length - 1][currentLocale]
          : label}
      </span>
    </Styled.DropdownTriggerButton>
  );
}
