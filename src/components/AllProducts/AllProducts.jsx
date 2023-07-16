import {
  ContainerFull,
  ProductCard,
  Filter,
  Path,
} from "components/Layouts/index";
import * as Styled from "./AllProducts.styled";
import { developedProducts } from "lib";

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
          {developedProducts.map((product) => (
            <ProductCard
              key={`product-card--${product._id}`}
              product={product}
            />
          ))}
        </div>
      </ContainerFull>
    </Styled.AllProductsContainer>
  );
}
