import { useAllProductsQuery } from "hooks/api";

import { Spinner } from "components/Layouts";
import ProductsList from "./components/ProductsList";
import AllProductsHeader from "./components/AllProductsHeader";
import * as Styled from "./AllProducts.styled";

export default function AllProducts() {
  const { status, state } = useAllProductsQuery();

  return (
    <Styled.AllProductsContainer>
      <AllProductsHeader state={state} />

      {!status.loading && <ProductsList />}

      {status.loading && <Spinner />}
    </Styled.AllProductsContainer>
  );
}
