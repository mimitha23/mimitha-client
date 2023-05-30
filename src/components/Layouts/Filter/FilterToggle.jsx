import { useTranslation } from "react-i18next";

import { FilterIcon, FilterOffIcon } from "components/Layouts/Icons/index";
import * as Styled from "./styles/FilterToggle.styled";

export default function FilterToggle({ openFilter, setOpenFilter }) {
  const { t } = useTranslation();

  return (
    <Styled.FilterToggle className="filter__expand-box" data-toggle-filter>
      <button
        className={`toggle-filter__btn ${openFilter ? "hide-btn" : "show-btn"}`}
        onClick={() => setOpenFilter((prev) => !prev)}
      >
        {openFilter ? (
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
}
