import { memo } from "react";
import { useTranslation } from "react-i18next";

import { useAppSelector } from "store/hooks";

import { useFilter } from "hooks/layoutBase";
import * as filterSelectors from "store/selectors/filter.selectors";

import Dropdown from "./components/Dropdown";
import FilterToggle from "./components/FilterToggle";
import * as Styled from "./Filter.styled";

import { ACTIVE_DROPDOWN } from "interface/store/filter.reducer.types";

interface FilterT {
  showGenderFilter?: boolean;
  showProductTypeFilter?: boolean;
}

const Filter: React.FC<FilterT> = ({
  showGenderFilter = false,
  showProductTypeFilter = false,
}) => {
  const { t } = useTranslation();

  const controlFilter = useFilter();

  const filter = useAppSelector(filterSelectors.selectFilters);

  return (
    <Styled.FilterContainer
      className={
        controlFilter.toggleFilter ? "visible_filter" : "hidden_filter"
      }
    >
      <FilterToggle
        toggleFilter={controlFilter.toggleFilter}
        setToggleFilter={controlFilter.setToggleFilter}
      />

      <div className="filter-dropdowns__wrapper" data-filter-container>
        <Dropdown
          dropdownType="SORT"
          list={filter.sort}
          label={t("crossover.sort")}
          onSelect={controlFilter.onChangeFilter}
          activateFilter={controlFilter.activateFilter}
          isActive={controlFilter.activeFilterDropdown === ACTIVE_DROPDOWN.SORT}
        />

        {showGenderFilter && (
          <Dropdown
            dropdownType="GENDER"
            list={filter.gender}
            label={t("crossover.gender")}
            onSelect={controlFilter.onChangeFilter}
            activateFilter={controlFilter.activateFilter}
            isActive={
              controlFilter.activeFilterDropdown === ACTIVE_DROPDOWN.GENDER
            }
          />
        )}

        {showProductTypeFilter && (
          <Dropdown
            list={filter.productTypes}
            dropdownType="PRODUCT_TYPE"
            label={t("crossover.product_type")}
            onSelect={controlFilter.onChangeFilter}
            activateFilter={controlFilter.activateFilter}
            isActive={
              controlFilter.activeFilterDropdown ===
              ACTIVE_DROPDOWN.PRODUCT_TYPE
            }
          />
        )}

        <Dropdown
          dropdownType="SEASON"
          list={filter.seasons}
          label={t("crossover.season")}
          onSelect={controlFilter.onChangeFilter}
          activateFilter={controlFilter.activateFilter}
          isActive={
            controlFilter.activeFilterDropdown === ACTIVE_DROPDOWN.SEASON
          }
        />

        <Dropdown
          dropdownType="TEXTURE"
          list={filter.textures}
          label={t("crossover.texture")}
          onSelect={controlFilter.onChangeFilter}
          activateFilter={controlFilter.activateFilter}
          isActive={
            controlFilter.activeFilterDropdown === ACTIVE_DROPDOWN.TEXTURE
          }
        />

        <Dropdown
          dropdownType="STYLE"
          list={filter.styles}
          label={t("crossover.style")}
          onSelect={controlFilter.onChangeFilter}
          activateFilter={controlFilter.activateFilter}
          isActive={
            controlFilter.activeFilterDropdown === ACTIVE_DROPDOWN.STYLE
          }
        />
      </div>
    </Styled.FilterContainer>
  );
};

export default memo(Filter);
