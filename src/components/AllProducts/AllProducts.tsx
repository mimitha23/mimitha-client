import { useAllProductsQuery } from "hooks/api";

import * as Styled from "./AllProducts.styled";
import { Spinner } from "components/Layouts";
import ProductsList from "./components/ProductsList";
import AllProductsHeader from "./components/AllProductsHeader";

const AllProducts: React.FC = () => {
  const { status } = useAllProductsQuery();

  return (
    <Styled.AllProductsContainer>
      <AllProductsHeader />

      {!status.loading && <ProductsList />}

      {status.loading && <Spinner />}
    </Styled.AllProductsContainer>
  );
};

export default AllProducts;
