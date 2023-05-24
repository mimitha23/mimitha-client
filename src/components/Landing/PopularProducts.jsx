import { ProductCard } from "components/Layouts";
import * as Styled from "./styles/PopularProducts.styled";
import { popularProductsData } from "lib";

export default function PopularProducts() {
  return (
    <Styled.PopularProducts>
      <div className="popular-products-header">
        <p>ყველაზე პოპულარული</p>
      </div>
      <div className="popular-products__container">
        {popularProductsData.map((el) => (
          <ProductCard key={`${el}`} />
        ))}
      </div>
    </Styled.PopularProducts>
  );
}
