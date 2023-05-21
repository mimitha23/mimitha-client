import * as Styled from "./Filter.styled";

function Dropdown({ dropdownType, activateFilter, isActive, data, caption }) {
  return (
    <Styled.DropdownContainer>
      <button
        onClick={() => activateFilter({ filterType: dropdownType })}
        className={`filter-dropdown__trigger-btn ${
          isActive ? "active-dropdown" : ""
        }`}
      >
        {caption}
      </button>

      {isActive && (
        <ul className="filter-dropdown__body">
          {data?.map((filter) => (
            <li key={filter.query} className="filter-dropdown__list-item">
              <button>{filter.label}</button>
            </li>
          ))}
        </ul>
      )}
    </Styled.DropdownContainer>
  );
}

export default Dropdown;
