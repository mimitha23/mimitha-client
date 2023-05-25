import { FilterIcon, FilterOffIcon } from "components/Layouts/Icons/index";

function FilterToggle({ openFilter, setOpenFilter }) {
  return (
    <div className="filter__expand-box" data-toggle-filter>
      <button
        className={`toggle-filter__btn ${openFilter ? "hide-btn" : "show-btn"}`}
        onClick={() => setOpenFilter((prev) => !prev)}
      >
        {openFilter ? (
          <>
            <span>დამალეთ ფილტრი</span>
            <span>
              <FilterOffIcon />
            </span>
          </>
        ) : (
          <>
            <span>ფილტრის ჩვენება</span>
            <span>
              <FilterIcon />
            </span>
          </>
        )}
      </button>
    </div>
  );
}

export default FilterToggle;
