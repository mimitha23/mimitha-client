export interface ProductsFilterResponseT {
  gender: Array<FilterGenderT>;

  productTypes: Array<FilterProductTypeT>;

  seasons: Array<FilterSeasonT>;

  sort: Array<FilterSortT>;

  styles: Array<FilterStyleT>;

  textures: Array<FilterTextureT>;
}

interface FilterCommonT {
  en: string;
  ka: string;
  query: string;
}

export type FilterGenderT = FilterCommonT;

export interface FilterProductTypeT extends FilterCommonT {
  _id: string;
}

export interface FilterSeasonT extends FilterCommonT {
  _id: string;
}

export type FilterSortT = FilterCommonT;

export interface FilterStyleT extends FilterCommonT {
  _id: string;
}

export interface FilterTextureT extends Omit<FilterCommonT, "query"> {
  _id: string;
  percentage: number;
}

export type GetProductFilterArgsT = string;
