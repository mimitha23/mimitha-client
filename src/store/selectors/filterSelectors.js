import { createSelector } from "@reduxjs/toolkit";

const selectedFilters = ({ filter }) => ({
  productTypes: filter.filter.productTypes,
  seasons: filter.filter.seasons,
  textures: filter.filter.textures,
  styles: filter.filter.styles,
  sort: filter.filter.sort,
  gender: filter.filter.gender,
});

const selectedActiveFilters = ({ filter }) => ({
  activeProductTypes: filter.activeFilter.productTypes,
  activeSeasons: filter.activeFilter.seasons,
  activeTextures: filter.activeFilter.textures,
  activeStyles: filter.activeFilter.styles,
  activeSort: filter.activeFilter.sort,
  activeGender: filter.activeFilter.gender,
});

const selectedFilterIsSet = ({ filter }) =>
  Object.values(selectedActiveFilters({ filter })).some((value) => value[0]);

// EXPORTS //
export const selectActiveFilterDropdown = ({ filter }) =>
  filter.activeFilterDropdown;

export const selectFilters = createSelector(
  selectedFilters,
  (filter) => filter
);

export const selectActiveFilters = createSelector(
  selectedActiveFilters,
  (activeFilter) => activeFilter
);

export const selectFilterIsSet = createSelector(
  selectedFilterIsSet,
  (isSet) => isSet
);
