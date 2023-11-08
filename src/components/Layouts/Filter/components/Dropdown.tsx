import { useTranslationContext } from "providers/globals/I18nextProvider";

import DropdownBody from "./DropdownBody";
import DropdownTriggerButton from "./DropdownTriggerButton";

import {
  FilterItemT,
  ActiveFilterDropdownT,
} from "interface/store/filter.reducer.types";

interface DropdownT {
  label: string;
  isActive: boolean;
  list: Array<FilterItemT>;
  dropdownType: ActiveFilterDropdownT;
  onSelect: (key: ActiveFilterDropdownT, value: FilterItemT) => void;
  activateFilter: (filterType: ActiveFilterDropdownT) => void;
}

const Dropdown: React.FC<DropdownT> = (args) => {
  const { currentLocale } = useTranslationContext();

  const selectedQueries: Array<string> =
    new URLSearchParams(window.location.search)
      .get(args.dropdownType.toLocaleLowerCase())
      ?.split(",") || [];

  const activeButtonTittle =
    args.list.find(
      (item) => item.query === selectedQueries[selectedQueries.length - 1]
    )?.[currentLocale] || "";

  return (
    <div
      data-filter-dropdown
      // className={args.activeList[0] ? "active" : ""}
      style={{ position: "relative" }}
    >
      <DropdownTriggerButton
        label={args.label}
        isActive={args.isActive}
        activeButtonTittle={activeButtonTittle}
        dropdownType={args.dropdownType}
        activateFilter={args.activateFilter}
      />

      {args.isActive && (
        <DropdownBody
          list={args.list}
          onSelect={args.onSelect}
          selectedQueries={selectedQueries}
          dropdownType={args.dropdownType}
        />
      )}
    </div>
  );
};

export default Dropdown;
