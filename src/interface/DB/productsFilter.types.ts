type ProductsFilterResponseT = {
  gender: Array<FilterGenderT>;

  productTypes: Array<FilterProductTypeT>;

  seasons: Array<FilterSeasonT>;

  sort: Array<FilterSortT>;

  styles: Array<FilterStyleT>;

  textures: Array<FilterTextureT>;
};

// PARTIALS

type FilterCommonT = {
  en: string;
  ka: string;
  query: string;
};

type FilterGenderT = FilterCommonT;

type FilterProductTypeT = FilterCommonT & {
  _id: string;
};

type FilterSeasonT = FilterCommonT & {
  _id: string;
};

type FilterSortT = FilterCommonT;

type FilterStyleT = FilterCommonT & {
  _id: string;
};

type FilterTextureT = Omit<FilterCommonT, "query"> & {
  _id: string;
  percentage: number;
};

type GetProductFilterArgsT = string;

export type {
  ProductsFilterResponseT,
  FilterStyleT,
  FilterSortT,
  FilterSeasonT,
  FilterGenderT,
  FilterTextureT,
  FilterProductTypeT,
  GetProductFilterArgsT,
};
