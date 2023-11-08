import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

import {
  FilterItemT,
  ActiveFilterDropdownT,
} from "interface/store/filter.reducer.types";

export default function useFilter() {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const [toggleFilter, setToggleFilter] = useState(false);

  const [activeFilterDropdown, setActiveFilterDropdown] = useState<
    ActiveFilterDropdownT | ""
  >("");

  const activateFilter = (filterType: ActiveFilterDropdownT) =>
    setActiveFilterDropdown((prev) => (prev === filterType ? "" : filterType));

  const searchParams = new URLSearchParams(window.location.search);

  const onChangeFilter = (
    filterKey: ActiveFilterDropdownT,
    value: FilterItemT
  ) => {
    const isAvailableSingleSelectKeys: Array<ActiveFilterDropdownT> = [
      "GENDER",
      "SORT",
    ];

    const isAvailableMultipleSelectKeys: Array<ActiveFilterDropdownT> = [
      "PRODUCT_TYPE",
      "SEASON",
      "STYLE",
      "TEXTURE",
    ];

    const key = filterKey.toLocaleLowerCase();

    if (isAvailableSingleSelectKeys.includes(filterKey)) {
      const isSelected = searchParams.get(key) === value.query;

      if (isSelected) searchParams.delete(key);
      else searchParams.set(key, value.query);
    } else if (isAvailableMultipleSelectKeys.includes(filterKey)) {
      const selectedQueries = searchParams.get(key)?.split(",") || [];
      const isSelected = selectedQueries.includes(value.query);

      if (isSelected) {
        const filteredQueries = selectedQueries.filter(
          (k) => k !== value.query
        );

        filteredQueries.length <= 0
          ? searchParams.delete(key)
          : searchParams.set(key, filteredQueries.join(","));
      } else searchParams.set(key, [...selectedQueries, value.query].join(","));
    }

    const searchQuery = searchParams.toString();
    navigate(`${pathname}${searchQuery ? `?${searchQuery}` : ""}`);
  };

  return {
    toggleFilter,
    setToggleFilter,
    activeFilterDropdown,
    activateFilter,
    onChangeFilter,
  };
}
