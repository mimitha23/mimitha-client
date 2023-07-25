import { v4 as uuid } from "uuid";
import * as Styled from "./styles/Dropdown.styled";

export default function Dropdown({
  dropdownType,
  activateFilter,
  isActive,
  label,
  captionKey,
  list,
  activeList,
  onSelect,
}) {
  return (
    <Styled.Dropdown data-filter-dropdown>
      <button
        onClick={() => activateFilter({ filterType: dropdownType })}
        className={`filter-dropdown__trigger-btn ${
          isActive ? "active-dropdown" : ""
        }`}
      >
        {label}
      </button>

      {isActive && (
        <ul className="filter-dropdown__body">
          {list?.map((item) => (
            <li
              key={uuid()}
              className={`filter-dropdown__list-item ${
                activeList.some((activeItem) => activeItem.ka === item.ka)
                  ? "active"
                  : ""
              }`}
            >
              <button onClick={() => onSelect(item)}>{item[captionKey]}</button>
            </li>
          ))}
        </ul>
      )}
    </Styled.Dropdown>
  );
}
