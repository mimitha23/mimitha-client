// import { useSelector } from "react-redux";

import { useFilter } from "hooks/layoutBase";
// import { selectFilters } from "store/selectors/filterSelectors";
import { filter } from "lib";

import Dropdown from "./Dropdown";
import * as Styled from "./Filter.styled";

function Filter() {
  const { activeFilterDropdown, activateFilter } = useFilter();
  // const { productType, season, style, texture } = useSelector(selectFilters);

  return (
    <Styled.FilterContainer data-filter-container>
      <Dropdown
        dropdownType="SORT"
        activateFilter={activateFilter}
        isActive={activeFilterDropdown === "SORT"}
        caption="დალაგება"
        data={filter.sort}
      />

      <Dropdown
        dropdownType="PRODUCT_TYPE"
        activateFilter={activateFilter}
        isActive={activeFilterDropdown === "PRODUCT_TYPE"}
        caption="პროდუქტის ტიპი"
        data={filter.productType}
      />

      <Dropdown
        dropdownType="SEASON"
        activateFilter={activateFilter}
        isActive={activeFilterDropdown === "SEASON"}
        caption="სეზონი"
        data={filter.season}
      />

      <Dropdown
        dropdownType="TEXTURE"
        activateFilter={activateFilter}
        isActive={activeFilterDropdown === "TEXTURE"}
        caption="მასალა"
        data={filter.texture}
      />

      <Dropdown
        dropdownType="STYLE"
        activateFilter={activateFilter}
        isActive={activeFilterDropdown === "STYLE"}
        caption="სტილი"
        data={filter.style}
      />
    </Styled.FilterContainer>
  );
}

export default Filter;
