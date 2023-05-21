import * as Styled from "./AllProducts.styled";
import { ContainerFull, ProductCard, Filter } from "components/Layouts";

function AllProducts() {
  return (
    <Styled.AllProductsContainer>
      <ContainerFull className="wrapper-container">
        <div className="filter-box">
          <Filter />
        </div>

        <div className="products-list">
          {[1, 2, 3, 4, 5, 6, 7, 8].map((product) => (
            <ProductCard key={`product-card--${product}`} />
          ))}
        </div>
      </ContainerFull>
    </Styled.AllProductsContainer>
  );
}

export default AllProducts;
