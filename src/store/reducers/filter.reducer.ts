import { createSlice, nanoid, PayloadAction } from "@reduxjs/toolkit";
import { controlStatus as status, setStatus } from "store/reducers/helpers";

import {
  FilterStateT,
  SetProductFilterArgsT,
} from "interface/store/filter.reducer.types";

import {
  ProductsFilterResponseT,
  GetProductFilterArgsT,
} from "interface/DB/productsFilter.types";

import { SetStatusArgsT } from "interface/store/store.common";

const initialState: FilterStateT = {
  status: status.default(),

  filter: {
    sort: [],
    seasons: [],
    productTypes: [],
    textures: [],
    styles: [],
    gender: [],
  },
};

const filterSlice = createSlice({
  name: "mimitha-filter",
  initialState,
  reducers: {
    getProductsFilter: {
      prepare(payload: SetProductFilterArgsT): {
        payload: GetProductFilterArgsT;
      } {
        return {
          payload: generateProductsFilterQuery(payload),
        };
      },

      reducer(state) {
        state.status = status.loading();
      },
    },

    setProductsFilter(
      state,
      { payload }: PayloadAction<ProductsFilterResponseT>
    ) {
      state.filter = {
        ...payload,
        sort: payload.sort.map((sortQuery) => ({
          ...sortQuery,
          _id: nanoid(),
        })),
        gender: payload.gender.map((gender) => ({
          ...gender,
          _id: nanoid(),
        })),
        textures: payload.textures.map((texture) => ({
          ...texture,
          query: texture.en,
        })),
      };

      state.status = status.default();
    },

    // REQUEST STATUS SETTERS
    setFilterStatus(state, { payload }: PayloadAction<SetStatusArgsT>) {
      state.status = setStatus(payload);
    },

    // RESET
    cleanUpFilter(state) {
      state.filter = initialState.filter;
    },
  },
});

export default filterSlice.reducer;
export const filterActions = filterSlice.actions;

function generateProductsFilterQuery(
  payload: SetProductFilterArgsT
): GetProductFilterArgsT {
  const credentials = [`isPublic=1`];

  if (payload?.category) credentials.push(`category=${payload.category}`);

  if (payload?.productType?.query)
    credentials.push(`productType=${payload.productType.query}`);

  return credentials.join("&");
}
