import { RootStateT } from "store/store";
import { createSelector } from "@reduxjs/toolkit";

const selectedFilters = ({ filter }: RootStateT) => ({
  productTypes: filter.filter.productTypes,
  seasons: filter.filter.seasons,
  textures: filter.filter.textures,
  styles: filter.filter.styles,
  sort: filter.filter.sort,
  gender: filter.filter.gender,
});

const selectFilters = createSelector(selectedFilters, (filter) => filter);

export { selectFilters };
