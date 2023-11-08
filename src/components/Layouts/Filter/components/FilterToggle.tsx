import { useTranslation } from "react-i18next";

import * as Styled from "./styles/FilterToggle.styled";
import { FilterIcon, FilterOffIcon } from "components/Layouts/Icons/index";

interface FilterToggleT {
  toggleFilter: boolean;
  setToggleFilter: React.Dispatch<React.SetStateAction<boolean>>;
}

const FilterToggle: React.FC<FilterToggleT> = ({
  toggleFilter,
  setToggleFilter,
}) => {
  const { t } = useTranslation();

  return (
    <Styled.FilterToggle className="filter__expand-box" data-toggle-filter>
      <button
        className={`toggle-filter__btn ${
          toggleFilter ? "hide-btn" : "show-btn"
        }`}
        onClick={() => setToggleFilter((prev) => !prev)}
      >
        {toggleFilter ? (
          <>
            <span>{t("crossover.hide_filter")}</span>
            <span>
              <FilterOffIcon />
            </span>
          </>
        ) : (
          <>
            <span>{t("crossover.show_filter")}</span>
            <span>
              <FilterIcon />
            </span>
          </>
        )}
      </button>
    </Styled.FilterToggle>
  );
};

export default FilterToggle;
