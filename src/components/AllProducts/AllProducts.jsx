import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  selectProductStatus,
  selectAllProducts,
} from "store/selectors/productSelectors";
import { productsActions } from "store/reducers/produtsReducer";

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

  useEffect(() => {
    dispatch(productsActions.getAllProducts());

    return () => {
      dispatch(productsActions.resetProducts());
    };
  }, [dispatch]);

  return (
    <Styled.AllProductsContainer>
      {!status.loading && (
        <ContainerFull className="wrapper-container">
          <div className="filter-box__wrapper">
            <Path />
            <div className="filter-box">
              <Filter />
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
