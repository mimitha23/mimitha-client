import { createSlice, nanoid } from "@reduxjs/toolkit";
import { controlStatus as status } from "store/reducers/helpers";

const initialState = {
  activeFilterDropdown: "", // PRODUCT_TYPE - SORT - SEASON - TEXTURE - STYLE

  filter: {
    sort: [],
    seasons: [],
    productTypes: [],
    textures: [],
    styles: [],
  },

  activeFilter: {
    sort: [],
    seasons: [],
    productTypes: [],
    textures: [],
    styles: [],
  },

  status: {
    loading: false,
    error: false,
    message: "",
  },
};

const filterSlice = createSlice({
  name: "mimitha-filter",
  initialState,
  reducers: {
    setActiveFilter(state, { payload: { filterType } }) {
      state.activeFilterDropdown =
        state.activeFilterDropdown === filterType ? "" : filterType;
    },

    setFilter(state, { payload: { key, value } }) {
      const isSelectedValue = state.activeFilter[key].some(
        (item) => item._id === value._id
      );

      if (isSelectedValue) {
        state.activeFilter[key] = state.activeFilter[key].filter(
          (item) => item.en !== value.en
        );
      } else {
        state.activeFilter[key].push(value);
      }
    },

    // API
    getProductsFilter: {
      prepare(payload) {
        return {
          payload: generateProductsFilterQuery(payload),
        };
      },

      reducer(state) {
        state.status = status.loading();
      },
    },

    setProductsFilter(state, { payload }) {
      state.filter = {
        ...payload,
        sort: payload.sort.map((sortQuery) => ({
          ...sortQuery,
          _id: nanoid(),
        })),
      };
    },

    // REQUEST STATUS SETTERS
    setSuccess(state) {
      state.status = status.success();
    },

    setError(state, { payload }) {
      state.status = status.error(payload.message);
    },

    // RESET
    resetFilter(state) {
      state.filter = initialState.filter;
      state.activeFilter = initialState.activeFilter;
    },

    resetState(state) {
      Object.keys(initialState).map((key) => (state[key] = initialState[key]));
    },
  },
});

export default filterSlice.reducer;
export const filterActions = filterSlice.actions;

function generateProductsFilterQuery(payload) {
  const credentials = [`isPublic=1`, `category=${payload?.category}`];

  if (payload?.productType?.query)
    credentials.push(`productType=${payload.productType.query}`);

  return credentials.join("&");
}
