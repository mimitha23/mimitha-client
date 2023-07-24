import { useState } from "react";
import { useTranslation } from "react-i18next";
// import { useSelector } from "react-redux";

import { useFilter } from "hooks/layoutBase";
// import { selectFilters } from "store/selectors/filterSelectors";
import { filter } from "lib";

import Dropdown from "./Dropdown";
import FilterToggle from "./FilterToggle";
import * as Styled from "./styles/Filter.styled";

export default function Filter({ showProductTypeFilter }) {
  const { t } = useTranslation();

  const { activeFilterDropdown, activateFilter } = useFilter();
  // const { productType, season, style, texture } = useSelector(selectFilters);

  const [openFilter, setOpenFilter] = useState(false);

  return (
    <Styled.FilterContainer
      className={openFilter ? "visible_filter" : "hidden_filter"}
    >
      <FilterToggle openFilter={openFilter} setOpenFilter={setOpenFilter} />

      <div className="filter-dropdowns__wrapper" data-filter-container>
        <Dropdown
          dropdownType="SORT"
          activateFilter={activateFilter}
          isActive={activeFilterDropdown === "SORT"}
          caption={t("crossover.sort")}
          data={filter.sort}
        />

        {showProductTypeFilter && (
          <Dropdown
            dropdownType="PRODUCT_TYPE"
            activateFilter={activateFilter}
            isActive={activeFilterDropdown === "PRODUCT_TYPE"}
            caption={t("crossover.product_type")}
            data={filter.productType}
          />
        )}

        <Dropdown
          dropdownType="SEASON"
          activateFilter={activateFilter}
          isActive={activeFilterDropdown === "SEASON"}
          caption={t("crossover.season")}
          data={filter.season}
        />

        <Dropdown
          dropdownType="TEXTURE"
          activateFilter={activateFilter}
          isActive={activeFilterDropdown === "TEXTURE"}
          caption={t("crossover.texture")}
          data={filter.texture}
        />

        <Dropdown
          dropdownType="STYLE"
          activateFilter={activateFilter}
          isActive={activeFilterDropdown === "STYLE"}
          caption={t("crossover.style")}
          data={filter.style}
        />
      </div>
    </Styled.FilterContainer>
  );
}
