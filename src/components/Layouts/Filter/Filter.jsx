import { useState, memo } from "react";
import { useTranslation } from "react-i18next";
import { useSelector, useDispatch } from "react-redux";

import { useFilter } from "hooks/layoutBase";
import { filterActions } from "store/reducers/filterReducer";
import {
  selectFilters,
  selectActiveFilters,
} from "store/selectors/filterSelectors";

import Dropdown from "./Dropdown";
import FilterToggle from "./FilterToggle";
import * as Styled from "./styles/Filter.styled";

export default memo(function Filter({ showProductTypeFilter }) {
  const dispatch = useDispatch();

  const { t } = useTranslation();
  const { activeFilterDropdown, activateFilter } = useFilter();

  const {
    activeProductTypes,
    activeSeasons,
    activeSort,
    activeStyles,
    activeTextures,
  } = useSelector(selectActiveFilters);
  const { productTypes, seasons, styles, textures, sort } =
    useSelector(selectFilters);

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
          label={t("crossover.sort")}
          captionKey="ka"
          list={sort}
          activeList={activeSort}
          onSelect={(value) =>
            dispatch(filterActions.setFilter({ key: "sort", value }))
          }
        />

        {showProductTypeFilter && (
          <Dropdown
            dropdownType="PRODUCT_TYPE"
            activateFilter={activateFilter}
            isActive={activeFilterDropdown === "PRODUCT_TYPE"}
            label={t("crossover.product_type")}
            captionKey="ka"
            list={productTypes}
            activeList={activeProductTypes}
            onSelect={(value) =>
              dispatch(filterActions.setFilter({ key: "productTypes", value }))
            }
          />
        )}

        <Dropdown
          dropdownType="SEASON"
          activateFilter={activateFilter}
          isActive={activeFilterDropdown === "SEASON"}
          label={t("crossover.season")}
          captionKey="ka"
          list={seasons}
          activeList={activeSeasons}
          onSelect={(value) =>
            dispatch(filterActions.setFilter({ key: "seasons", value }))
          }
        />

        <Dropdown
          dropdownType="TEXTURE"
          activateFilter={activateFilter}
          isActive={activeFilterDropdown === "TEXTURE"}
          label={t("crossover.texture")}
          captionKey="ka"
          list={textures}
          activeList={activeTextures}
          onSelect={(value) =>
            dispatch(filterActions.setFilter({ key: "textures", value }))
          }
        />

        <Dropdown
          dropdownType="STYLE"
          activateFilter={activateFilter}
          isActive={activeFilterDropdown === "STYLE"}
          label={t("crossover.style")}
          captionKey="ka"
          list={styles}
          activeList={activeStyles}
          onSelect={(value) =>
            dispatch(filterActions.setFilter({ key: "styles", value }))
          }
        />
      </div>
    </Styled.FilterContainer>
  );
});
