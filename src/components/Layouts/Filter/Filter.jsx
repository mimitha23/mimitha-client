import { useState, memo } from "react";
import { useTranslation } from "react-i18next";
import { useSelector, useDispatch } from "react-redux";

import {
  selectFilters,
  selectActiveFilters,
} from "store/selectors/filterSelectors";
import { useFilter } from "hooks/layoutBase";
import { filterActions } from "store/reducers/filterReducer";
import { useTranslationContext } from "providers/I18nextProvider";

import Dropdown from "./Dropdown";
import FilterToggle from "./FilterToggle";
import * as Styled from "./styles/Filter.styled";

export default memo(function Filter({
  showProductTypeFilter,
  showGenderFilter,
}) {
  const dispatch = useDispatch();

  const { t } = useTranslation();
  const { currentLocale } = useTranslationContext();

  const { activeFilterDropdown, activateFilter } = useFilter();

  const {
    activeProductTypes,
    activeSeasons,
    activeSort,
    activeStyles,
    activeTextures,
    activeGender,
  } = useSelector(selectActiveFilters);
  const { productTypes, seasons, styles, textures, sort, gender } =
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
          captionKey={currentLocale}
          list={sort}
          activeList={activeSort}
          onSelect={(value) =>
            dispatch(filterActions.setFilter({ key: "sort", value }))
          }
        />

        {showGenderFilter && (
          <Dropdown
            dropdownType="GENDER"
            activateFilter={activateFilter}
            isActive={activeFilterDropdown === "GENDER"}
            label={t("crossover.gender")}
            captionKey={currentLocale}
            list={gender}
            activeList={activeGender}
            onSelect={(value) =>
              dispatch(filterActions.setFilter({ key: "gender", value }))
            }
          />
        )}

        {showProductTypeFilter && (
          <Dropdown
            dropdownType="PRODUCT_TYPE"
            activateFilter={activateFilter}
            isActive={activeFilterDropdown === "PRODUCT_TYPE"}
            label={t("crossover.product_type")}
            captionKey={currentLocale}
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
          captionKey={currentLocale}
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
          captionKey={currentLocale}
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
          captionKey={currentLocale}
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
