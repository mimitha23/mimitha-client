/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  selectProductStatus,
  selectAllProducts,
} from "store/selectors/productSelectors";
import { productsActions } from "store/reducers/produtsReducer";
import { useLocationState } from "hooks/utils";

import {
  ContainerFull,
  ProductCard,
  Filter,
  Path,
  Spinner,
} from "components/Layouts";
import * as Styled from "./AllProducts.styled";

export default function AllProducts() {
  const dispatch = useDispatch();

  const status = useSelector(selectProductStatus);
  const allProducts = useSelector(selectAllProducts);

  const { getLocationState, state } = useLocationState();

  useEffect(() => {
    dispatch(productsActions.getAllProducts(getLocationState()));
  }, [state]);

  useEffect(() => {
    return () => {
      dispatch(productsActions.resetProducts());
    };
  }, []);

  return (
    <Styled.AllProductsContainer>
      {!status.loading && (
        <ContainerFull className="wrapper-container">
          <div className="filter-box__wrapper">
            <Path showSearch={true} />
            <div className="filter-box">
              <Filter
                showProductTypeFilter={state?.productType?.query ? false : true}
              />
            </div>
          </div>

          <div className="products-list">
            {allProducts.map((product) => (
              <ProductCard key={product._id} product={product} />
            ))}
          </div>
        </ContainerFull>
      )}

      {status.loading && <Spinner />}
    </Styled.AllProductsContainer>
  );
}
