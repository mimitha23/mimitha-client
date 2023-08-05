/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { useLocationState } from "hooks/utils";
import { productsActions } from "store/reducers/produtsReducer";
import { filterActions } from "store/reducers/filterReducer";

import { selectActiveFilters } from "store/selectors/filterSelectors";
import { selectProductsStatus } from "store/selectors/productSelectors";

export default function useAllProductsQuery() {
  const dispatch = useDispatch();

  const {
    activeProductTypes,
    activeSeasons,
    activeSort,
    activeStyles,
    activeTextures,
    activeGender,
  } = useSelector(selectActiveFilters);
  const status = useSelector(selectProductsStatus);
  const { getLocationState, state } = useLocationState();

  const getFilteredProducts = () =>
    dispatch(
      productsActions.getAllProducts({
        ...getLocationState(),
        filter: {
          activeProductTypes,
          activeSeasons,
          activeSort,
          activeStyles,
          activeTextures,
          activeGender,
        },
      })
    );

  // // fetch products filter on mount based on router state
  useEffect(() => {
    dispatch(filterActions.getProductsFilter(state));
  }, [state]);

  // fetch data on filter change
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      getFilteredProducts();
    }, 1000);

    return () => {
      clearTimeout(timeoutId);
    };
  }, [
    activeProductTypes,
    activeSeasons,
    activeSort,
    activeStyles,
    activeTextures,
    activeGender,
    state,
  ]);

  // cleaner
  useEffect(() => {
    return () => {
      dispatch(productsActions.resetProducts());
      dispatch(filterActions.resetState());
    };
  }, []);

  return { status, state };
}
