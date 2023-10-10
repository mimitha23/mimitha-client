import DropdownBody from "./components/DropdownBody";
import DropdownTriggerButton from "./components/DropdownTriggerButton";

export default function Dropdown({
  list,
  label,
  isActive,
  onSelect,
  captionKey,
  activeList,
  dropdownType,
  activateFilter,
}) {
  return (
    <div
      data-filter-dropdown
      className={activeList[0] ? "active" : ""}
      style={{ position: "relative" }}
    >
      <DropdownTriggerButton
        label={label}
        isActive={isActive}
        activeList={activeList}
        dropdownType={dropdownType}
        activateFilter={activateFilter}
      />

      {isActive && (
        <DropdownBody
          list={list}
          onSelect={onSelect}
          captionKey={captionKey}
          activeList={activeList}
        />
      )}
    </div>
  );
}
