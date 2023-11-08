import {
  FilterGenderT,
  FilterSortT,
  FilterSeasonT,
  FilterProductTypeT,
  FilterTextureT,
  FilterStyleT,
} from "interface/DB/productsFilter.types";
import { LoadingStatusT } from "./store.common";
import { LocationStateT } from "interface/common.types";

export interface FilterStateT {
  status: LoadingStatusT;

  filter: FilterT;
}

export interface FilterT {
  sort: Array<
    FilterSortT & {
      _id: string;
    }
  >;

  gender: Array<
    FilterGenderT & {
      _id: string;
    }
  >;

  seasons: Array<FilterSeasonT>;

  productTypes: Array<FilterProductTypeT>;

  textures: Array<
    Omit<FilterTextureT, "percentage"> & {
      query: string;
    }
  >;

  styles: Array<FilterStyleT>;
}

export interface FilterItemT {
  _id: string;
  ka: string;
  en: string;
  query: string;
}

export type ActiveFilterDropdownT = keyof typeof ACTIVE_DROPDOWN;

export enum ACTIVE_DROPDOWN {
  PRODUCT_TYPE = "PRODUCT_TYPE",
  SORT = "SORT",
  SEASON = "SEASON",
  TEXTURE = "TEXTURE",
  STYLE = "STYLE",
  GENDER = "GENDER",
}

export interface SetProductFilterArgsT
  extends Omit<LocationStateT, "search" | "title" | "sale"> {
  isPublic?: "1" | "-1";
}
