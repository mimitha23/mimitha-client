import { createSelector } from "@reduxjs/toolkit";

const selectedFilters = ({ filter }) => ({
  productTypes: filter.filter.productTypes,
  seasons: filter.filter.seasons,
  textures: filter.filter.textures,
  styles: filter.filter.styles,
  sort: filter.filter.sort,
});

const selectedActiveFilters = ({ filter }) => ({
  activeProductTypes: filter.activeFilter.productTypes,
  activeSeasons: filter.activeFilter.seasons,
  activeTextures: filter.activeFilter.textures,
  activeStyles: filter.activeFilter.styles,
  activeSort: filter.activeFilter.sort,
});

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
