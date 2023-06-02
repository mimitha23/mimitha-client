import {
  ContainerFull,
  ProductCard,
  Filter,
  Path,
} from "components/Layouts/index";
import * as Styled from "./AllProducts.styled";

export default function AllProducts() {
  return (
    <Styled.AllProductsContainer>
      <ContainerFull className="wrapper-container">
        <div className="filter-box__wrapper">
          <Path />
          <div className="filter-box">
            <Filter />
          </div>
        </div>

        <div className="products-list">
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15].map(
            (product) => (
              <ProductCard key={`product-card--${product}`} />
            )
          )}
        </div>
      </ContainerFull>
    </Styled.AllProductsContainer>
  );
}
