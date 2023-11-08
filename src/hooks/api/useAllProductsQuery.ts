/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "store/hooks";

import { useLocationState } from "hooks/utils";
import { productsActions } from "store/reducers/products.reducer";
import { filterActions } from "store/reducers/filter.reducer";

import { selectProductsStatus } from "store/selectors/product.selectors";

export default function useAllProductsQuery() {
  const dispatch = useAppDispatch();

  const { state, search } = useLocation();

  const status = useAppSelector(selectProductsStatus);
  const { getLocationState } = useLocationState();

  const getFilteredProducts = () =>
    dispatch(
      productsActions.getAllProducts({
        ...getLocationState(),
        filter: search || "",
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
  }, [search]);

  // cleanup
  useEffect(() => {
    return () => {
      dispatch(filterActions.cleanUpFilter());
      dispatch(productsActions.cleanUpAllProducts());
    };
  }, []);

  return { status, state };
}
