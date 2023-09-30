import { useSelector } from "react-redux";
import { useAllProductsQuery } from "hooks/api";
import { selectAllProducts } from "store/selectors/productSelectors";

import {
  ContainerFull,
  ProductCard,
  // Filter,
  // Path,
  Spinner,
} from "components/Layouts";
import * as Styled from "./AllProducts.styled";

export default function AllProducts() {
  const allProducts = useSelector(selectAllProducts);
  const {
    status,
    //  state
  } = useAllProductsQuery();

  return (
    <Styled.AllProductsContainer>
      <header className="all-products__header">
        {/* <Path showSearch={true} /> */}

        {/* <Filter
          showProductTypeFilter={state?.productType?.query ? false : true}
          showGenderFilter={!["men", "women"].includes(state?.category)}
        /> */}
      </header>

      {!status.loading && (
        <ContainerFull className="wrapper-container">
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
